import type { SVGProps } from "react";

/**
 * Monograma "M" caligráfico — la firma visual de la marca.
 * Aparece en 5 de las 7 páginas del media kit como marca de agua gigante.
 * Decorativo: siempre aria-hidden.
 */
export default function Monogram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 260"
      fill="none"
      stroke="currentColor"
      strokeWidth={16}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Trazo largo de entrada, con el descendente característico */}
      <path d="M46 252C46 150 44 66 62 34c10-18 26-14 30 8 5 26 6 62 6 100" />
      {/* Primer arco */}
      <path d="M98 142c0-52 6-92 26-104 16-10 28 2 30 30 3 30 2 56 2 74" />
      {/* Segundo arco con salida ascendente */}
      <path d="M156 142c0-46 8-80 26-88 18-8 28 10 28 44" />
    </svg>
  );
}

/**
 * Marca de agua posicionada. Se coloca dentro de un contenedor `relative`.
 */
export function MonogramWatermark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Monogram
      className={`pointer-events-none absolute select-none text-brand/[0.07] ${className}`}
    />
  );
}
