import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import CapTabs from "../../components/CapTabs";
import Section, { Eyebrow, Lead, SectionTitle } from "../../components/Section";
import Scroller from "../../components/Scroller";
import CtaBanner from "../../components/CtaBanner";
import { ArrowIcon, CheckIcon } from "../../components/Icons";
import { fotos, vip, waLink } from "../../lib/content";

export const metadata: Metadata = {
  title: "Capacitación personalizada VIP · Oratoria uno a uno",
  description:
    "Oratoria uno a uno con Mariangi Saavedra: Oratoria Express o con acompañamiento en tres niveles. Diagnóstico, plan a tu medida y seguimiento directo.",
  alternates: { canonical: "/capacitaciones/personalizadas" },
};

/**
 * Subpágina destacada de Capacitaciones. Todo lo que hay aquí es uno a uno:
 * los formatos en grupo están en /capacitaciones/in-company.
 *
 * Orden pensado para quien llega sin saber nada: qué es → para quién →
 * las dos formas → los tres niveles → cómo empezamos.
 */
export default function PersonalizadasPage() {
  return (
    <>
      <PageHero
        eyebrow={vip.eyebrow}
        titulo={vip.titulo}
        destacado={vip.destacado}
        texto={`${vip.lead} ${vip.texto}`}
        foto={fotos.corporativo}
        acciones={
          <>
            <a
              href={waLink(vip.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Agendar reunión exploratoria
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#niveles"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Ver los 3 niveles
            </a>
          </>
        }
      />

      <CapTabs actual="personalizadas" />

      {/* Para quién + qué incluye */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Para quién es</Eyebrow>
            <p className="mx-auto mt-5 max-w-[55ch] text-2xl leading-snug text-ink lg:mx-0">
              {vip.paraQuien}
            </p>

            <h2 className="eyebrow mt-10 text-ink-3">Encaja especialmente si quieres…</h2>
            <ul className="mt-4 space-y-2.5 text-left">
              {vip.ideal.map((caso) => (
                <li key={caso} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                  <span className="text-ink">{caso}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-line bg-white p-8">
            <h2 className="eyebrow text-ink-3">Siempre incluye</h2>
            <ul className="mt-5 space-y-3">
              {vip.incluye.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                  <span className="font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Dos formas */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Dos formas de hacerla</Eyebrow>
          <SectionTitle>¿Algo puntual o un proceso?</SectionTitle>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {vip.formas.map((f, i) => (
            <li
              key={f.nombre}
              className="rounded-3xl border border-line bg-white p-8 md:p-10"
            >
              <span aria-hidden="true" className="display text-4xl text-brand/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-4 text-3xl text-ink">{f.nombre}</h3>
              <p className="mt-3 text-ink-3">{f.texto}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Niveles */}
      <section id="niveles" className="fondo fondo-oscuro relative scroll-mt-36 overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl text-center md:text-left">
            <p className="eyebrow text-brand-soft">Oratoria con acompañamiento</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">
              Tres niveles: empieza donde estés
            </h2>
            <p className="mx-auto mt-5 max-w-[60ch] text-white/75 md:mx-0">
              Puedes recorrerlos de forma progresiva o entrar directo en el que
              corresponde a tu punto de partida.
            </p>
          </div>

          <Scroller
            as="ol"
            label="Niveles de la capacitación personalizada"
            cols="md:grid-cols-3"
            itemWidth="[&>*]:basis-[86%] sm:[&>*]:basis-[60%] md:[&>*]:basis-auto"
            className="mt-12"
          >
            {vip.niveles.map((nivel) => (
              <li
                key={nivel.n}
                className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
              >
                <p className="eyebrow text-brand-soft">{nivel.n}</p>
                <h3 className="display mt-3 text-3xl text-white">
                  {nivel.nombre}
                </h3>
                <p className="mt-3 text-sm text-white/70">{nivel.para}</p>

                <ul className="mt-7 space-y-2.5">
                  {nivel.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-soft" />
                      <span className="text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-white/10 pt-6 text-sm text-white">
                  <span className="eyebrow block text-brand-soft">Resultado</span>
                  <span className="mt-2 block">{nivel.resultado}</span>
                </p>
              </li>
            ))}
          </Scroller>
        </div>
      </section>

      {/* Cómo empezamos */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Cómo empezamos</Eyebrow>
          <SectionTitle>Tres pasos, sin compromiso</SectionTitle>
          <Lead>
            Antes de proponerte nada, conversamos. Así el plan sale de tu caso
            real.
          </Lead>
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

        <p className="mt-12 text-center text-ink-3 md:text-left">
          ¿Buscas capacitar a un equipo o a un grupo?{" "}
          <Link
            href="/capacitaciones/in-company"
            className="cursor-pointer font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            Mira las capacitaciones In Company y grupales
          </Link>
          .
        </p>
      </Section>

      <CtaBanner
        titulo="Empecemos por conversar"
        texto="Agenda la reunión exploratoria: vemos dónde estás y qué necesitas comunicar."
        mensaje={vip.mensaje}
        cta="Agendar reunión exploratoria"
      />
    </>
  );
}
