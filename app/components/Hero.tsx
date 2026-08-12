import { site, waLink } from "@/app/lib/content";
import Portrait from "./Portrait";
import Monogram from "./Monogram";
import { ArrowIcon } from "./Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-20">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:px-10 md:pb-20 md:pt-20">
        {/* Columna de texto */}
        <div className="relative z-10 order-2 text-center md:order-1 md:text-left">
          <p className="eyebrow text-brand-deep">Comunicadora · Venezuela</p>

          <h1 className="display mt-4 text-[clamp(2.75rem,9vw,5.5rem)] text-ink">
            Mariangi
            <br />
            <span className="text-brand-deep">Saavedra</span>
          </h1>

          <p
            className="mt-4 text-lg text-ink-3"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {site.tagline}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 md:justify-start">
            {site.roles.map((rol) => (
              <li
                key={rol}
                className="eyebrow rounded-full border border-line bg-white px-4 py-2 text-ink-3"
              >
                {rol}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/marcas"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              Para tu marca
              <ArrowIcon className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="/formacion"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors duration-200 hover:bg-brand-tint"
            >
              Oratoria y formación
              <ArrowIcon className="h-[18px] w-[18px]" />
            </Link>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block cursor-pointer text-sm text-ink-3 underline underline-offset-4 transition-colors duration-200 hover:text-brand-deep"
          >
            O escríbeme directo por WhatsApp
          </a>
        </div>

        {/* Retrato */}
        <div className="relative order-1 md:order-2">
          <Monogram
            className="pointer-events-none absolute -left-16 -top-10 z-0 h-[420px] w-auto text-brand/[0.08] md:-left-28 md:h-[540px]"
            strokeWidth={14}
          />
          <Portrait
            className="relative z-10 aspect-[4/5] w-full rounded-3xl"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
            label="Retrato principal"
          />
        </div>
      </div>
    </section>
  );
}
