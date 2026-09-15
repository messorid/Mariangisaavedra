import Image from "next/image";

/**
 * Fotografía del héroe, con dos comportamientos distintos por ancho.
 *
 * POR QUÉ NO ES LA MISMA EN AMBOS:
 *
 * · Escritorio. Con la foto a todo lo ancho (~1900px) `object-cover` la escala
 *   a 1900/2000 ≈ 0,95: se renderiza casi a tamaño natural y el sujeto sale
 *   gigante. No se arregla haciendo el héroe más alto, porque el ancho es la
 *   restricción. Se arregla dándole a la foto un panel del ~50% y dejando el
 *   resto en `--ink`: la foto baja a ~0,48 de escala y el texto gana aire.
 *
 * · Móvil. Ahí el texto NO va sobre la foto. Antes llevaba un velo al 85% que
 *   dejaba la imagen como una mancha sucia sin que se distinguiera nada. Ahora
 *   la foto va limpia arriba, en su propio bloque, y el texto debajo sobre
 *   `--ink` sólido (16:1). Sin velo que ensucie y sin dudas de contraste.
 *
 * En ambos casos el texto se apoya sobre ink opaco o casi opaco, así que no
 * hace falta el cálculo de velo que había antes.
 */
export default function HeroPhoto({
  foto,
  priority = true,
}: {
  foto: { src: string; alt: string; pos?: string };
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[46%] lg:w-[50%]">
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, 50vw"
        style={{ objectPosition: foto.pos ?? "50% 30%" }}
        className="object-cover"
      />

      {/* Móvil: fundido corto abajo para que la foto entre en el fondo oscuro
          sin un corte duro. No toca la zona donde se ve la cara. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent md:hidden"
      />

      {/* Escritorio: el borde izquierdo del panel se funde con el fondo, de
          modo que la foto no se lee como una columna pegada sino integrada. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-ink md:from-25% md:via-ink/50 md:via-65% md:to-ink/15"
      />
    </div>
  );
}
