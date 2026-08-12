import type { ReactNode } from "react";
import Monogram from "./Monogram";
import Portrait from "./Portrait";

/** Cabecera estándar de las páginas internas. */
export default function PageHero({
  eyebrow,
  titulo,
  destacado,
  texto,
  acciones,
  fotoLabel = "Fotografía",
}: {
  eyebrow: string;
  titulo: string;
  destacado?: string;
  texto: string;
  acciones?: ReactNode;
  fotoLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 text-white">
      <Monogram
        className="pointer-events-none absolute -left-16 top-0 h-[480px] w-auto text-white/[0.06]"
        strokeWidth={14}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_1fr] md:px-10 md:py-24">
        <div className="text-center md:text-left">
          <p className="eyebrow text-brand-soft">{eyebrow}</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,7vw,4.5rem)]">
            {titulo}
            {destacado ? (
              <>
                <br />
                <span className="text-brand-soft">{destacado}</span>
              </>
            ) : null}
          </h1>
          <p className="mx-auto mt-6 max-w-[60ch] text-white/75 md:mx-0">{texto}</p>
          {acciones ? (
            <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">{acciones}</div>
          ) : null}
        </div>

        <Portrait
          className="aspect-[4/5] w-full rounded-3xl md:aspect-[3/4]"
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
          label={fotoLabel}
        />
      </div>
    </section>
  );
}
