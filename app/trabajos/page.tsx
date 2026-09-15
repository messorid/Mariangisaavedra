import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Section, { Eyebrow, Lead, SectionTitle } from "../components/Section";
import CtaBanner from "../components/CtaBanner";
import Scroller from "../components/Scroller";
import Marquee from "../components/Marquee";
import Portrait from "../components/Portrait";
import { InstagramIcon, PlayIcon } from "../components/Icons";
import { fotos, hosting, imagenDeMarca, reels, site } from "../lib/content";

export const metadata: Metadata = {
  title: "Trabajos y campañas",
  description:
    "Campañas de imagen de marca, conducción de eventos corporativos e inauguraciones en Venezuela. Reels destacados y clientes.",
  alternates: { canonical: "/trabajos" },
};

export default function TrabajosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        titulo="Trabajos"
        destacado="y campañas"
        texto="Una selección de campañas de marca, conducciones y eventos. Puedes ver mucho más en mi Instagram."
        foto={fotos.gala}
        acciones={
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
            Ver {site.instagramHandle}
          </a>
        }
      />

      {/* Reels */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Reels destacados</Eyebrow>
          <SectionTitle>Campañas en video</SectionTitle>
          <Lead>Cada tarjeta abre el post original en Instagram.</Lead>
        </div>

        <Scroller as="ul" label="Reels destacados" cols="md:grid-cols-3 xl:grid-cols-5" itemWidth="[&>*]:basis-[68%] sm:[&>*]:basis-[40%] md:[&>*]:basis-auto" className="mt-14">
          {reels.map((reel, i) => (
            <li key={reel.url}>
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block cursor-pointer overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-200 hover:border-brand"
              >
                <Portrait
                  className="aspect-[9/16] w-full"
                  sizes="(max-width: 640px) 100vw, 20vw"
                  label={`Reel ${i + 1}`}
                />
                <div className="p-5">
                  <p className="text-sm text-ink-3">
                    {reel.nota || "Campaña de marca"}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
                    <PlayIcon className="h-[18px] w-[18px]" />
                    Ver reel
                  </span>
                </div>
              </a>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Sectores */}
      <Section tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>{imagenDeMarca.claim}</Eyebrow>
          <SectionTitle>Sectores en los que he trabajado</SectionTitle>
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

      {/* Eventos */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Conducción & hosting</Eyebrow>
          <SectionTitle>Eventos conducidos</SectionTitle>
          <Lead>{hosting.claim}</Lead>
        </div>

        <Scroller label="Eventos conducidos" cols="md:grid-cols-3" className="mt-14">
          {hosting.hitos.map((grupo) => (
            <div
              key={grupo.grupo}
              className="rounded-2xl border border-line bg-white p-7"
            >
              <h3 className="eyebrow text-brand-deep">{grupo.grupo}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-3">
                {grupo.items.map((item) => (
                  <li key={item} className="border-b border-line pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Scroller>
      </Section>

      <Marquee />

      <CtaBanner
        titulo="¿Sumamos tu marca a la lista?"
        texto="Escríbeme y conversamos sobre tu campaña o tu próximo evento."
        mensaje="¡Hola Mariangi! Vi tu portafolio y quiero conversar sobre un proyecto."
      />
    </>
  );
}
