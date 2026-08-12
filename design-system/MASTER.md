# MASTER — Sistema de Diseño · Mariangi Saavedra

> Fuente de verdad global. Extraído de `public/MEDIA KIT MS 2026 .pdf` y
> `public/VISUAL CURRICULUM.pdf` (paleta muestreada píxel a píxel, fuentes leídas
> del PDF). Las páginas en `design-system/pages/*.md` sobreescriben este archivo.

## 1. Paleta (extraída de los PDFs, no inventada)

| Rol | Hex | Uso |
|-----|-----|-----|
| `--brand` | `#86728B` | Malva firma. **Solo** decoración, bordes, marca de agua y display ≥24px |
| `--brand-deep` | `#79657E` | Malva oscurecido. **Todo texto** a tamaño body y botones sólidos |
| `--brand-soft` | `#A18BA6` | Malva claro. Únicamente sobre fondo oscuro o decoración |
| `--brand-tint` | `#FBF1FF` | Lavanda casi blanco. Fondos de tarjeta, bloques de respiro |
| `--ink` | `#1E1A21` | Texto principal / fondo oscuro dramático |
| `--ink-2` | `#342937` | Superficies oscuras y hover de botones sólidos |
| `--ink-3` | `#544B57` | Texto secundario sobre claro (8,0:1 sobre `--paper`) |
| `--paper` | `#FAFAFA` | Fondo base del sitio |
| `--white` | `#FFFFFF` | Tarjetas, superficies elevadas |

Acento de datos (solo en la sección de métricas, viene de los screenshots de
Instagram del media kit): magenta `#E1306C` → violeta `#5B21F5`. **Usar
únicamente en gráficos**, nunca en UI.

### Contraste — medido, no estimado

| Combinación | Ratio | AA |
|---|---|---|
| `#86728B` sobre blanco | 4,38:1 | ❌ falla en body |
| `#86728B` sobre `#FAFAFA` | 4,20:1 | ❌ |
| `#86728B` sobre `#FBF1FF` | 3,99:1 | ❌ |
| **`#79657E` sobre blanco** | **5,28:1** | ✅ |
| **`#79657E` sobre `#FAFAFA`** | **5,06:1** | ✅ |
| **`#79657E` sobre `#FBF1FF`** | **4,81:1** | ✅ |
| Blanco sobre `#86728B` | 4,38:1 | ❌ botones |
| Blanco sobre `#79657E` | 5,28:1 | ✅ |
| Blanco sobre `#A18BA6` | 3,11:1 | ❌ nunca como fondo de botón |

**Regla:** el malva de marca `#86728B` no toca texto pequeño ni relleno de
botón. Para eso existe `--brand-deep`. El hover de un botón sólido va a
`--ink-2`, nunca a `--brand-soft`.

## 2. Tipografía (las mismas del media kit)

- **Display / titulares:** `Oswald` — condensada, mayúsculas, tracking amplio.
  Es la que da el aire de "MEDIA KIT" y "MI VALOR PARA TU MARCA".
- **Cuerpo y UI:** `Montserrat` — 400/600/700. Ya está en todo el material.
- **Acento editorial:** `Tenor Sans` — opcional, para citas y el tagline
  *"Exprésate a toda voz y deja tu huella"*.

```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Montserrat:wght@400;600;700&family=Tenor+Sans&display=swap');
```

Escala: `clamp(2.5rem, 7vw, 6rem)` para H1, tracking `0.08em` en mayúsculas
Oswald. Body 17px móvil / 18px desktop, `line-height: 1.65`, medida 65–72ch.

## 3. Estilo

**Editorial Grid + Exaggerated Minimalism** con foto a sangre.
Es literalmente el lenguaje del media kit: retrato recortado a página completa,
tipografía condensada enorme, franjas malva, mucho aire.

- Nada de glassmorphism ni blur pesado (el material impreso es plano y limpio).
- Motivo de marca: el monograma "M" en trazo caligráfico como marca de agua
  gigante al 6–10% de opacidad detrás de las secciones. Aparece en 5 de las 7
  páginas del media kit — es la firma visual.
- Bordes: `rounded-2xl` en tarjetas (el media kit usa esquinas suaves grandes).
- Sombras suaves y bajas, nunca duras.
- Transiciones 200–300ms, solo `transform`/`opacity`.

## 3\. Barra de navegación

**Fondo opaco `bg-paper` siempre, en todas las páginas.** No transparente
arriba del todo: la home abre con héroe claro pero las seis páginas internas
abren con héroe oscuro (`bg-ink`), y ahí el logo en tinta y el botón de menú
desaparecían.

Tampoco translúcida: con `bg-paper/90` sobre héroe oscuro la barra baja a
`#E4E4E4` y el malva del logo cae a **4,15:1** — por debajo de AA. Haría falta
95% para pasar, y a esa opacidad el `backdrop-blur` ya no se percibe, así que no
compensa. Opaca da 5,06:1 en el logo y 7,98:1 en los enlaces, en cualquier
página.

Lo único que reacciona al scroll es el borde inferior.

## 3a. Alineación

**En móvil el contenido de sección va centrado; desde `md` vuelve a la
izquierda.** Aplica a: héroes (etiqueta, titular, párrafo, botones), cabeceras
de sección, filas de chips y botones sueltos.

Se resuelve en el contenedor, no elemento por elemento: `text-align` se hereda,
así que basta con `text-center md:text-left` en el bloque que envuelve la
cabecera. Los párrafos con `max-w-[60ch]`/`[65ch]` necesitan además
`mx-auto md:mx-0`, y las filas flex `justify-center md:justify-start`.

Un botón suelto no se centra con `inline-flex`: usa `mx-auto flex w-fit md:mx-0`.

**El texto dentro de las tarjetas se mantiene alineado a la izquierda**, también
en móvil. Centrar párrafos de varias líneas con borde irregular cuesta leerlos;
lo que se centra es la estructura de la sección, no el cuerpo del contenido.

Excepciones que van centradas siempre, en cualquier ancho: `CtaBanner`, el
testimonio de `/marcas` y la cinta de marcas.

## 3b. Carruseles en móvil

Toda grilla de 3+ tarjetas se convierte en carrusel horizontal por debajo de
`md` mediante el componente `app/components/Scroller.tsx`: scroll-snap, tarjetas
al 80% de ancho que sangran hasta el borde, sin barra visible. A partir de `md`
vuelve a ser grilla.

**Indicador de deslizamiento.** Debajo del carrusel aparecen puntos de posición
y la pista «Desliza →», solo cuando el contenido realmente desborda (se mide con
`ResizeObserver`; si todo cabe no se muestra nada). Los puntos son botones: al
tocarlos el carrusel salta a esa tarjeta. El punto activo se distingue por
**color y por ancho** — el color nunca es el único indicador de estado.

Tres restricciones al usarlo:

1. **Clases literales.** Tailwind analiza el código fuente buscando nombres de
   clase completos. Una clase armada en runtime (`` `[&>*]:${w}` ``) no genera
   CSS. Escribe `itemWidth` y `cols` literales en el archivo que llama.
2. **Accesible por teclado.** El contenedor lleva `tabIndex={0}` y `aria-label`;
   sin eso, quien navega con Tab no puede desplazarlo. No se sobrescribe el rol,
   para no perder la semántica de lista cuando `as` es `ul`/`ol`.
3. **Es un componente cliente.** Recibe los hijos ya renderizados en servidor
   como `children`, así que las páginas siguen siendo Server Components y todo
   se sigue prerenderizando estático. Los puntos aparecen tras la hidratación.

`.no-scrollbar` vive fuera de `@layer utilities`: Tailwind v4 descarta la regla
cuando incluye un pseudo-elemento `::-webkit-scrollbar`.

## 4. Efectos permitidos

Reveal on scroll (fade + 16px up), parallax leve en retratos, marquee de logos
de marcas, contador animado en métricas. Todo bajo `prefers-reduced-motion`.

## 5. Anti-patrones para este proyecto

- ❌ La paleta crema/terracota actual de `app/globals.css` — no es la marca.
- ❌ Fraunces / Geist como tipografías — no son las del media kit.
- ❌ Emojis como iconos (el WhatsApp greeting actual usa 👋 en copy, eso sí vale).
- ❌ Malva sobre blanco en texto pequeño.
- ❌ Mezclar el magenta/violeta de Instagram en botones o navegación.

## 6. Datos verificados de los documentos

- Nombre: Mariangi Saavedra · Tagline: *"Exprésate a toda voz y deja tu huella"*
- Roles (orden del media kit): HOST · LOCUTORA · IMAGEN DE MARCAS · COACH DE ORATORIA
- 13 años de trayectoria · Speaker desde 2021 · +200 profesionales capacitados
- Contacto: `@mariangisaavedra` · `mariangisaavedra@gmail.com` · `0414-9544415`
- Métricas (últimos 30 días): 114.727 visualizaciones · 28.968 cuentas alcanzadas
  (+161,7%) · tasa de interacción 14,68%
- Audiencia: 58,7% mujeres / 41,3% hombres · 61,2% entre 25 y 44 años ·
  Venezuela 80,6% · Barinas 19,8%, Caracas 17,5%
- Planes: Focus $300 · Evolución $500 · Embajadora PRO $750
- Radio: Marquesa 101.7FM (2013-15) · Hits 97.7FM (2015-18) ·
  Circuito Líder Barinas 107.9FM (2016) · Mágica 90.9FM (2021-2026)
- Formación: Arquitectura (Politécnico Santiago Mariño) · Máster en PNL ·
  Coaching Internacional (ACP Madrid / UCAB) · Coaching Deportivo (ACI) ·
  Locución Profesional (Voces de Marca / Voces Mágicas)
- Reels destacados (links reales del PDF):
  - https://www.instagram.com/reel/C4dTsJ5AmHZ/
  - https://www.instagram.com/reel/DO895ohEW6D/
  - https://www.instagram.com/reel/DRnI848ge1D/
  - https://www.instagram.com/reel/DRumq6iEXrf/
  - https://www.instagram.com/reel/DZFkOEiRZCV/
- Marcas: Eurobuilding Express Barinas, FIAT, Domosa Maquinarias, XTC,
  USI (Universe of Science & Innovation), Super Oil Center, La Orquídea,
  Mágica 90.9FM, Fedecámaras, TCT Racing, Farmacia Santa Rosa,
  Bristol Restaurant, Mundoplast, MAG
- Eventos: Fedecámaras Barinas (Cena de Gala), Decoceca, Torneo de Pádel
  Rayocero, Campeonato de Gimnasia, Híper Hadassa, KardiaCM, Fibex Telecom,
  Mundoplast, Grupo Nuevo Desafío, Hogar La Orquídea, MAG, C.C. Dorado,
  LP Autoparts, Clínica de Cejas
