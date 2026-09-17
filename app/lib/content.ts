/**
 * Contenido centralizado del sitio.
 *
 * FUENTES (todo lo de aquí sale de documentos reales, nada inventado):
 *  - public/MEDIA KIT MS 2026 .pdf      → faceta "Marca personal"
 *  - public/VISUAL CURRICULUM.pdf       → trayectoria y formación
 *  - public/WEB Mariangisaavedra.com.docx → arquitectura de las dos facetas
 *
 * Los campos marcados con TODO necesitan confirmación de Mariangi.
 */

/* ─────────────────────────────  Identidad  ───────────────────────────── */

export const site = {
  name: "Mariangi Saavedra",
  tagline: "Exprésate a toda voz y deja tu huella",
  roles: ["Host", "Locutora", "Imagen de Marcas", "Coach de Oratoria"],
  yearsOfExperience: 13,
  location: "Barinas, Venezuela",
  instagram: "https://instagram.com/mariangisaavedra",
  instagramHandle: "@mariangisaavedra",
  email: "mariangisaavedra@gmail.com",
  /** wa.me exige el número internacional sin signos ni espacios. */
  whatsappNumber: "584149544415",
  whatsappDisplay: "0414-9544415",
};

export const waGreeting =
  "¡Hola Mariangi! Vi tu página web y me gustaría recibir más información.";

export const waLink = (message: string = waGreeting) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

/* ─────────────────────────────  Fotografía  ──────────────────────────── */

/**
 * Originales de 4000x6000 (~5 MB) reducidos a 2000px de ancho.
 * Los originales `DSC_*` quedan en public/images pero fuera de git.
 */
export const fotos = {
  retrato: {
    src: "/images/mariangi-retrato.jpg",
    alt: "Mariangi Saavedra en primer plano, con chaqueta negra, mirando a cámara",
    /** Altura de la cara en la foto: fija el recorte del héroe a sangre. */
    pos: "50% 42%",
  },
  corporativo: {
    src: "/images/mariangi-corporativo.jpg",
    alt: "Mariangi Saavedra de cuerpo entero con traje negro en un salón corporativo",
    pos: "50% 26%",
  },
  gala: {
    src: "/images/mariangi-gala.jpg",
    alt: "Mariangi Saavedra con vestido largo color vino en un evento de gala",
    pos: "50% 30%",
  },
} as const;

/* ──────────────────────────────  Navegación  ─────────────────────────── */

export const nav = [
  { label: "Para tu marca", href: "/marcas" },
  { label: "Formación", href: "/formacion" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Contacto", href: "/contacto" },
];

/* ────────────────────  Las dos facetas (núcleo del sitio)  ───────────── */

export const facetas = [
  {
    slug: "marcas",
    href: "/marcas",
    numero: "01",
    kicker: "Para empresas y marcas",
    titulo: "Marca personal",
    subtitulo: "Voz e imagen que tu marca necesita",
    texto:
      "Como Voz e Imagen de Marcas me convierto en el rostro y el sonido que transmite confianza, profesionalismo y cercanía a tu público objetivo.",
    bullets: [
      "Campañas e imagen de marca",
      "Host y maestra de ceremonias",
      "Locución comercial y radio",
    ],
    cta: "Ver planes y métricas",
  },
  {
    slug: "formacion",
    href: "/formacion",
    numero: "02",
    kicker: "Para equipos y personas",
    titulo: "Oratoria y formación",
    subtitulo: "Comunicación que transforma resultados",
    texto:
      "Fusiono técnicas de locución con herramientas de Coaching y Programación Neurolingüística para desarrollar mensajes de alto impacto en el ámbito corporativo.",
    bullets: [
      "Programas de oratoria",
      "Conferencias y charlas",
      "Formación corporativa in-company",
    ],
    cta: "Ver programas",
  },
];

/* ──────────────────────  Manifiesto / ¿Quién soy?  ───────────────────── */

export const manifiesto = {
  eyebrow: "¿Quién soy?",
  destacado:
    "Creo firmemente en el poder de la comunicación y en la capacidad de un mensaje que, entregado con criterio y convicción, puede transformar cualquier circunstancia.",
  parrafos: [
    "Soy Mariangi Saavedra, profesional de la Voz, una Comunicadora apasionada. Mi misión es sencilla: motivar, enseñar y compartir mi admiración por el arte de comunicarnos, brindando herramientas que fortalecen las conexiones en todos los ámbitos.",
    "Estoy convencida de que podemos transformar el mundo desde nuestro metro cuadrado, haciendo uso de nuestra voz y presencia para dejar huella.",
    "Esta convicción no solo guía mis talleres de oratoria, donde mis clientes logran resultados impactantes, sino que es la misma energía auténtica que inyecto en cada proyecto de marca.",
  ],
};

/* ────────────────────────  Credibilidad (home)  ──────────────────────── */

export const credenciales = [
  { valor: "13", sufijo: " años", label: "De trayectoria profesional" },
  { valor: "200", prefijo: "+", label: "Profesionales capacitados" },
  { valor: "4", label: "Emisoras de radio" },
  { valor: "14,68", sufijo: "%", label: "Tasa de interacción" },
];

/* ────────────────────  FACETA 1 · Valor para la marca  ───────────────── */

export const valorParaMarca = {
  eyebrow: "Versatilidad y conexión genuina",
  titulo: "Mi valor para tu marca",
  intro:
    "Mi trayectoria como Locutora, Presentadora de Eventos y Coach de Oratoria me ha brindado una voz y presencia versátiles, capaces de resonar con audiencias diversas.",
  pilares: [
    {
      titulo: "Crear un impacto memorable",
      texto:
        "Como Voz e Imagen de Marcas me convierto en el rostro y el sonido que transmite confianza, profesionalismo y cercanía a tu público objetivo.",
    },
    {
      titulo: "Aportar credibilidad",
      texto:
        "Mi experiencia como conferencista y profesora respalda mi habilidad para comunicar mensajes complejos de forma clara y persuasiva.",
    },
    {
      titulo: "Garantizar resultados",
      texto:
        "La misma pasión que me permite sentirme en propósito con los logros de mis clientes, la dedico a asegurar que tu campaña alcance sus metas.",
    },
  ],
};

/* ────────────────────────  Reels destacados  ─────────────────────────── */
/** URLs reales extraídas de los hipervínculos de los PDF. */

export const reels = [
  { url: "https://www.instagram.com/reel/C4dTsJ5AmHZ/", nota: "" },
  {
    url: "https://www.instagram.com/reel/DO895ohEW6D/",
    nota: "Más de 16.000 visualizaciones",
  },
  {
    url: "https://www.instagram.com/reel/DRnI848ge1D/",
    nota: "Alcance de más de 18.000 cuentas y 37.000 reproducciones",
  },
  { url: "https://www.instagram.com/reel/DRumq6iEXrf/", nota: "" },
  { url: "https://www.instagram.com/reel/DZFkOEiRZCV/", nota: "" },
];

/* ──────────────────────────  Planes (Media Kit)  ─────────────────────── */

export const planes = [
  {
    nombre: "Plan Focus",
    precio: 300,
    incluye: ["1 Reel comercial", "Difusión en Historias"],
    texto: "Ideal para impacto inmediato y presencia de marca.",
    destacado: false,
  },
  {
    nombre: "Plan Evolución",
    precio: 500,
    incluye: ["2 Reels", "1 Carrete de fotos profesionales"],
    texto:
      "Diseñado para marcas que buscan estética y narrativa visual recurrente.",
    destacado: false,
  },
  {
    nombre: "Plan Embajadora PRO",
    precio: 750,
    incluye: [
      "3 Reels",
      "Set de fotos",
      "Historias constantes (4 días/mes)",
      "Voz comercial para otros medios",
    ],
    texto:
      "Posicionamiento total y exclusividad como embajadora de la marca.",
    destacado: true,
    aviso:
      "Este plan garantiza la exclusividad sectorial: durante la vigencia del contrato, Mariangi Saavedra no realizará alianzas ni publicidad con marcas de competencia directa. Esto asegura un vínculo de imagen único, coherente y de alta fidelidad para su marca.",
  },
];

export const serviciosSueltos = {
  titulo: "También puedes cotizar por separado",
  items: ["Stories", "Voice Over", "Host de Eventos"],
};

export const otrosServicios = [
  {
    titulo: "Host de Eventos",
    texto: "Conducción profesional para eventos corporativos y especiales.",
  },
  {
    titulo: "Formación PRO",
    texto:
      "Eleva tu liderazgo con mentorías de Oratoria (personalizada, grupal o gerencial).",
  },
  {
    titulo: "Alcance 360",
    texto:
      "Publicidad de alto impacto en Radio, Pantallas LED y Locución profesional.",
  },
];

export const testimonio = {
  texto:
    "No es solo la campaña, es la conexión y experiencia con el cliente. ¡Gran trabajo!",
  autor: "Karina He",
  cargo: "CEO, Mundo Plast",
};

/* ─────────────────────  FACETA 2 · Oratoria y formación  ─────────────── */

/* ───────────  FACETA 2 · Producto VIP: Oratoria Personalizada  ───────── */

/**
 * Producto insignia: acompañamiento uno a uno en tres niveles.
 *
 * Los TRES PASOS del proceso son los que indicó Mariangi, textuales.
 * El desarrollo de los TRES NIVELES es BORRADOR: ella dio los nombres
 * ("Nivel 1/2/3") pero no el contenido de cada uno. Debe validarlo antes de
 * publicar — ver `nivelesBorrador`.
 */
export const vip = {
  eyebrow: "Producto VIP",
  titulo: "Oratoria Personalizada",
  destacado: "VIP",
  lead: "Acompañamiento uno a uno, diseñado sobre tu punto de partida real y no sobre un programa genérico.",
  texto:
    "Es el formato más exclusivo que ofrezco: agenda cerrada, plan hecho a tu medida y seguimiento directo conmigo. Se estructura en tres niveles que puedes recorrer de forma progresiva o empezar donde estés.",

  /** Indicado por Mariangi, textual. */
  proceso: [
    {
      n: "01",
      titulo: "Reunión exploratoria",
      texto:
        "Nos sentamos a conversar para entender dónde estás, qué necesitas comunicar y ante quién.",
    },
    {
      n: "02",
      titulo: "Diagnóstico de debilidades",
      texto:
        "Identifico con precisión qué está frenando tu comunicación: técnica, estructura, presencia o seguridad.",
    },
    {
      n: "03",
      titulo: "Propuesta de capacitación",
      texto:
        "Diseño una propuesta de capacitación hecha para lograr cambios reales en tu equipo.",
    },
  ],

  /** BORRADOR pendiente de validación de Mariangi. */
  nivelesBorrador: true,
  niveles: [
    {
      n: "Nivel 1",
      nombre: "Fundamentos",
      para: "Para quien necesita perder el miedo y hacerse entender.",
      incluye: [
        "Respiración, dicción y proyección",
        "Manejo del miedo escénico",
        "Estructura básica de un mensaje",
        "Postura y lenguaje corporal",
      ],
      resultado: "Hablar sin bloquearte y que se te entienda a la primera.",
    },
    {
      n: "Nivel 2",
      nombre: "Dominio",
      para: "Para quien ya habla en público y quiere sostener la atención.",
      incluye: [
        "Storytelling aplicado a tu contexto",
        "Dominio de escenario y del espacio",
        "Improvisación y manejo de imprevistos",
        "Lectura del público y ajuste en vivo",
      ],
      resultado: "Sostener a una sala completa de principio a fin.",
    },
    {
      n: "Nivel 3",
      nombre: "Alto impacto",
      para: "Para quien comunica desde una posición de autoridad.",
      incluye: [
        "Presencia ejecutiva y voz de mando",
        "Mensajes complejos en formato breve",
        "Entrevistas y medios de comunicación",
        "Preparación de conferencias y ponencias",
      ],
      resultado: "Una voz reconocible que abre puertas y deja huella.",
    },
  ],
};

/**
 * Modalidades: el CÓMO se dicta. Cada una tiene página propia en
 * /formacion/modalidad/[slug].
 *
 * Los nombres, el resumen y las variantes salen del documento de Mariangi.
 * El desarrollo de cada ficha (lead, para quién, cómo funciona, qué incluye)
 * es BORRADOR redactado a partir de su metodología. Debe validarlo antes de
 * publicar — ver `borrador` en cada ficha.
 */
export type Modalidad = {
  slug: string;
  nombre: string;
  /** Título para <title> y buscadores: el nombre suelto no se lee bien. */
  tituloSeo: string;
  texto: string;
  variantes: string[];
  /** La Personalizada es la puerta de entrada al producto VIP. */
  destacada?: boolean;
  lead: string;
  paraQuien: string;
  comoFunciona: string[];
  incluye: string[];
  ideal: string[];
  borrador: boolean;
};

export const modalidades: Modalidad[] = [
  {
    slug: "personalizada",
    nombre: "Personalizada",
    tituloSeo: "Oratoria personalizada uno a uno",
    texto: "Uno a uno. Disponible como Oratoria Express o con acompañamiento.",
    variantes: ["Oratoria Express", "Oratoria con acompañamiento"],
    destacada: true,
    lead: "Uno a uno, agenda cerrada y un plan construido sobre tu punto de partida real.",
    paraQuien:
      "Profesionales y directivos que necesitan resultados concretos en poco tiempo, y quien prefiere trabajar sus bloqueos en privado.",
    comoFunciona: [
      "Sesiones individuales, solo tú y yo",
      "El plan se arma después del diagnóstico, no antes",
      "Ritmo y horarios ajustados a tu agenda",
      "Seguimiento directo entre sesión y sesión",
    ],
    incluye: [
      "Diagnóstico inicial de tu comunicación",
      "Plan de trabajo a tu medida",
      "Ejercicios prácticos entre sesiones",
      "Retroalimentación grabada de tus intervenciones",
    ],
    ideal: [
      "Preparar una ponencia o presentación concreta",
      "Ganar presencia para un nuevo cargo",
      "Superar el miedo escénico sin exponerte ante un grupo",
    ],
    borrador: true,
  },
  {
    slug: "semi-personalizada",
    nombre: "Semi-personalizada",
    tituloSeo: "Oratoria en grupos de tres",
    texto: "Grupos reducidos de 3 participantes.",
    variantes: [],
    lead: "Grupos de tres: atención cercana y el empuje de practicar con otros.",
    paraQuien:
      "Quien quiere el detalle del acompañamiento individual pero prefiere aprender viendo a otros y recibir su mirada.",
    comoFunciona: [
      "Máximo tres participantes por grupo",
      "Cada quien trabaja su propio caso",
      "Práctica cruzada: hablas y también escuchas",
      "Retroalimentación mía y de tus compañeros",
    ],
    incluye: [
      "Diagnóstico individual dentro del grupo",
      "Ejercicios de práctica en vivo",
      "Retroalimentación estructurada",
      "Material de apoyo",
    ],
    ideal: [
      "Practicar ante público sin exponerte a una sala llena",
      "Compartir la inversión sin perder cercanía",
      "Aprender también de los errores ajenos",
    ],
    borrador: true,
  },
  {
    slug: "grupal-abierto",
    nombre: "Grupal abierto",
    tituloSeo: "Talleres de oratoria en grupo abierto",
    texto: "Talleres abiertos con inscripción individual.",
    variantes: [],
    lead: "Talleres con inscripción individual: la forma más accesible de empezar.",
    paraQuien:
      "Quien quiere dar el primer paso en oratoria sin comprometerse a un programa largo, y quien aprende mejor en grupo.",
    comoFunciona: [
      "Fechas abiertas anunciadas con antelación",
      "Te inscribes por tu cuenta, sin necesidad de grupo",
      "Formato taller: se practica desde el primer día",
      "Grupos con perfiles variados",
    ],
    incluye: [
      "Sesión práctica de oratoria",
      "Ejercicios de voz, postura y estructura",
      "Material de apoyo",
      "Certificado de participación",
    ],
    ideal: [
      "Probar la metodología antes de un programa mayor",
      "Perder el miedo a hablar delante de desconocidos",
      "Empezar con una inversión contenida",
    ],
    borrador: true,
  },
  {
    slug: "empresarial",
    nombre: "Empresarial / Corporativo",
    tituloSeo: "Oratoria empresarial e in-company",
    texto: "Programas in-company diseñados a la medida de la organización.",
    variantes: [],
    lead: "Programas in-company diseñados sobre lo que le pasa de verdad a tu equipo.",
    paraQuien:
      "Empresas e instituciones que necesitan mejorar la comunicación de un área concreta o de toda la organización.",
    comoFunciona: [
      "Reunión exploratoria con la empresa",
      "Diagnóstico de las debilidades del equipo",
      "Propuesta de capacitación a la medida",
      "Ejecución in-company, en tus instalaciones o en remoto",
    ],
    incluye: [
      "Diagnóstico previo del equipo",
      "Programa diseñado a la medida",
      "Sesiones presenciales o remotas",
      "Informe de cierre con resultados y recomendaciones",
    ],
    ideal: [
      "Equipos comerciales que necesitan cerrar mejor",
      "Áreas de atención al cliente y call center",
      "Programas de liderazgo y habilidades blandas",
    ],
    borrador: true,
  },
];

export const getModalidad = (slug: string) =>
  modalidades.find((m) => m.slug === slug);


/**
 * Categorías de oratoria. Cada una tiene su propia página en /formacion/[slug].
 *
 * Los nombres de las 7 categorías salen textualmente del documento de Mariangi.
 * El desarrollo de cada ficha (objetivo, beneficios, contenidos, resultados) es
 * un BORRADOR redactado a partir de su metodología (Locución + Coaching + PNL)
 * y de la estructura de "Portafolio comercial" que pide su propio documento.
 * Debe validarlo antes de publicar: ver `borrador` en cada ficha.
 */
export type CategoriaOratoria = {
  slug: string;
  nombre: string;
  texto: string;
  eje: string;
  objetivo: string;
  publico: string;
  beneficios: string[];
  contenidos: string[];
  resultados: string[];
  borrador: boolean;
};

export const categoriasOratoria: CategoriaOratoria[] = [
  {
    slug: "oratoria-gerencial",
    nombre: "Oratoria Gerencial",
    texto: "Presencia y autoridad comunicacional para posiciones de liderazgo.",
    eje: "Liderazgo",
    objetivo:
      "Desarrollar la presencia y la autoridad comunicacional que exige una posición de liderazgo, para que el mensaje del gerente se sostenga tanto en una reunión de directorio como frente a todo el equipo.",
    publico:
      "Gerentes, directores, jefes de área y profesionales en posiciones de decisión.",
    beneficios: [
      "Hablar con autoridad sin caer en la imposición",
      "Sostener la calma y el mensaje bajo presión",
      "Transmitir decisiones difíciles con claridad",
      "Ganar credibilidad frente a pares y superiores",
    ],
    contenidos: [
      "Presencia ejecutiva: postura, mirada y manejo del espacio",
      "Voz de mando: proyección, ritmo y uso del silencio",
      "Estructura de un mensaje directivo",
      "Comunicación de decisiones y cambios organizacionales",
      "Manejo de preguntas incómodas y objeciones internas",
    ],
    resultados: [
      "Reuniones más cortas y con decisiones claras",
      "Mayor adhesión del equipo a las directrices",
      "Discurso institucional coherente hacia afuera",
    ],
    borrador: true,
  },
  {
    slug: "oratoria-en-ventas",
    nombre: "Oratoria en Ventas",
    texto: "Discurso persuasivo orientado al cierre y a la relación comercial.",
    eje: "Comercial",
    objetivo:
      "Convertir la conversación comercial en un proceso con estructura: abrir, generar interés, manejar la objeción y cerrar, sin sonar a guion memorizado.",
    publico:
      "Equipos comerciales, vendedores de piso, representantes y emprendedores que venden su propio servicio.",
    beneficios: [
      "Un discurso propio, no un guion recitado",
      "Manejo de objeciones sin ponerse a la defensiva",
      "Cierres más naturales y menos forzados",
      "Confianza en la primera conversación con el cliente",
    ],
    contenidos: [
      "Apertura y construcción de rapport",
      "Detección de necesidad real mediante preguntas",
      "Argumentación por beneficio, no por característica",
      "Tratamiento de objeciones frecuentes",
      "Técnicas de cierre y seguimiento",
    ],
    resultados: [
      "Mayor tasa de conversión en la conversación comercial",
      "Discurso homogéneo en todo el equipo de ventas",
      "Menos abandono frente a la primera objeción",
    ],
    borrador: true,
  },
  {
    slug: "oratoria-para-equipos",
    nombre: "Oratoria para Trabajo en Equipos",
    texto: "Comunicación interna, coordinación y claridad entre pares.",
    eje: "Habilidades Blandas",
    objetivo:
      "Mejorar la calidad de la comunicación entre pares para que la información no se pierda, no se distorsione y no genere retrabajo.",
    publico:
      "Equipos de trabajo, departamentos que dependen unos de otros y grupos con alta rotación de información.",
    beneficios: [
      "Menos malentendidos y retrabajo",
      "Reuniones internas más productivas",
      "Petición y entrega de tareas con criterios claros",
      "Mejor clima entre áreas",
    ],
    contenidos: [
      "Escucha activa y verificación del mensaje",
      "Cómo pedir y cómo entregar una tarea",
      "Feedback entre pares sin desgaste",
      "Comunicación en reuniones: aportar sin dispersar",
      "Acuerdos y cierre de conversaciones",
    ],
    resultados: [
      "Reducción de errores por mala comunicación",
      "Coordinación más ágil entre áreas",
      "Equipos que resuelven sin escalar todo al jefe",
    ],
    borrador: true,
  },
  {
    slug: "comunicacion-asertiva",
    nombre: "Comunicación Asertiva",
    texto: "Decir lo necesario, en el momento justo y de la forma correcta.",
    eje: "Habilidades Blandas",
    objetivo:
      "Dar herramientas para expresar lo que se necesita decir sin agresividad y sin sumisión, sosteniendo la relación y el objetivo al mismo tiempo.",
    publico:
      "Cualquier profesional o equipo que necesite conversaciones difíciles: liderazgo, atención al público, áreas en tensión.",
    beneficios: [
      "Decir que no sin romper la relación",
      "Plantear un desacuerdo sin escalarlo",
      "Poner límites con claridad y respeto",
      "Bajar el desgaste emocional del día a día",
    ],
    contenidos: [
      "Los tres estilos: pasivo, agresivo y asertivo",
      "Lenguaje en primera persona",
      "Cómo estructurar una conversación difícil",
      "Manejo de la reacción emocional propia y ajena",
      "Herramientas de PNL aplicadas a la conversación",
    ],
    resultados: [
      "Conflictos que se resuelven antes de escalar",
      "Mejor clima laboral",
      "Conversaciones difíciles que dejan de postergarse",
    ],
    borrador: true,
  },
  {
    slug: "atencion-al-cliente",
    nombre: "Atención al Cliente",
    texto: "Trato, tono y resolución en el punto de contacto con el cliente.",
    eje: "Servicio",
    objetivo:
      "Estandarizar la calidad del trato en el punto de contacto, para que la experiencia del cliente no dependa de quién lo atienda ese día.",
    publico:
      "Personal de mostrador, recepción, caja, salón y cualquier rol en contacto directo con el cliente.",
    beneficios: [
      "Trato homogéneo en todo el personal",
      "Manejo del cliente molesto sin perder el control",
      "Lenguaje que resuelve en vez de excusarse",
      "Percepción de marca más profesional",
    ],
    contenidos: [
      "El primer contacto: los primeros 30 segundos",
      "Tono, ritmo y vocabulario de servicio",
      "Qué decir y qué no decir ante un reclamo",
      "Recuperación del cliente molesto",
      "Cierre de la atención y despedida",
    ],
    resultados: [
      "Menos reclamos por trato",
      "Experiencia consistente en todos los turnos",
      "Personal con criterio para resolver en el momento",
    ],
    borrador: true,
  },
  {
    slug: "atencion-al-cliente-call-center",
    nombre: "Atención al Cliente para Call Center",
    texto: "Locución telefónica, manejo de guion y control de la conversación.",
    eje: "Servicio",
    objetivo:
      "Trabajar la voz como única herramienta disponible: sin gesto ni mirada, el tono y la dicción sostienen toda la experiencia del cliente.",
    publico:
      "Operadores de call center, soporte telefónico, televentas y cobranzas.",
    beneficios: [
      "Voz clara y sostenida durante toda la jornada",
      "Guion que suena natural, no leído",
      "Control de la llamada sin sonar cortante",
      "Menos fatiga vocal",
    ],
    contenidos: [
      "Técnica vocal aplicada al teléfono: respiración y dicción",
      "Cuidado e higiene de la voz en jornadas largas",
      "Cómo leer un guion sin que se note",
      "Control del tiempo y del rumbo de la llamada",
      "Manejo del cliente alterado por teléfono",
    ],
    resultados: [
      "Llamadas más cortas y mejor resueltas",
      "Mayor satisfacción en encuestas post-llamada",
      "Menos ausentismo por afonía y fatiga vocal",
    ],
    borrador: true,
  },
  {
    slug: "habilidades-blandas",
    nombre: "Habilidades Blandas",
    texto:
      "Liderazgo, motivación, sentido de pertenencia y gestión de conflictos.",
    eje: "Habilidades Blandas",
    objetivo:
      "Trabajar las competencias que sostienen el desempeño de un equipo más allá de la parte técnica: liderazgo, motivación, pertenencia y manejo de conflictos.",
    publico:
      "Organizaciones completas, equipos en proceso de cambio y programas de desarrollo interno.",
    beneficios: [
      "Líderes que movilizan en vez de supervisar",
      "Equipos con sentido de pertenencia real",
      "Conflictos que se gestionan, no se acumulan",
      "Motivación sostenida en el tiempo",
    ],
    contenidos: [
      "Liderazgo: del cargo a la influencia",
      "Motivación al logro y foco en resultados",
      "Sentido de pertenencia y cultura de equipo",
      "Gestión de conflictos: detectar, abordar y cerrar",
      "Comunicación como herramienta transversal",
    ],
    resultados: [
      "Mejor clima organizacional",
      "Menor rotación del personal",
      "Equipos que sostienen el desempeño sin supervisión constante",
    ],
    borrador: true,
  },
];

export const getCategoria = (slug: string) =>
  categoriasOratoria.find((c) => c.slug === slug);

/**
 * TODO: el documento de Mariangi indica 10 conferencias.
 * Estas 6 son las que aparecen nombradas en el Word y el Visual CV.
 * Faltan 4 títulos por confirmar.
 */
export const conferencias = [
  {
    titulo: "El Líder de Tu Vida",
    linea: "Liderazgo",
    texto: "Liderazgo y empoderamiento femenino.",
  },
  {
    titulo: "Celébrate",
    linea: "Desarrollo personal",
    texto: "Autorreconocimiento y amor propio.",
  },
  {
    titulo: "Humanos de Alto Valor",
    linea: "Desarrollo personal",
    texto: "",
  },
  {
    titulo: "Mujeres que Inspiran",
    linea: "Liderazgo",
    texto: "",
  },
  {
    titulo: "Ética y Valores",
    linea: "Valores",
    texto: "",
  },
  {
    titulo: "Conferencia para Madres",
    linea: "Familia",
    texto: "",
  },
];

/**
 * Programas corporativos. Los tres diseñados para COLVEN pertenecen
 * al eje de Habilidades Blandas (así lo indica el documento).
 */
export const programasCorporativos = [
  {
    titulo: "Manejo de Conflictos y Comunicación Asertiva",
    eje: "Habilidades Blandas",
    objetivo:
      "Dotar al equipo de herramientas para resolver desacuerdos sin desgaste y comunicar con claridad bajo presión.",
  },
  {
    titulo: "Planificación Estratégica y Gestión del Tiempo",
    eje: "Habilidades Blandas",
    objetivo:
      "Ordenar prioridades, definir foco y sostener la ejecución en el día a día del equipo.",
  },
  {
    titulo: "Liderazgo y Motivación al Logro",
    eje: "Habilidades Blandas",
    objetivo:
      "Formar líderes capaces de movilizar a su gente hacia resultados concretos.",
  },
];

export const metodologia = {
  titulo: "Locución + Coaching + PNL",
  texto:
    "Fusiono técnicas de locución profesional con herramientas de Coaching y Programación Neurolingüística. No es solo aprender a hablar en público: es construir un mensaje que la otra persona pueda recibir y recordar.",
  pasos: [
    {
      n: "01",
      titulo: "Diagnóstico",
      texto: "Identificamos el punto de partida real de cada participante.",
    },
    {
      n: "02",
      titulo: "Técnica",
      texto: "Respiración, dicción, proyección y dominio de escenario.",
    },
    {
      n: "03",
      titulo: "Mensaje",
      texto: "Estructura, narrativa y adaptación al público objetivo.",
    },
    {
      n: "04",
      titulo: "Práctica",
      texto: "Ejercicio en vivo con retroalimentación directa.",
    },
  ],
};

export const pruebaFormacion = [
  { valor: "+200", label: "Profesionales capacitados en oratoria estratégica" },
  { valor: "2021", label: "Speaker desde" },
  { valor: "2022", label: "Mentorías con Academia USICA desde" },
];

/* ───────────────────────  Trayectoria (Visual CV)  ───────────────────── */

export const perfilProfesional = [
  "Comunicadora apasionada con 13 años de trayectoria.",
  "Creo firmemente en el poder de la comunicación y en la capacidad de un mensaje que, entregado con criterio y convicción, puede transformar cualquier circunstancia en una experiencia memorable.",
  "Fusiono técnicas de locución con herramientas de Coaching y Programación Neurolingüística (PNL) para desarrollar mensajes de alto impacto tanto en el ámbito corporativo como en cada proyecto de Televisión, Radio y Marca.",
];

export const radio = {
  titulo: "Locución y producción · Identidad sonora",
  texto:
    "He dominado diversos formatos y estilos de programación, desarrollando campañas publicitarias con identidad sonora: comerciales en vivo, cuñas pregrabadas y sweepers que potencian el posicionamiento de marca.",
  emisoras: [
    { nombre: "Marquesa", dial: "101.7 FM", periodo: "2013 – 2015" },
    { nombre: "Hits", dial: "97.7 FM", periodo: "2015 – 2018" },
    { nombre: "Circuito Líder Barinas", dial: "107.9 FM", periodo: "2016" },
    { nombre: "Mágica", dial: "90.9 FM", periodo: "2021 – 2026" },
  ],
};

export const imagenDeMarca = {
  titulo: "Imagen de marca",
  texto:
    "Como estratega audiovisual de contenido para empresas nacionales en sectores médicos, gastronómicos, industriales, automotrices y educativos. Adapto mensajes clave para maximizar la conexión con el consumidor, logrando alto impacto e interacción en cada campaña.",
  claim: "Versatilidad · Credibilidad · Impacto",
  sectores: [
    "Médico",
    "Gastronómico",
    "Industrial",
    "Automotriz",
    "Educativo",
  ],
};

export const hosting = {
  titulo: "Conducción & Hosting",
  texto:
    "Conducción profesional de eventos corporativos, institucionales y lanzamientos de marca, especializándome en narrar la historia de cada cliente para generar una conexión genuina y de alto impacto con audiencias masivas.",
  claim:
    "No es solo una presentación: es la conexión y experiencia con el público y el cliente.",
  hitos: [
    {
      grupo: "Eventos especiales",
      items: [
        "Fedecámaras Barinas — Cena de Gala",
        "Decoceca",
        "Torneo de Pádel Rayocero",
        "Campeonato de Gimnasia",
        "Híper Hadassa",
      ],
    },
    {
      grupo: "Inauguraciones",
      items: ["KardiaCM", "Fibex Telecom", "Mundo Plast", "Grupo Nuevo Desafío"],
    },
    {
      grupo: "Aniversarios",
      items: [
        "Hogar La Orquídea",
        "MAG",
        "Centro Comercial Dorado",
        "LP Autoparts",
        "Clínica de Cejas",
      ],
    },
  ],
};

export const formacionAcademica = [
  { especialidad: "Arquitectura", institucion: "Politécnico Santiago Mariño" },
  {
    especialidad: "Máster en PNL",
    institucion: "Instituto para el Avance con la PNL",
  },
  {
    especialidad: "Coaching Internacional",
    institucion: "ACP Coaching Madrid / UCAB",
  },
  {
    especialidad: "Coaching Deportivo",
    institucion: "ACI Academia Coaching Internacional",
  },
  {
    especialidad: "Locución Profesional",
    institucion: "Voces de Marca / Voces Mágicas",
  },
];

export const habilidades = [
  "Locución comercial",
  "Animación",
  "Improvisación",
  "Dominio de escenarios",
  "Entrevistas",
  "Creación de narrativa visual",
];

/* ─────────────────────────────  Marcas  ──────────────────────────────── */

export const marcas = [
  "Eurobuilding Express Barinas",
  "FIAT",
  "Domosa Maquinarias",
  "XTC",
  "Universe of Science & Innovation",
  "Super Oil Center",
  "La Orquídea",
  "Mágica 90.9 FM",
  "Fedecámaras",
  "TCT Racing Technologies",
  "Farmacia Santa Rosa",
  "Bristol Restaurant",
  "Mundo Plast",
  "MAG",
];

/* ────────────────────────────  Newsletter  ───────────────────────────── */

export const newsletter = {
  eyebrow: "Boletín",
  titulo: "Tips de comunicación en tu correo",
  texto:
    "Una vez al mes: ejercicios de oratoria, recursos para hablar en público y las fechas de los próximos talleres abiertos. Sin relleno y te puedes dar de baja cuando quieras.",
  placeholder: "tucorreo@ejemplo.com",
  cta: "Quiero recibirlo",
  nota: "Tu correo solo se usa para este boletín. Nunca se comparte.",
};

/* ─────────────────────────────  Contacto  ────────────────────────────── */

export const contactoIntro = {
  titulo: "¿Listos para conectar?",
  texto:
    "Cuéntame qué necesitas y te respondo con una propuesta concreta. Trabajo en toda Venezuela, presencial y remoto.",
};

/** Cada motivo precarga un mensaje distinto en WhatsApp. */
export const motivosContacto = [
  {
    id: "campana",
    label: "Campaña o imagen de marca",
    mensaje:
      "¡Hola Mariangi! Quiero información sobre tus planes de imagen de marca.",
  },
  {
    id: "evento",
    label: "Host para un evento",
    mensaje:
      "¡Hola Mariangi! Quiero consultar tu disponibilidad como host para un evento.",
  },
  {
    id: "locucion",
    label: "Locución o voz comercial",
    mensaje:
      "¡Hola Mariangi! Necesito una cotización de locución comercial.",
  },
  {
    id: "oratoria",
    label: "Programa de oratoria",
    mensaje:
      "¡Hola Mariangi! Me interesa un programa de oratoria. ¿Me cuentas las modalidades?",
  },
  {
    id: "corporativo",
    label: "Formación para mi empresa",
    mensaje:
      "¡Hola Mariangi! Quiero información sobre formación corporativa in-company.",
  },
  {
    id: "conferencia",
    label: "Conferencia",
    mensaje:
      "¡Hola Mariangi! Quiero invitarte como conferencista a un evento.",
  },
];
