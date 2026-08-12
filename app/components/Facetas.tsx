import Link from "next/link";
import { facetas } from "@/app/lib/content";
import { ArrowIcon, CheckIcon } from "./Icons";
import Section, { Eyebrow, Lead, SectionTitle } from "./Section";
import Scroller from "./Scroller";

/**
 * Bifurcación de las dos facetas profesionales. Es el corazón del sitio:
 * cada visitante llega buscando una de las dos y aquí elige la suya.
 */
export default function Facetas() {
  return (
    <Section tone="tint">
      <div className="max-w-3xl text-center md:text-left">
        <Eyebrow>Dos formas de trabajar juntos</Eyebrow>
        <SectionTitle>¿Qué necesitas hoy?</SectionTitle>
        <Lead>
          Mi trabajo se divide en dos frentes. Elige el que te corresponde y
          verás la oferta completa, con detalle y sin rodeos.
        </Lead>
      </div>

      <Scroller label="Las dos facetas profesionales" cols="lg:grid-cols-2" itemWidth="[&>*]:basis-[86%] sm:[&>*]:basis-[60%] lg:[&>*]:basis-auto" className="mt-14">
        {facetas.map((f) => (
          <Link
            key={f.slug}
            href={f.href}
            className="group flex cursor-pointer flex-col rounded-3xl border border-line bg-white p-8 transition-colors duration-200 hover:border-brand md:p-10"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span
                aria-hidden="true"
                className="display text-5xl text-brand/40 transition-colors duration-200 group-hover:text-brand/70"
              >
                {f.numero}
              </span>
              <span className="eyebrow text-ink-3">{f.kicker}</span>
            </div>

            <h3 className="display mt-6 text-3xl text-ink md:text-4xl">
              {f.titulo}
            </h3>
            <p className="mt-2 font-semibold text-brand-deep">{f.subtitulo}</p>
            <p className="mt-4 text-ink-3">{f.texto}</p>

            <ul className="mt-7 space-y-2.5">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-deep" />
                  <span className="text-ink-3">{b}</span>
                </li>
              ))}
            </ul>

            <span className="mt-9 inline-flex items-center gap-2 self-start rounded-full bg-brand-deep px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-ink-2">
              {f.cta}
              <ArrowIcon className="h-[18px] w-[18px]" />
            </span>
          </Link>
        ))}
      </Scroller>
    </Section>
  );
}
