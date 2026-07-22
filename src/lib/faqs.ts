export type FAQItem = {
  question: string;
  answer: string;
  category: "Clases" | "Materiales" | "Horarios" | "Progreso";
};

export const allFaqs: FAQItem[] = [
  {
    question: "¿Las clases son online o presenciales?",
    answer:
      "Por el momento, todas las clases se imparten online. Alberto Academy utiliza Google Meet para las sesiones, Google Classroom para el seguimiento y WhatsApp para la comunicación.",
    category: "Clases",
  },
  {
    question: "¿Cuánto dura cada clase?",
    answer:
      "Las clases privadas duran entre una y dos horas, según lo acordado con el estudiante. Las clases grupales duran dos horas y se imparten dos días por semana.",
    category: "Horarios",
  },
  {
    question: "¿Necesito saber mi nivel antes de empezar?",
    answer:
      "No necesita llegar con una certificación de nivel. Durante la conversación inicial se revisan sus objetivos y conocimientos actuales. Si desea una evaluación más completa, puede realizar una prueba opcional de lectura, gramática, comprensión auditiva y uso del idioma.",
    category: "Progreso",
  },
  {
    question: "¿Qué sucede si falto a una clase?",
    answer:
      "La ausencia, justificada o no, queda registrada en el control de asistencia. Para completar satisfactoriamente el programa se espera una asistencia mínima del 75 %. Cualquier situación particular puede conversarse directamente con Alberto.",
    category: "Horarios",
  },
  {
    question: "¿Puedo cambiar mi horario?",
    answer:
      "Sí, cuando exista otro grupo de nivel similar y ambos estén trabajando unidades compatibles. En clases privadas, cualquier ajuste depende de la disponibilidad acordada con Alberto.",
    category: "Horarios",
  },
  {
    question: "¿Hay clases grupales?",
    answer:
      "Sí. Los grupos se organizan por nivel y se reúnen dos veces por semana durante dos horas por sesión.",
    category: "Clases",
  },
  {
    question: "¿Alberto trabaja con niños o solo con adultos?",
    answer:
      "Alberto ha enseñado a estudiantes desde los 9 años. La atención principal está dirigida a adultos, universitarios y profesionales, aunque también puede trabajar con niños y adolescentes según sus necesidades.",
    category: "Clases",
  },
  {
    question: "¿Puedo prepararme para entrevistas, exámenes o inglés de negocios?",
    answer:
      "Sí. Las sesiones pueden enfocarse en entrevistas laborales, exámenes, negocios, viajes, conversación, gramática, escritura, pronunciación y situaciones específicas de comunicación.",
    category: "Clases",
  },
  {
    question: "¿Se incluyen materiales?",
    answer:
      "Las clases utilizan libros, PDF, videos, audios, presentaciones y ejercicios interactivos. Se entregan recursos descargables cuando corresponde; los libros o materiales base con costo se cotizan por separado antes de la inscripción.",
    category: "Materiales",
  },
  {
    question: "¿Se asignan tareas después de cada clase?",
    answer:
      "Solo cuando el tema lo requiere. Las actividades pueden incluir ejercicios, proyectos, presentaciones y prácticas individuales o en grupos pequeños.",
    category: "Materiales",
  },
  {
    question: "¿Cuándo comenzaré a notar progreso?",
    answer:
      "El primer nivel suele desarrollarse en un periodo aproximado de tres a seis meses. El avance depende de la asistencia, la práctica y la responsabilidad de cada estudiante; Alberto Academy no ofrece promesas irreales de resultados.",
    category: "Progreso",
  },
  {
    question: "¿Puedo pausar mi plan?",
    answer:
      "Sí. La pausa debe coordinarse con Alberto Academy para revisar pagos, disponibilidad y la mejor forma de retomar el nivel sin perder continuidad.",
    category: "Horarios",
  },
  {
    question: "¿Qué necesito para tomar clases online?",
    answer:
      "Solo necesita un teléfono inteligente o una computadora, conexión estable a internet, micrófono y un espacio donde pueda participar activamente.",
    category: "Clases",
  },
  {
    question: "¿La conversación inicial es una clase de prueba?",
    answer:
      "No. Alberto Academy no ofrece clases de prueba. La primera conversación, de hasta una hora y sin costo, sirve para conocer sus objetivos, orientar su nivel y recomendarle el programa adecuado.",
    category: "Progreso",
  },
];

export const homepageFaqs = allFaqs.slice(0, 4);
