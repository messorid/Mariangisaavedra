import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { Eyebrow, Lead, SectionTitle } from "../components/Section";
import Marquee from "../components/Marquee";
import CtaBanner from "../components/CtaBanner";
import Scroller from "../components/Scroller";
import Portrait from "../components/Portrait";
import { ArrowIcon, CheckIcon, InstagramIcon, PlayIcon } from "../components/Icons";
import {
  fotos,
  imagenDeMarca,
  planes,
  reels,
  serviciosPublicidad,
  site,
  testimonio,
  waLink,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Publicidad para tu marca",
  description:
    "Planes de publicidad desde $300: reels, stories y voz comercial. Host de eventos, Voice Over y Alcance 360. Exclusividad sectorial en el plan Embajadora PRO.",
  alternates: { canonical: "/publicidad" },
};

/**
 * Rama Publicidad. Orden pensado para quien viene a contratar:
 * planes (con precio) → servicios sueltos → resultados que lo respaldan.
 */
export default function PublicidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Publicidad · Para empresas y marcas"
        titulo="Mi voz y mi imagen"
        destacado="al servicio de tu marca"
        texto="Como Voz e Imagen de Marcas me convierto en el rostro y el sonido que transmite confianza, profesionalismo y cercanía a tu público objetivo."
        foto={fotos.gala}
        acciones={
          <>
            <a
              href="#planes"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Ver planes y precios
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#resultados"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Ver resultados
            </a>
          </>
        }
      />

      {/* Planes */}
      <Section id="planes" tone="tint" className="scroll-mt-16">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Planes</Eyebrow>
          <SectionTitle>Elige tu plan</SectionTitle>
          <Lead>
            Tres planes según el alcance que necesites. Todos los montos están
            en dólares.
          </Lead>
        </div>

        <Scroller label="Planes de publicidad" cols="lg:grid-cols-3" itemWidth="[&>*]:basis-[86%] sm:[&>*]:basis-[60%] md:[&>*]:basis-[46%] lg:[&>*]:basis-auto" className="mt-14">
          {planes.map((plan) => (
            <article
              key={plan.nombre}
              className={`flex flex-col rounded-3xl p-8 md:p-9 ${
                plan.destacado
                  ? "bg-ink text-white ring-2 ring-brand"
                  : "border border-line bg-white text-ink"
              }`}
            >
              {plan.destacado ? (
                <p className="eyebrow text-brand-soft">Recomendado</p>
              ) : (
                <p className="eyebrow text-ink-3">Plan</p>
              )}

              <h3
                className={`display mt-3 text-3xl ${
                  plan.destacado ? "text-white" : "text-ink"
                }`}
              >
                {plan.nombre}
              </h3>

              <p
                className={`display mt-5 text-5xl ${
                  plan.destacado ? "text-brand-soft" : "text-brand-deep"
                }`}
              >
                ${plan.precio}
              </p>

              <p
                className={`mt-4 text-sm ${
                  plan.destacado ? "text-white/75" : "text-ink-3"
                }`}
              >
                {plan.texto}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${
                        plan.destacado ? "text-brand-soft" : "text-brand-deep"
                      }`}
                    />
                    <span className={plan.destacado ? "text-white" : "text-ink"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.aviso ? (
                <div className="mt-6 rounded-xl bg-white/10 p-4">
                  <p className="eyebrow text-brand-soft">Exclusividad sectorial</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/75">
                    {plan.aviso}
                  </p>
                </div>
              ) : null}

              <div className="mt-auto pt-8">
                <a
                  href={waLink(
                    `¡Hola Mariangi! Me interesa el ${plan.nombre} ($${plan.precio}). ¿Me cuentas más?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                    plan.destacado
                      ? "bg-brand-deep text-white hover:bg-ink-2"
                      : "bg-ink text-white hover:bg-brand-deep"
                  }`}
                >
                  Cotizar este plan
                  <ArrowIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </article>
          ))}
        </Scroller>
      </Section>

      {/* Servicios sueltos */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Sin plan</Eyebrow>
          <SectionTitle>¿Necesitas algo puntual?</SectionTitle>
          <Lead>Estos servicios se cotizan por separado.</Lead>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviciosPublicidad.map((s) => (
            <li key={s.titulo}>
              <a
                href={waLink(s.mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-line bg-white p-7 transition-colors duration-200 hover:border-brand hover:bg-brand-tint"
              >
                <h3 className="display text-2xl text-ink">{s.titulo}</h3>
                <p className="mt-3 text-sm text-ink-3">{s.texto}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-deep">
                  Cotizar
                  <ArrowIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Resultados: reels, testimonio y sectores (antes en /trabajos) */}
      <Section id="resultados" tone="tint" className="scroll-mt-16">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Resultados</Eyebrow>
          <SectionTitle>Campañas que conectan</SectionTitle>
          <Lead>
            Algunos de mis reels más destacados. Cada tarjeta abre el post
            original en Instagram.
          </Lead>
        </div>

        <Scroller as="ul" label="Reels destacados" cols="md:grid-cols-3 xl:grid-cols-5" itemWidth="[&>*]:basis-[68%] sm:[&>*]:basis-[40%] md:[&>*]:basis-auto" className="mt-12">
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
                  {reel.nota ? (
                    <p className="text-sm font-semibold text-ink">{reel.nota}</p>
                  ) : (
                    <p className="text-sm text-ink-3">Campaña de marca</p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
                    <PlayIcon className="h-[18px] w-[18px]" />
                    Ver reel
                  </span>
                </div>
              </a>
            </li>
          ))}
        </Scroller>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <figure className="rounded-3xl bg-ink p-8 text-white md:p-10">
            <blockquote
              className="text-2xl leading-snug md:text-3xl"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              «{testimonio.texto}»
            </blockquote>
            <figcaption className="mt-6 text-sm text-white/75">
              <span className="font-semibold text-brand-soft">
                {testimonio.autor}
              </span>
              {" · "}
              {testimonio.cargo}
            </figcaption>
          </figure>

          <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
            <h3 className="eyebrow text-ink-3">Sectores en los que he trabajado</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {imagenDeMarca.sectores.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-deep"
                >
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              Ver más en {site.instagramHandle}
            </a>
          </div>
        </div>
      </Section>

      <Marquee />

      <section className="bg-white">
        <p className="mx-auto max-w-7xl px-5 py-10 text-center text-ink-3 md:px-10 md:text-left">
          ¿Buscas capacitación en oratoria en vez de publicidad?{" "}
          <Link
            href="/capacitaciones"
            className="cursor-pointer font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            Mira las capacitaciones
          </Link>
          .
        </p>
      </section>

      <CtaBanner
        titulo="Trabajemos juntos en tu próxima campaña"
        texto="Cuéntame de tu marca y te propongo el plan que mejor le calza."
        mensaje="¡Hola Mariangi! Quiero cotizar una campaña de publicidad para mi marca."
        cta="Cotizar mi campaña"
      />
    </>
  );
}
