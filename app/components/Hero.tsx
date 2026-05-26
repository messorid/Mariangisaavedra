"use client";

import { motion, type Variants } from "motion/react";
import Portrait from "./Portrait";
import SoundWave from "./SoundWave";
import { ArrowIcon } from "./Icons";
import { site } from "@/app/lib/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pt-36"
    >
      {/* Halo cálido de fondo */}
      <div className="pointer-events-none absolute -right-40 -top-32 h-[36rem] w-[36rem] rounded-full bg-clay-soft/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12 md:gap-8">
        {/* Texto */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7"
        >
          <motion.div
            variants={item}
            className="flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-mocha"
          >
            <SoundWave className="h-4 w-16 text-clay" />
            <span>
              {site.role} — {site.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-[2.7rem] leading-[0.98] tracking-tight text-espresso sm:text-6xl md:text-7xl"
          >
            Que tu voz
            <br />
            cuente <span className="italic text-clay">historias</span>,
            <br />
            inspire y <span className="italic text-clay">conecte</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-pretty text-base leading-relaxed text-espresso/70 md:text-lg"
          >
            Soy Mariangi Saavedra. Ayudo a niños, adolescentes y marcas a
            comunicar con seguridad, empatía y carisma — para que cada palabra
            deje huella.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#curso"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-4 text-sm text-ivory transition-colors hover:bg-clay"
            >
              Reserva el plan vacacional
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 text-sm text-espresso transition-colors hover:border-espresso"
            >
              Conóceme
            </a>
          </motion.div>
        </motion.div>

        {/* Retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative md:col-span-5"
        >
          <Portrait
            src="/images/mariangi.png"
            alt="Mariangi Saavedra, voz de marca y coach de oratoria"
            caption="Mariangi Saavedra"
            tone="clay"
            priority
            objectPosition="40% 20%"
            className="aspect-[4/5] w-full rounded-[2rem] shadow-2xl shadow-espresso/15 md:aspect-[3/4]"
          />

          {/* Etiqueta flotante */}
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-line bg-ivory/90 px-5 py-3 shadow-lg backdrop-blur md:-left-8">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-mocha">
              Próximo
            </p>
            <p className="font-display text-lg leading-tight">
              Plan vacacional · Julio
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
