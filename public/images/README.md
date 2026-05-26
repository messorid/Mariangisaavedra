# Imágenes de Mariangi

Coloca aquí las 2 fotos reales con estos nombres exactos:

- `mariangi-hero.jpg` — foto principal (la del evento FIAT, vertical).
- `mariangi-speaking.jpg` — foto hablando en el podio (evento MAG).

Formato recomendado: JPG o WebP, vertical (~3:4 o 4:5), mínimo 1000px de ancho.

## Cómo activarlas

En `app/page.tsx` ya están las llamadas a `<Portrait />`. Solo descomenta /
añade la prop `src`:

```tsx
<Portrait src="/images/mariangi-hero.jpg" alt="Mariangi Saavedra" priority />
<Portrait src="/images/mariangi-speaking.jpg" alt="Mariangi hablando en público" />
```

Mientras no exista la prop `src`, se muestra un placeholder editorial de marca
(monograma “MS” sobre degradado cálido) para que la demo se vea completa.
