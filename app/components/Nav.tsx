"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, waLink } from "@/app/lib/content";
import Monogram from "./Monogram";
import { WhatsAppIcon } from "./Icons";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`cursor-pointer transition-colors duration-200 ${
                    active
                      ? "text-brand-deep"
                      : "text-ink-3 hover:text-brand-deep"
                  }`}
                >
                  {item.label}
                </Link>
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
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6 pt-1">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="display block cursor-pointer rounded-xl px-3 py-3 text-2xl text-ink transition-colors duration-200 hover:bg-brand-tint"
              >
                {item.label}
              </Link>
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
