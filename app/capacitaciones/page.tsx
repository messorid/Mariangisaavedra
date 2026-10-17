import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { Eyebrow, Lead, SectionTitle } from "../components/Section";
import CtaBanner from "../components/CtaBanner";
import Portrait from "../components/Portrait";
import { ArrowIcon, CheckIcon } from "../components/Icons";
import {
  fotos,
  metodologia,
  pruebaFormacion,
  ramasCapacitacion,
  vip,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Capacitaciones en oratoria y comunicación",
  description:
    "Capacitaciones personalizadas uno a uno, In Company y grupales, y conferencias. Locución + Coaching + PNL. Más de 200 profesionales capacitados.",
  alternates: { canonical: "/capacitaciones" },
};

/**
 * Página de entrada a Capacitaciones. Solo orienta: presenta las tres
 * opciones y manda a la subpágina correspondiente. El detalle de cada una
 * vive en su propia página para que no se mezclen.
 */
export default function CapacitacionesPage() {
  const personalizada = ramasCapacitacion.find((r) => r.destacada)!;
  const resto = ramasCapacitacion.filter((r) => !r.destacada);

  return (
    <>
      <PageHero
        eyebrow="Capacitaciones"
        titulo="Comunicar mejor"
        destacado="cambia los resultados"
        texto="Capacitaciones en oratoria y comunicación para ti, para tu equipo o para tu evento. Elige la opción que buscas y te muestro solo lo que te sirve."
        foto={fotos.retrato}
        acciones={
          <>
            <Link
              href={personalizada.href}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Capacitación personalizada
              <ArrowIcon className="h-[18px] w-[18px]" />
            </Link>
            <a
              href="#opciones"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Ver las 3 opciones
            </a>
          </>
        }
      />

      <Section id="opciones" tone="tint">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Tres opciones, cada una por separado</Eyebrow>
          <SectionTitle>¿Qué tipo de capacitación buscas?</SectionTitle>
        </div>

        {/* Destacada: Personalizada, a todo el ancho y en tono oscuro. */}
        <Link
          href={personalizada.href}
          className="group mt-14 grid cursor-pointer overflow-hidden rounded-3xl bg-ink text-white transition-colors duration-200 hover:bg-ink-2 md:grid-cols-[1fr_1.4fr]"
        >
          <Portrait
            src={fotos.corporativo.src}
            alt={fotos.corporativo.alt}
            className="aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[26rem]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />

          <div className="p-8 text-center md:p-12 md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <span className="eyebrow rounded-full bg-brand-soft px-3 py-1.5 text-ink">
                Recomendada · VIP
              </span>
              <span className="eyebrow text-brand-soft">{personalizada.para}</span>
            </div>

            <h3 className="display mt-6 text-4xl md:text-5xl">
              {vip.titulo} {vip.destacado}
            </h3>
            <p className="mx-auto mt-4 max-w-[50ch] text-lg text-white/85 md:mx-0">
              {vip.lead}
            </p>

            <ul className="mt-7 space-y-2.5 text-left">
              {vip.formas.map((f) => (
                <li key={f.nombre} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-soft" />
                  <span className="text-white/85">
                    <span className="font-semibold text-white">{f.nombre}:</span>{" "}
                    {f.texto}
                  </span>
                </li>
              ))}
            </ul>

            <span className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-brand-soft group-hover:text-ink">
              Ver capacitación personalizada
              <ArrowIcon className="h-[18px] w-[18px]" />
            </span>
          </div>
        </Link>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {resto.map((r) => (
            <li key={r.slug}>
              <Link
                href={r.href}
                className="group flex h-full cursor-pointer flex-col rounded-3xl border border-line bg-white p-8 transition-colors duration-200 hover:border-brand md:p-10"
              >
                <span className="eyebrow text-ink-3">{r.para}</span>
                <h3 className="display mt-4 text-3xl text-ink md:text-4xl">
                  {r.nombre}
                </h3>
                <p className="mt-3 text-ink-3">{r.resumen}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand-deep transition-colors duration-200 group-hover:text-ink">
                  Ver {r.nombre.toLowerCase()}
                  <ArrowIcon className="h-[18px] w-[18px]" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Prueba social */}
      <section className="border-y border-line bg-white">
        <dl className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 md:px-10">
          {pruebaFormacion.map((p) => (
            <div
              key={p.label}
              className="flex items-baseline justify-center gap-4 md:justify-start"
            >
              <dt className="display text-4xl text-brand-deep md:text-5xl">
                {p.valor}
              </dt>
              <dd className="text-sm leading-snug text-ink-3">{p.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Metodología: común a las tres opciones */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Mi metodología, en todas las opciones</Eyebrow>
            <SectionTitle>{metodologia.titulo}</SectionTitle>
            <Lead>{metodologia.texto}</Lead>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {metodologia.pasos.map((paso) => (
              <li
                key={paso.n}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <span aria-hidden="true" className="display text-3xl text-brand/45">
                  {paso.n}
                </span>
                <h3 className="display mt-3 text-xl text-ink">{paso.titulo}</h3>
                <p className="mt-1.5 text-sm text-ink-3">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBanner
        titulo="¿No sabes cuál elegir?"
        texto="Cuéntame qué necesitas comunicar y ante quién, y te digo qué opción te conviene."
        mensaje="¡Hola Mariangi! Quiero una capacitación pero no sé cuál me conviene. ¿Me orientas?"
        cta="Pedir orientación"
      />
    </>
  );
}
