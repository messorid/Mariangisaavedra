import { credenciales, manifiesto } from "@/app/lib/content";
import Monogram from "./Monogram";
import Portrait from "./Portrait";
import Section, { Eyebrow } from "./Section";

export default function Manifiesto() {
  return (
    <Section>
      <Monogram
        className="pointer-events-none absolute -right-20 top-10 h-[500px] w-auto text-brand/[0.05]"
        strokeWidth={14}
      />

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="relative">
          <Portrait
            className="aspect-[3/4] w-full rounded-3xl lg:sticky lg:top-28"
            sizes="(max-width: 1024px) 100vw, 40vw"
            label="Retrato editorial"
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

          <div className="mt-8 space-y-5 text-ink-3">
            {manifiesto.parrafos.map((p) => (
              <p key={p.slice(0, 40)} className="mx-auto max-w-[65ch] lg:mx-0">
                {p}
              </p>
            ))}
          </div>

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
