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
  const [featuredProgram, ...supportingPrograms] = additionalServices;

  if (!featuredProgram) return null;

  const FeaturedIcon = serviceIcons[featuredProgram.id as keyof typeof serviceIcons] ?? BookOpenCheck;

  return (
    <section id="rutas-complementarias" className="relative isolate overflow-hidden bg-brand-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="orbital-grid absolute inset-0 opacity-[0.08]" />
      <div className="program-ring absolute -left-56 bottom-0 hidden size-[520px] rounded-full opacity-55 blur-2xl lg:block" />
      <div className="relative mx-auto max-w-6xl">
        <MotionReveal className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-kicker-dark">Rutas complementarias</p>
            <h2 className="section-heading mt-3 text-white">Más apoyo cuando su objetivo necesita otra estructura.</h2>
          </div>
          <p className="max-w-2xl leading-7 text-white/68 lg:justify-self-end">
            Además de los tres servicios principales, puede avanzar mediante un programa completo por niveles, resolver una necesidad puntual o prepararse para una meta específica.
          </p>
        </MotionReveal>

        <MotionArticle id={featuredProgram.id} className="mt-10 scroll-mt-24 overflow-hidden rounded-xl border border-white/12 bg-surface-white text-brand-navy shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[20rem] bg-brand-blue sm:min-h-[26rem] lg:min-h-full">
              <Image src={featuredProgram.image} alt={featuredProgram.imageAlt} fill quality={84} sizes="(min-width: 1180px) 520px, (min-width: 1024px) 44vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/62 via-brand-navy/5 to-transparent" />
              <div className="absolute left-5 top-5 rounded-md bg-brand-red px-4 py-3 text-white shadow-xl shadow-brand-red/20">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/72">Ruta completa</p>
                <p className="mt-1 font-heading text-xl font-normal">{featuredProgram.badge}</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {[featuredProgram.format, featuredProgram.focus, featuredProgram.support].map((item) => (
                  <span key={item} className="rounded-md border border-white/16 bg-brand-navy/82 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-white backdrop-blur">{item}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <div className="grid size-11 place-items-center rounded-lg bg-brand-blue text-white"><FeaturedIcon size={22} strokeWidth={1.8} aria-hidden /></div>
                <p className="section-kicker mt-5">{featuredProgram.eyebrow}</p>
                <h3 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">{featuredProgram.title}</h3>
                <p className="mt-4 font-heading text-xl font-normal leading-snug text-brand-blue sm:text-2xl">{featuredProgram.headline}</p>
                <p className="mt-4 text-sm leading-7 text-brand-navy/66">{featuredProgram.description}</p>
              </div>
              <div>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {featuredProgram.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 rounded-lg border border-brand-navy/8 bg-surface-cream px-3 py-2.5">
                      <CheckCircle2 size={16} className="shrink-0 text-brand-teal" aria-hidden />
                      <span className="text-sm font-bold text-brand-navy/76">{outcome}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-brand-navy/10 pt-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/46">Ideal para</p>
                  <p className="mt-2 text-sm leading-6 text-brand-navy/66">{featuredProgram.bestFor}</p>
                </div>
                <Link href="/contact" className="button-primary mt-6">Consultar el programa <ArrowRight size={18} aria-hidden /></Link>
              </div>
            </div>
          </div>
        </MotionArticle>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {supportingPrograms.map((program, index) => {
            const Icon = serviceIcons[program.id as keyof typeof serviceIcons] ?? BookOpenCheck;

            return (
              <MotionArticle key={program.id} id={program.id} delay={(index + 1) * 0.08} className="group flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-white/12 bg-white/[0.07] shadow-xl shadow-black/12 backdrop-blur-sm">
                <div className="relative aspect-[16/8] overflow-hidden bg-brand-blue">
                  <Image src={program.image} alt={program.imageAlt} fill quality={80} sizes="(min-width: 1180px) 560px, (min-width: 1024px) 48vw, 100vw" className="object-cover object-center transition duration-500 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/82 via-brand-navy/12 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="rounded-md bg-brand-red px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-white">{program.badge}</span>
                    <span className="rounded-md border border-white/14 bg-brand-navy/78 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-brand-teal-light backdrop-blur">{program.format}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-teal text-white"><Icon size={20} strokeWidth={1.8} aria-hidden /></span>
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">{program.eyebrow}</p>
                  </div>
                  <h3 className="mt-5 font-heading text-3xl font-normal leading-tight">{program.title}</h3>
                  <p className="mt-3 font-heading text-xl font-normal leading-snug text-white/88">{program.headline}</p>
                  <p className="mt-4 text-sm leading-7 text-white/66">{program.description}</p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {program.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5">
                        <CheckCircle2 size={15} className="shrink-0 text-brand-teal-light" aria-hidden />
                        <span className="text-xs font-bold text-white/76 sm:text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-white/12 pt-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/42">Ideal para</p>
                    <p className="mt-2 text-sm leading-6 text-white/64">{program.bestFor}</p>
                  </div>
                  <Link href="/contact" className="button-primary mt-6">Consultar esta opción <ArrowRight size={18} aria-hidden /></Link>
                </div>
              </MotionArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
}
