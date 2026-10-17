import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import CapTabs from "../../components/CapTabs";
import Section, { Eyebrow, Lead, SectionTitle } from "../../components/Section";
import Scroller from "../../components/Scroller";
import CtaBanner from "../../components/CtaBanner";
import { ArrowIcon, CheckIcon } from "../../components/Icons";
import {
  formatosGrupales,
  programasCorporativos,
  temas,
  vip,
  waLink,
} from "../../lib/content";

export const metadata: Metadata = {
  title: "Capacitaciones In Company y grupales",
  description:
    "Capacitación en oratoria y habilidades blandas para empresas (In Company), grupos reducidos de 3 personas y talleres abiertos. Programas a la medida.",
  alternates: { canonical: "/capacitaciones/in-company" },
};

/**
 * Todo lo que se dicta en grupo: empresas, grupos reducidos y talleres
 * abiertos. Lo uno a uno está en /capacitaciones/personalizadas.
 *
 * Orden: elegir formato → elegir tema → cómo trabajamos → experiencia.
 */
export default function InCompanyPage() {
  const empresas = formatosGrupales[0];

  return (
    <>
      <PageHero
        eyebrow="Para empresas y grupos"
        titulo="In Company"
        destacado="y grupales"
        texto="Capacitaciones para tu equipo de trabajo, para grupos reducidos de tres personas o en talleres abiertos con inscripción individual."
        acciones={
          <>
            <a
              href={waLink(empresas.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Solicitar propuesta para mi empresa
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#temas"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Ver temas
            </a>
          </>
        }
      />

      <CapTabs actual="in-company" />

      {/* Paso 1: formato */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Paso 1</Eyebrow>
          <SectionTitle>Elige el formato</SectionTitle>
          <Lead>Tres maneras de capacitarse en grupo, según quién participa.</Lead>
        </div>

        <Scroller
          as="ul"
          label="Formatos grupales"
          cols="md:grid-cols-3"
          itemWidth="[&>*]:basis-[86%] sm:[&>*]:basis-[60%] md:[&>*]:basis-auto"
          className="mt-12"
        >
          {formatosGrupales.map((f) => (
            <li
              key={f.id}
              className="flex flex-col rounded-3xl border border-line bg-white p-8"
            >
              <span className="eyebrow text-brand-deep">{f.etiqueta}</span>
              <h3 className="display mt-3 text-3xl text-ink">{f.nombre}</h3>
              <p className="mt-3 text-ink-3">{f.lead}</p>

              <ul className="mt-6 space-y-2.5">
                {f.puntos.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-deep" />
                    <span className="text-ink">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={waLink(f.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-deep"
                >
                  {f.cta}
                  <ArrowIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Paso 2: tema */}
      <Section id="temas" tone="tint" className="scroll-mt-36">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Paso 2</Eyebrow>
          <SectionTitle>Elige el tema</SectionTitle>
          <Lead>
            Cada tema tiene su ficha con objetivo, contenidos y resultados
            esperados. Toca el que te interese.
          </Lead>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {temas.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/capacitaciones/in-company/${t.slug}`}
                className="group flex h-full cursor-pointer items-start justify-between gap-5 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand"
              >
                <span>
                  <span className="eyebrow block text-ink-3">{t.eje}</span>
                  <span className="mt-2 block font-semibold text-ink">
                    {t.nombre}
                  </span>
                  <span className="mt-1.5 block text-sm text-ink-3">{t.texto}</span>
                </span>
                <ArrowIcon className="mt-1 h-5 w-5 shrink-0 text-brand-deep transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Cómo trabajamos con empresas */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Para empresas</Eyebrow>
          <SectionTitle>Cómo armamos tu programa</SectionTitle>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {vip.proceso.map((paso) => (
            <li
              key={paso.n}
              className="rounded-2xl border border-line bg-white p-7 text-center md:text-left"
            >
              <span aria-hidden="true" className="display text-4xl text-brand/45">
                {paso.n}
              </span>
              <h3 className="display mt-4 text-xl text-ink">{paso.titulo}</h3>
              <p className="mt-3 text-sm text-ink-3">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Experiencia corporativa */}
      <Section tone="ink">
        <div className="max-w-3xl text-center md:text-left">
          <p className="eyebrow text-brand-soft">Experiencia</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">
            Programas corporativos diseñados
          </h2>
        </div>

        <Scroller label="Programas corporativos" cols="md:grid-cols-3" className="mt-12">
          {programasCorporativos.map((p) => (
            <article
              key={p.titulo}
              className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <p className="eyebrow text-brand-soft">{p.eje}</p>
              <h3 className="display mt-4 text-2xl text-white">{p.titulo}</h3>
              <p className="mt-4 text-sm text-white/75">{p.objetivo}</p>
            </article>
          ))}
        </Scroller>

        <p className="mt-12 text-center text-white/75 md:text-left">
          ¿Prefieres trabajar a solas conmigo?{" "}
          <Link
            href="/capacitaciones/personalizadas"
            className="cursor-pointer font-semibold text-brand-soft underline underline-offset-4 transition-colors duration-200 hover:text-white"
          >
            Mira la capacitación personalizada
          </Link>
          .
        </p>
      </Section>

      <CtaBanner
        titulo="Capacitemos a tu equipo"
        texto="Cuéntame el reto que tiene tu gente al comunicar y te propongo el programa."
        mensaje={empresas.mensaje}
        cta="Solicitar propuesta"
      />
    </>
  );
}
