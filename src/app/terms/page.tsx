import type { Metadata } from "next";
import { CalendarClock, CreditCard, FileCheck2, GraduationCap, RefreshCcw, Scale } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Términos del servicio | Alberto Academy",
  description: "Términos sobre clases online, horarios, pagos, materiales y responsabilidades de estudiantes de Alberto Academy.",
};

const sections = [
  {
    title: "Descripción del servicio",
    icon: GraduationCap,
    copy: [
      "Alberto Academy ofrece enseñanza online de inglés y español mediante programas por niveles, clases individuales y grupales, tutorías y coaching especializado.",
      "La conversación inicial gratuita sirve para conocer objetivos y orientar el nivel. No constituye una clase de prueba.",
    ],
  },
  {
    title: "Reservas y horarios",
    icon: CalendarClock,
    copy: [
      "Las sesiones se confirman una vez acordados la fecha, la hora y el formato. Las clases privadas duran entre una y dos horas; las grupales duran dos horas y se imparten dos días por semana.",
      "El estudiante debe conectarse puntualmente con internet estable, micrófono y un teléfono inteligente o computadora.",
    ],
  },
  {
    title: "Pagos y planes",
    icon: CreditCard,
    copy: [
      "Los precios y condiciones se confirman antes de iniciar. Se aceptan transferencias y pagos con tarjeta mediante servicios en línea.",
      "Al finalizar el mes existe un periodo de gracia de 10 días. Después puede aplicarse un recargo de RD$300. Si existen dos meses de atraso, el servicio puede pausarse hasta completar los pagos pendientes.",
    ],
  },
  {
    title: "Asistencia y cambios",
    icon: RefreshCcw,
    copy: [
      "Las ausencias, justificadas o no, se registran en el control de asistencia. Se espera que el estudiante complete al menos el 75 % de asistencia para finalizar satisfactoriamente el programa.",
      "Los cambios de horario dependen de la disponibilidad y, en clases grupales, de que exista otro grupo con nivel y unidades compatibles. Las pausas deben coordinarse previamente.",
    ],
  },
  {
    title: "Materiales de aprendizaje",
    icon: FileCheck2,
    copy: [
      "Las clases pueden utilizar libros, PDF, videos, audios, presentaciones y ejercicios interactivos. Los materiales base con costo se cotizan por separado.",
      "Los recursos entregados son para uso personal del estudiante y no pueden venderse, distribuirse ni presentarse como parte de otro programa sin autorización.",
    ],
  },
  {
    title: "Responsabilidad del estudiante",
    icon: Scale,
    copy: [
      "El estudiante debe participar con respeto, realizar las prácticas acordadas y comunicar con honestidad sus necesidades de nivel, objetivos y horario.",
      "Alberto Academy ofrece estructura, enseñanza y seguimiento, pero los resultados dependen de la asistencia, la práctica, la constancia y el contexto de cada persona. No se garantizan resultados automáticos.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Términos del servicio"
      title="Condiciones claras para una experiencia de aprendizaje responsable."
      description="Estos términos explican cómo funcionan las clases, los horarios, los pagos, los materiales y la participación del estudiante."
      updated="22 de julio de 2026"
      sections={sections}
    />
  );
}
