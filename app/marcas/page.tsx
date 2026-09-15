import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section, { Eyebrow, Lead, SectionTitle } from "../components/Section";
import Marquee from "../components/Marquee";
import CtaBanner from "../components/CtaBanner";
import Scroller from "../components/Scroller";
import Portrait from "../components/Portrait";
import { ArrowIcon, CheckIcon, PlayIcon } from "../components/Icons";
import {
  fotos,
  otrosServicios,
  planes,
  reels,
  serviciosSueltos,
  testimonio,
  valorParaMarca,
  waLink,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Voz e imagen para tu marca",
  description:
    "Campañas, reels, locución comercial y host de eventos. Planes desde $300. Métricas reales de comunidad y exclusividad sectorial en el plan Embajadora PRO.",
  alternates: { canonical: "/marcas" },
};

export default function MarcasPage() {
  return (
    <>
      <PageHero
        eyebrow="Para empresas y marcas"
        titulo="Me especializo en ser la voz y la imagen"
        destacado="que tu marca necesita"
        texto="Como Voz e Imagen de Marcas me convierto en el rostro y el sonido que transmite confianza, profesionalismo y cercanía a tu público objetivo."
        foto={fotos.gala}
        acciones={
          <>
            <a
              href="#planes"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Ver planes
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
          </>
        }
      />

      {/* Valor para la marca */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>{valorParaMarca.eyebrow}</Eyebrow>
          <SectionTitle>{valorParaMarca.titulo}</SectionTitle>
          <Lead>{valorParaMarca.intro}</Lead>
        </div>

        <Scroller label="Mi valor para tu marca" cols="md:grid-cols-3" className="mt-14">
          {valorParaMarca.pilares.map((p, i) => (
            <article
              key={p.titulo}
              className="rounded-2xl border border-line bg-white p-8"
            >
              <span aria-hidden="true" className="display text-4xl text-brand/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-5 text-2xl text-ink">{p.titulo}</h3>
              <p className="mt-3 text-ink-3">{p.texto}</p>
            </article>
          ))}
        </Scroller>
      </Section>


      {/* Reels */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>No es solo la campaña</Eyebrow>
          <SectionTitle>Es la conexión con el cliente</SectionTitle>
          <Lead>
            Algunos de mis reels más destacados. Cada tarjeta abre el post
            original en Instagram.
          </Lead>
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
                  {reel.nota ? (
                    <p className="text-sm font-semibold text-ink">
                      {reel.nota}
                    </p>
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
      </Section>

      {/* Testimonio */}
      <Section tone="ink">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote
            className="text-2xl leading-snug md:text-4xl"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            «{testimonio.texto}»
          </blockquote>
          <figcaption className="mt-7 text-sm text-white/70">
            <span className="font-semibold text-brand-soft">
              {testimonio.autor}
            </span>
            {" · "}
            {testimonio.cargo}
          </figcaption>
        </figure>
      </Section>

      {/* Planes */}
      <Section id="planes" tone="tint">
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Trabajemos juntos</Eyebrow>
          <SectionTitle>En tu próxima campaña</SectionTitle>
          <Lead>
            Tres formas de trabajar según el alcance que necesites. Todos los
            montos están en dólares.
          </Lead>
        </div>

        <Scroller label="Planes de imagen de marca" cols="lg:grid-cols-3" itemWidth="[&>*]:basis-[86%] sm:[&>*]:basis-[60%] md:[&>*]:basis-[46%] lg:[&>*]:basis-auto" className="mt-14">
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

              <ul className="mt-7 space-y-2.5">
                {plan.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${
                        plan.destacado ? "text-brand-soft" : "text-brand-deep"
                      }`}
                    />
                    <span
                      className={plan.destacado ? "text-white/85" : "text-ink-3"}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-6 text-sm ${
                  plan.destacado ? "text-white/70" : "text-ink-3"
                }`}
              >
                {plan.texto}
              </p>

              {plan.aviso ? (
                <div className="mt-6 rounded-xl bg-white/10 p-4">
                  <p className="eyebrow text-brand-soft">Importante</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    {plan.aviso}
                  </p>
                </div>
              ) : null}

              <a
                href={waLink(
                  `¡Hola Mariangi! Me interesa el ${plan.nombre} ($${plan.precio}). ¿Me cuentas más?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  plan.destacado
                    ? "bg-brand-deep text-white hover:bg-ink-2"
                    : "bg-ink text-white hover:bg-brand-deep"
                }`}
              >
                Cotizar este plan
                <ArrowIcon className="h-[18px] w-[18px]" />
              </a>
            </article>
          ))}
        </Scroller>

        <div className="mt-10 rounded-2xl border border-line bg-white p-7">
          <p className="eyebrow text-ink-3">{serviciosSueltos.titulo}</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {serviciosSueltos.items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Otros servicios */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Otros servicios</Eyebrow>
          <SectionTitle>En los que puedo beneficiar tu marca</SectionTitle>
        </div>

        <Scroller label="Otros servicios" cols="md:grid-cols-3" className="mt-14">
          {otrosServicios.map((s) => (
            <article
              key={s.titulo}
              className="overflow-hidden rounded-2xl border border-line bg-white"
            >
              <Portrait
                className="aspect-[4/3] w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
                label={s.titulo}
              />
              <div className="p-7">
                <h3 className="display text-2xl text-ink">{s.titulo}</h3>
                <p className="mt-3 text-ink-3">{s.texto}</p>
              </div>
            </article>
          ))}
        </Scroller>

        <p className="mt-10 text-center text-ink-3 md:text-left">
          ¿Buscas formación para tu equipo en vez de una campaña?{" "}
          <Link
            href="/formacion"
            className="cursor-pointer font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            Mira los programas de oratoria
          </Link>
          .
        </p>
      </Section>

      <Marquee />

      <CtaBanner
        titulo="Trabajemos juntos en tu próxima campaña"
        texto="Cuéntame de tu marca y te propongo el plan que mejor le calza."
        mensaje="¡Hola Mariangi! Quiero cotizar una campaña de imagen de marca."
        cta="Cotizar mi campaña"
      />
    </>
  );
}
