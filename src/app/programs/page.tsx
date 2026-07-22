import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, CalendarCheck, CheckCircle2, Languages, MessageCircle, PenLine, Users } from "lucide-react";
import { MotionArticle, MotionImagePanel, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { programTracks } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programas de idiomas | Alberto Academy",
  description: "Programas por niveles, clases individuales y grupales, tutorías, coaching especializado y español para extranjeros.",
};

const serviceIcons = {
  "programa-por-niveles": BookOpenCheck,
  "clases-individuales": MessageCircle,
  "clases-grupales": Users,
  "tutorias-personalizadas": PenLine,
  "coaching-especializado": BriefcaseBusiness,
  "espanol-para-extranjeros": Languages,
};

const primaryServiceIds = ["clases-individuales", "clases-grupales", "espanol-para-extranjeros"];
const additionalServiceIds = ["programa-por-niveles", "tutorias-personalizadas", "coaching-especializado"];
const primaryServices = programTracks.filter((program) => primaryServiceIds.includes(program.id));
const additionalServices = programTracks.filter((program) => additionalServiceIds.includes(program.id));

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface-cream text-brand-navy">
      <SiteHeader />
      <section id="programs-hero" className="relative isolate overflow-hidden bg-brand-navy px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="program-ring absolute -right-52 top-12 hidden size-[560px] rounded-full opacity-70 blur-2xl md:block" />
        <div className="mx-auto max-w-6xl">
          <MotionReveal>
            <p className="section-kicker-dark">Programas y servicios</p>
            <h1 className="section-heading mt-4 max-w-4xl text-white">Una ruta para cada objetivo. Un método que convierte el conocimiento en comunicación.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Estudie por niveles, reciba atención individual, aprenda en grupo o prepárese para una meta específica. Todos los servicios son online y se ajustan a su punto de partida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">Solicitar conversación inicial <CalendarCheck size={18} aria-hidden /></Link>
              <a href="#servicios-principales" className="button-secondary">Ver opciones <ArrowRight size={18} aria-hidden /></a>
            </div>
          </MotionReveal>
        </div>
      </section>

      <PrimaryServices />
      <AdditionalServices />

      <section className="bg-surface-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <MotionReveal className="mx-auto max-w-6xl rounded-xl bg-brand-navy p-6 text-white shadow-2xl shadow-brand-navy/16 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <div>
              <p className="section-kicker-dark">¿No sabe por dónde comenzar?</p>
              <h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">La conversación inicial existe para ayudarle a elegir con criterio.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/68">Alberto revisará sus objetivos, su nivel actual y su disponibilidad. Después le recomendará la opción que tenga sentido para usted.</p>
            </div>
            <div className="grid gap-3">
              <Link href="/contact" className="button-primary">Agendar conversación <CalendarCheck size={18} aria-hidden /></Link>
              <Link href="/faq" className="button-secondary">Preguntas frecuentes <BookOpenCheck size={18} aria-hidden /></Link>
            </div>
          </div>
        </MotionReveal>
      </section>
      <SiteFooter />
    </main>
  );
}

function PrimaryServices() {
  return (
    <section id="servicios-principales" className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="grid gap-5 border-b border-brand-navy/12 pb-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-kicker">Servicios principales</p>
            <h2 className="section-heading mt-3">Tres formas claras de comenzar.</h2>
          </div>
          <p className="body-copy-lg max-w-2xl lg:justify-self-end">
            Estas son las opciones que también encontrará en la página principal: clases privadas de inglés, clases grupales de inglés y español para extranjeros.
          </p>
        </MotionReveal>

        <div className="mt-10 grid gap-10 sm:gap-12 lg:gap-14">
          {primaryServices.map((program, index) => {
            const Icon = serviceIcons[program.id as keyof typeof serviceIcons] ?? BookOpenCheck;
            const isReversed = index % 2 === 1;

            return (
              <section key={program.id} id={program.id} className="scroll-mt-24 grid max-w-full gap-6 border-b border-brand-navy/12 pb-10 last:border-b-0 last:pb-0 sm:gap-8 sm:pb-12 lg:grid-cols-2 lg:items-stretch lg:gap-12">
                <MotionImagePanel className={`relative aspect-[4/3] rounded-xl border border-brand-navy/80 bg-transparent p-2 sm:aspect-[16/10] sm:p-3 lg:aspect-auto lg:h-full ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative h-full overflow-hidden rounded-md">
                    <Image src={program.image} alt={program.imageAlt} fill quality={82} sizes="(min-width: 1180px) 540px, (min-width: 1024px) 48vw, 100vw" className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/42 via-brand-navy/0 to-transparent" />
                  </div>
                  <div className="absolute left-5 top-5 rounded-md bg-brand-red px-3 py-2.5 text-white shadow-xl shadow-brand-red/20 sm:px-4 sm:py-3">
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/72">Servicio {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-heading text-lg font-normal sm:text-xl">{program.badge}</p>
                  </div>
                  <div className="absolute bottom-5 right-5 hidden rounded-md border border-white/14 bg-brand-navy/84 px-3 py-2.5 text-white backdrop-blur sm:block">
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">{program.format}</p>
                  </div>
                </MotionImagePanel>

                <MotionReveal delay={0.1} className={`flex min-w-0 flex-col justify-between p-2 sm:p-4 lg:p-5 xl:p-6 ${isReversed ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="grid size-10 place-items-center rounded-lg bg-brand-blue text-white"><Icon size={20} strokeWidth={1.8} aria-hidden /></div>
                    <p className="section-kicker mt-4">{program.eyebrow}</p>
                    <h3 className="mt-3 font-heading text-3xl font-normal leading-tight text-brand-navy">{program.title}</h3>
                    <p className="mt-3 font-heading text-xl font-normal leading-snug text-brand-blue sm:text-2xl">{program.headline}</p>
                    <p className="mt-3 text-[0.95rem] leading-7 text-brand-navy/66">{program.description}</p>
                  </div>
                  <div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {program.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2 rounded-lg border border-brand-navy/8 bg-surface-cream px-3 py-2">
                          <CheckCircle2 size={16} className="shrink-0 text-brand-teal" aria-hidden />
                          <span className="text-xs font-bold text-brand-navy/78 sm:text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-brand-navy/10 pt-4">
                      <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-brand-navy/48">Ideal para</p>
                      <p className="mt-2 text-sm leading-6 text-brand-navy/66">{program.bestFor}</p>
                    </div>
                    <Link href="/contact" className="button-primary mt-5">Consultar esta opción <ArrowRight size={18} aria-hidden /></Link>
                  </div>
                </MotionReveal>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AdditionalServices() {
  return (
    <section id="rutas-complementarias" className="bg-surface-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-8">
        <MotionReveal className="rounded-xl bg-brand-navy p-6 text-white shadow-2xl shadow-brand-navy/14 sm:p-8 lg:sticky lg:top-24 lg:p-9">
          <p className="section-kicker-dark">Rutas complementarias</p>
          <h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">Tres soluciones para necesidades más específicas.</h2>
          <p className="mt-5 leading-7 text-white/68">
            Elija una ruta completa, reciba apoyo puntual o prepárese para una meta concreta. Cada opción conserva el acompañamiento directo de Alberto.
          </p>

          <nav className="mt-8 border-t border-white/12" aria-label="Rutas complementarias">
            {additionalServices.map((program, index) => (
              <a key={program.id} href={`#${program.id}`} className="group flex items-center gap-4 border-b border-white/12 py-4 text-white transition hover:text-brand-teal-light">
                <span className="font-heading text-2xl font-normal text-brand-teal-light">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-sm font-extrabold">{program.title}</span>
                <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
              </a>
            ))}
          </nav>
        </MotionReveal>

        <div className="grid gap-4 sm:gap-5">
          {additionalServices.map((program, index) => {
            const Icon = serviceIcons[program.id as keyof typeof serviceIcons] ?? BookOpenCheck;
            const accentClass = index === 0 ? "border-t-brand-red" : "border-t-brand-teal";

            return (
              <MotionArticle key={program.id} id={program.id} delay={index * 0.07} className={`scroll-mt-24 rounded-xl border border-t-4 border-brand-navy/10 ${accentClass} bg-surface-cream p-5 shadow-xl shadow-brand-navy/6 sm:p-7 lg:p-8`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-navy text-white"><Icon size={21} strokeWidth={1.8} aria-hidden /></span>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-red">Opción {String(index + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-sm font-bold text-brand-navy/52">{program.eyebrow}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-brand-navy px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-white">{program.badge}</span>
                    <span className="rounded-md border border-brand-navy/10 bg-surface-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-brand-blue">{program.format}</span>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.04fr_0.96fr] xl:gap-8">
                  <div>
                    <h3 className="font-heading text-3xl font-normal leading-tight text-brand-navy sm:text-4xl">{program.title}</h3>
                    <p className="mt-3 font-heading text-xl font-normal leading-snug text-brand-blue">{program.headline}</p>
                    <p className="mt-4 text-sm leading-7 text-brand-navy/66">{program.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-brand-navy/10 pt-5">
                      {[program.focus, program.support].map((item) => (
                        <span key={item} className="rounded-md border border-brand-navy/10 bg-surface-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-brand-navy/68">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col rounded-lg border border-brand-navy/10 bg-surface-white p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/46">Lo que trabajará</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                      {program.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="shrink-0 text-brand-teal" aria-hidden />
                          <span className="text-sm font-bold text-brand-navy/74">{outcome}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 border-t border-brand-navy/10 pt-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/46">Ideal para</p>
                      <p className="mt-2 text-sm leading-6 text-brand-navy/64">{program.bestFor}</p>
                    </div>
                    <Link href="/contact" className="button-navy mt-5">Consultar esta opción <ArrowRight size={18} aria-hidden /></Link>
                  </div>
                </div>
              </MotionArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
}
