import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { Eyebrow, Lead, SectionTitle } from "../components/Section";
import CtaBanner from "../components/CtaBanner";
import Scroller from "../components/Scroller";
import { ArrowIcon, CheckIcon, MicIcon } from "../components/Icons";
import {
  categoriasOratoria,
  conferencias,
  metodologia,
  modalidades,
  programasCorporativos,
  pruebaFormacion,
  waLink,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Oratoria, conferencias y formación corporativa",
  description:
    "Programas de oratoria personalizados, grupales y corporativos. Conferencias y formación in-company. Locución + Coaching + PNL. Más de 200 profesionales capacitados.",
  alternates: { canonical: "/formacion" },
};

/**
 * Las conferencias se ordenan por línea temática para que las de una misma
 * línea queden juntas en la lista, sin partir la sección en bloques separados.
 */
const lineasTematicas = [...new Set(conferencias.map((c) => c.linea))];

const conferenciasOrdenadas = [...conferencias].sort(
  (a, b) => lineasTematicas.indexOf(a.linea) - lineasTematicas.indexOf(b.linea)
);

export default function FormacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Para equipos y personas"
        titulo="Comunicar mejor"
        destacado="cambia los resultados"
        texto="Fusiono técnicas de locución con herramientas de Coaching y Programación Neurolingüística para desarrollar mensajes de alto impacto, tanto en el ámbito corporativo como personal."
        fotoLabel="Fotografía en formación"
        acciones={
          <>
            <a
              href="#programas"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Ver programas
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#corporativo"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Formación para empresas
            </a>
          </>
        }
      />

      {/* Prueba social */}
      <section className="border-b border-line bg-white">
        <dl className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 md:px-10">
          {pruebaFormacion.map((p) => (
            <div key={p.label} className="flex items-baseline justify-center gap-4 md:justify-start">
              <dt className="display text-4xl text-brand-deep md:text-5xl">
                {p.valor}
              </dt>
              <dd className="text-sm leading-snug text-ink-3">{p.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Metodología */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Metodología</Eyebrow>
            <SectionTitle>{metodologia.titulo}</SectionTitle>
            <Lead>{metodologia.texto}</Lead>
          </div>

          <ol className="space-y-4">
            {metodologia.pasos.map((paso) => (
              <li
                key={paso.n}
                className="flex gap-6 rounded-2xl border border-line bg-white p-6"
              >
                <span aria-hidden="true" className="display text-3xl text-brand/45">
                  {paso.n}
                </span>
                <div>
                  <h3 className="display text-xl text-ink">{paso.titulo}</h3>
                  <p className="mt-1.5 text-ink-3">{paso.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Programas de oratoria */}
      <Section id="programas" tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Programas de oratoria</Eyebrow>
          <SectionTitle>Elige modalidad y enfoque</SectionTitle>
          <Lead>
            Primero decidimos cómo trabajamos; después, sobre qué. Cualquier
            categoría se puede dictar en cualquiera de las cuatro modalidades.
          </Lead>
        </div>

        <h3 className="eyebrow mt-14 text-center text-ink-3 md:text-left">Modalidades</h3>
        <Scroller
          label="Modalidades de los programas"
          cols="md:grid-cols-2 lg:grid-cols-4"
          className="mt-5"
        >
          {modalidades.map((m) => (
            <article
              key={m.nombre}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <MicIcon className="h-6 w-6 text-brand-deep" />
              <h4 className="display mt-4 text-xl text-ink">{m.nombre}</h4>
              <p className="mt-2 text-sm text-ink-3">{m.texto}</p>
              {m.variantes.length > 0 ? (
                <ul className="mt-4 space-y-1.5">
                  {m.variantes.map((v) => (
                    <li
                      key={v}
                      className="flex items-start gap-2 text-sm text-ink-3"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" />
                      {v}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </Scroller>

        <h3 className="eyebrow mt-16 text-center text-ink-3 md:text-left">Categorías</h3>
        <Scroller
          as="ul"
          label="Categorías de oratoria"
          cols="md:grid-cols-2 lg:grid-cols-3"
          className="mt-5"
        >
          {categoriasOratoria.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/formacion/${c.slug}`}
                className="group flex h-full cursor-pointer flex-col justify-between gap-5 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand"
              >
                <div>
                  <h4 className="font-semibold text-ink">{c.nombre}</h4>
                  <p className="mt-2 text-sm text-ink-3">{c.texto}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
                  Ver programa
                  <ArrowIcon className="h-[18px] w-[18px]" />
                </span>
              </Link>
            </li>
          ))}
        </Scroller>

        <a
          href={waLink(
            "¡Hola Mariangi! Me interesa un programa de oratoria. ¿Me cuentas las modalidades y la inversión?"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-full bg-brand-deep md:mx-0 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
        >
          Consultar disponibilidad e inversión
          <ArrowIcon className="h-[18px] w-[18px]" />
        </a>
      </Section>

      {/* Conferencias */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Speaker desde 2021</Eyebrow>
          <SectionTitle>Conferencias</SectionTitle>
          <Lead>
            Charlas para eventos corporativos, institucionales y encuentros
            abiertos, organizadas en {lineasTematicas.length} líneas temáticas.
          </Lead>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 md:justify-start">
          {lineasTematicas.map((linea) => (
            <li
              key={linea}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-3"
            >
              {linea}
            </li>
          ))}
        </ul>

        {/* Lista editorial: se lee de corrido en móvil, dos columnas en
            escritorio. Sin carrusel — son títulos cortos y conviene verlos
            todos de un vistazo. */}
        <ol className="mt-12 grid gap-x-12 md:grid-cols-2">
          {conferenciasOrdenadas.map((c, i) => (
            <li
              key={c.titulo}
              className="border-t border-line py-8 text-center first:border-brand md:py-9 md:text-left"
            >
              <div className="flex items-baseline justify-center gap-4 md:justify-start">
                <span
                  aria-hidden="true"
                  className="display text-lg text-brand/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-brand-deep">{c.linea}</span>
              </div>

              <h3 className="display mt-4 text-3xl text-ink md:text-4xl">
                {c.titulo}
              </h3>

              {/* Tres conferencias aún no tienen descripción: la tarjeta se
                  compacta en vez de dejar un hueco. */}
              {c.texto ? (
                <p className="mx-auto mt-3 max-w-[45ch] text-ink-3 md:mx-0">{c.texto}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      {/* Programas corporativos */}
      <Section id="corporativo" tone="ink">
        <div className="max-w-3xl text-center md:text-left">
          <p className="eyebrow text-brand-soft">Eje de Habilidades Blandas</p>
          <h2 className="display mt-3 text-4xl md:text-5xl lg:text-6xl">
            Programas corporativos
          </h2>
          <p className="mx-auto mt-5 max-w-[65ch] text-white/75 md:mx-0">
            Formaciones in-company diseñadas a la medida de la organización. Se
            adaptan en duración y profundidad según el equipo y el objetivo.
          </p>
        </div>

        <Scroller
          label="Programas corporativos"
          cols="md:grid-cols-3"
          className="mt-14"
        >
          {programasCorporativos.map((p, i) => (
            <article
              key={p.titulo}
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <span
                aria-hidden="true"
                className="display text-4xl text-brand-soft/60"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-5 text-2xl text-white">{p.titulo}</h3>
              <p className="mt-4 text-sm text-white/70">{p.objetivo}</p>
              <p className="eyebrow mt-6 text-brand-soft">{p.eje}</p>
            </article>
          ))}
        </Scroller>

        <a
          href={waLink(
            "¡Hola Mariangi! Quiero información sobre formación corporativa in-company para mi empresa."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-full bg-brand-deep md:mx-0 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
        >
          Solicitar propuesta corporativa
          <ArrowIcon className="h-[18px] w-[18px]" />
        </a>
      </Section>

      <section className="bg-brand-tint">
        <p className="mx-auto max-w-7xl px-5 py-10 text-center text-ink-3 md:px-10 md:text-left">
          ¿Buscas voz o imagen para una campaña en vez de formación?{" "}
          <Link
            href="/marcas"
            className="cursor-pointer font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            Mira los planes de marca
          </Link>
          .
        </p>
      </section>

      <CtaBanner
        titulo="Formemos a tu equipo"
        texto="Cuéntame el reto que tiene tu gente al comunicar y te propongo el programa."
        mensaje="¡Hola Mariangi! Quiero información sobre tus programas de formación."
        cta="Hablemos de formación"
      />
    </>
  );
}
