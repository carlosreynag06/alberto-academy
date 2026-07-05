import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  PenLine,
} from "lucide-react";
import { MotionImagePanel, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { programTracks } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs | Alberto Academy",
  description:
    "Explore Alberto Academy English programs for live speaking, grammar and writing, academic English, career communication, and personalized online tutoring.",
};

const serviceIcons = [MessageCircle, PenLine, BriefcaseBusiness];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface-cream text-brand-navy">
      <SiteHeader />

      <section id="programs-hero" className="relative isolate overflow-hidden bg-brand-navy px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="program-ring absolute -right-52 top-12 hidden size-[560px] rounded-full opacity-70 blur-2xl md:block" />
        <div className="mx-auto max-w-6xl min-w-0">
          <MotionReveal className="min-w-0">
            <p className="section-kicker-dark">Programs</p>
            <h1 className="section-heading mt-4 max-w-[23rem] text-white sm:max-w-4xl">
              English programs built around the way you actually need to communicate.
            </h1>
            <p className="mt-5 max-w-[23rem] text-base leading-7 text-white/72 sm:max-w-2xl sm:text-lg sm:leading-8">
              Choose a track for speaking, writing, academic preparation, or career communication. Each one blends live instruction, targeted feedback, and resources adapted to your goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book a Free Lesson
                <CalendarCheck size={18} aria-hidden />
              </Link>
              <a href="#conversation-fluency" className="button-secondary">
                Explore Tracks
                <ArrowRight size={18} aria-hidden />
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:gap-14">
          {programTracks.map((program, index) => {
            const Icon = serviceIcons[index];
            const isReversed = index === 1;

            return (
              <section
                key={program.id}
                id={program.id}
                className="scroll-mt-24 grid max-w-full gap-6 border-b border-brand-navy/12 pb-10 last:border-b-0 last:pb-0 sm:gap-8 sm:pb-12 lg:grid-cols-2 lg:items-stretch lg:gap-12"
              >
                <MotionImagePanel className={`relative aspect-[4/3] min-h-0 rounded-xl border border-brand-navy/80 bg-transparent p-2 sm:aspect-[16/10] sm:p-3 lg:aspect-auto lg:h-full ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative h-full overflow-hidden rounded-md">
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        quality={82}
                        sizes="(min-width: 1180px) 540px, (min-width: 1024px) 48vw, 100vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/42 via-brand-navy/0 to-transparent" />
                  </div>
                  <div className="absolute left-5 top-5 rounded-md bg-brand-red px-3 py-2.5 text-white shadow-xl shadow-brand-red/20 sm:px-4 sm:py-3">
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/72">Track {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-heading text-lg font-normal sm:text-xl">{program.badge}</p>
                  </div>
                  <div className="absolute bottom-5 right-5 hidden rounded-md border border-white/14 bg-brand-navy/84 px-3 py-2.5 text-white backdrop-blur sm:block">
                    <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">{program.format}</p>
                  </div>
                </MotionImagePanel>

                <MotionReveal delay={0.1} className={`flex min-w-0 flex-col justify-between p-2 sm:p-4 lg:p-5 xl:p-6 ${isReversed ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="grid size-10 place-items-center rounded-lg bg-brand-blue text-white shadow-lg shadow-brand-blue/12">
                      <Icon size={20} strokeWidth={1.8} aria-hidden />
                    </div>
                    <p className="section-kicker mt-4">{program.eyebrow}</p>
                    <h2 className="mt-3 max-w-[23rem] font-heading text-2xl font-normal leading-tight text-brand-navy sm:max-w-none sm:text-3xl">
                      {program.headline}
                    </h2>
                    <p className="mt-3 max-w-[23rem] text-[0.95rem] leading-7 text-brand-navy/66 sm:max-w-2xl">
                      {program.description}
                    </p>
                  </div>

                  <div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {program.outcomes.map((outcome) => (
                        <div key={outcome} className="flex min-w-0 items-center gap-2 rounded-lg border border-brand-navy/8 bg-surface-cream px-2.5 py-2 sm:px-3">
                          <CheckCircle2 size={16} className="shrink-0 text-brand-teal" aria-hidden />
                          <span className="text-xs font-bold text-brand-navy/78 sm:text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-brand-navy/10 pt-4">
                      <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-brand-navy/48">Best for</p>
                      <p className="mt-2 text-sm leading-6 text-brand-navy/66">{program.bestFor}</p>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Link href="/contact" className="button-primary">
                        Book This Track
                        <ArrowRight size={18} aria-hidden />
                      </Link>
                      <a href="#programs-hero" className="hidden h-12 items-center justify-center gap-2 rounded-md border border-brand-navy/12 px-6 text-sm font-extrabold text-brand-navy transition hover:border-brand-teal hover:text-brand-blue sm:inline-flex">
                        Back to Programs
                      </a>
                    </div>
                  </div>
                </MotionReveal>
              </section>
            );
          })}
        </div>
      </section>

      <section className="bg-surface-cream px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <MotionReveal className="mx-auto max-w-6xl rounded-xl bg-brand-navy p-6 text-white shadow-2xl shadow-brand-navy/16 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <div>
              <p className="section-kicker-dark">Not sure where to start?</p>
              <h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">
                Start with a trial lesson and leave with a recommended path.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/68">
                Alberto will review your current level, goals, and schedule, then recommend the track that makes the most sense for your next step.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/contact" className="button-primary">
                Book a Trial Lesson
                <CalendarCheck size={18} aria-hidden />
              </Link>
              <Link href="/faq" className="button-secondary">
                Read FAQs
                <BookOpenCheck size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </section>

      <SiteFooter />
    </main>
  );
}
