import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GroupedFAQAccordion } from "@/components/faq-accordion";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { allFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Alberto Academy",
  description: "Respuestas claras sobre clases online, niveles, horarios, materiales, progreso y la conversación inicial de Alberto Academy.",
};

const categories = ["Clases", "Materiales", "Horarios", "Progreso"] as const;

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <SiteHeader />
      <section className="relative overflow-hidden bg-brand-navy px-4 py-12 text-white sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-5xl">
          <MotionReveal>
            <p className="section-kicker-dark">Preguntas frecuentes</p>
            <h1 className="section-heading mt-4 max-w-4xl text-white">Lo que conviene saber antes de comenzar.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Aquí encontrará respuestas directas sobre la modalidad, los horarios, los materiales, la evaluación del nivel y el progreso esperado.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:gap-12 lg:gap-14">
            <GroupedFAQAccordion items={allFaqs} categories={categories} />
            <MotionReveal className="rounded-xl bg-brand-navy p-5 text-white shadow-2xl shadow-brand-navy/14 sm:p-6 lg:p-8">
              <p className="section-kicker-dark">Su caso es único</p>
              <h2 className="mt-3 font-heading text-2xl font-normal sm:text-3xl">¿Tiene una pregunta sobre su nivel o sus objetivos?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                Solicite una conversación inicial gratuita. Alberto revisará su situación y le orientará sin compromiso de inscripción.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="button-primary">Solicitar conversación inicial <ArrowRight size={18} aria-hidden /></Link>
                <a href="mailto:albertoalex0033@gmail.com" className="button-secondary">Escribir por correo <Mail size={17} aria-hidden /></a>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
