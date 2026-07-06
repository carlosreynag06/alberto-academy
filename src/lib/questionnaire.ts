export type QuestionnaireQuestion = {
  id: number;
  text: string;
};

export type QuestionnaireSection = {
  id: string;
  title: string;
  questions: QuestionnaireQuestion[];
};

export const questionnaireSections: QuestionnaireSection[] = [
  {
    id: "informacion-general",
    title: "Información General",
    questions: [
      { id: 1, text: "¿Cuál es el nombre oficial del negocio: Alberto Academy u otro?" },
      { id: 2, text: "¿Cómo quieres que se presente la marca: academia, tutoría privada, escuela online, instituto, coaching de idiomas?" },
      { id: 3, text: "¿Cuál es la promesa principal de tu negocio en una frase?" },
      { id: 4, text: "¿Qué hace diferente tu forma de enseñar comparada con otros profesores o academias?" },
      { id: 5, text: "¿Quieres que el sitio esté en español por defecto y tenga opción de cambiar a inglés?" },
      { id: 6, text: "¿A qué tipo de estudiante quieres atraer principalmente?" },
    ],
  },
  {
    id: "idiomas-y-servicios",
    title: "Idiomas Y Servicios",
    questions: [
      { id: 7, text: "¿Vas a enseñar solo inglés o también español?" },
      { id: 8, text: "Si vas a enseñar español, ¿será para extranjeros, turistas, profesionales, niños, adultos u otro público?" },
      { id: 9, text: "¿Qué servicios exactos vas a ofrecer?" },
      { id: 10, text: "¿Ofrecerás clases privadas, grupales o ambas?" },
      { id: 11, text: "¿Las clases serán online solamente o también presenciales?" },
      { id: 12, text: "Si hay clases presenciales, ¿en qué ciudad/zona?" },
      { id: 13, text: "¿Ofrecerás preparación para entrevistas, exámenes, negocios, viajes, conversación, gramática, escritura o pronunciación?" },
      { id: 14, text: "¿Ofrecerás cursos completos, tutorías sueltas, paquetes mensuales o programas por niveles?" },
    ],
  },
  {
    id: "publico-objetivo",
    title: "Público Objetivo",
    questions: [
      { id: 15, text: "¿Tus estudiantes ideales son adultos, adolescentes, niños, profesionales, universitarios o empresas?" },
      { id: 16, text: "¿El enfoque principal será para hispanohablantes que quieren aprender inglés?" },
      { id: 17, text: "¿También quieres atraer extranjeros que quieran aprender español?" },
      { id: 18, text: "¿Qué problemas tienen tus estudiantes antes de tomar clases contigo?" },
      { id: 19, text: "¿Qué metas suelen tener: hablar con confianza, conseguir trabajo, viajar, aprobar exámenes, mejorar notas, atender clientes?" },
      { id: 20, text: "¿Hay algún tipo de estudiante que no quieres atraer?" },
    ],
  },
  {
    id: "programas-cursos",
    title: "Programas / Cursos",
    questions: [
      { id: 21, text: "¿Cuáles serán los programas o cursos reales que ofrecerás?" },
      { id: 22, text: "¿Cómo se llama cada curso o servicio?" },
      { id: 23, text: "¿Qué incluye cada curso?" },
      { id: 24, text: "¿Cuánto dura cada curso o programa?" },
      { id: 25, text: "¿Cuántos módulos tiene cada curso?" },
      { id: 26, text: "¿Cuáles son los temas o módulos principales de cada curso?" },
      { id: 27, text: "¿Cada curso tiene niveles: principiante, intermedio, avanzado?" },
      { id: 28, text: "¿Cómo determinas el nivel inicial del estudiante?" },
      { id: 29, text: "¿Qué resultados concretos puede esperar un estudiante al terminar cada curso?" },
      { id: 30, text: "¿Habrá certificados de finalización?" },
    ],
  },
  {
    id: "metodologia",
    title: "Metodología",
    questions: [
      { id: 31, text: "¿Qué método de enseñanza utilizas?" },
      { id: 32, text: "¿Utilizas Direct Method, enfoque comunicativo, gramática aplicada, inmersión, práctica conversacional u otro método?" },
      { id: 33, text: "¿Cómo es una clase típica contigo?" },
      { id: 34, text: "¿Qué porcentaje de la clase es conversación, explicación, corrección, ejercicios o práctica?" },
      { id: 35, text: "¿Dejas tareas después de cada clase?" },
      { id: 36, text: "¿Cómo corriges errores sin hacer sentir incómodo al estudiante?" },
      { id: 37, text: "¿Cómo mides el progreso del estudiante?" },
      { id: 38, text: "¿Cada cuánto haces revisión de progreso?" },
    ],
  },
  {
    id: "precios-y-paquetes",
    title: "Precios Y Paquetes",
    questions: [
      { id: 39, text: "¿Cuáles serán los precios reales?" },
      { id: 40, text: "¿Cobrarás por clase individual, paquete mensual, curso completo o membresía?" },
      { id: 41, text: "¿Cuánto cuesta una clase privada?" },
      { id: 42, text: "¿Cuánto cuesta una clase grupal?" },
      { id: 43, text: "¿Cuánto cuesta cada paquete o plan?" },
      { id: 44, text: "¿Ofrecerás una clase de prueba gratis?" },
      { id: 45, text: "Si hay clase de prueba, ¿cuánto dura y qué incluye?" },
      { id: 46, text: "¿Tendrás descuentos por pago mensual, pago completo o grupos?" },
      { id: 47, text: "¿Cuáles métodos de pago aceptarás?" },
      { id: 48, text: "¿Cuál será la política de cancelación o reprogramación?" },
    ],
  },
  {
    id: "proceso-de-registro",
    title: "Proceso De Registro",
    questions: [
      { id: 49, text: "¿Qué pasa exactamente después de que un prospecto llena el formulario?" },
      { id: 50, text: "¿Quién responde el mensaje y en cuánto tiempo?" },
      { id: 51, text: "¿El estudiante agenda directamente o primero hay una conversación por WhatsApp/email?" },
      { id: 52, text: "¿Qué información necesitas antes de recomendar un plan?" },
      { id: 53, text: "¿Cómo se agenda la clase de prueba?" },
      { id: 54, text: "¿Qué sucede durante la clase de prueba?" },
      { id: 55, text: "¿Qué recibe el estudiante después de la clase de prueba?" },
      { id: 56, text: "¿Qué plataformas usarás: Zoom, Google Meet, WhatsApp, Google Classroom, otra?" },
    ],
  },
  {
    id: "materiales-y-recursos",
    title: "Materiales Y Recursos",
    questions: [
      { id: 57, text: "¿Tienes materiales propios?" },
      { id: 58, text: "¿Cuáles son los nombres reales de tus cursos o materiales?" },
      { id: 59, text: "¿Usas libros, PDFs, videos, ejercicios interactivos, audios o presentaciones?" },
      { id: 60, text: "¿Los estudiantes reciben materiales descargables?" },
      { id: 61, text: "¿Los materiales están incluidos en el precio?" },
      { id: 62, text: "¿Tendrás recursos gratuitos en el sitio?" },
      { id: 63, text: "¿Planeas tener blog, guías, videos o recursos descargables en el futuro?" },
    ],
  },
  {
    id: "sobre-alberto",
    title: "Sobre Alberto",
    questions: [
      { id: 64, text: "¿Cuál es tu nombre completo y cómo quieres aparecer en el sitio?" },
      { id: 65, text: "¿Cuántos años de experiencia tienes enseñando?" },
      { id: 66, text: "¿Dónde has enseñado?" },
      { id: 67, text: "¿Actualmente enseñas en alguna institución?" },
      { id: 68, text: "¿Qué certificaciones, cursos, diplomas o entrenamientos tienes?" },
      { id: 69, text: "¿Qué experiencia tienes creando cursos?" },
      { id: 70, text: "¿Cuántos estudiantes has enseñado aproximadamente?" },
      { id: 71, text: "¿Qué edades o perfiles de estudiantes has enseñado?" },
      { id: 72, text: "¿Cuál es tu historia personal con el inglés o la enseñanza?" },
      { id: 73, text: "¿Por qué decidiste crear Alberto Academy?" },
    ],
  },
  {
    id: "pruebas-sociales-testimonios",
    title: "Pruebas Sociales / Testimonios",
    questions: [
      { id: 74, text: "¿Tienes testimonios reales de estudiantes?" },
      { id: 75, text: "¿Podemos usar nombres reales o iniciales?" },
      { id: 76, text: "¿Podemos usar fotos reales o prefieres testimonios sin foto?" },
      { id: 77, text: "¿Qué resultados reales han logrado tus estudiantes?" },
      { id: 78, text: "¿Algún estudiante consiguió trabajo, aprobó examen, mejoró notas o ganó confianza hablando?" },
      { id: 79, text: "¿Tienes números reales: estudiantes enseñados, años, niveles, cursos creados, tasa de satisfacción?" },
    ],
  },
  {
    id: "preguntas-frecuentes",
    title: "Preguntas Frecuentes",
    questions: [
      { id: 80, text: "¿Qué preguntas te hacen más los estudiantes antes de inscribirse?" },
      { id: 81, text: "¿Las clases son online o presenciales?" },
      { id: 82, text: "¿Cuánto dura cada clase?" },
      { id: 83, text: "¿Necesito saber mi nivel antes de empezar?" },
      { id: 84, text: "¿Qué pasa si falto a una clase?" },
      { id: 85, text: "¿Puedo cambiar mi horario?" },
      { id: 86, text: "¿Hay clases grupales?" },
      { id: 87, text: "¿Trabajas con niños o solo adultos?" },
      { id: 88, text: "¿Ayudas con entrevistas, exámenes o inglés de negocios?" },
      { id: 89, text: "¿Incluyes materiales?" },
      { id: 90, text: "¿Cuánto tiempo tarda una persona en ver progreso?" },
      { id: 91, text: "¿Puedo pausar mi plan?" },
      { id: 92, text: "¿Qué necesito para tomar clases online?" },
    ],
  },
  {
    id: "contacto-y-operacion",
    title: "Contacto Y Operación",
    questions: [
      { id: 93, text: "¿Cuál email oficial debe aparecer en el sitio?" },
      { id: 94, text: "¿Cuál número de WhatsApp debe aparecer?" },
      { id: 95, text: "¿Qué redes sociales usarás: Facebook, Instagram, WhatsApp, YouTube, TikTok?" },
      { id: 96, text: "¿Cuál es tu horario de atención?" },
      { id: 97, text: "¿En qué zona horaria trabajas?" },
      { id: 98, text: "¿Aceptas estudiantes internacionales?" },
      { id: 99, text: "¿Quieres que el botón principal sea “Reservar clase de prueba”, “Agendar evaluación”, “Escríbeme por WhatsApp” u otro?" },
      { id: 100, text: "¿Cuál es la acción más importante que quieres que haga un visitante al entrar al sitio?" },
    ],
  },
  {
    id: "tono-de-marca",
    title: "Tono De Marca",
    questions: [
      { id: 101, text: "¿Quieres que el lenguaje sea formal, cercano, premium, motivador, académico o conversacional?" },
      { id: 102, text: "¿Prefieres hablar de “tú” o “usted”?" },
      { id: 103, text: "¿Quieres que la marca se sienta más como profesor personal, academia premium o entrenamiento profesional?" },
      { id: 104, text: "¿Hay frases, palabras o promesas que no quieres usar?" },
      { id: 105, text: "¿Hay algo que sí quieres repetir mucho en el mensaje de marca?" },
    ],
  },
];

export const questionnaireQuestionCount = questionnaireSections.reduce(
  (total, section) => total + section.questions.length,
  0,
);
