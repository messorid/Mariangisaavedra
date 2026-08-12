import { metricas } from "@/app/lib/content";
import Section, { Eyebrow, Lead, SectionTitle } from "./Section";

/**
 * Métricas de comunidad de Instagram.
 * Único lugar del sitio donde se usa el acento magenta→violeta: viene de los
 * propios paneles de Instagram y no debe filtrarse al resto de la UI.
 */

function BarList({
  titulo,
  datos,
}: {
  titulo: string;
  datos: { label: string; pct: number }[];
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h3 className="text-sm font-semibold text-ink">{titulo}</h3>
      <dl className="mt-5 space-y-4">
        {datos.map((d) => (
          <div key={d.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <dt className="text-ink-3">{d.label}</dt>
              <dd className="font-semibold tabular-nums text-ink">
                {d.pct.toLocaleString("es-VE", { minimumFractionDigits: 1 })}%
              </dd>
            </div>
            <div
              className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line"
              aria-hidden="true"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-data-a to-data-b"
                style={{ width: `${Math.min(d.pct, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Metricas() {
  return (
    <Section id="metricas" tone="tint">
      <div className="max-w-3xl text-center md:text-left">
        <Eyebrow>Visualiza mi comunidad</Eyebrow>
        <SectionTitle>Sobre mi público</SectionTitle>
        <Lead>
          Datos reales de Instagram — {metricas.periodo.toLowerCase()}. Así se
          comporta la audiencia que verá tu marca.
        </Lead>
      </div>

      <dl className="mt-12 grid gap-5 sm:grid-cols-3">
        {metricas.destacadas.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-line bg-white p-7"
          >
            <dt className="text-sm text-ink-3">{m.label}</dt>
            <dd className="display mt-2 text-4xl text-ink md:text-5xl">
              {m.valor}
            </dd>
            {m.delta ? (
              <p className="mt-2 text-sm font-semibold text-brand-deep">
                {m.delta} vs. período anterior
              </p>
            ) : null}
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <BarList titulo="Sexo de la audiencia" datos={metricas.audiencia} />
        <BarList titulo="Principales rangos de edad" datos={metricas.edades} />
        <BarList titulo="Reparto por formato" datos={metricas.formatos} />
        <BarList titulo="Principales países" datos={metricas.paises} />
        <BarList titulo="Principales ciudades" datos={metricas.ciudades} />
      </div>

      <p className="mt-8 text-center text-sm text-ink-3 md:text-left">
        Fuente: estadísticas de la cuenta de Instagram {""}
        <span className="font-semibold">@mariangisaavedra</span>,{" "}
        {metricas.periodo.toLowerCase()}.
      </p>
    </Section>
  );
}
