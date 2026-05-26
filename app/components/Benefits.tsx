import Reveal from "./Reveal";
import { benefits } from "@/app/lib/content";

export default function Benefits() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-clay">
              ¿Qué aprenderá?
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
              Habilidades que se quedan
              <span className="italic text-clay"> para siempre.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.n} delay={(i % 3) * 0.08}>
              <article className="group h-full bg-ivory p-7 transition-colors hover:bg-sand/60">
                <span className="font-display text-2xl text-clay/70">{b.n}</span>
                <h3 className="font-display mt-4 text-xl leading-snug">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/65">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
