import Reveal from "./Reveal";
import Portrait from "./Portrait";
import { pillars } from "@/app/lib/content";

export default function About() {
  return (
    <section id="sobre" className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-14">
        {/* Retrato */}
        <Reveal className="md:col-span-5">
          <div className="relative">
            <Portrait
              src="/images/mariangi12.png"
              alt="Mariangi Saavedra como presentadora de eventos"
              caption="En escena"
              tone="wine"
              objectPosition="22% 25%"
              className="aspect-[4/5] w-full rounded-[2rem] shadow-xl shadow-espresso/10"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-2xl border border-line bg-cream px-4 py-2 text-sm md:block">
              <span className="font-display italic">desde Venezuela</span>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="md:col-span-7 md:pl-4">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-clay">
              Sobre mí
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
              La voz no se hereda,
              <br />
              <span className="italic text-clay">se entrena.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-espresso/75">
              Como voz de marca y formadora en oratoria, acompaño a personas y
              empresas a encontrar su forma más honesta de comunicar. Creo en
              una comunicación que nace de la confianza: cuando sabes quién eres
              y cómo decirlo, todo lo demás conecta.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="h-full bg-ivory p-6">
                  <span className="font-display text-3xl text-clay">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/65">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
