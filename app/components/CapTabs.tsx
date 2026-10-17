import Link from "next/link";
import { ramasCapacitacion, type RamaCapacitacion } from "@/app/lib/content";

/**
 * Pestañas bajo la cabecera de cada subpágina de Capacitaciones. Dejan claro
 * que son tres opciones separadas y permiten cambiar de una a otra sin volver
 * a la página general. En móvil se desplazan en horizontal si no caben.
 */
export default function CapTabs({
  actual,
}: {
  actual: RamaCapacitacion["slug"];
}) {
  return (
    <nav
      aria-label="Tipos de capacitación"
      // Se queda pegada justo debajo de la barra fija (más alta en móvil
      // por el botón de menú de 44px).
      className="sticky top-[4.75rem] z-20 border-b lg:top-[4.5rem] border-line bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 md:px-10">
        <Link
          href="/capacitaciones"
          className="eyebrow hidden shrink-0 cursor-pointer text-ink-3 transition-colors duration-200 hover:text-brand-deep md:block"
        >
          Capacitaciones
        </Link>

        <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-3 md:mx-0 md:px-0">
          {ramasCapacitacion.map((r) => {
            const activa = r.slug === actual;
            return (
              <li key={r.slug} className="shrink-0">
                <Link
                  href={r.href}
                  aria-current={activa ? "page" : undefined}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                    activa
                      ? "bg-ink text-white"
                      : "border border-line text-ink-3 hover:border-brand hover:text-brand-deep"
                  }`}
                >
                  {r.nombre}
                  {r.destacada ? (
                    <span
                      className={`eyebrow rounded-full px-2 py-0.5 text-[0.625rem] ${
                        activa ? "bg-brand-soft text-ink" : "bg-brand-tint text-brand-deep"
                      }`}
                    >
                      VIP
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
