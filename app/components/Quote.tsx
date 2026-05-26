import Reveal from "./Reveal";
import SoundWave from "./SoundWave";

export default function Quote() {
  return (
    <section className="px-5 py-16 md:px-10 md:py-24">
      <Reveal className="mx-auto max-w-4xl text-center">
        <SoundWave className="mx-auto h-6 w-28 text-clay" />
        <blockquote className="font-display mt-8 text-balance text-3xl leading-tight tracking-tight sm:text-4xl md:text-6xl">
          Tu voz no solo dice palabras:
          <span className="italic text-clay"> construye tu marca</span> y abre
          puertas.
        </blockquote>
        <p className="mt-8 text-[0.7rem] uppercase tracking-[0.28em] text-mocha">
          — Mariangi Saavedra
        </p>
      </Reveal>
    </section>
  );
}
