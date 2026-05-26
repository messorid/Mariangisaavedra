"use client";

import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/app/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-cream/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="font-display text-lg tracking-tight md:text-xl"
        >
          Mariangi <span className="italic text-clay">Saavedra</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-espresso/70 transition-colors hover:text-clay"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink(
            "Hola Mariangi, quiero información sobre tus cursos de oratoria."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-espresso px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-clay md:inline-block"
        >
          Reservar
        </a>

        {/* Botón móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-espresso transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-espresso transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-espresso transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl text-espresso/90 transition-colors hover:bg-sand"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={waLink(
                "Hola Mariangi, quiero información sobre tus cursos de oratoria."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-espresso px-5 py-3 text-center text-sm text-ivory"
            >
              Reservar cupo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
