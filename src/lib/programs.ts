export type ProgramTrack = {
  id: string;
  title: string;
  shortTitle: string;
  detail: string;
  badge: string;
  format: string;
  image: string;
  imageAlt: string;
  focus: string;
  support: string;
  eyebrow: string;
  headline: string;
  description: string;
  outcomes: string[];
  bestFor: string;
};

export const programTracks: ProgramTrack[] = [
  {
    id: "programa-por-niveles",
    title: "Programa de inglés por niveles",
    shortTitle: "Ruta completa",
    detail: "Una ruta de cuatro niveles, cada uno estructurado en 14 módulos, que integra conversación, comprensión auditiva, lectura y escritura.",
    badge: "4 niveles",
    format: "Online",
    image: "/images/program-academic-career-portrait.webp",
    imageAlt: "Estudiante participando en un programa de inglés online por niveles",
    focus: "14 módulos",
    support: "Evaluación continua",
    eyebrow: "Avance progresivo",
    headline: "Construya una base sólida y avance hacia conversaciones cada vez más naturales.",
    description:
      "El programa completo se proyecta a dos años. Durante los primeros tres meses, la ruta apunta a construir una base aproximada de 300 a 500 palabras para comenzar conversaciones reales; el resultado depende de la asistencia y la práctica de cada estudiante.",
    outcomes: ["Vocabulario funcional", "Las cuatro habilidades", "Conversación guiada", "Certificado de finalización"],
    bestFor: "Personas principiantes o de nivel intermedio que desean una ruta completa, ordenada y de largo plazo.",
  },
  {
    id: "clases-individuales",
    title: "Clases privadas de inglés",
    shortTitle: "Atención 1 a 1",
    detail: "Sesiones privadas adaptadas a su nivel, ritmo, objetivos y necesidades de comunicación.",
    badge: "Uno a uno",
    format: "Online",
    image: "/images/program-live-speaking-portrait.webp",
    imageAlt: "Estudiante practicando inglés en una clase individual online",
    focus: "Plan personal",
    support: "Corrección directa",
    eyebrow: "Atención personalizada",
    headline: "Trabaje exactamente lo que necesita, con seguimiento cercano de Alberto.",
    description:
      "Cada clase se adapta a su nivel y a la forma en que utilizará el idioma. Puede enfocarse en conversación, gramática aplicada, pronunciación, comprensión, escritura o una combinación de estas áreas.",
    outcomes: ["Más seguridad al hablar", "Corrección personalizada", "Ritmo flexible", "Objetivos concretos"],
    bestFor: "Profesionales, universitarios y adultos que valoran la atención individual y un plan ajustado a su realidad.",
  },
  {
    id: "clases-grupales",
    title: "Clases grupales de inglés",
    shortTitle: "Aprendizaje en grupo",
    detail: "Práctica estructurada con estudiantes de nivel similar, dos veces por semana.",
    badge: "Grupos por nivel",
    format: "2 días por semana",
    image: "/images/online-english-session.webp",
    imageAlt: "Grupo de estudiantes en una clase de inglés online",
    focus: "Interacción real",
    support: "2 horas por clase",
    eyebrow: "Aprenda acompañado",
    headline: "Practique, escuche y gane soltura en un grupo alineado con su nivel.",
    description:
      "Las clases grupales combinan explicación, conversación, lectura, ejercicios y práctica. Los grupos se organizan por nivel para que cada estudiante pueda participar y avanzar con una base adecuada.",
    outcomes: ["Práctica conversacional", "Trabajo colaborativo", "Rutina constante", "Progreso por nivel"],
    bestFor: "Estudiantes que desean una estructura fija, interacción con otros participantes y una inversión mensual accesible.",
  },
  {
    id: "tutorias-personalizadas",
    title: "Tutorías personalizadas",
    shortTitle: "Apoyo puntual",
    detail: "Sesiones para resolver una necesidad específica por día, por semana o según el objetivo.",
    badge: "Enfoque específico",
    format: "Flexible",
    image: "/images/program-writing-track-portrait.webp",
    imageAlt: "Estudiante recibiendo una tutoría personalizada de inglés online",
    focus: "Dudas concretas",
    support: "Práctica dirigida",
    eyebrow: "Resuelva lo que le frena",
    headline: "Obtenga apoyo preciso sin inscribirse en un programa completo.",
    description:
      "Las tutorías están pensadas para estudiantes que necesitan reforzar un tema, preparar una asignación, mejorar un texto, practicar una presentación o aclarar una dificultad puntual.",
    outcomes: ["Explicación clara", "Práctica focalizada", "Apoyo académico", "Sesiones flexibles"],
    bestFor: "Estudiantes que ya tienen una meta o dificultad específica y necesitan orientación profesional para resolverla.",
  },
  {
    id: "coaching-especializado",
    title: "Coaching especializado",
    shortTitle: "Metas profesionales",
    detail: "Preparación enfocada para entrevistas, exámenes, negocios, viajes y pronunciación.",
    badge: "Objetivos reales",
    format: "Plan a medida",
    image: "/images/program-academic-career-portrait.webp",
    imageAlt: "Profesional preparándose para una entrevista en inglés",
    focus: "Entrevistas y exámenes",
    support: "Contexto y cultura",
    eyebrow: "Prepárese con intención",
    headline: "Llegue a ese momento importante con lenguaje, práctica y criterio.",
    description:
      "El coaching parte de una situación concreta: una entrevista laboral, un examen, una conversación de negocios, un viaje o una dificultad de pronunciación. Cada sesión trabaja el vocabulario y el contexto que realmente necesitará.",
    outcomes: ["Respuestas más claras", "Vocabulario relevante", "Práctica contextual", "Mayor preparación"],
    bestFor: "Personas con una fecha, oportunidad o reto específico que requiere preparación intensiva y relevante.",
  },
  {
    id: "espanol-para-extranjeros",
    title: "Español para extranjeros",
    shortTitle: "Spanish coaching",
    detail: "Clases prácticas de español para comunicarse con confianza en situaciones reales.",
    badge: "Español",
    format: "Online",
    image: "/images/spanish-for-foreigners-online.webp",
    imageAlt: "Estudiante extranjero aprendiendo español en una sesión online",
    focus: "Comunicación práctica",
    support: "Contexto cultural",
    eyebrow: "Spanish for real life",
    headline: "Aprenda español para comunicarse con claridad en situaciones reales.",
    description:
      "Alberto Academy también ofrece enseñanza de español para personas de habla inglesa. El plan se adapta a viajes, trabajo, vida cotidiana, estudios o integración cultural.",
    outcomes: ["Conversación práctica", "Pronunciación guiada", "Vocabulario cotidiano", "Comprensión cultural"],
    bestFor: "Extranjeros de habla inglesa que desean aprender español con una guía clara, progresiva y personalizada.",
  },
];
