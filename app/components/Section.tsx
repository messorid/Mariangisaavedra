import type { ReactNode } from "react";

/** Contenedor de sección con ancho y ritmo vertical consistentes en todo el sitio. */
export default function Section({
  children,
  id,
  className = "",
  tone = "paper",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "paper" | "tint" | "ink" | "brand";
}) {
  const tones = {
    paper: "bg-paper text-ink",
    tint: "bg-brand-tint text-ink",
    ink: "bg-ink text-white",
    brand: "bg-brand-deep text-white",
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow text-brand-deep ${className}`}>{children}</p>;
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`display mt-3 text-4xl md:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

/** Párrafo introductorio con medida legible (65-72ch). */
export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-5 max-w-[65ch] text-ink-3 ${className}`}>{children}</p>
  );
}
