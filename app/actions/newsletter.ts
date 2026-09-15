"use server";

import { newsletter } from "@/app/lib/content";

/**
 * Alta en el boletín.
 *
 * PROVEEDOR: usa Resend Audiences. Necesita DOS variables de entorno:
 *   RESEND_API_KEY      -> https://resend.com/api-keys
 *   RESEND_AUDIENCE_ID  -> https://resend.com/audiences
 *
 * Mientras no estén configuradas la acción NO guarda nada y devuelve un error
 * honesto, en vez de decirle a la visitante que quedó suscrita. Se registra un
 * aviso en el log del servidor para que sea evidente al desplegar.
 *
 * No se escribe a disco a propósito: en Vercel el sistema de archivos es de
 * solo lectura y los datos se perderían en cada despliegue.
 */

export type EstadoBoletin = {
  status: "idle" | "ok" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function suscribir(
  _prev: EstadoBoletin,
  formData: FormData
): Promise<EstadoBoletin> {
  // Trampa antispam: los bots rellenan el campo oculto. Fingimos éxito para no
  // darles información, pero no se envía nada.
  if (((formData.get("empresa") as string) ?? "").trim()) {
    return { status: "ok", message: "¡Listo! Revisa tu correo." };
  }

  const email = ((formData.get("email") as string) ?? "").trim().toLowerCase();
  const nombre = ((formData.get("nombre") as string) ?? "").trim().slice(0, 80);

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return {
      status: "error",
      message: "Escribe un correo válido, por favor.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error(
      "[boletin] Falta RESEND_API_KEY o RESEND_AUDIENCE_ID: la suscripción de " +
        `${email} NO se guardó. Configura las variables de entorno.`
    );
    return {
      status: "error",
      message:
        "El boletín aún no está activo. Escríbeme por WhatsApp y te aviso de las próximas fechas.",
    };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: nombre || undefined,
          unsubscribed: false,
        }),
      }
    );

    if (!res.ok) {
      console.error("[boletin] Resend respondió", res.status, await res.text());
      return {
        status: "error",
        message: "No pudimos completar la suscripción. Inténtalo más tarde.",
      };
    }
  } catch (err) {
    console.error("[boletin] Error de red al llamar a Resend:", err);
    return {
      status: "error",
      message: "No pudimos completar la suscripción. Inténtalo más tarde.",
    };
  }

  return {
    status: "ok",
    message: `¡Listo! Te escribiré con ${newsletter.titulo.toLowerCase()}.`,
  };
}
