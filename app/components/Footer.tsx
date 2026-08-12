import Link from "next/link";
import { nav, site, waLink } from "@/app/lib/content";
import Monogram from "./Monogram";
import { InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Monogram
        className="pointer-events-none absolute -right-10 -top-16 h-[380px] w-auto text-white/[0.04]"
        strokeWidth={14}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-brand-soft">¿Listos para conectar?</p>
            <p className="display mt-3 text-4xl text-white md:text-5xl">
              Mariangi
              <br />
              <span className="text-brand-soft">Saavedra</span>
            </p>
            <p className="mt-4 max-w-sm text-white/70">{site.tagline}</p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink-2"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Escríbeme por WhatsApp
            </a>
          </div>

          <nav aria-label="Pie de página">
            <p className="eyebrow text-white/50">Navegación</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-white/75 transition-colors duration-200 hover:text-brand-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-white/50">Contacto</p>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:+${site.whatsappNumber}`}
                  className="flex cursor-pointer items-center gap-2.5 text-white/75 transition-colors duration-200 hover:text-brand-soft"
                >
                  <PhoneIcon className="h-[18px] w-[18px] shrink-0" />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex cursor-pointer items-center gap-2.5 break-all text-white/75 transition-colors duration-200 hover:text-brand-soft"
                >
                  <MailIcon className="h-[18px] w-[18px] shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2.5 text-white/75 transition-colors duration-200 hover:text-brand-soft"
                >
                  <InstagramIcon className="h-[18px] w-[18px] shrink-0" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-white/50">{site.location}</p>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} {site.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
