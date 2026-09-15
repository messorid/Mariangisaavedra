import Link from "next/link";
import { fotos, site, waLink } from "@/app/lib/content";
import HeroPhoto from "./HeroPhoto";
import { ArrowIcon } from "./Icons";

/**
 * Héroe de la portada: fotografía a sangre y texto encima, igual que las
 * páginas internas. El velo y su cálculo de contraste están en `HeroPhoto`.
 *
 * Sobre foto todo el texto va en blanco salvo el apellido, que es display
 * grande y puede llevar el malva claro (umbral 3:1).
 */
export default function Hero() {
  return (
    // pt en móvil: deja pasar la barra fija antes de la foto.
    // En md la foto es un panel absoluto y el respiro lo pone el contenido.
    <section className="relative isolate overflow-hidden bg-ink pt-[4.5rem] text-white md:pt-0">
      <HeroPhoto foto={fotos.retrato} />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pb-20 pt-12 md:min-h-[42rem] md:px-10 md:pb-28 md:pt-36">
        <div className="max-w-xl text-center md:max-w-[26rem] md:text-left lg:max-w-[34rem]">
          <p className="eyebrow text-brand-soft">Comunicadora · Venezuela</p>

          <h1 className="display mt-4 text-[clamp(2.75rem,9vw,5.5rem)]">
            Mariangi
            <br />
            <span className="text-brand-soft">Saavedra</span>
          </h1>

          <p
            className="mt-4 text-lg text-white/90"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {site.tagline}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 md:justify-start">
            {site.roles.map((rol) => (
              <li
                key={rol}
                className="eyebrow rounded-full border border-white/35 px-4 py-2 text-white"
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
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Oratoria y formación
              <ArrowIcon className="h-[18px] w-[18px]" />
            </Link>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block cursor-pointer text-sm text-white/85 underline underline-offset-4 transition-colors duration-200 hover:text-white"
          >
            O escríbeme directo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
