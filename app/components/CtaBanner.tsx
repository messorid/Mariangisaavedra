import { waLink } from "@/app/lib/content";
import Monogram from "./Monogram";
import { WhatsAppIcon } from "./Icons";

/** Banner de cierre reutilizable al final de cada página. */
export default function CtaBanner({
  titulo = "Trabajemos juntos",
  texto = "Cuéntame qué necesitas y te respondo con una propuesta concreta.",
  mensaje,
  cta = "Escríbeme por WhatsApp",
}: {
  titulo?: string;
  texto?: string;
  mensaje?: string;
  cta?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <Monogram
        className="pointer-events-none absolute -left-14 -top-20 h-[420px] w-auto text-white/10"
        strokeWidth={14}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:px-10 md:py-24">
        <h2 className="display mx-auto max-w-3xl text-4xl md:text-6xl">
          {titulo}
        </h2>
        <p className="mx-auto mt-5 max-w-[55ch] text-white/90">{texto}</p>
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-deep transition-colors duration-200 hover:bg-ink hover:text-white"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          {cta}
        </a>
      </div>
    </section>
  );
}
