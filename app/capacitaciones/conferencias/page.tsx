import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import CapTabs from "../../components/CapTabs";
import Section, { Eyebrow, Lead, SectionTitle } from "../../components/Section";
import CtaBanner from "../../components/CtaBanner";
import { ArrowIcon, CheckIcon } from "../../components/Icons";
import { conferencias, fotos, waLink } from "../../lib/content";

export const metadata: Metadata = {
  title: "Conferencias",
  description:
    "Conferencias de Mariangi Saavedra para eventos corporativos, institucionales y encuentros abiertos: liderazgo, desarrollo personal, valores y familia.",
  alternates: { canonical: "/capacitaciones/conferencias" },
};

const mensaje =
  "¡Hola Mariangi! Quiero invitarte como conferencista a un evento.";

/** Las líneas temáticas en el orden en que aparecen en el contenido. */
const lineas = [...new Set(conferencias.map((c) => c.linea))];

const tiposDeEvento = [
  "Eventos corporativos y convenciones",
  "Actos institucionales y educativos",
  "Encuentros abiertos al público",
];

export default function ConferenciasPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaker desde 2021"
        titulo="Conferencias"
        destacado="para tu evento"
        texto="Charlas que inspiran y dejan herramientas concretas, para eventos corporativos, institucionales y encuentros abiertos."
        foto={fotos.gala}
        acciones={
          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
          >
            Invitarme a tu evento
            <ArrowIcon className="h-[18px] w-[18px]" />
          </a>
        }
      />

      <CapTabs actual="conferencias" />

      {/* Conferencias agrupadas por línea temática */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Catálogo</Eyebrow>
          <SectionTitle>Mis conferencias</SectionTitle>
          <Lead>Organizadas en {lineas.length} líneas temáticas.</Lead>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {lineas.map((linea, i) => (
            <section key={linea} aria-labelledby={`linea-${i}`}>
              <h3
                id={`linea-${i}`}
                className="eyebrow border-b-2 border-brand pb-3 text-center text-brand-deep md:text-left"
              >
                {linea}
              </h3>
              <ul>
                {conferencias
                  .filter((c) => c.linea === linea)
                  .map((c) => (
                    <li
                      key={c.titulo}
                      className="border-b border-line py-6 text-center md:text-left"
                    >
                      <p className="display text-2xl text-ink md:text-3xl">
                        {c.titulo}
                      </p>
                      {/* Algunas aún no tienen descripción: se compacta
                          en vez de dejar un hueco. */}
                      {c.texto ? (
                        <p className="mt-2 text-ink-3">{c.texto}</p>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      {/* Para qué eventos */}
      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Dónde encajan</Eyebrow>
            <SectionTitle>Para qué eventos</SectionTitle>
          </div>

          <ul className="space-y-3">
            {tiposDeEvento.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4"
              >
                <CheckIcon className="h-5 w-5 shrink-0 text-brand-deep" />
                <span className="font-semibold text-ink">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner
        titulo="Llevemos una conferencia a tu evento"
        texto="Cuéntame la fecha, el público y el objetivo, y te propongo la charla que mejor encaja."
        mensaje={mensaje}
        cta="Invitarme a tu evento"
      />
    </>
  );
}
