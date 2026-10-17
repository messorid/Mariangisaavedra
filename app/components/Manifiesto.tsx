import Link from "next/link";
import { credenciales, fotos, manifiesto } from "@/app/lib/content";
import { ArrowIcon } from "./Icons";
import Monogram from "./Monogram";
import Portrait from "./Portrait";
import Section, { Eyebrow } from "./Section";

export default function Manifiesto() {
  return (
    <Section>
      <Monogram
        className="pointer-events-none absolute -right-20 top-10 h-[500px] w-auto text-brand/[0.05]"
      />

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="relative">
          <Portrait
            src={fotos.gala.src}
            alt={fotos.gala.alt}
            className="aspect-[3/4] w-full rounded-3xl lg:sticky lg:top-28"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        <div className="text-center lg:text-left">
          <Eyebrow>{manifiesto.eyebrow}</Eyebrow>

          <blockquote
            className="mt-6 text-2xl leading-snug text-ink md:text-3xl"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {manifiesto.destacado}
          </blockquote>

          <p className="mx-auto mt-8 max-w-[65ch] text-ink-3 lg:mx-0">
            {manifiesto.texto}
          </p>

          <Link
            href="/sobre-mi"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-brand-deep underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            Conoce mi trayectoria
            <ArrowIcon className="h-[18px] w-[18px]" />
          </Link>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:grid-cols-4">
            {credenciales.map((c) => (
              <div key={c.label}>
                <dt className="display text-4xl text-brand-deep md:text-5xl">
                  {c.prefijo}
                  {c.valor}
                  {c.sufijo}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-ink-3">
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
