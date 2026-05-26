import Reveal from "./Reveal";
import { ArrowIcon, WhatsAppIcon, InstagramIcon } from "./Icons";
import { site, waLink } from "@/app/lib/content";

export default function Contact() {
  return (
    <section id="contacto" className="px-5 py-16 md:px-10 md:py-20">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-line bg-sand/50 px-6 py-14 md:rounded-[2.5rem] md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-clay">
                Contacto
              </p>
              <h2 className="font-display mt-4 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                ¿Lista tu voz
                <br />
                para <span className="italic text-clay">contar más</span>?
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-espresso/70">
                Escríbeme y reservemos el cupo del plan vacacional, o
                conversemos sobre un taller, coaching o voz para tu marca.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-5">
              <a
                href={waLink(
                  "¡Hola Mariangi! Me gustaría más información para reservar."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-espresso px-6 py-5 text-ivory transition-colors hover:bg-clay"
              >
                <span className="flex items-center gap-3">
                  <WhatsAppIcon className="h-6 w-6" />
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-ivory/60">
                      WhatsApp
                    </span>
                    <span className="font-display text-lg">
                      {site.whatsappDisplay}
                    </span>
                  </span>
                </span>
                <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-line bg-ivory px-6 py-5 transition-colors hover:border-espresso"
              >
                <span className="flex items-center gap-3">
                  <InstagramIcon className="h-6 w-6 text-clay" />
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-mocha">
                      Instagram
                    </span>
                    <span className="font-display text-lg">
                      {site.instagramHandle}
                    </span>
                  </span>
                </span>
                <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="rounded-2xl border border-line bg-ivory px-6 py-4 text-center text-sm text-espresso/70 transition-colors hover:border-espresso hover:text-espresso"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
