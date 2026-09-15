import type { ReactNode } from "react";
import HeroPhoto from "./HeroPhoto";
import Monogram from "./Monogram";

/**
 * Cabecera estándar de las páginas internas: la fotografía ocupa todo el
 * héroe como fondo a sangre y el texto va encima.
 *
 * El comportamiento de la fotografía vive en `HeroPhoto`. El texto se apoya
 * siempre sobre `--ink` opaco, nunca sobre la foto: ver ahí el porqué.
 */
export default function PageHero({
  eyebrow,
  titulo,
  destacado,
  texto,
  acciones,
  foto,
}: {
  eyebrow: string;
  titulo: string;
  destacado?: string;
  texto: string;
  acciones?: ReactNode;
  /** El recorte (`pos`) viaja con la foto desde `fotos` en content.ts. */
  foto?: { src: string; alt: string; pos?: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-[4.5rem] text-white md:pt-0">
      {foto ? (
        <HeroPhoto foto={foto} />
      ) : (
        <Monogram
          className="pointer-events-none absolute -left-16 top-0 -z-10 h-[480px] w-auto text-white/[0.06]"
          strokeWidth={14}
        />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pb-16 pt-12 md:min-h-[38rem] md:px-10 md:pb-24 md:pt-36">
        <div className="max-w-xl text-center md:max-w-[26rem] md:text-left lg:max-w-[34rem]">
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

          <p className="mx-auto mt-6 max-w-[60ch] text-white/90 md:mx-0">
            {texto}
          </p>

          {acciones ? (
            <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
              {acciones}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
