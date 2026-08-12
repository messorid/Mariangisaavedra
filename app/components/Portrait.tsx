import Image from "next/image";
import Monogram from "./Monogram";

/**
 * Retrato de marca. Mientras no lleguen las fotos definitivas renderiza un
 * bloque malva con el monograma, para que el layout se vea terminado y las
 * dimensiones no cambien al sustituirlo.
 *
 * Cuando llegue la foto: <Portrait src="/images/hero.png" alt="..." priority />
 */
export default function Portrait({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  label,
}: {
  src?: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  label?: string;
}) {
  if (src && alt) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label ?? "Espacio reservado para fotografía"}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-tint via-brand-soft/35 to-brand/25 ${className}`}
    >
      <Monogram className="h-1/2 w-auto text-brand/25" strokeWidth={12} />
      {label ? (
        <span className="eyebrow absolute bottom-5 left-0 right-0 text-center text-ink-3/60">
          {label}
        </span>
      ) : null}
    </div>
  );
}
