import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Eyebrow } from "../../../components/Section";
import Scroller from "../../../components/Scroller";
import CtaBanner from "../../../components/CtaBanner";
import CapTabs from "../../../components/CapTabs";
import Monogram from "../../../components/Monogram";
import { ArrowIcon, CheckIcon } from "../../../components/Icons";
import { getTema, temas, waLink } from "../../../lib/content";

export function generateStaticParams() {
  return temas.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/capacitaciones/in-company/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tema = getTema(slug);

  if (!tema) return {};

  return {
    title: `${tema.nombre} · Capacitación In Company`,
    description: tema.objetivo,
    alternates: { canonical: `/capacitaciones/in-company/${tema.slug}` },
  };
}

/** Ficha de un tema de capacitación para empresas y grupos. */
export default async function TemaPage({
  params,
}: PageProps<"/capacitaciones/in-company/[slug]">) {
  const { slug } = await params;
  const tema = getTema(slug);

  if (!tema) notFound();

  const otros = temas.filter((t) => t.slug !== tema.slug);
  const mensaje = `¡Hola Mariangi! Me interesa la capacitación de ${tema.nombre} para mi empresa o grupo. ¿Me cuentas formatos e inversión?`;

  return (
    <>
      {/* Cabecera */}
      <section className="relative overflow-hidden bg-ink pt-20 text-white">
        <Monogram
          className="pointer-events-none absolute -right-16 top-0 h-[440px] w-auto text-white/[0.06]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 text-center md:px-10 md:py-20 md:text-left">
          <nav aria-label="Ruta de navegación" className="text-sm">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-white/60 md:justify-start">
              <li>
                <Link
                  href="/capacitaciones"
                  className="cursor-pointer transition-colors duration-200 hover:text-brand-soft"
                >
                  Capacitaciones
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/capacitaciones/in-company"
                  className="cursor-pointer transition-colors duration-200 hover:text-brand-soft"
                >
                  In Company y grupales
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{tema.nombre}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-brand-soft">
            Tema de capacitación · {tema.eje}
          </p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.25rem,6vw,4rem)]">
            {tema.nombre}
          </h1>
          <p className="mx-auto mt-6 max-w-[60ch] text-white/75 md:mx-0">{tema.texto}</p>

          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-full bg-brand-deep md:mx-0 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
          >
            Consultar este tema
            <ArrowIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </section>

      <CapTabs actual="in-company" />

      {/* Objetivo y público */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Objetivo</Eyebrow>
            <p className="mx-auto mt-5 max-w-[60ch] text-2xl leading-snug text-ink lg:mx-0">
              {tema.objetivo}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8">
            <h2 className="eyebrow text-ink-3">Para quién</h2>
            <p className="mt-4 text-ink">{tema.publico}</p>

            <h2 className="eyebrow mt-8 text-ink-3">Formatos disponibles</h2>
            <p className="mt-3 text-ink">
              In Company para empresas, grupo reducido o taller abierto.
            </p>
          </div>
        </div>
      </Section>

      {/* Beneficios */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Qué se lleva el participante</Eyebrow>
          <h2 className="display mt-3 text-4xl md:text-5xl">Beneficios</h2>
        </div>

        <Scroller
          as="ul"
          label={`Beneficios de ${tema.nombre}`}
          cols="md:grid-cols-2 xl:grid-cols-4"
          className="mt-12"
        >
          {tema.beneficios.map((b) => (
            <li key={b} className="rounded-2xl border border-line bg-white p-7">
              <CheckIcon className="h-6 w-6 text-brand-deep" />
              <p className="mt-4 font-semibold text-ink">{b}</p>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Contenidos y resultados */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Programa</Eyebrow>
            <h2 className="display mt-3 text-3xl md:text-4xl">
              Contenidos que trabajamos
            </h2>

            <ol className="mt-9 space-y-3">
              {tema.contenidos.map((c, i) => (
                <li
                  key={c}
                  className="flex gap-5 rounded-2xl border border-line bg-white p-5 text-left"
                >
                  <span aria-hidden="true" className="display text-2xl text-brand/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink">{c}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center lg:text-left">
            <Eyebrow>Para la organización</Eyebrow>
            <h2 className="display mt-3 text-3xl md:text-4xl">
              Resultados esperados
            </h2>

            <ul className="mt-9 space-y-3">
              {tema.resultados.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-2xl bg-brand-tint p-5 text-left"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                  <span className="text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Otros temas: lista compacta, sin tarjetas grandes */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Seguir explorando</Eyebrow>
          <h2 className="display mt-3 text-3xl md:text-4xl">Otros temas</h2>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 md:justify-start">
          {otros.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/capacitaciones/in-company/${t.slug}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand hover:text-brand-deep"
              >
                {t.nombre}
                <ArrowIcon className="h-4 w-4 text-brand-deep" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        titulo={`Hablemos de ${tema.nombre}`}
        texto="Te cuento formatos, duración e inversión según lo que necesite tu equipo."
        mensaje={mensaje}
        cta="Consultar este tema"
      />
    </>
  );
}
