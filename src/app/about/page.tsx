import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CalendarCheck, CheckCircle2, Compass, GraduationCap, HeartHandshake, LineChart, MessagesSquare, Trophy } from "lucide-react";
import { CountUpStat } from "@/components/count-up-stat";
import { MotionArticle, MotionImagePanel, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Sobre Alberto | Alberto Academy",
  description: "Conozca a Alberto A. Sosa, licenciado en Lenguas Modernas, su experiencia con más de 400 estudiantes y su método directo para enseñar idiomas.",
};

const academyStats = [
  { value: "4+", label: "Años de experiencia" },
  { value: "400+", label: "Estudiantes enseñados" },
  { value: "4", label: "Niveles de formación" },
  { value: "85%", label: "Método directo" },
];

const values = [
  { title: "Claridad mediante el contexto", copy: "Las palabras y estructuras se explican con comparaciones, sinónimos, antónimos e imágenes para facilitar una comprensión útil.", icon: Compass },
  { title: "Confianza mediante la práctica", copy: "La clase es interactiva, relajada y objetiva. El estudiante conversa, lee, practica y utiliza el idioma desde el inicio.", icon: MessagesSquare },
  { title: "Corrección con respeto", copy: "Alberto guía al estudiante para que reconozca el error y lo corrija sin sentirse expuesto o desmotivado.", icon: Trophy },
  { title: "Progreso que puede observarse", copy: "La comprensión, la fluidez y el desempeño se revisan cada dos unidades mediante práctica y evaluaciones.", icon: LineChart },
];

const journey = [
  { year: "2018", title: "Inicio en Lenguas Modernas", copy: "Alberto comenzó su formación universitaria en la Universidad Dominicana O&M." },
  { year: "2019", title: "Programa de Inglés por Inmersión", copy: "Completó el programa de inmersión y continuó fortaleciendo el idioma mediante lectura y estudio independiente." },
  { year: "2022", title: "Primeros pasos como docente", copy: "Comenzó a enseñar en el Colegio O&M Hostos School y retomó sus estudios universitarios." },
  { year: "2023", title: "Impact Language Institute", copy: "Se formó en su metodología de enseñanza y pasó a formar parte del equipo docente del instituto." },
  { year: "2024", title: "O&M English Program", copy: "Se incorporó al programa de inglés de O&M y obtuvo su licenciatura en Lenguas Modernas en diciembre." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface-cream text-brand-navy">
      <SiteHeader />
      <AboutHero />
      <AcademyIntro />
      <StatsDivider />
      <MethodValues />
      <Journey />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="orbital-grid absolute inset-0 opacity-10" />
      <div className="program-ring absolute -right-44 top-8 hidden size-[520px] rounded-full opacity-70 blur-2xl md:block" />
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch">
        <MotionReveal>
          <p className="section-kicker-dark">Sobre Alberto Academy</p>
          <h1 className="section-heading mt-4 max-w-4xl text-white">Una academia online con método, cercanía y un profesor al frente.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Alberto Academy nace de una realidad sencilla: muchas personas quieren aprender, pero no pueden ajustarse a la enseñanza presencial o siguen estudiando sin sentirse capaces de conversar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">Conversar con Alberto <CalendarCheck size={18} aria-hidden /></Link>
            <Link href="/programs#programs-hero" className="button-secondary">Explorar programas <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </MotionReveal>
        <MotionImagePanel delay={0.12} className="relative lg:pt-9">
          <div className="image-sheen relative aspect-[16/10] overflow-hidden rounded-xl border border-white/14 bg-brand-blue p-2 shadow-2xl shadow-brand-navy/24 sm:p-3 lg:h-full lg:aspect-auto">
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image src="/images/about-hero.webp" alt="Estudiante participando en una clase online de Alberto Academy" fill priority quality={82} sizes="(min-width: 1180px) 590px, (min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-brand-navy/12" />
            </div>
          </div>
        </MotionImagePanel>
      </div>
    </section>
  );
}

function AcademyIntro() {
  return (
    <section className="section-pad bg-surface-cream">
      <div className="section-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <MotionImagePanel className="relative pb-12 lg:pb-9">
          <div className="relative min-h-[360px] rounded-xl border border-brand-navy/14 p-2 shadow-2xl shadow-brand-navy/12 sm:min-h-[460px] sm:p-3 lg:h-full">
            <div className="image-sheen relative h-full min-h-[344px] overflow-hidden rounded-lg bg-brand-navy sm:min-h-[436px]">
              <Image src="/images/alberto-portrait-original.jpeg" alt="Alberto A. Sosa, fundador y profesor de Alberto Academy" fill quality={82} sizes="(min-width: 1180px) 500px, (min-width: 1024px) 42vw, 100vw" className="object-cover object-[center_16%]" />
            </div>
          </div>
          <div className="absolute -bottom-1 left-5 right-5 rounded-lg border border-white/14 bg-brand-blue/92 p-4 text-white shadow-xl shadow-brand-navy/20 backdrop-blur sm:left-7 sm:right-7">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-teal"><GraduationCap size={20} aria-hidden /></span>
              <div><p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/58">República Dominicana</p><p className="font-heading text-xl font-normal">Licenciado en Lenguas Modernas</p></div>
            </div>
          </div>
        </MotionImagePanel>

        <MotionReveal delay={0.12}>
          <p className="section-kicker">Alberto A. Sosa</p>
          <h2 className="section-heading mt-3 max-w-3xl">Experiencia académica puesta al servicio de una comunicación real.</h2>
          <div className="body-copy mt-5 space-y-4">
            <p>Alberto es licenciado en Lenguas Modernas y cuenta con más de cuatro años de experiencia docente. Ha enseñado a más de 400 estudiantes, desde los 9 años hasta la adultez.</p>
            <p>Su trayectoria incluye el Colegio O&M Hostos School, Impact Language Institute y el O&M English Program. Actualmente enseña en Impact Language Institute y en el programa de inglés de O&M.</p>
            <p>Decidió crear Alberto Academy para que más personas puedan estudiar desde cualquier lugar, con una formación seria y flexible que no dependa de asistir físicamente a un aula.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Licenciatura en Lenguas Modernas", "Diploma de Inglés por Inmersión", "Formación en Impact Language Institute", "Método directo"].map((badge) => <span key={badge} className="badge-blue">{badge}</span>)}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function StatsDivider() {
  return (
    <section className="bg-surface-cream px-4 pb-12 text-white sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
      <MotionReveal className="mx-auto grid max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-brand-navy shadow-2xl shadow-brand-navy/12 sm:grid-cols-2 lg:grid-cols-4">
        {academyStats.map((item) => (
          <div key={item.label} className="border-b border-white/10 p-6 last:border-b-0 sm:border-r lg:border-b-0 lg:p-7">
            <CountUpStat value={item.value} className="block font-heading text-[2.1rem] font-normal leading-none text-brand-teal-light" />
            <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.08em] text-white/58">{item.label}</p>
          </div>
        ))}
      </MotionReveal>
    </section>
  );
}

function MethodValues() {
  return (
    <section className="section-pad bg-brand-blue text-white">
      <div className="section-container">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker-dark">Cómo enseña Alberto</p>
          <h2 className="section-heading mt-3">85 % método directo. 100 % intención pedagógica.</h2>
          <p className="mt-5 leading-7 text-white/68">La traducción se utiliza solo como apoyo. La mayor parte de la clase invita al estudiante a comprender, asociar, responder y utilizar el idioma.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              ["30 %", "Conversación"],
              ["20 %", "Lectura"],
              ["20 %", "Gramática"],
              ["15 %", "Explicación"],
              ["15 %", "Evaluación"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/12 bg-white/[0.06] p-3 text-center">
                <p className="font-heading text-2xl text-brand-teal-light">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-white/62">{label}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <MotionArticle key={value.title} delay={index * 0.07} className="rounded-xl border border-white/14 bg-brand-navy p-5 sm:p-6">
                <span className="flex size-12 items-center justify-center rounded-lg bg-brand-teal"><Icon size={22} strokeWidth={1.8} aria-hidden /></span>
                <h3 className="mt-5 font-heading text-2xl font-normal">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{value.copy}</p>
              </MotionArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="relative overflow-hidden bg-brand-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="orbital-grid absolute inset-0 opacity-10" />
      <div className="section-container relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <MotionReveal>
          <p className="section-kicker-dark">Trayectoria</p>
          <h2 className="section-heading mt-3 max-w-3xl text-white">De estudiante constante a profesor de tres entornos educativos.</h2>
          <div className="mt-10 grid gap-4">
            {journey.map((item, index) => (
              <MotionArticle key={item.year} delay={index * 0.07} className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-[5rem_1fr]">
                <p className="font-heading text-3xl font-normal text-brand-teal-light">{item.year}</p>
                <div><h3 className="font-heading text-2xl font-normal">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/64">{item.copy}</p></div>
              </MotionArticle>
            ))}
          </div>
        </MotionReveal>
        <MotionImagePanel delay={0.12} className="relative mx-auto w-full max-w-[30rem]">
          <div className="relative aspect-[4/5] rounded-xl border border-white/22 p-2 shadow-2xl shadow-brand-navy/30 sm:p-3">
            <div className="image-sheen relative h-full overflow-hidden rounded-lg">
              <Image src="/images/about-journey-teaching.webp" alt="Alberto preparando materiales para sus clases de idiomas" fill quality={82} sizes="(min-width: 1180px) 440px, (min-width: 1024px) 40vw, 100vw" className="object-cover object-center" />
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-white/14 bg-brand-blue/92 p-4 text-white backdrop-blur">
            <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-md bg-brand-teal"><BookOpenCheck size={20} aria-hidden /></span><div><p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/58">Experiencia actual</p><p className="font-heading text-xl font-normal">Impact Language Institute y O&M English Program</p></div></div>
          </div>
        </MotionImagePanel>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionReveal className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-brand-navy text-white shadow-2xl shadow-brand-navy/16">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-8 lg:p-10"><p className="section-kicker-dark">La misión</p><h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">Ayudarle a construir una voz más segura en otro idioma.</h2><p className="mt-5 max-w-2xl leading-7 text-white/68">Con enseñanza progresiva, conversación contextual y seguimiento honesto, Alberto Academy busca convertir el estudio en una habilidad que usted pueda utilizar.</p></div>
          <div className="flex flex-col justify-end gap-4 border-t border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="grid size-12 place-items-center rounded-lg bg-brand-teal"><HeartHandshake size={24} aria-hidden /></div>
            <p className="text-sm leading-6 text-white/62">Comience con una conversación gratuita para conocer su nivel, sus objetivos y la ruta más conveniente.</p>
            <Link href="/contact" className="button-primary">Conversar con Alberto <CalendarCheck size={18} aria-hidden /></Link>
            <Link href="/programs#programs-hero" className="button-secondary">Ver programas <CheckCircle2 size={18} aria-hidden /></Link>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
