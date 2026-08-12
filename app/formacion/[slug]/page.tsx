import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Eyebrow } from "../../components/Section";
import Scroller from "../../components/Scroller";
import CtaBanner from "../../components/CtaBanner";
import Monogram from "../../components/Monogram";
import { ArrowIcon, CheckIcon, MicIcon } from "../../components/Icons";
import {
  categoriasOratoria,
  getCategoria,
  modalidades,
  waLink,
} from "../../lib/content";

export function generateStaticParams() {
  return categoriasOratoria.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/formacion/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const categoria = getCategoria(slug);

  if (!categoria) return {};

  return {
    title: categoria.nombre,
    description: categoria.objetivo,
    alternates: { canonical: `/formacion/${categoria.slug}` },
  };
}

export default async function CategoriaPage({
  params,
}: PageProps<"/formacion/[slug]">) {
  const { slug } = await params;
  const categoria = getCategoria(slug);

  if (!categoria) notFound();

  const otras = categoriasOratoria.filter((c) => c.slug !== categoria.slug);
  const mensaje = `¡Hola Mariangi! Me interesa el programa de ${categoria.nombre}. ¿Me cuentas modalidades e inversión?`;

  return (
    <>
      {/* Cabecera */}
      <section className="relative overflow-hidden bg-ink pt-20 text-white">
        <Monogram
          className="pointer-events-none absolute -right-16 top-0 h-[440px] w-auto text-white/[0.06]"
          strokeWidth={14}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 text-center md:px-10 md:py-20 md:text-left">
          <nav aria-label="Ruta de navegación" className="text-sm">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-white/60 md:justify-start">
              <li>
                <Link
                  href="/formacion"
                  className="cursor-pointer transition-colors duration-200 hover:text-brand-soft"
                >
                  Formación
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{categoria.nombre}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-brand-soft">
            Programa de oratoria · {categoria.eje}
          </p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.25rem,6vw,4rem)]">
            {categoria.nombre}
          </h1>
          <p className="mx-auto mt-6 max-w-[60ch] text-white/75 md:mx-0">{categoria.texto}</p>

          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-full bg-brand-deep md:mx-0 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
          >
            Consultar este programa
            <ArrowIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </section>

      {/* Objetivo y público */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Objetivo</Eyebrow>
            <p className="mx-auto mt-5 max-w-[60ch] text-2xl leading-snug text-ink lg:mx-0">
              {categoria.objetivo}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8">
            <h2 className="eyebrow text-ink-3">Público ideal</h2>
            <p className="mt-4 text-ink">{categoria.publico}</p>

            <h2 className="eyebrow mt-8 text-ink-3">Eje temático</h2>
            <p className="mt-3">
              <span className="inline-block rounded-full bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-deep">
                {categoria.eje}
              </span>
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
          label={`Beneficios de ${categoria.nombre}`}
          cols="md:grid-cols-2 xl:grid-cols-4"
          className="mt-12"
        >
          {categoria.beneficios.map((b) => (
            <li
              key={b}
              className="rounded-2xl border border-line bg-white p-7"
            >
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
              {categoria.contenidos.map((c, i) => (
                <li
                  key={c}
                  className="flex gap-5 rounded-2xl border border-line bg-white p-5"
                >
                  <span
                    aria-hidden="true"
                    className="display text-2xl text-brand/45"
                  >
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
              {categoria.resultados.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-2xl bg-brand-tint p-5"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                  <span className="text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Modalidades */}
      <Section tone="ink">
        <div className="max-w-3xl text-center md:text-left">
          <p className="eyebrow text-brand-soft">Cómo se dicta</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">
            Disponible en las cuatro modalidades
          </h2>
          <p className="mx-auto mt-5 max-w-[65ch] text-white/75 md:mx-0">
            Este programa se adapta al formato que mejor le sirva a tu equipo o
            a tu proceso personal.
          </p>
        </div>

        <Scroller
          as="ul"
          label="Modalidades disponibles"
          cols="md:grid-cols-2 lg:grid-cols-4"
          className="mt-12"
        >
          {modalidades.map((m) => (
            <li
              key={m.nombre}
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <MicIcon className="h-6 w-6 text-brand-soft" />
              <h3 className="display mt-4 text-xl text-white">{m.nombre}</h3>
              <p className="mt-2 text-sm text-white/70">{m.texto}</p>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Otras categorías */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Seguir explorando</Eyebrow>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Otras categorías
          </h2>
        </div>

        <Scroller
          as="ul"
          label="Otras categorías de oratoria"
          cols="md:grid-cols-2 lg:grid-cols-3"
          className="mt-10"
        >
          {otras.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/formacion/${c.slug}`}
                className="group flex h-full cursor-pointer flex-col justify-between gap-5 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand"
              >
                <div>
                  <h3 className="font-semibold text-ink">{c.nombre}</h3>
                  <p className="mt-2 text-sm text-ink-3">{c.texto}</p>
                </div>
                <ArrowIcon className="h-5 w-5 text-brand-deep" />
              </Link>
            </li>
          ))}
        </Scroller>
      </Section>

      <CtaBanner
        titulo={`Hablemos de ${categoria.nombre}`}
        texto="Te cuento modalidades, duración e inversión según lo que necesite tu equipo."
        mensaje={mensaje}
        cta="Consultar este programa"
      />
    </>
  );
}
