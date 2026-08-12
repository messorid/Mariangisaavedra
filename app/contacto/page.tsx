import type { Metadata } from "next";
import Section, { Eyebrow, SectionTitle } from "../components/Section";
import Scroller from "../components/Scroller";
import Monogram from "../components/Monogram";
import {
  ArrowIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "../components/Icons";
import { contactoIntro, motivosContacto, site, waLink } from "../lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbeme por WhatsApp, correo o Instagram. Campañas, eventos, locución y formación en oratoria. Venezuela.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-20 text-white">
        <Monogram
          className="pointer-events-none absolute -right-16 -top-10 h-[460px] w-auto text-white/[0.06]"
          strokeWidth={14}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24 md:text-left">
          <p className="eyebrow text-brand-soft">Contacto</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)]">
            {contactoIntro.titulo}
          </h1>
          <p className="mx-auto mt-6 max-w-[60ch] text-white/75 md:mx-0">
            {contactoIntro.texto}
          </p>
        </div>
      </section>

      {/* Motivos: cada uno precarga un mensaje distinto en WhatsApp */}
      <Section>
        <div className="max-w-3xl text-center md:text-left">
          <Eyebrow>Empecemos por lo más rápido</Eyebrow>
          <SectionTitle>¿Sobre qué me escribes?</SectionTitle>
          <p className="mx-auto mt-5 max-w-[65ch] text-ink-3 md:mx-0">
            Elige el motivo y se abre WhatsApp con el mensaje ya escrito. Solo
            tienes que enviarlo.
          </p>
        </div>

        <Scroller as="ul" label="Motivos de contacto" cols="md:grid-cols-2 lg:grid-cols-3" className="mt-12">
          {motivosContacto.map((m) => (
            <li key={m.id}>
              <a
                href={waLink(m.mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand hover:bg-brand-tint"
              >
                <span className="font-semibold text-ink">{m.label}</span>
                <ArrowIcon className="h-5 w-5 shrink-0 text-brand-deep" />
              </a>
            </li>
          ))}
        </Scroller>
      </Section>

      {/* Datos directos */}
      <Section tone="tint">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-2xl border border-line bg-white p-7 transition-colors duration-200 hover:border-brand"
          >
            <WhatsAppIcon className="h-6 w-6 text-brand-deep" />
            <h2 className="eyebrow mt-5 text-ink-3">WhatsApp</h2>
            <p className="mt-2 font-semibold text-ink">
              {site.whatsappDisplay}
            </p>
          </a>

          <a
            href={`tel:+${site.whatsappNumber}`}
            className="cursor-pointer rounded-2xl border border-line bg-white p-7 transition-colors duration-200 hover:border-brand"
          >
            <PhoneIcon className="h-6 w-6 text-brand-deep" />
            <h2 className="eyebrow mt-5 text-ink-3">Teléfono</h2>
            <p className="mt-2 font-semibold text-ink">
              {site.whatsappDisplay}
            </p>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="cursor-pointer rounded-2xl border border-line bg-white p-7 transition-colors duration-200 hover:border-brand"
          >
            <MailIcon className="h-6 w-6 text-brand-deep" />
            <h2 className="eyebrow mt-5 text-ink-3">Correo</h2>
            <p className="mt-2 break-all font-semibold text-ink">
              {site.email}
            </p>
          </a>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-2xl border border-line bg-white p-7 transition-colors duration-200 hover:border-brand"
          >
            <InstagramIcon className="h-6 w-6 text-brand-deep" />
            <h2 className="eyebrow mt-5 text-ink-3">Instagram</h2>
            <p className="mt-2 font-semibold text-ink">
              {site.instagramHandle}
            </p>
          </a>
        </div>

        <p className="mt-10 flex items-center justify-center gap-2.5 text-ink-3 md:justify-start">
          <PinIcon className="h-5 w-5 shrink-0 text-brand-deep" />
          {site.location} — disponible para trabajos en toda Venezuela,
          presencial y remoto.
        </p>
      </Section>
    </>
  );
}
