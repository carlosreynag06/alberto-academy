import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Star,
  Target,
  X,
} from "lucide-react";
import { MotionArticle, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Pricing | Alberto Academy",
  description:
    "Explore Alberto Academy online English tutoring plans, including trial lessons, private coaching, focused monthly packages, and premium ESL support.",
};

const pricingPlans = [
  {
    name: "Starter",
    eyebrow: "Flexible private lesson",
    price: "$45",
    cadence: "per session",
    description: "A focused one-to-one lesson for students who want targeted help without a monthly commitment.",
    badge: "Flexible",
    icon: MessageCircle,
    features: ["60-minute live lesson", "Level and goal check", "Targeted speaking correction", "Practice notes after class"],
    cta: "Book Starter",
    href: "/contact",
  },
  {
    name: "Momentum",
    eyebrow: "Most popular",
    price: "$160",
    cadence: "per month",
    description: "A consistent weekly plan for adults who want structure, accountability, and visible progress.",
    badge: "Best Value",
    icon: Target,
    featured: true,
    features: ["4 private live lessons", "Personal learning roadmap", "Weekly speaking assignments", "Grammar and pronunciation feedback", "Progress review each month"],
    cta: "Start Momentum",
    href: "/contact",
  },
  {
    name: "Intensive",
    eyebrow: "Accelerated progress",
    price: "$300",
    cadence: "per month",
    description: "A higher-touch plan for students preparing for interviews, travel, academic work, or fast confidence gains.",
    badge: "Premium",
    icon: GraduationCap,
    features: ["8 private live lessons", "Priority scheduling", "Custom resources and drills", "Writing or presentation review", "Detailed monthly progress report"],
    cta: "Choose Intensive",
    href: "/contact",
  },
];

const comparisonRows = [
  { label: "Private live lessons", starter: true, momentum: true, intensive: true },
  { label: "Goal and level review", starter: true, momentum: true, intensive: true },
  { label: "Practice notes after class", starter: true, momentum: true, intensive: true },
  { label: "Personal learning roadmap", starter: false, momentum: true, intensive: true },
  { label: "Weekly speaking assignments", starter: false, momentum: true, intensive: true },
  { label: "Writing or presentation review", starter: false, momentum: false, intensive: true },
  { label: "Priority scheduling", starter: false, momentum: false, intensive: true },
];

const processSteps = [
  "Book a free trial",
  "Review your level and goals",
  "Choose the right plan",
  "Start with a clear weekly rhythm",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface-cream text-brand-navy">
      <SiteHeader />

      <section id="pricing-hero" className="relative isolate overflow-hidden bg-brand-navy px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="program-ring absolute -right-48 top-10 hidden size-[520px] rounded-full opacity-70 blur-2xl md:block" />
        <div className="mx-auto max-w-4xl text-center">
          <MotionReveal>
            <p className="section-kicker-dark">Pricing</p>
            <h1 className="section-heading mx-auto mt-4 max-w-4xl text-white">
              Simple plans for English coaching that feels personal, structured, and worth the time.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Start with a free trial lesson, then choose the level of support that fits your schedule, goals, and pace.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book a Free Trial
                <CalendarCheck size={18} aria-hidden />
              </Link>
              <a href="#plans" className="button-secondary">
                View Plans
                <ArrowRight size={18} aria-hidden />
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="plans" className="section-pad bg-surface-cream">
        <div className="section-container">
          <MotionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Choose your rhythm</p>
            <h2 className="section-heading mt-3">Pricing built around consistency, not confusion.</h2>
            <p className="body-copy-lg mt-5">
              Each plan includes live instruction, practical correction, and a path that connects your lessons to real communication.
            </p>
          </MotionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <MotionArticle
                  key={plan.name}
                  delay={index * 0.08}
                  className={`hover-lift flex min-h-full flex-col rounded-xl border p-5 shadow-xl sm:p-6 ${
                    plan.featured
                      ? "border-brand-navy bg-brand-navy text-white shadow-brand-navy/16"
                      : "border-brand-navy/10 bg-surface-white text-brand-navy shadow-brand-navy/7"
                  } ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className={`grid size-11 place-items-center rounded-lg ${plan.featured ? "bg-brand-teal" : "bg-brand-blue"} text-white`}>
                      <Icon size={21} strokeWidth={1.8} aria-hidden />
                    </div>
                    <span className={`rounded-md px-2.5 py-2 text-[0.68rem] font-extrabold uppercase leading-tight tracking-[0.08em] sm:px-3 sm:text-xs ${plan.featured ? "bg-brand-red text-white" : "bg-surface-cream text-brand-blue"}`}>
                      {plan.badge}
                    </span>
                  </div>

                  <p className={`mt-6 text-xs font-extrabold uppercase tracking-[0.08em] ${plan.featured ? "text-brand-teal-light" : "text-brand-red"}`}>
                    {plan.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-normal">{plan.name}</h3>
                  <p className={`mt-4 text-sm leading-6 ${plan.featured ? "text-white/68" : "text-brand-navy/64"}`}>{plan.description}</p>

                  <div className={`mt-6 border-t pt-5 ${plan.featured ? "border-white/14" : "border-brand-navy/10"}`}>
                    <div className="flex items-end gap-2">
                      <p className="font-heading text-5xl font-normal leading-none">{plan.price}</p>
                      <p className={`pb-1 text-sm font-bold ${plan.featured ? "text-white/54" : "text-brand-navy/52"}`}>{plan.cadence}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <p key={feature} className={`flex items-start gap-2 text-sm font-semibold leading-6 ${plan.featured ? "text-white/76" : "text-brand-navy/70"}`}>
                        <CheckCircle2 size={16} className={`mt-1 shrink-0 ${plan.featured ? "text-brand-teal-light" : "text-brand-teal"}`} aria-hidden />
                        {feature}
                      </p>
                    ))}
                  </div>

                  <Link href={plan.href} className={`mt-7 ${plan.featured ? "button-primary" : "button-secondary border-brand-navy/12"}`}>
                    {plan.cta}
                    <ArrowRight size={18} aria-hidden />
                  </Link>
                </MotionArticle>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <p className="section-kicker-dark">Compare Plans</p>
                <span className="h-px w-24 bg-brand-teal-light/50" aria-hidden />
              </div>
              <h2 className="section-heading mt-5 max-w-2xl text-white">
                Invest in English progress with plans that match your goals.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-2xl text-base font-semibold leading-7 text-white/70 sm:text-lg">
                Compare the lesson rhythm, feedback level, and support included in each plan before choosing your next step.
              </p>
              <div className="mt-8 inline-grid grid-cols-2 overflow-hidden rounded-xl border border-white bg-white text-sm font-extrabold shadow-2xl shadow-brand-navy/20">
                <span className="bg-brand-blue px-8 py-4 text-white">Monthly</span>
                <span className="px-8 py-4 text-brand-navy">Flexible</span>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08} className="mt-10 grid gap-3 md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.label} className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                <p className="font-heading text-xl font-normal text-white">{row.label}</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Starter", value: row.starter },
                    { label: "Momentum", value: row.momentum },
                    { label: "Intensive", value: row.intensive },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-brand-navy/54 p-3 text-center">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-white/56">{item.label}</p>
                      <div className="mt-3 grid place-items-center">
                        <ComparisonIcon available={item.value} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </MotionReveal>

          <MotionReveal delay={0.08} className="mt-12 hidden overflow-x-auto rounded-xl border border-white/10 bg-brand-navy shadow-2xl shadow-black/18 md:block">
            <div className="min-w-[62rem] overflow-hidden rounded-xl">
              <div className="grid grid-cols-4">
                <div className="min-h-[18rem] border-r border-white/10 bg-brand-blue/42 p-8">
                  <Link href="/" className="inline-flex items-center gap-3" aria-label="Alberto Academy home">
                    <span className="grid size-10 place-items-center rounded-md bg-brand-red font-heading text-xl font-semibold text-white">
                      A
                    </span>
                    <span className="font-heading text-2xl font-semibold text-white">Alberto Academy</span>
                  </Link>
                  <div className="mx-auto mt-10 grid size-32 place-items-center rounded-full border border-brand-teal-light/18 bg-brand-navy/34 shadow-inner shadow-brand-navy/40">
                    <div className="relative size-24 overflow-hidden rounded-full border-[3px] border-brand-teal-light/34 bg-brand-blue shadow-xl shadow-brand-navy/24">
                      <Image
                        src="/images/alberto-avatar.png"
                        alt="Alberto Sosa"
                        fill
                        sizes="96px"
                        className="object-cover object-[50%_18%]"
                      />
                    </div>
                  </div>
                </div>
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`min-h-[18rem] border-r border-white/10 p-8 text-center last:border-r-0 ${
                      plan.featured ? "bg-brand-blue" : "bg-brand-navy"
                    }`}
                  >
                    <p className="text-xl font-extrabold text-white">{plan.name} Plan</p>
                    <p className="mt-5 font-heading text-5xl font-normal leading-none text-white">{plan.price}</p>
                    <p className="mt-4 text-sm font-extrabold text-white/78">{plan.cadence}</p>
                    <Link
                      href={plan.href}
                      className="mt-8 inline-flex h-12 min-w-[13rem] items-center justify-center rounded-full border border-brand-teal-light px-6 text-sm font-extrabold text-white transition hover:bg-brand-teal hover:text-white"
                    >
                      Explore Plan Features
                    </Link>
                  </div>
                ))}
              </div>

              {comparisonRows.map((row) => (
                <div key={row.label} className="grid grid-cols-4 border-t border-white/10 odd:bg-white/[0.045] even:bg-white/[0.02]">
                  <div className="flex items-center gap-4 border-r border-white/10 p-6 text-base font-extrabold text-white">
                    <ArrowRight size={19} className="text-brand-teal-light" aria-hidden />
                    {row.label}
                  </div>
                  <ComparisonCell available={row.starter} />
                  <ComparisonCell available={row.momentum} featured />
                  <ComparisonCell available={row.intensive} />
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-surface-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <MotionReveal className="rounded-xl bg-brand-navy p-6 text-white shadow-2xl shadow-brand-navy/16 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="section-kicker-dark">How it starts</p>
                <h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">
                  Start with clarity before choosing a plan.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-white/68">
                  The first conversation helps Alberto understand your level, schedule, and goals before recommending the best path.
                </p>
              </div>

              <div className="grid gap-3">
                {processSteps.map((step, index) => (
                  <div key={step} className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-white/12 bg-white/[0.06] p-4">
                    <span className="font-heading text-2xl font-normal text-brand-teal-light">{String(index + 1).padStart(2, "0")}</span>
                    <p className="font-bold text-white/82">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-[0.72fr_0.28fr]">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Free trial", icon: Star },
                  { label: "No pressure", icon: ShieldCheck },
                  { label: "Clear next step", icon: Clock3 },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <span key={item.label} className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.07] px-3 py-2 text-sm font-bold text-white/78">
                      <Icon size={16} className="text-brand-teal-light" aria-hidden />
                      {item.label}
                    </span>
                  );
                })}
              </div>
              <Link href="/contact" className="button-primary">
                Book a Free Trial
                <CalendarCheck size={18} aria-hidden />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ComparisonCell({ available, featured = false }: { available: boolean; featured?: boolean }) {
  return (
    <div className={`grid min-h-[5.5rem] place-items-center border-r border-white/10 p-5 last:border-r-0 ${featured ? "bg-brand-blue/66" : ""}`}>
      <ComparisonIcon available={available} />
    </div>
  );
}

function ComparisonIcon({ available }: { available: boolean }) {
  return (
    <span
      className={`grid size-8 place-items-center rounded-full ${
        available
          ? "bg-brand-teal-light text-brand-navy"
          : "border border-white/36 bg-transparent text-white/58"
      }`}
      aria-label={available ? "Included" : "Not included"}
    >
      {available ? <CheckCircle2 size={18} strokeWidth={2.3} aria-hidden /> : <X size={19} strokeWidth={1.8} aria-hidden />}
    </span>
  );
}
