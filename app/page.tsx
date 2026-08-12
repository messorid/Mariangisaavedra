import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifiesto from "./components/Manifiesto";
import Facetas from "./components/Facetas";
import CtaBanner from "./components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifiesto />
      <Facetas />
      <CtaBanner
        titulo="Hablemos de tu próximo proyecto"
        texto="Campañas, eventos, locución o formación para tu equipo. Escríbeme y lo conversamos."
      />
    </>
  );
}
