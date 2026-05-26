import { nav, site } from "@/app/lib/content";

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-8 md:px-10">
      <div className="mx-auto max-w-7xl rule pt-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl tracking-tight">
              Mariangi <span className="italic text-clay">Saavedra</span>
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-espresso/60">
              {site.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-espresso/60 transition-colors hover:text-clay"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-espresso/60 transition-colors hover:text-clay"
            >
              {site.instagramHandle}
            </a>
            <p className="mt-1 text-espresso/60">{site.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-mocha sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
          <p>Sitio demo · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
