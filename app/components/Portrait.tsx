import Image from "next/image";

type PortraitProps = {
  /** Ruta de la foto real, p.ej. "/images/mariangi-hero.jpg". Si falta, se
   *  muestra un placeholder editorial elegante. */
  src?: string;
  alt: string;
  className?: string;
  caption?: string;
  tone?: "clay" | "wine" | "sand";
  priority?: boolean;
  sizes?: string;
  /** Encuadre del recorte object-cover, p.ej. "50% 20%" o "left". */
  objectPosition?: string;
};

const tones: Record<NonNullable<PortraitProps["tone"]>, string> = {
  clay: "from-clay-soft via-clay to-wine",
  wine: "from-clay via-wine to-espresso",
  sand: "from-sand via-clay-soft to-clay",
};

/** Retrato con imagen real o placeholder de marca cuando aún no hay foto. */
export default function Portrait({
  src,
  alt,
  className = "",
  caption = "Fotografía",
  tone = "clay",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 45vw",
  objectPosition = "center",
}: PortraitProps) {
  return (
    <div className={`relative overflow-hidden grain ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={`absolute inset-0 bg-gradient-to-br ${tones[tone]}`}
        >
          {/* Brillo de foco suave */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_30%_15%,rgba(251,248,242,0.45),transparent_55%)]" />

          {/* Monograma */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display italic text-ivory/85 text-[28vw] leading-none md:text-[12rem] select-none">
              MS
            </span>
          </div>

          {/* Marco fino */}
          <div className="absolute inset-4 border border-ivory/25 md:inset-6" />

          {/* Pie de foto */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.28em] text-ivory/80">
            <span>{caption}</span>
            <span>Demo</span>
          </div>
        </div>
      )}
    </div>
  );
}
