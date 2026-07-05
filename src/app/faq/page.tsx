import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GroupedFAQAccordion } from "@/components/faq-accordion";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { allFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ | Alberto Academy",
  description:
    "Answers to common questions about Alberto Academy online English tutoring, trial lessons, materials, scheduling, and learning progress.",
};

const categories = ["Lessons", "Materials", "Scheduling", "Progress"] as const;

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <SiteHeader />

      <section className="relative overflow-hidden bg-brand-navy px-4 py-12 text-white sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-5xl">
          <MotionReveal>
            <p className="section-kicker-dark">Frequently Asked Questions</p>
            <h1 className="section-heading mt-4 max-w-3xl text-white">
              Clear answers before your first English lesson.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Learn how trial lessons, materials, scheduling, progress tracking, and personalized online tutoring work at Alberto Academy.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:gap-12 lg:gap-14">
            <GroupedFAQAccordion items={allFaqs} categories={categories} />

            <MotionReveal className="rounded-xl bg-brand-navy p-5 text-white shadow-2xl shadow-brand-navy/14 sm:p-6 lg:p-8">
              <p className="section-kicker-dark">Next Step</p>
              <h2 className="mt-3 font-heading text-2xl font-normal sm:text-3xl">
                Want an answer specific to your English goals?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                Send a message or book a trial lesson and Alberto will help you choose the right learning path.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="button-primary">
                  Book a Free Lesson
                  <ArrowRight size={18} aria-hidden />
                </Link>
                <a href="mailto:hello@albertoacademy.com" className="button-secondary">
                  Email Alberto
                  <Mail size={17} aria-hidden />
                </a>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
