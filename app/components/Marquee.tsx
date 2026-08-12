import { marcas } from "@/app/lib/content";

/**
 * Cinta de marcas en scroll continuo.
 * Los logos reales aún no están disponibles, así que se muestran los nombres
 * en tipografía de marca. Al recibir los SVG, sustituir el <li> por el logo.
 */
export default function Marquee() {
  // Duplicamos la lista: la animación recorre -50% y el bucle queda continuo.
  const items = [...marcas, ...marcas];

  return (
    <div className="border-y border-line bg-white py-7">
      <p className="eyebrow mb-6 px-5 text-center text-ink-3 md:px-10">
        Marcas con las que he creado campañas exitosas
      </p>
      <div className="mask-fade-x overflow-hidden">
        <ul
          className="flex w-max animate-marquee items-center gap-12"
          aria-label="Marcas con las que ha trabajado Mariangi Saavedra"
        >
          {items.map((marca, i) => (
            <li
              key={`${marca}-${i}`}
              aria-hidden={i >= marcas.length}
              className="display shrink-0 text-lg whitespace-nowrap text-ink-3/70 md:text-xl"
            >
              {marca}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
