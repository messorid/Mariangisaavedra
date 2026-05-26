import Reveal from "./Reveal";
import SoundWave from "./SoundWave";
import { ArrowIcon, WhatsAppIcon, iconMap } from "./Icons";
import { course, waLink } from "@/app/lib/content";

export default function Course() {
  return (
    <section id="curso" className="px-5 py-6 md:px-10">
      <Reveal>
        <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-espresso px-6 py-14 text-ivory md:rounded-[2.5rem] md:px-14 md:py-20">
          {/* Resplandor de acento */}
          <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-clay/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-wine/40 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-12 md:gap-10">
            {/* Columna texto */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-clay-soft">
                <SoundWave className="h-3.5 w-12 text-clay-soft" />
                {course.eyebrow}
              </div>

              <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-[3.4rem]">
                {course.title}
              </h2>

              <p className="font-display mt-5 text-xl italic text-clay-soft md:text-2xl">
                {course.lead}
              </p>

              <p className="mt-6 max-w-lg text-pretty leading-relaxed text-ivory/75">
                {course.intro}
              </p>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-ivory/75">
                👦👧 {course.audience}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waLink(
                    "¡Hola Mariangi! Quiero reservar un cupo para el plan vacacional de Oratoria para Niños y Adolescentes (30 y 31 de julio)."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-4 text-sm font-medium text-ivory transition-colors hover:bg-clay-soft"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Reservar cupo
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-sm text-ivory/55">
                  Cupos limitados · grupos reducidos
                </span>
              </div>
            </div>

            {/* Columna detalles */}
            <div className="md:col-span-5">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/10 sm:grid-cols-2 md:grid-cols-1">
                {course.details.map((d, i) => {
                  const Icon = iconMap[d.icon as keyof typeof iconMap];
                  return (
                    <Reveal key={d.label} delay={i * 0.08}>
                      <div className="flex h-full items-start gap-4 bg-espresso/60 p-5">
                        <span className="mt-0.5 text-clay-soft">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ivory/50">
                            {d.label}
                          </p>
                          <p className="mt-1 font-display text-lg leading-snug">
                            {d.value}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
