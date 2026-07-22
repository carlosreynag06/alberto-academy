import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, GraduationCap, HeartHandshake, MessageCircle, Sparkles, Trophy } from "lucide-react";
import { CountUpStat } from "@/components/count-up-stat";
import { MotionArticle, MotionImagePanel, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Resultados de estudiantes | Alberto Academy",
  description: "Conozca los resultados que Alberto ha observado en más de 400 estudiantes: mayor confianza, conversaciones más largas y logros académicos.",
};

const pageStats = [
  { value: "400+", label: "Estudiantes enseñados" },
  { value: "4+", label: "Años de experiencia" },
  { value: "4", label: "Niveles de formación" },
  { value: "9+", label: "Edades atendidas" },
];

const verifiedOutcomes = [
  { title: "Menos miedo al hablar", copy: "Estudiantes que antes evitaban participar han ganado seguridad para expresarse y equivocarse sin quedarse paralizados.", icon: MessageCircle },
  { title: "Conversaciones más largas", copy: "El crecimiento del vocabulario y la práctica contextual les han permitido sostener intercambios con mayor continuidad.", icon: Sparkles },
  { title: "Metas académicas cumplidas", copy: "Alberto ha acompañado a estudiantes que mejoraron su desempeño y lograron completar sus estudios satisfactoriamente.", icon: GraduationCap },
  { title: "Preparación para oportunidades", copy: "La enseñanza también ha apoyado objetivos relacionados con empleo, entrevistas, exámenes y comunicación profesional.", icon: Trophy },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <SiteHeader />
      <Hero />
      <StatsBand />
      <ResultsSection />
      <MethodSection />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy px-4 pb-20 pt-14 text-white sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
      <div className="orbital-grid absolute inset-0 opacity-10" />
      <div className="program-ring absolute -right-48 top-10 hidden size-[520px] rounded-full opacity-70 blur-2xl md:block" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <MotionReveal>
          <p className="section-kicker-dark">Resultados reales</p>
          <h1 className="section-heading mt-4 max-w-4xl text-white">El progreso se nota cuando el idioma deja de ser una barrera.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Después de enseñar a más de 400 estudiantes, Alberto ha visto un cambio repetirse: con estructura, práctica y constancia, el miedo cede y la comunicación comienza a fluir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">Solicitar conversación inicial <CalendarCheck size={18} aria-hidden /></Link>
            <a href="#resultados" className="button-secondary">Ver resultados observados <ArrowRight size={18} aria-hidden /></a>
          </div>
        </MotionReveal>
        <MotionImagePanel delay={0.12} className="relative">
          <div className="image-sheen relative aspect-[4/3] overflow-hidden rounded-xl border border-white/14 bg-brand-blue p-2 shadow-2xl shadow-brand-navy/24 sm:p-3">
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image src="/images/testimonial-graduates-alt.webp" alt="Estudiantes celebrando un logro académico" fill priority quality={82} sizes="(min-width: 1180px) 500px, (min-width: 1024px) 42vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </div>
          </div>
        </MotionImagePanel>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative z-10 bg-[linear-gradient(to_bottom,var(--brand-navy)_0%,var(--brand-navy)_50%,var(--surface-cream)_50%,var(--surface-cream)_100%)] px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-brand-blue shadow-2xl shadow-brand-navy/12 lg:grid-cols-4">
        {pageStats.map((item, index) => (
          <div key={item.label} className={`min-h-[7.5rem] border-r border-white/10 p-5 even:border-r-0 sm:min-h-[8.25rem] sm:p-6 lg:min-h-[9.25rem] lg:border-r lg:p-8 lg:last:border-r-0 ${index < 2 ? "border-b lg:border-b-0" : ""}`}>
            <CountUpStat value={item.value} className="block font-heading text-[2rem] font-normal leading-none text-brand-teal-light sm:text-[2.2rem] lg:text-[2.35rem]" />
            <p className="mt-3 text-[0.68rem] font-extrabold uppercase leading-tight tracking-[0.08em] text-white/62 sm:text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section id="resultados" className="section-pad bg-surface-cream">
      <div className="section-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="section-kicker">Lo que Alberto ha observado</p><h2 className="section-heading mt-3">Resultados que importan fuera del aula.</h2></div>
          <p className="body-copy-lg max-w-2xl lg:justify-self-end">No se presentan cifras infladas ni promesas automáticas. Estos son los tipos de progreso que Alberto ha visto en estudiantes reales a lo largo de su experiencia docente.</p>
        </MotionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {verifiedOutcomes.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionArticle key={item.title} delay={index * 0.07} className="rounded-xl border border-brand-navy/10 bg-surface-white p-5 shadow-xl shadow-brand-navy/6 sm:p-6">
                <div className="grid size-11 place-items-center rounded-lg bg-brand-blue text-white"><Icon size={21} strokeWidth={1.8} aria-hidden /></div>
                <h3 className="mt-5 font-heading text-2xl font-normal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/66">{item.copy}</p>
              </MotionArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <MotionReveal>
          <p className="section-kicker-dark">Qué sostiene el progreso</p>
          <h2 className="section-heading mt-3 text-white">Método, seguimiento y responsabilidad compartida.</h2>
          <p className="mt-5 max-w-xl leading-7 text-white/68">Alberto combina un 85 % de método directo con el apoyo puntual de la traducción. El progreso se revisa cada dos unidades mediante comprensión, fluidez, práctica y evaluaciones.</p>
        </MotionReveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Conversación e interacción", "Lectura y comprensión", "Gramática aplicada", "Corrección respetuosa"].map((outcome, index) => (
            <MotionArticle key={outcome} delay={index * 0.08} className="rounded-xl border border-white/12 bg-white/[0.06] p-5">
              <CheckCircle2 className="text-brand-teal-light" size={24} aria-hidden /><p className="mt-4 font-heading text-xl font-normal leading-tight">{outcome}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionReveal className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-brand-navy text-white shadow-2xl shadow-brand-navy/16">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="section-kicker-dark">Su próximo resultado comienza aquí</p>
            <h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">Descubra qué necesita para avanzar con más seguridad.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/68">La conversación inicial permite identificar su punto de partida y recomendarle una ruta realista, sin promesas vacías.</p>
          </div>
          <div className="flex flex-col justify-end gap-4 border-t border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="grid size-12 place-items-center rounded-lg bg-brand-teal text-white"><HeartHandshake size={24} aria-hidden /></div>
            <p className="text-sm leading-6 text-white/62">Los resultados dependen de su asistencia, práctica, constancia y responsabilidad.</p>
            <Link href="/contact" className="button-primary">Solicitar conversación inicial <CalendarCheck size={18} aria-hidden /></Link>
            <Link href="/programs#programs-hero" className="button-secondary">Explorar programas <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
