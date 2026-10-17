"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, waLink } from "@/app/lib/content";
import Monogram from "./Monogram";
import { ChevronDownIcon, WhatsAppIcon } from "./Icons";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /** Una rama queda activa también en sus subpáginas. */
  const enRama = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // El fondo va SIEMPRE puesto y OPACO. Antes la barra era transparente
    // arriba del todo, y como todas las páginas internas abren con un héroe
    // oscuro (`bg-ink`), el logo en tinta y el botón de menú quedaban
    // invisibles. Sobre el héroe claro de la home el fondo es del mismo color,
    // así que ahí no se nota el cambio.
    //
    // Opaco y no translúcido a propósito: con `bg-paper/90` sobre un héroe
    // oscuro la barra baja a #E4E4E4 y el malva del logo cae a 4,15:1, por
    // debajo de AA. Haría falta 95% para pasar, y a esa opacidad el efecto
    // esmerilado ya no se percibe. El borde sí aparece solo al desplazar.
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b bg-paper transition-colors duration-300 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-deep focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>

      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10"
      >
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2.5"
          aria-label="Mariangi Saavedra — Inicio"
        >
          <Monogram className="h-8 w-auto text-brand-deep" strokeWidth={18} />
          <span className="display text-base text-ink md:text-lg">
            Mariangi <span className="text-brand-deep">Saavedra</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {nav.map((item) => {
            const active = enRama(item.href);
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`inline-flex cursor-pointer items-center gap-1 py-2 transition-colors duration-200 ${
                    active
                      ? "text-brand-deep"
                      : "text-ink-3 hover:text-brand-deep"
                  }`}
                >
                  {item.label}
                  {item.sub ? (
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  ) : null}
                </Link>

                {/* Submenú: se abre al pasar el ratón o al llegar con Tab.
                    `invisible` lo saca también del orden de tabulación
                    mientras está cerrado. */}
                {item.sub ? (
                  <div className="invisible absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-80 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/10">
                      {item.sub.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            aria-current={pathname === s.href ? "page" : undefined}
                            className="block cursor-pointer rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-brand-tint"
                          >
                            <span className="block font-semibold text-ink">
                              {s.label}
                            </span>
                            <span className="mt-0.5 block text-xs font-normal text-ink-3">
                              {s.resumen}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2 lg:inline-flex"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          Escríbeme
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
        >
          <span className="space-y-[5px]">
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="menu-movil"
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[40rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6 pt-1">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`display block cursor-pointer rounded-xl px-3 py-3 text-2xl transition-colors duration-200 hover:bg-brand-tint ${
                  enRama(item.href) ? "text-brand-deep" : "text-ink"
                }`}
              >
                {item.label}
              </Link>

              {/* En móvil las subcategorías se ven siempre: no hay hover. */}
              {item.sub ? (
                <ul className="mb-2 ml-3 border-l-2 border-brand-tint pl-3">
                  {item.sub.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setOpen(false)}
                        aria-current={pathname === s.href ? "page" : undefined}
                        className={`block cursor-pointer rounded-xl px-3 py-2.5 text-base font-semibold transition-colors duration-200 hover:bg-brand-tint ${
                          pathname === s.href ? "text-brand-deep" : "text-ink-3"
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li className="mt-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-deep px-5 py-3.5 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Escríbeme por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
