import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * URLs de la estructura anterior (marca personal / formación / trabajos).
   * Permanentes para que buscadores y enlaces compartidos lleguen a la página
   * nueva equivalente.
   */
  async redirects() {
    return [
      { source: "/marcas", destination: "/publicidad", permanent: true },
      { source: "/trabajos", destination: "/publicidad", permanent: true },
      { source: "/formacion", destination: "/capacitaciones", permanent: true },
      {
        source: "/formacion/modalidad/personalizada",
        destination: "/capacitaciones/personalizadas",
        permanent: true,
      },
      {
        source: "/formacion/modalidad/:slug",
        destination: "/capacitaciones/in-company",
        permanent: true,
      },
      {
        source: "/formacion/:slug",
        destination: "/capacitaciones/in-company/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
