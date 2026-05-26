/** Onda de voz: barras que laten como un ecualizador. Decorativa. */

const bars = [
  0.45, 0.7, 0.35, 0.9, 0.55, 1, 0.4, 0.75, 0.5, 0.85, 0.3, 0.65, 0.95, 0.4,
  0.6, 0.8, 0.35, 0.7, 0.5, 0.9,
];

export default function SoundWave({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex items-center gap-[3px] ${className}`}
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] origin-center rounded-full"
          style={{
            height: `${h * 100}%`,
            backgroundColor: color,
            animation: `wave ${1.1 + (i % 5) * 0.18}s ease-in-out ${
              (i % 7) * 0.12
            }s infinite`,
          }}
        />
      ))}
    </div>
  );
}
