import { marqueeWords } from "@/app/lib/content";

/** Cinta editorial infinita con las palabras clave de marca. */
export default function Marquee({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  // Duplicamos para un loop sin costuras (-50% de traslación).
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="mask-fade-x overflow-hidden py-5 select-none">
      <div
        className={`flex w-max items-center ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-3xl italic text-espresso/80 md:text-5xl">
              {word}
            </span>
            <span className="mx-6 text-clay md:mx-10" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
