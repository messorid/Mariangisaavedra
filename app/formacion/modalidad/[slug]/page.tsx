import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Eyebrow } from "../../../components/Section";
import Scroller from "../../../components/Scroller";
import CtaBanner from "../../../components/CtaBanner";
import Monogram from "../../../components/Monogram";
import { ArrowIcon, CheckIcon, MicIcon } from "../../../components/Icons";
import {
  categoriasOratoria,
  getModalidad,
  modalidades,
  waLink,
} from "../../../lib/content";

export function generateStaticParams() {
  return modalidades.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/formacion/modalidad/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const modalidad = getModalidad(slug);

  if (!modalidad) return {};

  return {
    title: modalidad.tituloSeo,
    description: modalidad.lead,
    alternates: { canonical: `/formacion/modalidad/${modalidad.slug}` },
  };
}

export default async function ModalidadPage({
  params,
}: PageProps<"/formacion/modalidad/[slug]">) {
  const { slug } = await params;
  const modalidad = getModalidad(slug);

  if (!modalidad) notFound();

  const otras = modalidades.filter((m) => m.slug !== modalidad.slug);
  const mensaje = `¡Hola Mariangi! Me interesa la modalidad ${modalidad.nombre}. ¿Me cuentas cómo funciona y la inversión?`;

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
              <li>
                <Link
                  href="/formacion#programas"
                  className="cursor-pointer transition-colors duration-200 hover:text-brand-soft"
                >
                  Modalidades
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{modalidad.nombre}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 flex items-center justify-center gap-2 text-brand-soft md:justify-start">
            <MicIcon className="h-[18px] w-[18px]" />
            Modalidad
            {modalidad.destacada ? (
              <span className="rounded-full bg-white px-3 py-1 text-ink">
                VIP
              </span>
            ) : null}
          </p>

          <h1 className="display mt-4 max-w-4xl text-[clamp(2.25rem,6vw,4rem)]">
            {modalidad.nombre}
          </h1>

          <p className="mx-auto mt-6 max-w-[55ch] text-xl leading-snug text-white md:mx-0">
            {modalidad.lead}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={waLink(mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Consultar esta modalidad
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>

            {modalidad.destacada ? (
              <Link
                href="/formacion#vip"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Ver los tres niveles VIP
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* Para quién y variantes */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Para quién es</Eyebrow>
            <p className="mx-auto mt-5 max-w-[60ch] text-2xl leading-snug text-ink lg:mx-0">
              {modalidad.paraQuien}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8">
            <h2 className="eyebrow text-ink-3">En una línea</h2>
            <p className="mt-4 text-ink">{modalidad.texto}</p>

            {modalidad.variantes.length > 0 ? (
              <>
                <h2 className="eyebrow mt-8 text-ink-3">Variantes</h2>
                <ul className="mt-4 space-y-2.5">
                  {modalidad.variantes.map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                      <span className="font-semibold text-ink">{v}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      </Section>

      {/* Cómo funciona y qué incluye */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Formato</Eyebrow>
            <h2 className="display mt-3 text-3xl md:text-4xl">Cómo funciona</h2>

            <ol className="mt-9 space-y-3">
              {modalidad.comoFunciona.map((paso, i) => (
                <li
                  key={paso}
                  className="flex gap-5 rounded-2xl border border-line bg-white p-5 text-left"
                >
                  <span
                    aria-hidden="true"
                    className="display text-2xl text-brand/45"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink">{paso}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center lg:text-left">
            <Eyebrow>Qué incluye</Eyebrow>
            <h2 className="display mt-3 text-3xl md:text-4xl">
              Lo que te llevas
            </h2>

            <ul className="mt-9 space-y-3">
              {modalidad.incluye.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 text-left"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Cuándo elegirla */}
      <Section tone="ink">
        <div className="max-w-3xl text-center md:text-left">
          <p className="eyebrow text-brand-soft">Cuándo elegir esta modalidad</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">
            Encaja especialmente si…
          </h2>
        </div>

        <Scroller
          as="ul"
          label={`Cuándo elegir la modalidad ${modalidad.nombre}`}
          cols="md:grid-cols-3"
          className="mt-12"
        >
          {modalidad.ideal.map((caso) => (
            <li
              key={caso}
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <CheckIcon className="h-6 w-6 text-brand-soft" />
              <p className="mt-4 text-white">{caso}</p>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Categorías disponibles en esta modalidad */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Sobre qué trabajamos</Eyebrow>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Cualquier categoría, en esta modalidad
          </h2>
          <p className="mx-auto mt-5 max-w-[65ch] text-ink-3 md:mx-0">
            La modalidad define cómo trabajamos; la categoría, sobre qué. Se
            combinan libremente.
          </p>
        </div>

        <Scroller
          as="ul"
          label="Categorías de oratoria"
          cols="md:grid-cols-2 lg:grid-cols-3"
          className="mt-10"
        >
          {categoriasOratoria.map((c) => (
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

      {/* Otras modalidades */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Seguir comparando</Eyebrow>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Otras modalidades
          </h2>
        </div>

        <Scroller
          as="ul"
          label="Otras modalidades"
          cols="md:grid-cols-3"
          className="mt-10"
        >
          {otras.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/formacion/modalidad/${m.slug}`}
                className="group flex h-full cursor-pointer flex-col justify-between gap-5 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand"
              >
                <div>
                  <h3 className="display text-xl text-ink">{m.nombre}</h3>
                  <p className="mt-2 text-sm text-ink-3">{m.texto}</p>
                </div>
                <ArrowIcon className="h-5 w-5 text-brand-deep" />
              </Link>
            </li>
          ))}
        </Scroller>
      </Section>

      <CtaBanner
        titulo={`Hablemos de la modalidad ${modalidad.nombre}`}
        texto="Te cuento fechas, duración e inversión según lo que necesites."
        mensaje={mensaje}
        cta="Consultar esta modalidad"
      />
    </>
  );
}
