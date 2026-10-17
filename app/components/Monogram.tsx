/**
 * Monograma "M" caligráfico — la firma visual de la marca.
 *
 * Es el icono oficial (public/images/marca/icono-m.webp, sacado del logo de
 * Mariangi) usado como MÁSCARA: la forma viene de la imagen y el color de
 * `currentColor`. Así cada sitio lo tiñe con una clase de texto
 * (`text-brand-deep`, `text-white/[0.06]`…) igual que si fuera un SVG.
 *
 * Se dimensiona por la altura (`h-8`, `h-[440px]`…): el ancho sale solo de
 * la proporción del icono. Decorativo: siempre aria-hidden.
 */
const mascara = "url(/images/marca/icono-m.webp) center / contain no-repeat";

export default function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block aspect-[800/604] bg-current ${className}`}
      style={{ WebkitMask: mascara, mask: mascara }}
    />
  );
}
