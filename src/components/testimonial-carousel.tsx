"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  result: string;
};

export function TestimonialCarousel({ stories }: { stories: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeStory = stories[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? stories.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === stories.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <div className="overflow-hidden rounded-xl bg-brand-blue text-white shadow-2xl shadow-brand-navy/14">
        <div className="grid min-h-[23rem] lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,0.9fr)]">
          <div className="flex min-w-0 flex-col justify-between gap-5 p-6 sm:p-7 lg:p-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStory.name}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 text-brand-teal-light" aria-label="Five star testimonial">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={19} fill="currentColor" strokeWidth={1.8} aria-hidden />
                  ))}
                </div>

                <p className="mt-5 max-w-2xl font-heading text-[1.45rem] font-normal leading-[1.14] text-white sm:text-[1.8rem] lg:text-[1.95rem]">
                  &ldquo;{activeStory.quote}&rdquo;
                </p>

                <div className="mt-6 border-t border-white/16 pt-5">
                  <p className="font-heading text-xl font-normal text-white sm:text-2xl">{activeStory.name}</p>
                  <p className="mt-1 text-sm font-semibold text-white/64">{activeStory.role}</p>
                  <p className="mt-3 inline-flex rounded-md bg-white/12 px-3 py-2 text-sm font-extrabold text-white">
                    {activeStory.result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between gap-5">
              <p className="text-sm font-bold text-white/54">
                {String(activeIndex + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="grid size-12 place-items-center rounded-full border border-white/24 text-white transition hover:border-brand-teal-light hover:bg-white/10"
                  aria-label="Show previous testimonial"
                >
                  <ArrowLeft size={22} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="grid size-12 place-items-center rounded-full border border-white/24 text-white transition hover:border-brand-teal-light hover:bg-white/10"
                  aria-label="Show next testimonial"
                >
                  <ArrowRight size={22} aria-hidden />
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[18rem] bg-brand-navy lg:min-h-0">
            <Image
              src="/images/testimonial-graduates.webp"
              alt="Three happy Dominican adult students in graduation clothes after completing English study"
              fill
              quality={82}
              sizes="(min-width: 1180px) 500px, (min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_42%]"
            />
            <div className="absolute inset-0 bg-brand-navy/8" />
          </div>
        </div>
      </div>
      <div className="mt-7 flex justify-center">
        <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-brand-red px-8 text-base font-extrabold text-white shadow-xl shadow-brand-red/18 transition hover:bg-brand-red-dark">
          Book a Free Trial
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
