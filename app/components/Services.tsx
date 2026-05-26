import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";
import { services, waLink } from "@/app/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-clay">
                Servicios
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
                Más allá del aula
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-espresso/70">
              Trabajo con marcas, instituciones y personas que quieren que su
              mensaje suene tan bien como lo que tienen para decir.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-ivory p-7 transition-all hover:-translate-y-1 hover:border-clay/50 hover:shadow-xl hover:shadow-espresso/5">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <span className="font-display text-sm text-clay/60">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-3 max-w-sm leading-relaxed text-espresso/65">
                    {s.text}
                  </p>
                </div>
                <a
                  href={waLink(
                    `Hola Mariangi, me interesa tu servicio de ${s.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-clay transition-colors hover:text-wine"
                >
                  Conversemos
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
