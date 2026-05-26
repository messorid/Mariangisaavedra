"use server";

import { promises as fs } from "fs";
import path from "path";

/**
 * Captura de correos para marketing.
 * DEMO: guarda en data/subscribers.json (local). En producción, reemplaza
 * el bloque de escritura por tu proveedor real (Mailchimp, Resend, Brevo…).
 */

const FILE = path.join(process.cwd(), "data", "subscribers.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

type Subscriber = { email: string; name: string; date: string };

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  // Honeypot anti-spam: si un bot rellena el campo oculto, fingimos éxito.
  if (((formData.get("company") as string) ?? "").trim()) {
    return { status: "success", message: "¡Gracias por suscribirte!" };
  }

  const email = ((formData.get("email") as string) ?? "").trim().toLowerCase();
  const name = ((formData.get("name") as string) ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Escribe un correo válido, por favor.",
    };
  }

  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });

    let list: Subscriber[] = [];
    try {
      list = JSON.parse(await fs.readFile(FILE, "utf8"));
    } catch {
      list = [];
    }

    if (list.some((s) => s.email === email)) {
      return { status: "success", message: "Ya estás en la lista. ¡Gracias!" };
    }

    list.push({ email, name, date: new Date().toISOString() });
    await fs.writeFile(FILE, JSON.stringify(list, null, 2), "utf8");
  } catch (err) {
    // En hosting serverless (FS de solo lectura) conecta aquí tu proveedor.
    console.error("[subscribe] no se pudo guardar en disco:", err);
    console.log("[subscribe] NUEVO SUSCRIPTOR →", { email, name });
  }

  return {
    status: "success",
    message: "¡Listo! Te escribiremos con tips y próximas fechas.",
  };
}
