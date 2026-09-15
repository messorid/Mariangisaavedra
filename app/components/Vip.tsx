import Monogram from "./Monogram";
import Portrait from "./Portrait";
import Scroller from "./Scroller";
import { ArrowIcon, CheckIcon } from "./Icons";
import { fotos, vip, waLink } from "@/app/lib/content";

/**
 * Sección destacada del producto insignia: Oratoria Personalizada VIP.
 * Va en tono oscuro y ancho completo para que corte visualmente con el resto
 * de /formacion y se lea como la oferta principal, no como una más.
 */
export default function Vip() {
  const mensaje =
    "¡Hola Mariangi! Me interesa la Oratoria Personalizada VIP. ¿Agendamos la reunión exploratoria?";

  return (
    <section id="vip" className="relative overflow-hidden bg-ink text-white">
      <Monogram
        className="pointer-events-none absolute -right-20 -top-16 h-[520px] w-auto text-white/[0.05]"
        strokeWidth={14}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        {/* Presentación */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Portrait
            src={fotos.corporativo.src}
            alt={fotos.corporativo.alt}
            className="order-2 aspect-[3/4] w-full rounded-3xl lg:order-1"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="eyebrow inline-block rounded-full border border-brand-soft/50 px-4 py-2 text-brand-soft">
              {vip.eyebrow}
            </p>

            <h2 className="display mt-6 text-[clamp(2.5rem,7vw,4.5rem)]">
              {vip.titulo}
              <br />
              <span className="text-brand-soft">{vip.destacado}</span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-[50ch] text-xl leading-snug text-white lg:mx-0"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {vip.lead}
            </p>

            <p className="mx-auto mt-5 max-w-[60ch] text-white/75 lg:mx-0">
              {vip.texto}
            </p>

            <a
              href={waLink(mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-9 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-soft hover:text-ink lg:mx-0"
            >
              Agendar reunión exploratoria
              <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* Niveles */}
        <div className="mt-20 text-center md:text-left">
          <p className="eyebrow text-brand-soft">Tres niveles</p>
          <h3 className="display mt-3 text-3xl md:text-4xl">
            Empieza donde estés
          </h3>
        </div>

        <Scroller
          as="ol"
          label="Niveles de la Oratoria Personalizada VIP"
          cols="md:grid-cols-3"
          itemWidth="[&>*]:basis-[86%] sm:[&>*]:basis-[60%] md:[&>*]:basis-auto"
          className="mt-10"
        >
          {vip.niveles.map((nivel) => (
            <li
              key={nivel.n}
              className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <p className="eyebrow text-brand-soft">{nivel.n}</p>
              <h4 className="display mt-3 text-3xl text-white">
                {nivel.nombre}
              </h4>
              <p className="mt-3 text-sm text-white/70">{nivel.para}</p>

              <ul className="mt-7 space-y-2.5">
                {nivel.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-soft" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto border-t border-white/10 pt-6 text-sm text-white">
                <span className="eyebrow block text-brand-soft">Resultado</span>
                <span className="mt-2 block">{nivel.resultado}</span>
              </p>
            </li>
          ))}
        </Scroller>

        {/* Proceso de 3 pasos */}
        <div className="mt-20 text-center md:text-left">
          <p className="eyebrow text-brand-soft">Cómo empezamos</p>
          <h3 className="display mt-3 text-3xl md:text-4xl">
            Tres pasos antes de la propuesta
          </h3>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {vip.proceso.map((paso) => (
            <li
              key={paso.n}
              className="relative rounded-2xl border border-white/15 p-7 text-center md:text-left"
            >
              <span
                aria-hidden="true"
                className="display text-4xl text-brand-soft/60"
              >
                {paso.n}
              </span>
              <h4 className="display mt-4 text-xl text-white">{paso.titulo}</h4>
              <p className="mt-3 text-sm text-white/70">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
