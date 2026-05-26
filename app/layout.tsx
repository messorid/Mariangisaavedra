import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariangisaavedra.com"),
  title: {
    default: "Mariangi Saavedra — Voz de Marca & Coach de Oratoria",
    template: "%s · Mariangi Saavedra",
  },
  description:
    "Que tu voz cuente historias, inspire y conecte. Voz de marca y formación en oratoria para niños, adolescentes y profesionales en Venezuela.",
  keywords: [
    "oratoria",
    "voz de marca",
    "comunicación",
    "Mariangi Saavedra",
    "cursos de oratoria Venezuela",
    "plan vacacional oratoria",
  ],
  openGraph: {
    title: "Mariangi Saavedra — Voz de Marca & Coach de Oratoria",
    description:
      "Que tu voz cuente historias, inspire y conecte. Formación en oratoria y comunicación con seguridad, empatía y carisma.",
    locale: "es_VE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-espresso flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
