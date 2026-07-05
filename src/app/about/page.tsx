import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  LineChart,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { CountUpStat } from "@/components/count-up-stat";
import { MotionArticle, MotionImagePanel, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

export const metadata: Metadata = {
  title: "About Us | Alberto Academy",
  description:
    "Learn about Alberto Academy, Alberto Sosa's personalized ESL teaching philosophy, mission, values, student results, and English learning journey.",
};

const academyStats = [
  { value: "8+", label: "Years teaching ESL" },
  { value: "200+", label: "Students taught" },
  { value: "4", label: "Course levels" },
  { value: "2", label: "Original course series" },
];

const values = [
  {
    title: "Clarity first",
    copy: "Students always know what they are practicing, why it matters, and how it connects to real communication.",
    icon: Compass,
    image: "/images/program-writing-track-portrait.webp",
    imageAlt: "Student practicing English writing with lesson materials",
    imagePosition: "object-[center_20%]",
  },
  {
    title: "Confidence through use",
    copy: "Lessons move quickly from explanation to guided speaking, writing, correction, and practical application.",
    icon: MessagesSquare,
    image: "/images/program-live-speaking-portrait.webp",
    imageAlt: "Student practicing English conversation in an online lesson",
    imagePosition: "object-[center_24%]",
  },
  {
    title: "Respectful challenge",
    copy: "Alberto keeps the environment encouraging while still pushing students toward stronger, cleaner English.",
    icon: Trophy,
    image: "/images/career-english-course.webp",
    imageAlt: "Student receiving focused English coaching online",
    imagePosition: "object-[center_36%]",
  },
  {
    title: "Measurable progress",
    copy: "Every path includes feedback, review points, and resources that make improvement visible week by week.",
    icon: LineChart,
    image: "/images/confident-dominican-student.webp",
    imageAlt: "Confident English student seeing measurable progress",
    imagePosition: "object-[center_18%]",
  },
];

const journey = [
  {
    year: "2017",
    title: "Classroom teaching foundation",
    copy: "Began teaching English in private-school settings, building a strong foundation in classroom management, pronunciation support, and practical ESL instruction.",
  },
  {
    year: "2019",
    title: "Direct Method specialization",
    copy: "Completed focused training in communicative teaching techniques and began refining a direct, English-first approach for Spanish-speaking learners.",
  },
  {
    year: "2021",
    title: "CONNECT course development",
    copy: "Designed the CONNECT course series to help adult learners move from grammar knowledge to structured, confident conversation.",
  },
  {
    year: "2024",
    title: "Speak Up English launch",
    copy: "Expanded Alberto Academy with interactive resources, writing support, and online tutoring paths for academic and career goals.",
  },
];

const testimonials = [
  {
    quote: "The lessons helped me stop guessing. I finally understand how to organize my ideas before I speak.",
    name: "Camila M.",
    role: "Operations coordinator",
    result: "More confident meetings",
  },
  {
    quote: "Alberto corrected me without making me feel nervous. That changed how I participate in class.",
    name: "Luis A.",
    role: "University student",
    result: "Stronger class participation",
  },
  {
    quote: "The materials felt personal. I practiced exactly the English I needed for interviews and work calls.",
    name: "Paola R.",
    role: "Customer success specialist",
    result: "Interview readiness",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface-cream text-brand-navy">
      <SiteHeader />
      <AboutHero />
      <AcademyIntro />
      <MissionVision />
      <StatsDivider />
      <CoreValues />
      <Journey />
      <StudentVoices />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function AboutHero() {
  return (
    <section id="about-hero" className="relative isolate overflow-hidden bg-brand-navy px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="orbital-grid absolute inset-0 opacity-10" />
      <div className="program-ring absolute -right-44 top-8 hidden size-[520px] rounded-full opacity-70 blur-2xl md:block" />
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch">
        <MotionReveal className="min-w-0">
          <p className="section-kicker-dark">About Alberto Academy</p>
          <h1 className="section-heading mt-4 max-w-4xl text-white">
            English learning with structure, warmth, and real communication at the center.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Alberto Academy helps adult learners and students build practical English through personalized online tutoring, original resources, and a teaching method designed for lasting confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Book a Trial Lesson
              <CalendarCheck size={18} aria-hidden />
            </Link>
            <Link href="/programs#programs-hero" className="button-secondary">
              Explore Programs
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </MotionReveal>

        <MotionImagePanel delay={0.12} className="relative lg:pt-9">
          <div className="image-sheen relative aspect-[16/10] overflow-hidden rounded-xl border border-white/14 bg-brand-blue p-2 shadow-2xl shadow-brand-navy/24 sm:p-3 lg:h-full lg:min-h-0 lg:aspect-auto">
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image
                src="/images/about-hero.webp"
                alt="Adult English learner joining an online lesson with Alberto Academy"
                fill
                priority
                quality={82}
                sizes="(min-width: 1180px) 590px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
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
    <section className="section-pad relative overflow-hidden bg-surface-cream">
      <div className="section-container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <MotionImagePanel className="relative pb-12 lg:pb-9">
          <div className="relative min-h-[360px] rounded-xl border border-brand-navy/14 bg-transparent p-2 shadow-2xl shadow-brand-navy/12 sm:min-h-[460px] sm:p-3 lg:h-full lg:min-h-0">
            <div className="image-sheen relative h-full min-h-[344px] overflow-hidden rounded-lg bg-brand-navy sm:min-h-[436px] lg:min-h-0">
              <Image
                src="/images/alberto-portrait.webp"
                alt="Alberto Sosa, ESL educator and course developer"
                fill
                quality={95}
                sizes="(min-width: 1180px) 500px, (min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_16%]"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 left-5 right-5 rounded-lg border border-white/14 bg-brand-blue/92 p-4 text-white shadow-xl shadow-brand-navy/20 backdrop-blur sm:left-7 sm:right-7 lg:-bottom-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-teal text-white">
                <GraduationCap size={20} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/58">Based in the Dominican Republic</p>
                <p className="font-heading text-xl font-normal">ESL Educator & Course Developer</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-lg bg-brand-red px-5 py-4 text-white shadow-xl shadow-brand-red/20 md:block">
            <p className="font-heading text-3xl font-normal">8+</p>
            <p className="text-xs font-bold uppercase text-white/72">Years Teaching</p>
          </div>
        </MotionImagePanel>

        <MotionReveal delay={0.12}>
          <p className="section-kicker">About Alberto Academy</p>
          <h2 className="section-heading mt-3 max-w-3xl">
            Built by Alberto Sosa for students who need English that works beyond the workbook.
          </h2>
          <div className="body-copy mt-5 space-y-4">
            <p>
              Alberto has spent years developing English courses that go beyond grammar drills. His method - rooted in the Direct Method and real communication - helps students move from memorizing rules to actually thinking in English.
            </p>
            <p>
              He teaches at a private school and has designed his own course series, CONNECT and Speak Up English, built for Spanish-speaking learners who want lasting, practical results.
            </p>
            <p>
              Every lesson is structured, purposeful, and adapted to real goals - whether that means passing an exam, advancing a career, or simply feeling confident when speaking.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 xl:flex-nowrap">
            {["ESL Specialist", "CONNECT Course Author", "Speak Up English Series", "Direct Method"].map((badge) => (
              <span key={badge} className="badge-blue">
                {badge}
              </span>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-surface-cream px-4 pb-7 pt-14 sm:px-6 sm:pb-8 sm:pt-16 lg:px-8 lg:pb-8 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mb-5">
          <p className="section-kicker">Mission & Vision</p>
        </MotionReveal>
        <MotionReveal className="overflow-hidden rounded-xl bg-brand-navy text-white shadow-2xl shadow-brand-navy/16" delay={0.04}>
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative isolate min-h-[20rem] overflow-hidden border-b border-white/10 bg-brand-blue p-6 sm:p-8 lg:min-h-0 lg:border-b-0 lg:border-r lg:p-8">
              <div className="program-ring absolute -left-32 -top-32 size-72 rounded-full opacity-45 blur-2xl" />
              <div className="absolute -bottom-24 right-8 size-56 rounded-full bg-brand-teal/22 blur-3xl" />
              <div className="orbital-grid absolute inset-0 opacity-[0.08]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <h2 className="max-w-xl font-heading text-3xl font-normal leading-[1.04] text-white sm:text-4xl">
                    English that feels structured, personal, and ready for real life.
                  </h2>
                </div>
                <div className="max-w-md border-t border-white/18 pt-4">
                  <p className="text-sm leading-6 text-white/76">
                    Practical coaching, honest feedback, and a clear path from hesitation to confident communication.
                  </p>
                  <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-red px-5 text-sm font-extrabold text-white shadow-lg shadow-brand-red/18 transition hover:bg-brand-red-dark">
                    Book a Trial
                    <ArrowRight size={17} aria-hidden />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-7">
              <div className="grid gap-4">
              {[
                {
                  label: "Mission",
                  number: "01",
                  title: "Turn every goal into usable English.",
                  copy: "Alberto Academy combines live instruction, personalized correction, and original resources so students can use English outside class with clarity.",
                  icon: Target,
                },
                {
                  label: "Vision",
                  number: "02",
                  title: "Build the trusted online academy for ambitious Spanish-speaking learners.",
                  copy: "The long-term vision is a premium, human learning experience where students gain confidence, better opportunities, and a stronger voice in English.",
                  icon: Sparkles,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <MotionArticle key={item.label} delay={index * 0.08} className="rounded-xl border border-white/12 bg-white/[0.06] p-4 shadow-xl shadow-brand-navy/12 sm:p-5">
                    <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                      <div className="flex items-start justify-between gap-4 sm:block">
                        <p className="font-heading text-3xl font-normal text-brand-teal-light">{item.number}</p>
                        <div className="grid size-10 place-items-center rounded-lg bg-brand-teal text-white sm:mt-5">
                          <Icon size={20} strokeWidth={1.8} aria-hidden />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/48">{item.label}</p>
                        <h3 className="mt-2 font-heading text-2xl font-normal leading-tight text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/64">{item.copy}</p>
                      </div>
                    </div>
                  </MotionArticle>
                );
              })}
              </div>
            </div>
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
          <div key={item.label} className="border-b border-white/10 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 lg:p-7">
            <CountUpStat value={item.value} className="block font-heading text-[2.1rem] font-normal leading-none text-brand-teal-light" />
            <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.08em] text-white/58">{item.label}</p>
          </div>
        ))}
      </MotionReveal>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="section-pad bg-brand-blue text-white">
      <div className="section-container">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker-dark">Core Values</p>
          <h2 className="section-heading mt-3">The principles behind every lesson.</h2>
        </MotionReveal>

        <div className="mt-10 flex flex-col items-stretch gap-7 xl:flex-row xl:items-start">
          <MotionReveal delay={0.08} className="relative isolate w-full overflow-hidden rounded-xl bg-brand-navy p-7 text-white shadow-2xl shadow-brand-navy/16 sm:p-8 xl:sticky xl:top-28 xl:min-h-[31rem] xl:max-w-[22rem]">
            <div className="program-ring absolute -right-40 -top-32 size-80 rounded-full opacity-55 blur-2xl" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div>
                <span className="flex size-12 items-center justify-center rounded-lg bg-brand-teal text-white">
                  <HeartHandshake size={24} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="mt-7 font-heading text-[1.85rem] font-normal leading-[1.08] text-white">
                  Build English with structure, clarity, and real support.
                </h3>
                <p className="mt-5 border-t border-white/14 pt-5 leading-7 text-white/64">
                  Start with a trial lesson and leave with a clear recommendation for your level and goals.
                </p>
              </div>

              <Link href="/contact" className="button-primary !h-14 w-full !px-7">
                Start Learning Today
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </MotionReveal>

          <div className="flex-1 border-y border-white/16">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <MotionArticle
                  key={value.title}
                  delay={index * 0.07}
                  className="group flex gap-5 border-b border-white/14 py-6 transition last:border-b-0 sm:gap-6 lg:py-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-teal text-white shadow-lg shadow-brand-navy/12 transition group-hover:bg-brand-red">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-2xl font-normal leading-tight text-white sm:text-[1.7rem]">
                      {value.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
                      {value.copy}
                    </p>
                  </div>
                </MotionArticle>
              );
            })}
          </div>
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
          <p className="section-kicker-dark">Alberto&apos;s Journey</p>
          <h2 className="section-heading mt-3 max-w-3xl text-white">
            From classroom practice to a structured online academy.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/70">
            This timeline uses placeholder milestones for now, giving the page a credible structure that can be updated later with Alberto&apos;s exact certifications and dates.
          </p>

          <div className="mt-10 grid gap-4">
            {journey.map((item, index) => (
              <MotionArticle key={item.year} delay={index * 0.08} className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-[5rem_1fr]">
                <p className="font-heading text-3xl font-normal text-brand-teal-light">{item.year}</p>
                <div>
                  <h3 className="font-heading text-2xl font-normal text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/64">{item.copy}</p>
                </div>
              </MotionArticle>
            ))}
          </div>
        </MotionReveal>

        <MotionImagePanel delay={0.12} className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="relative aspect-[4/5] rounded-xl border border-white/22 bg-transparent p-2 shadow-2xl shadow-brand-navy/30 sm:p-3">
            <div className="image-sheen relative h-full overflow-hidden rounded-lg">
              <Image
                src="/images/about-journey-teaching.webp"
                alt="Alberto preparing interactive English lesson materials for online students"
                fill
                quality={82}
                sizes="(min-width: 1180px) 440px, (min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-navy/8" />
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-white/14 bg-brand-blue/92 p-4 text-white shadow-xl shadow-brand-navy/24 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-teal text-white">
                <BookOpenCheck size={20} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/58">Course builder</p>
                <p className="font-heading text-xl font-normal">Original resources for Spanish-speaking learners.</p>
              </div>
            </div>
          </div>
        </MotionImagePanel>
      </div>
    </section>
  );
}

function StudentVoices() {
  return (
    <section className="section-pad bg-surface-cream">
      <div className="section-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">Student Voices</p>
            <h2 className="section-heading mt-3">A different kind of progress story.</h2>
          </div>
          <p className="body-copy-lg max-w-2xl lg:justify-self-end">
            Alberto Academy is built around students who want to feel more prepared, more expressive, and more confident when English matters.
          </p>
        </MotionReveal>
        <TestimonialCarousel stories={testimonials} />
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface-cream px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <MotionReveal className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-brand-navy text-white shadow-2xl shadow-brand-navy/16">
        <div className="relative isolate grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="section-kicker-dark">Ready for the next step?</p>
            <h2 className="mt-3 font-heading text-3xl font-normal leading-tight sm:text-4xl">
              Start with a clear level check and a learning path that fits your goals.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/68">
              Book a trial lesson with Alberto and leave with a practical recommendation for your level, schedule, and communication goals.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Personal plan", icon: Target },
                { label: "Private online lessons", icon: ShieldCheck },
                { label: "Progress feedback", icon: CheckCircle2 },
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
          </div>

          <div className="flex flex-col justify-end gap-4 border-t border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="grid size-12 place-items-center rounded-lg bg-brand-teal text-white">
              <HeartHandshake size={24} aria-hidden />
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/62">
              The first conversation is designed to understand your needs, not pressure you into a plan.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/contact" className="button-primary">
                Book a Free Lesson
                <CalendarCheck size={18} aria-hidden />
              </Link>
              <Link href="/programs#programs-hero" className="button-secondary">
                View Programs
                <GraduationCap size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
