import Link from "next/link";
import { ramas, ramasCapacitacion } from "@/app/lib/content";
import { ArrowIcon, CheckIcon } from "./Icons";
import Section, { Eyebrow, Lead, SectionTitle } from "./Section";

/**
 * Bifurcación de las dos ramas del sitio: Publicidad y Capacitaciones. Es el
 * corazón de la portada: cada visitante llega buscando una de las dos y aquí
 * elige la suya.
 *
 * La tarjeta de Capacitaciones lleva sus tres subcategorías como enlaces
 * directos, así el visitante puede saltar sin pasar por la página general.
 * Por eso las tarjetas no son un único enlace: un enlace no puede contener
 * otros.
 */
export default function Ramas() {
  const { publicidad, capacitaciones } = ramas;

  return (
    <Section tone="tint">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Dos formas de trabajar juntos</Eyebrow>
        <SectionTitle>¿Qué necesitas hoy?</SectionTitle>
        <Lead className="mx-auto">
          Elige una opción y te llevo directo a lo que buscas.
        </Lead>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Publicidad */}
        <article className="flex flex-col rounded-3xl border border-line bg-white p-8 md:p-10">
          <div className="flex items-baseline justify-between gap-4">
            <span aria-hidden="true" className="display text-5xl text-brand/40">
              {publicidad.numero}
            </span>
            <span className="eyebrow text-ink-3">{publicidad.para}</span>
          </div>

          <h3 className="display mt-6 text-4xl text-ink md:text-5xl">
            {publicidad.titulo}
          </h3>
          <p className="mt-2 font-semibold text-brand-deep">
            {publicidad.subtitulo}
          </p>
          <p className="mt-4 text-ink-3">{publicidad.texto}</p>

          <ul className="mt-7 space-y-2.5">
            {publicidad.puntos.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-deep" />
                <span className="text-ink">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-9">
            <Link
              href={publicidad.href}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              {publicidad.cta}
              <ArrowIcon className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </article>

        {/* Capacitaciones */}
        <article className="flex flex-col rounded-3xl border border-line bg-white p-8 md:p-10">
          <div className="flex items-baseline justify-between gap-4">
            <span aria-hidden="true" className="display text-5xl text-brand/40">
              {capacitaciones.numero}
            </span>
            <span className="eyebrow text-ink-3">{capacitaciones.para}</span>
          </div>

          <h3 className="display mt-6 text-4xl text-ink md:text-5xl">
            {capacitaciones.titulo}
          </h3>
          <p className="mt-2 font-semibold text-brand-deep">
            {capacitaciones.subtitulo}
          </p>
          <p className="mt-4 text-ink-3">{capacitaciones.texto}</p>

          <ul className="mt-5 space-y-2.5">
            {ramasCapacitacion.map((r) => (
              <li key={r.slug}>
                <Link
                  href={r.href}
                  className={`group flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors duration-200 ${
                    r.destacada
                      ? "bg-ink text-white hover:bg-ink-2"
                      : "border border-line hover:border-brand hover:bg-brand-tint"
                  }`}
                >
                  <span>
                    <span className="flex flex-wrap items-center gap-2">
                      <span
                        className={`font-semibold ${r.destacada ? "text-white" : "text-ink"}`}
                      >
                        {r.nombre}
                      </span>
                      {r.destacada ? (
                        <span className="eyebrow rounded-full bg-brand-soft px-2.5 py-1 text-ink">
                          VIP
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={`mt-0.5 block text-sm ${r.destacada ? "text-white/75" : "text-ink-3"}`}
                    >
                      {r.resumen}
                    </span>
                  </span>
                  <ArrowIcon
                    className={`h-5 w-5 shrink-0 ${r.destacada ? "text-brand-soft" : "text-brand-deep"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={capacitaciones.href}
            className="mt-7 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            {capacitaciones.cta}
          </Link>
        </article>
      </div>
    </Section>
  );
}
