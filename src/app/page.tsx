import Image from "next/image";
import { ExclusiveFAQAccordion } from "@/components/faq-accordion";
import { MotionArticle, MotionImagePanel, MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { homepageFaqs } from "@/lib/faqs";
import { programTracks } from "@/lib/programs";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Compass,
  GraduationCap,
  MessagesSquare,
  PenLine,
  Quote,
  ShieldCheck,
  Star,
  Target,
  Video,
} from "lucide-react";

const stats = [
  { value: "4", label: "Years Teaching" },
  { value: "200+", label: "Students Taught" },
  { value: "4", label: "Course Levels" },
];

const programIcons = [MessagesSquare, PenLine, BriefcaseBusiness];
const programImagePositions = ["object-[center_24%]", "object-[center_18%]", "object-[center_18%]"];

const philosophy = [
  {
    title: "Personal direction",
    copy: "Every lesson is shaped around the student's goals, level, and confidence.",
    icon: Compass,
  },
  {
    title: "Real communication",
    copy: "Practice is interactive, practical, and connected to the moments students actually need English.",
    icon: MessagesSquare,
  },
  {
    title: "Measured progress",
    copy: "Feedback is specific, encouraging, and easy to apply before the next lesson.",
    icon: GraduationCap,
  },
];

const learningPath = [
  {
    step: "01",
    title: "Trial session",
    copy: "Alberto learns your goals, evaluates your level, and identifies the best starting point.",
  },
  {
    step: "02",
    title: "Personal plan",
    copy: "You receive a focused roadmap with weekly priorities, practice tasks, and recommended resources.",
  },
  {
    step: "03",
    title: "Live lessons",
    copy: "Each session combines instruction, guided practice, feedback, and real-life language tasks.",
  },
  {
    step: "04",
    title: "Progress reviews",
    copy: "Your plan evolves as your speaking, writing, vocabulary, and confidence improve.",
  },
];

const stories = [
  {
    name: "Mariana R.",
    role: "Marketing professional",
    quote:
      "I stopped translating in my head during meetings. Alberto helped me speak with structure and confidence.",
    result: "Promotion interview passed",
  },
  {
    name: "Daniel P.",
    role: "University applicant",
    quote:
      "The lessons were practical and focused. My writing improved, but my speaking improved even faster.",
    result: "IELTS speaking band +1.5",
  },
  {
    name: "Sofia L.",
    role: "High school student",
    quote:
      "I used to avoid speaking English. Now I participate more, ask questions, and enjoy class.",
    result: "Top grade in English",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <SiteHeader />
      <Hero />
      <About />
      <Programs />
      <Philosophy />
      <LearningPath />
      <SuccessStories />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-brand-navy/10 bg-brand-navy text-white">
      <Image
        src="/images/alberto-academy-hero.webp"
        alt="Professional online English tutoring lesson with a teacher and study materials"
        fill
        priority
        quality={82}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-navy/38" />
      <div className="hero-navy-wash absolute inset-0" />
      <div className="hero-bottom-wash absolute inset-x-0 bottom-0 h-28" />

      <div className="section-container relative z-10 grid min-w-0 px-4 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-28">
        <MotionReveal className="min-w-0 max-w-3xl" y={18}>
          <p className="section-kicker-dark">English as a Second Language</p>
          <h1 className="hero-heading mt-4 max-w-3xl text-white">
            Speak English with Real Confidence.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 sm:mt-6 sm:text-lg sm:leading-8">
            Professional ESL instruction designed for adults who need English that actually works - in business, travel, and everyday life.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#curriculum" className="button-primary w-full sm:w-auto">
              Explore Courses
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href="/contact" className="button-secondary w-full sm:w-auto">
              Book a Free Lesson
              <ChevronRight size={18} aria-hidden />
            </a>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] sm:mt-10">
            {stats.map((item) => (
              <div key={item.label} className="min-w-0 p-3 sm:p-4">
                <p className="font-heading text-xl font-semibold text-brand-teal-light sm:text-2xl">{item.value}</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase leading-tight text-white/62 sm:text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-surface-cream">
      <div className="section-container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <MotionImagePanel className="relative pb-12 lg:pb-9">
          <div className="relative min-h-[360px] rounded-xl border border-brand-navy/14 bg-transparent p-2 shadow-2xl shadow-brand-navy/12 sm:min-h-[460px] sm:p-3 lg:h-full lg:min-h-0">
            <div className="image-sheen relative h-full min-h-[344px] overflow-hidden rounded-lg bg-brand-navy sm:min-h-[436px] lg:min-h-0">
              <Image
                src="/images/alberto-portrait-original.jpeg"
                alt="Alberto Sosa, ESL educator and course developer"
                fill
                quality={82}
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
            <p className="font-heading text-3xl font-normal">4</p>
            <p className="text-xs font-bold uppercase text-white/72">Years Teaching</p>
          </div>
        </MotionImagePanel>

        <MotionReveal delay={0.12}>
          <p className="section-kicker">About Your Teacher</p>
          <h2 className="section-heading mt-3 max-w-3xl">
            Alberto - ESL Educator & Course Developer based in the Dominican Republic
          </h2>
          <div className="body-copy mt-5 space-y-4">
            <p>
              I have spent years developing English courses that go beyond grammar drills. My method - rooted in the Direct Method and real communication - helps students move from memorizing rules to actually thinking in English.
            </p>
            <p>
              I teach at a private school and have designed my own course series, CONNECT and Speak Up English, built for Spanish-speaking learners who want lasting, practical results.
            </p>
            <p>
              Every lesson is structured, purposeful, and adapted to your real goals - whether that&apos;s passing an exam, advancing your career, or simply feeling confident when you speak.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 xl:flex-nowrap">
            {["ESL Specialist", "CONNECT Course Author", "Speak Up English Series", "Direct Method"].map((badge) => (
              <span key={badge} className="badge-blue">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/contact" className="button-primary w-full sm:w-auto">
              Book a Trial Lesson
              <CalendarCheck size={18} aria-hidden />
            </a>
            <a href="#curriculum" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-brand-navy/12 px-6 text-sm font-extrabold text-brand-navy transition hover:border-brand-teal hover:text-brand-blue sm:w-auto">
              View Programs
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
function Programs() {
  return (
    <section id="curriculum" className="section-pad relative overflow-hidden bg-brand-navy text-white">
      <div className="program-ring absolute -left-40 top-24 hidden size-[520px] rounded-full opacity-60 blur-2xl md:block" />
      <div className="section-container relative">
        <MotionReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker-dark">Programs</p>
            <h2 className="section-heading mt-3 max-w-3xl text-white text-balance">
              Choose the English track that fits the life you are building.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/72">
              Each track blends live instruction, guided practice, and personalized resources for adults who need English that works in real situations.
            </p>
          </div>

          <a href="/contact" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-brand-red px-6 text-sm font-extrabold text-white shadow-lg shadow-brand-red/20 transition hover:bg-brand-red-dark sm:w-fit">
            Find Your Course Level
            <ArrowRight size={17} aria-hidden />
          </a>
        </MotionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programTracks.map((item, index) => {
            const Icon = programIcons[index];
            const accentClass = "bg-brand-red text-white";

            return (
              <MotionArticle
                key={item.title}
                delay={index * 0.1}
                className={`group flex min-h-full flex-col overflow-hidden rounded-xl border border-white/12 bg-surface-white p-3 text-brand-navy shadow-2xl shadow-brand-navy/20 transition hover:-translate-y-1 hover:shadow-brand-teal/16 sm:p-4 ${
                  index === 2 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg bg-brand-blue">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={1200}
                    height={820}
                    quality={78}
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 46vw, 100vw"
                    className={`aspect-[4/3] w-full object-cover ${programImagePositions[index]} transition duration-500 group-hover:scale-[1.035]`}
                  />
                  <div className="absolute inset-0 bg-brand-navy/10" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className={`inline-flex min-h-10 items-center rounded-md px-3 text-sm font-extrabold sm:min-h-12 sm:px-4 ${accentClass}`}>
                    {item.badge}
                  </span>
                  <span className="inline-flex min-h-10 items-center rounded-md border border-brand-navy/12 bg-surface-cream px-3 text-sm font-extrabold text-brand-navy sm:min-h-12 sm:px-4">
                    {item.format}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-normal leading-tight text-brand-navy sm:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 border-t border-brand-navy/10 pt-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-navy text-white">
                      <Icon size={20} strokeWidth={1.8} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold uppercase text-brand-navy">{item.focus}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-teal text-white">
                      {index === 0 ? (
                        <Video size={20} strokeWidth={1.8} aria-hidden />
                      ) : (
                        <Clock3 size={20} strokeWidth={1.8} aria-hidden />
                      )}
                    </span>
                    <div>
                      <p className="text-sm font-extrabold uppercase text-brand-navy">{item.support}</p>
                    </div>
                  </div>
                </div>

                <a href={`/programs#${item.id}`} className="mt-6 inline-flex items-center justify-between border-t border-brand-navy/10 pt-5 text-sm font-extrabold text-brand-red transition hover:text-brand-red-dark">
                  Learn more
                  <ArrowRight size={17} aria-hidden />
                </a>
              </MotionArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Philosophy() {
  return (
    <section id="philosophy" className="section-pad bg-surface-cream">
      <div className="section-container">
        <div className="flex flex-col gap-10 rounded-xl border border-brand-navy/10 bg-surface-white p-4 shadow-2xl shadow-brand-navy/8 lg:flex-row lg:items-stretch lg:p-5">
          <MotionImagePanel className="relative min-h-[320px] overflow-hidden rounded-lg bg-brand-navy sm:min-h-[360px] lg:w-[43%]">
            <Image
              src="/images/confident-dominican-student.webp"
              alt="Confident English student studying online"
              fill
              quality={82}
              sizes="(min-width: 1180px) 480px, (min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
            <div className="absolute inset-0 bg-brand-navy/20" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/14 bg-brand-navy/80 p-4 text-white backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-teal-light">Direct method</p>
              <p className="mt-2 font-heading text-2xl font-normal">Think in English, not around it.</p>
            </div>
          </MotionImagePanel>

          <MotionReveal className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-5 lg:p-8" delay={0.12}>
            <p className="section-kicker">Why Alberto Academy</p>
            <h2 className="section-heading mt-3 max-w-2xl">
              A focused philosophy for adults who want usable English.
            </h2>
            <p className="body-copy-lg mt-5 max-w-2xl">
              The method is intentionally direct: less passive studying, more guided use of English in the moments students actually need it.
            </p>

            <div className="mt-8 space-y-5">
              {philosophy.map((item) => {
                const Icon = item.icon;

                return (
                  <MotionReveal key={item.title} className="flex gap-4 border-t border-brand-navy/10 pt-5 first:border-t-0 first:pt-0" delay={0.08}>
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-blue text-white shadow-lg shadow-brand-blue/12">
                      <Icon size={22} strokeWidth={1.8} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-normal text-brand-navy">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-brand-navy/66">{item.copy}</p>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="button-primary w-full sm:w-auto">
                Start With a Trial
                <ArrowRight size={18} aria-hidden />
              </a>
              <a href="#learning-path" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-brand-navy/12 px-6 text-sm font-extrabold text-brand-navy transition hover:border-brand-teal hover:text-brand-blue">
                See the Process
                <ChevronRight size={18} aria-hidden />
              </a>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function LearningPath() {
  return (
    <section id="learning-path" className="section-pad relative overflow-hidden bg-brand-navy text-white">
      <div className="orbital-grid absolute inset-0 opacity-10" />
      <div className="section-container relative">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker-dark">Learning Path</p>
          <h2 className="section-heading mt-3 text-white">How the process works.</h2>
        </MotionReveal>
        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-teal-light/50 to-transparent lg:block" />
          {learningPath.map((item, index) => (
            <MotionArticle key={item.step} delay={index * 0.08} className="relative rounded-xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.1]">
              <p className="font-heading text-3xl font-medium text-brand-teal-light">{item.step}</p>
              <h3 className="mt-5 font-heading text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/72">{item.copy}</p>
            </MotionArticle>
          ))}
        </div>
        <MotionReveal className="mt-12 flex justify-center" delay={0.12}>
          <a href="/contact" className="button-primary sm:w-fit">
            Build My Learning Path
            <ArrowRight size={18} aria-hidden />
          </a>
        </MotionReveal>
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section id="success-stories" className="section-pad bg-surface-cream">
      <div className="section-container">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Success Stories</p>
          <h2 className="section-heading mt-3">Student progress, in their own words.</h2>
        </MotionReveal>
        <div className="testimonial-board mx-auto mt-10 max-w-6xl">
          <MotionArticle className="testimonial-feature overflow-hidden rounded-xl border border-brand-navy/10 bg-brand-navy text-white shadow-2xl shadow-brand-navy/12">
            <div className="testimonial-feature-image relative overflow-hidden bg-brand-blue">
              <Image
                src="/images/confident-dominican-female-student.webp"
                alt="Confident Dominican female student after improving English fluency"
                fill
                quality={82}
                sizes="(min-width: 1180px) 430px, (min-width: 1024px) 31vw, (min-width: 768px) 38vw, 100vw"
                className="object-cover object-[50%_38%]"
              />
              <div className="absolute inset-0 bg-brand-navy/18" />
            </div>
            <div className="testimonial-feature-copy flex min-w-0 flex-col justify-between p-6 sm:p-7">
              <div>
                <Quote size={28} className="text-brand-teal-light" aria-hidden />
                <p className="mt-5 max-w-2xl font-heading text-[1.25rem] font-normal leading-[1.2] sm:text-[1.48rem] lg:text-[1.58rem]">
                  {stories[0].quote}
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-3 border-t border-white/12 pt-4">
                <div>
                  <p className="font-heading text-xl font-normal">{stories[0].name}</p>
                  <p className="mt-1 text-sm text-white/58">{stories[0].role}</p>
                </div>
                <p className="inline-flex w-fit items-center gap-2 rounded-md bg-brand-red px-3 py-2 text-sm font-bold text-white">
                  <Star size={15} fill="currentColor" aria-hidden />
                  {stories[0].result}
                </p>
              </div>
            </div>
          </MotionArticle>
          <div className="testimonial-side">
            {stories.slice(1).map((story, index) => (
              <MotionArticle
                key={story.name}
                delay={(index + 1) * 0.1}
                className="testimonial-small hover-lift rounded-lg border border-brand-blue/18 bg-brand-blue p-5 text-white shadow-xl shadow-brand-navy/8"
              >
                <Quote size={23} className="text-brand-teal-light" aria-hidden />
                <p className="mt-3 text-sm leading-6 text-white/86">{story.quote}</p>
                <div className="mt-4 border-t border-white/18 pt-4">
                  <p className="font-heading text-lg font-medium">{story.name}</p>
                  <p className="mt-1 text-sm text-white/62">{story.role}</p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-md bg-brand-red px-3 py-2 text-xs font-bold text-white">
                    <Star size={15} fill="currentColor" aria-hidden />
                    {story.result}
                  </p>
                </div>
              </MotionArticle>
            ))}
          </div>
        </div>
        <MotionReveal className="mt-10 flex justify-center" delay={0.12}>
          <a href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-navy px-6 text-sm font-extrabold text-white shadow-xl shadow-brand-navy/12 transition hover:bg-brand-blue sm:w-fit">
            Become the Next Success Story
            <ArrowRight size={18} aria-hidden />
          </a>
        </MotionReveal>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-pad-tight bg-surface-cream">
      <div className="mx-auto max-w-5xl">
        <MotionReveal>
          <h2 className="section-heading text-center">Frequently Asked</h2>
        </MotionReveal>

        <ExclusiveFAQAccordion items={homepageFaqs} />
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface-cream px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <MotionReveal className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-brand-navy text-white shadow-2xl shadow-brand-navy/18">
        <div className="relative isolate">
          <Image
            src="/images/online-english-session.webp"
            alt=""
            fill
            quality={72}
            sizes="(min-width: 1180px) 1152px, 100vw"
            className="object-cover object-center opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-brand-navy/82" />
          <div className="relative z-10 flex flex-col gap-10 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12">
            <div className="max-w-3xl">
              <p className="section-kicker-dark">Ready when you are</p>
              <h2 className="section-heading mt-3 text-white">
                Start speaking English with a plan that finally feels personal.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/72">
                Book a free trial lesson, get your current level checked, and leave with a clear path for business, travel, study, or everyday confidence.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { label: "Level check included", icon: CheckCircle2 },
                  { label: "Private online lessons", icon: ShieldCheck },
                  { label: "Personal roadmap", icon: Target },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <span key={item.label} className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.07] px-3 py-2 text-sm font-bold text-white/82">
                      <Icon size={16} className="text-brand-teal-light" aria-hidden />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="/contact" className="button-primary">
                Book a Free Lesson
                <CalendarCheck size={18} aria-hidden />
              </a>
              <a href="#faq" className="button-secondary">
                Read FAQs
                <ChevronRight size={18} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}

