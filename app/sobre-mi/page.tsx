import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Section, { Eyebrow, Lead, SectionTitle } from "../components/Section";
import CtaBanner from "../components/CtaBanner";
import Scroller from "../components/Scroller";
import Marquee from "../components/Marquee";
import SoundWave from "../components/SoundWave";
import { CheckIcon } from "../components/Icons";
import {
  formacionAcademica,
  habilidades,
  hosting,
  imagenDeMarca,
  perfilProfesional,
  radio,
  site,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "13 años de trayectoria como locutora, presentadora e imagen de marcas. Radio, conducción de eventos, formación académica y certificaciones.",
  alternates: { canonical: "/sobre-mi" },
};

export default function SobreMiPage() {
  return (
    <>
      <PageHero
        eyebrow="Perfil profesional"
        titulo="Mariangi"
        destacado="Saavedra"
        texto={`Comunicadora apasionada con ${site.yearsOfExperience} años de trayectoria en radio, televisión, eventos y formación.`}
        fotoLabel="Retrato — Visual CV"
      />

      {/* Perfil */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <SoundWave className="mx-auto h-8 w-32 text-brand-deep lg:mx-0" />
            <Eyebrow className="mt-6">Quién soy</Eyebrow>
            <SectionTitle>Profesional de la voz</SectionTitle>
          </div>
          <div className="space-y-5 text-center text-ink-3 lg:text-left">
            {perfilProfesional.map((p) => (
              <p key={p.slice(0, 40)} className="mx-auto max-w-[65ch] lg:mx-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Radio */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Trayectoria en radio</Eyebrow>
          <SectionTitle>{radio.titulo}</SectionTitle>
          <Lead>{radio.texto}</Lead>
        </div>

        <Scroller as="ol" label="Emisoras de radio" cols="md:grid-cols-2 lg:grid-cols-4" className="mt-14">
          {radio.emisoras.map((e) => (
            <li
              key={`${e.nombre}-${e.periodo}`}
              className="rounded-2xl border border-line bg-white p-7"
            >
              <p className="eyebrow text-brand-deep">{e.periodo}</p>
              <h3 className="display mt-4 text-2xl text-ink">{e.nombre}</h3>
              <p className="mt-1 text-sm font-semibold text-ink-3">{e.dial}</p>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Imagen de marca */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>{imagenDeMarca.claim}</Eyebrow>
          <SectionTitle>{imagenDeMarca.titulo}</SectionTitle>
          <Lead>{imagenDeMarca.texto}</Lead>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 md:justify-start">
          {imagenDeMarca.sectores.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink-3"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* Conducción y hosting */}
      <Section tone="ink">
        <div className="max-w-3xl text-center md:text-left">
          <p className="eyebrow text-brand-soft">{hosting.claim}</p>
          <h2 className="display mt-3 text-4xl md:text-5xl lg:text-6xl">
            {hosting.titulo}
          </h2>
          <p className="mx-auto mt-5 max-w-[65ch] text-white/75 md:mx-0">{hosting.texto}</p>
        </div>

        <Scroller label="Eventos conducidos" cols="md:grid-cols-3" className="mt-14">
          {hosting.hitos.map((grupo) => (
            <div key={grupo.grupo}>
              <h3 className="eyebrow text-brand-soft">{grupo.grupo}</h3>
              <ul className="mt-4 space-y-2.5">
                {grupo.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-soft" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Scroller>
      </Section>

      {/* Formación y habilidades */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <Eyebrow>Certificaciones</Eyebrow>
            <SectionTitle>Formación académica</SectionTitle>

            <dl className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
              {formacionAcademica.map((f) => (
                <div
                  key={f.especialidad}
                  className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="font-semibold text-ink">{f.especialidad}</dt>
                  <dd className="text-sm text-ink-3 sm:text-right">
                    {f.institucion}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="text-center lg:text-left">
            <Eyebrow>Qué hago bien</Eyebrow>
            <SectionTitle>Habilidades clave</SectionTitle>

            <ul className="mt-10 space-y-3">
              {habilidades.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4"
                >
                  <CheckIcon className="h-5 w-5 shrink-0 text-brand-deep" />
                  <span className="font-semibold text-ink">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Marquee />

      <CtaBanner
        titulo="¿Listos para conectar?"
        texto="Escríbeme y conversamos sobre tu evento, tu campaña o la formación de tu equipo."
      />
    </>
  );
}
