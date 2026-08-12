"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Carrusel en móvil, grilla en escritorio.
 *
 * En pantallas pequeñas los hijos se convierten en tarjetas de ancho fijo con
 * scroll horizontal y snap; a partir de `md` vuelve a ser una grilla normal.
 * El scroll ocurre dentro del contenedor: la página nunca scrollea en
 * horizontal. El margen negativo hace que las tarjetas sangren hasta el borde
 * de la pantalla, como un carrusel nativo.
 *
 * Debajo se muestran puntos de posición y la pista "Desliza", pero solo cuando
 * el contenido realmente desborda. Si todo cabe, no se muestra nada.
 *
 * IMPORTANTE: todas las clases deben ser literales. Tailwind analiza el código
 * fuente en busca de nombres de clase completos; una clase construida en
 * tiempo de ejecución no genera CSS. Si pasas `itemWidth` o `cols`, escríbelos
 * literales en el archivo que llama.
 */
export default function Scroller({
  children,
  cols = "md:grid-cols-2 lg:grid-cols-3",
  itemWidth = "[&>*]:basis-[80%] sm:[&>*]:basis-[46%] md:[&>*]:basis-auto",
  label,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  cols?: string;
  /**
   * Clases literales `[&>*]:basis-…` para el ancho de tarjeta en móvil.
   * Tiene que ser `basis` (o `w`), NO `min-w`: un ítem flex con `min-width` y
   * `shrink-0` se dimensiona a `max-content`, así que el texto no envuelve y la
   * tarjeta se desborda de la pantalla. Con `basis` el ancho queda fijo y el
   * contenido envuelve dentro.
   */
  itemWidth?: string;
  label: string;
  className?: string;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [desborda, setDesborda] = useState(false);
  const [activo, setActivo] = useState(0);

  const total = Children.count(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // El ResizeObserver dispara al observar, así que también sirve de medición
    // inicial. El setState ocurre en su callback, no en el cuerpo del efecto.
    const ro = new ResizeObserver(() => {
      setDesborda(el.scrollWidth > el.clientWidth + 4);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const alScrollear = () => {
    const el = ref.current;
    if (!el || total === 0) return;
    const paso = el.scrollWidth / total;
    setActivo(Math.min(total - 1, Math.max(0, Math.round(el.scrollLeft / paso))));
  };

  const irA = (i: number) => {
    const el = ref.current;
    if (!el || total === 0) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: i * (el.scrollWidth / total),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className={className}>
      <Tag
        // Callback ref: sirve para cualquiera de las etiquetas admitidas.
        ref={(node: HTMLElement | null) => {
          ref.current = node;
        }}
        onScroll={alScrollear}
        // tabIndex hace la zona alcanzable por teclado: sin esto, quien navega
        // con Tab no puede desplazar el carrusel. No se sobrescribe el rol para
        // no perder la semántica de lista cuando `as` es ul/ol/dl.
        tabIndex={0}
        aria-label={label}
        // `[&>*]:min-w-0` es obligatorio: en flex evita el ancho mínimo
        // automático que impide envolver el texto, y en grid evita que una
        // tarjeta con contenido largo reviente la columna.
        className={`no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&>*]:min-w-0 [&>*]:shrink-0 [&>*]:grow-0 [&>*]:snap-start ${itemWidth} ${cols}`}
      >
        {children}
      </Tag>

      {desborda ? (
        <div className="mt-2 flex items-center justify-between gap-4 md:hidden">
          <ul className="flex items-center">
            {Array.from({ length: total }, (_, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => irA(i)}
                  aria-label={`Ir al elemento ${i + 1} de ${total}`}
                  aria-current={i === activo ? "true" : undefined}
                  className="flex h-10 w-6 cursor-pointer items-center justify-center"
                >
                  <span
                    // El punto activo se distingue por color Y por ancho: el
                    // color nunca es el único indicador de estado.
                    className={`block h-2 rounded-full transition-all duration-200 ${
                      i === activo ? "w-6 bg-brand-deep" : "w-2 bg-brand/45"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <p
            aria-hidden="true"
            className="eyebrow flex items-center gap-1.5 text-ink-3"
          >
            Desliza
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </p>
        </div>
      ) : null}
    </div>
  );
}
