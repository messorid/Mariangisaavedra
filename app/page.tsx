import Hero from "./components/Hero";
import Ramas from "./components/Ramas";
import Manifiesto from "./components/Manifiesto";
import Marquee from "./components/Marquee";
import CtaBanner from "./components/CtaBanner";

/**
 * Portada: lo primero tras el héroe es elegir rama (Publicidad o
 * Capacitaciones). La presentación personal va después y en corto; la
 * historia completa vive en /sobre-mi.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Ramas />
      <Manifiesto />
      <Marquee />
      <CtaBanner
        titulo="Hablemos de tu próximo proyecto"
        texto="Publicidad para tu marca o una capacitación para ti o tu equipo. Escríbeme y lo conversamos."
      />
    </>
  );
}
