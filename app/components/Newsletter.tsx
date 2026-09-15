"use client";

import { useActionState, useId } from "react";
import { suscribir, type EstadoBoletin } from "@/app/actions/newsletter";
import { newsletter } from "@/app/lib/content";
import Monogram from "./Monogram";
import { ArrowIcon, CheckIcon, MailIcon } from "./Icons";

const inicial: EstadoBoletin = { status: "idle", message: "" };

export default function Newsletter() {
  const [estado, accion, enviando] = useActionState(suscribir, inicial);
  const idEmail = useId();
  const idNombre = useId();

  return (
    <section className="relative overflow-hidden bg-brand-tint">
      <Monogram
        className="pointer-events-none absolute -right-14 -top-16 h-[360px] w-auto text-brand/[0.08]"
        strokeWidth={14}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="eyebrow flex items-center justify-center gap-2 text-brand-deep lg:justify-start">
              <MailIcon className="h-[18px] w-[18px]" />
              {newsletter.eyebrow}
            </p>
            <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
              {newsletter.titulo}
            </h2>
            <p className="mx-auto mt-4 max-w-[55ch] text-ink-3 lg:mx-0">
              {newsletter.texto}
            </p>
          </div>

          <div>
            <form action={accion} className="flex flex-col gap-3 sm:flex-row">
              {/* Trampa antispam: oculta para personas, visible para bots. */}
              <label className="sr-only" htmlFor={`${idNombre}-empresa`}>
                No rellenar
              </label>
              <input
                id={`${idNombre}-empresa`}
                type="text"
                name="empresa"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex-1">
                <label htmlFor={idNombre} className="sr-only">
                  Tu nombre (opcional)
                </label>
                <input
                  id={idNombre}
                  type="text"
                  name="nombre"
                  autoComplete="given-name"
                  placeholder="Tu nombre (opcional)"
                  className="w-full rounded-full border border-line bg-white px-5 py-3.5 text-ink placeholder:text-ink-3/70"
                />
              </div>

              <div className="flex-1">
                <label htmlFor={idEmail} className="sr-only">
                  Tu correo electrónico
                </label>
                <input
                  id={idEmail}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={newsletter.placeholder}
                  aria-describedby={`${idEmail}-estado`}
                  className="w-full rounded-full border border-line bg-white px-5 py-3.5 text-ink placeholder:text-ink-3/70"
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="cursor-pointer rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="flex items-center justify-center gap-2">
                  {enviando ? "Enviando…" : newsletter.cta}
                  {enviando ? null : <ArrowIcon className="h-[18px] w-[18px]" />}
                </span>
              </button>
            </form>

            {/* Reserva la altura del mensaje para que el bloque no salte. */}
            <p
              id={`${idEmail}-estado`}
              aria-live="polite"
              className={`mt-4 flex min-h-6 items-start gap-2 text-sm ${
                estado.status === "error" ? "text-error" : "text-brand-deep"
              }`}
            >
              {estado.status === "ok" ? (
                <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0" />
              ) : null}
              {estado.message}
            </p>

            <p className="mt-1 text-xs text-ink-3">{newsletter.nota}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
