import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ChevronRight, Mail, ShieldCheck } from "lucide-react";
import { MotionArticle, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

type LegalSection = {
  title: string;
  copy: string[];
  icon: LucideIcon;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, description, updated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <SiteHeader />

      <section className="relative overflow-hidden bg-brand-navy px-4 py-12 text-white sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end lg:grid-cols-[1fr_0.42fr]">
          <MotionReveal>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/62 transition hover:text-white">
              <ArrowLeft size={16} aria-hidden />
              Back to home
            </Link>
            <p className="section-kicker-dark mt-7 sm:mt-9">{eyebrow}</p>
            <h1 className="section-heading mt-4 max-w-3xl text-white">{title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">{description}</p>
          </MotionReveal>

          <MotionReveal delay={0.12} className="rounded-xl border border-white/12 bg-white/[0.07] p-4 backdrop-blur sm:p-5 lg:p-6">
            <div className="grid size-10 place-items-center rounded-lg bg-brand-teal text-white sm:size-11 lg:size-12">
              <ShieldCheck size={22} aria-hidden />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-white/54 sm:text-sm">Last Updated</p>
            <p className="mt-2 font-heading text-2xl font-normal text-white lg:text-3xl">{updated}</p>
            <p className="mt-3 text-sm leading-6 text-white/62 lg:mt-4">
              These pages are written for clarity, trust, and transparency around Alberto Academy&apos;s online tutoring experience.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
        <div className="legal-content-layout mx-auto max-w-6xl">
          <aside className="legal-overview-column">
            <div className="legal-overview-panel rounded-xl border border-brand-navy/10 bg-surface-white p-4 shadow-xl shadow-brand-navy/6 sm:p-5 lg:p-6">
              <MotionReveal>
                <p className="section-kicker">Overview</p>
                <div className="legal-overview-links mt-4 grid gap-2 sm:mt-5">
                  {sections.map((section) => (
                    <a
                      key={section.title}
                      href={`#${slugify(section.title)}`}
                      className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-brand-navy/8 bg-surface-cream px-3 py-2.5 text-sm font-extrabold text-brand-navy transition hover:border-brand-teal hover:text-brand-blue sm:px-4 sm:py-3"
                    >
                      <span className="truncate">{section.title}</span>
                      <ChevronRight className="shrink-0" size={16} aria-hidden />
                    </a>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </aside>

          <div className="grid gap-5">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <MotionArticle
                  key={section.title}
                  id={slugify(section.title)}
                  delay={index * 0.06}
                  className="scroll-mt-24 rounded-xl border border-brand-navy/10 bg-surface-white p-4 shadow-xl shadow-brand-navy/6 sm:p-5 md:p-6 lg:p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-blue text-white shadow-lg shadow-brand-blue/12 sm:size-11 lg:size-12">
                      <Icon size={22} strokeWidth={1.8} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-heading text-[1.65rem] font-normal leading-tight text-brand-navy sm:text-2xl lg:text-3xl">{section.title}</h2>
                      <div className="mt-3 space-y-3 text-[0.96rem] leading-7 text-brand-navy/68 sm:mt-4 sm:space-y-4 sm:text-base sm:leading-8">
                        {section.copy.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionArticle>
              );
            })}

            <MotionReveal className="rounded-xl bg-brand-navy p-5 text-white shadow-2xl shadow-brand-navy/14 sm:p-6 lg:p-8">
              <p className="section-kicker-dark">Questions</p>
              <h2 className="mt-3 font-heading text-2xl font-normal sm:text-3xl">Need help with a policy detail?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/68">
                Contact Alberto Academy before booking or sharing information if you need clarification about these terms.
              </p>
              <a href="mailto:hello@albertoacademy.com" className="mt-6 inline-flex max-w-full items-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-red-dark sm:px-5">
                <Mail size={17} aria-hidden />
                <span className="truncate">hello@albertoacademy.com</span>
              </a>
            </MotionReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
