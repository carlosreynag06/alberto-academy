import type { Metadata } from "next";
import { ClipboardCheck, Database, LockKeyhole, MailCheck, ShieldCheck, UserCheck } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidad | Alberto Academy",
  description: "Cómo Alberto Academy recopila, utiliza y protege la información compartida por estudiantes y personas interesadas.",
};

const sections = [
  {
    title: "Información que recopilamos",
    icon: Database,
    copy: [
      "Cuando usted solicita una conversación inicial, podemos recopilar su nombre, correo electrónico, teléfono, nivel aproximado, servicio de interés y los datos que decida compartir sobre sus objetivos.",
      "También podemos conservar comunicaciones relacionadas con horarios, inscripción, planificación de clases y seguimiento académico.",
    ],
  },
  {
    title: "Cómo utilizamos la información",
    icon: ClipboardCheck,
    copy: [
      "La información se utiliza para responder consultas, orientar su nivel, recomendar un programa, coordinar sesiones y personalizar la enseñanza.",
      "Alberto Academy no vende información personal ni la incorpora a listas de marketing ajenas a sus servicios.",
    ],
  },
  {
    title: "Material académico",
    icon: UserCheck,
    copy: [
      "Las notas de clase, ejercicios, muestras de escritura y observaciones de nivel pueden utilizarse para adaptar la enseñanza y medir el progreso.",
      "El trabajo del estudiante se trata como información privada y no se publica sin su autorización.",
    ],
  },
  {
    title: "Protección de datos",
    icon: LockKeyhole,
    copy: [
      "Alberto Academy aplica medidas administrativas y técnicas razonables para reducir el riesgo de acceso no autorizado, pérdida o uso indebido.",
      "Ningún servicio online puede garantizar seguridad absoluta; por eso se procura limitar la información a lo necesario para la comunicación y la enseñanza.",
    ],
  },
  {
    title: "Sus opciones",
    icon: ShieldCheck,
    copy: [
      "Usted puede solicitar la corrección o eliminación de sus datos de contacto cuando ya no sean necesarios para un servicio activo o un registro legítimo.",
      "También puede omitir información opcional, aunque esto podría limitar el nivel de personalización de la recomendación inicial.",
    ],
  },
  {
    title: "Contacto",
    icon: MailCheck,
    copy: [
      "Para consultas o solicitudes de privacidad, escriba a albertoalex0033@gmail.com.",
      "Esta política puede actualizarse a medida que Alberto Academy incorpore nuevas herramientas o servicios.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Política de privacidad"
      title="Su información merece un tratamiento claro y responsable."
      description="Esta política explica cómo Alberto Academy maneja los datos compartidos en consultas, conversaciones iniciales, clases y comunicaciones."
      updated="22 de julio de 2026"
      sections={sections}
    />
  );
}
