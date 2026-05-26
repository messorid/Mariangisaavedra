/**
 * Contenido centralizado de la landing.
 * DEMO: los datos de contacto son de ejemplo — reemplázalos por los reales.
 */

export const site = {
  name: "Mariangi Saavedra",
  role: "Voz de Marca · Coach de Oratoria",
  location: "Venezuela",
  tagline: "Que tu voz cuente historias, inspire y conecte.",
  instagram: "https://instagram.com/mariangisaavedra",
  instagramHandle: "@mariangisaavedra",
  email: "hola@mariangisaavedra.com",
  // wa.me requiere el número en formato internacional sin signos.
  whatsappNumber: "584149544415",
  whatsappDisplay: "+58 414-954 4415",
};

/** Saludo automático por defecto que se pre-rellena al abrir WhatsApp. */
export const waGreeting =
  "¡Hola Mariangi! 👋 Vi tu página y me gustaría recibir más información.";

export const waLink = (message: string = waGreeting) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Plan vacacional", href: "#curso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const marqueeWords = [
  "Oratoria",
  "Voz de marca",
  "Comunicación",
  "Carisma",
  "Seguridad",
  "Conexión",
  "Storytelling",
  "Presencia",
];

export const pillars = [
  {
    title: "Seguridad",
    text: "Hablar en público sin miedo: postura, respiración y control del nervio.",
  },
  {
    title: "Empatía",
    text: "Conectar con quien escucha, leer al público y comunicar desde el corazón.",
  },
  {
    title: "Carisma",
    text: "Una voz con presencia: ritmo, intención y la chispa que hace memorable un mensaje.",
  },
];

export const course = {
  eyebrow: "Plan vacacional 2024",
  title: "Oratoria para Niños y Adolescentes",
  lead: "Estas vacaciones, que tu voz cuente historias, inspire y conecte.",
  intro:
    "¿Tu hijo tiene mucho que decir, pero no siempre sabe cómo expresarlo? En nuestro plan vacacional aprenderá a comunicarse con seguridad, empatía y carisma… ¡mientras se divierte!",
  audience:
    "Diseñado especialmente para niños y adolescentes mayores de 9 años, en un ambiente seguro, motivador y lleno de energía positiva.",
  details: [
    { label: "Fechas", value: "30 y 31 de julio", icon: "calendar" },
    { label: "Horario", value: "9:00 AM – 12:00 PM", icon: "clock" },
    { label: "Edad", value: "Mayores de 9 años", icon: "users" },
    {
      label: "Lugar",
      value: "C.E. Toscana Plaza, Av. Adonay Parra · Academia USICA",
      icon: "pin",
    },
  ],
};

export const benefits = [
  {
    n: "01",
    title: "Expresarse con seguridad",
    text: "Pierden el miedo escénico y aprenden a sostener la mirada y la voz.",
  },
  {
    n: "02",
    title: "Vocalizar y proyectar",
    text: "Respiración, dicción y volumen para que cada palabra se entienda.",
  },
  {
    n: "03",
    title: "Contar historias",
    text: "Estructura, inicio y cierre: storytelling adaptado a su edad.",
  },
  {
    n: "04",
    title: "Lenguaje corporal",
    text: "Postura, gestos y presencia que acompañan el mensaje.",
  },
  {
    n: "05",
    title: "Trabajo en equipo",
    text: "Dinámicas grupales que fortalecen la empatía y la escucha.",
  },
  {
    n: "06",
    title: "Confianza para la vida",
    text: "Herramientas que usarán en el aula, en escena y donde quieran brillar.",
  },
];

export const services = [
  {
    title: "Voz de marca",
    text: "Doy voz a campañas, eventos y marcas que quieren sonar humanas y memorables.",
  },
  {
    title: "Talleres de oratoria",
    text: "Programas para niños, adolescentes y adultos que necesitan comunicar mejor.",
  },
  {
    title: "Coaching de comunicación",
    text: "Acompañamiento 1:1 para presentaciones, pitch, medios y hablar en público.",
  },
  {
    title: "Maestra de ceremonias",
    text: "Conducción y locución de eventos con presencia, ritmo y elegancia.",
  },
];
