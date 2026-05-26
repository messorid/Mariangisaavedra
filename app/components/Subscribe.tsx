"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { subscribe, type SubscribeState } from "@/app/actions/subscribe";
import { ArrowIcon } from "./Icons";
import SoundWave from "./SoundWave";

const initial: SubscribeState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ivory px-7 py-4 text-sm font-medium text-espresso transition-colors hover:bg-cream disabled:opacity-60"
    >
      {pending ? "Enviando…" : "Suscribirme"}
      {!pending && (
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}

export default function Subscribe() {
  const [state, formAction] = useActionState(subscribe, initial);

  return (
    <section id="newsletter" className="px-5 py-6 md:px-10">
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-clay to-wine px-6 py-14 text-ivory md:rounded-[2.5rem] md:px-14 md:py-16">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-clay-soft/40 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-ivory/80">
              <SoundWave className="h-3.5 w-12 text-ivory" />
              Newsletter
            </div>
            <h2 className="font-display mt-5 text-4xl leading-[1.03] tracking-tight md:text-5xl">
              No te pierdas la
              <span className="italic"> próxima fecha.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-ivory/80">
              Déjame tu correo y recibe tips de oratoria, recursos y el aviso de
              nuevos cupos antes que nadie.
            </p>
          </div>

          <div>
            <form action={formAction} className="flex flex-col gap-3">
              {/* Honeypot anti-spam (oculto a humanos) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <input
                type="text"
                name="name"
                placeholder="Tu nombre (opcional)"
                autoComplete="name"
                className="w-full rounded-full border border-ivory/20 bg-ivory/10 px-6 py-4 text-ivory placeholder:text-ivory/55 outline-none transition focus:border-ivory/60 focus:bg-ivory/15"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tucorreo@email.com"
                  autoComplete="email"
                  className="w-full flex-1 rounded-full border border-ivory/20 bg-ivory/10 px-6 py-4 text-ivory placeholder:text-ivory/55 outline-none transition focus:border-ivory/60 focus:bg-ivory/15"
                />
                <SubmitButton />
              </div>
            </form>

            {state.status !== "idle" && (
              <p
                role="status"
                aria-live="polite"
                className={`mt-3 text-sm ${
                  state.status === "error" ? "text-cream" : "text-ivory"
                }`}
              >
                {state.status === "success" ? "✓ " : "⚠ "}
                {state.message}
              </p>
            )}

            <p className="mt-4 text-xs leading-relaxed text-ivory/55">
              Sin spam. Solo contenido útil y novedades. Puedes darte de baja
              cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
