import type { Metadata } from "next";
import { Montserrat, Oswald, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { site } from "./lib/content";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const tenor = Tenor_Sans({
  variable: "--font-tenor",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariangisaavedra.com"),
  title: {
    default: `${site.name} — Host, Locutora, Imagen de Marcas y Coach de Oratoria`,
    template: `%s · ${site.name}`,
  },
  description:
    "Host de eventos, locutora e imagen de marcas en Venezuela. Formación en oratoria y comunicación para empresas y equipos. 13 años de trayectoria.",
  keywords: [
    "Mariangi Saavedra",
    "host de eventos Venezuela",
    "locutora Barinas",
    "imagen de marca",
    "coach de oratoria",
    "conferencista Venezuela",
    "maestra de ceremonias",
    "capacitación empresarial oratoria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Voz e imagen para marcas · Formación en oratoria y desarrollo humano. Venezuela.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-VE"
      className={`${montserrat.variable} ${oswald.variable} ${tenor.variable} h-full antialiased`}
    >
      <body className="bg-paper text-ink flex min-h-full flex-col overflow-x-hidden">
        <Nav />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
