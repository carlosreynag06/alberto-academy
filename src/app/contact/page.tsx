import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  MonitorPlay,
} from "lucide-react";

const expectations = [
  {
    title: "Level diagnosis",
    copy: "A clear look at your speaking, listening, vocabulary, and confidence level.",
    icon: CheckCircle2,
  },
  {
    title: "Goal mapping",
    copy: "We connect your English needs to business, travel, interviews, study, or daily life.",
    icon: MessageSquareText,
  },
  {
    title: "Next steps",
    copy: "You leave with a recommended learning path and the right course level.",
    icon: MonitorPlay,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="orbital-grid absolute inset-0 opacity-10" />
        <div className="program-ring absolute -right-48 top-8 hidden size-[520px] rounded-full opacity-55 blur-2xl md:block" />
        <div className="hero-navy-wash absolute inset-0" />
        <div className="hero-bottom-wash absolute inset-x-0 bottom-0 h-28" />

        <div className="section-container relative z-10 px-4 py-12 text-center sm:px-8 sm:py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="section-kicker-dark">Book a Trial Lesson</p>
            <h1 className="hero-heading mt-4 text-white">Start with the right English plan.</h1>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-surface-cream px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl shadow-2xl shadow-brand-navy/12 lg:grid-cols-2">
          <div className="relative isolate overflow-hidden bg-brand-blue px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20 lg:py-16">
            <Image
              src="/images/contact-expectations-bg.webp"
              alt=""
              fill
              quality={72}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center opacity-[0.18]"
            />
            <div className="contact-image-wash absolute inset-0" />
            <div className="relative z-10 flex max-w-xl flex-col justify-between lg:min-h-[560px]">
              <div>
                <p className="section-kicker-dark">What to Expect</p>
                <h2 className="mt-4 font-heading text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
                  What Happens Next?
                </h2>
                <p className="mt-4 max-w-md text-base leading-7 text-white/72 sm:mt-5 sm:text-lg">
                  The trial lesson is designed to give you clarity before choosing a program.
                </p>

                <div className="mt-8 grid gap-4 sm:mt-10">
                  {expectations.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <article key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/14 pt-4">
                        <div className="grid size-10 place-items-center rounded-lg bg-brand-teal text-white">
                          <Icon size={20} strokeWidth={1.8} aria-hidden />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">
                            Step {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-1 font-heading text-2xl font-normal">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/64">{item.copy}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 space-y-3 text-xs font-bold uppercase tracking-[0.08em] text-white/58 sm:mt-12 sm:space-y-4 sm:text-sm">
                <p>hello@albertoacademy.com</p>
                <p>Global online operations</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <div className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 md:border-0 md:bg-transparent md:p-0">
            <Mail className="mt-1 text-brand-teal-light" size={22} aria-hidden />
            <div>
              <h3 className="font-heading text-2xl font-normal">Email</h3>
              <p className="mt-2 text-sm text-white/62">hello@albertoacademy.com</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 md:border-0 md:bg-transparent md:p-0">
            <Clock3 className="mt-1 text-brand-teal-light" size={22} aria-hidden />
            <div>
              <h3 className="font-heading text-2xl font-normal">Response Time</h3>
              <p className="mt-2 text-sm text-white/62">Usually within one business day.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:col-span-2 md:col-span-1 md:border-0 md:bg-transparent md:p-0">
            <CalendarCheck className="mt-1 text-brand-teal-light" size={22} aria-hidden />
            <div>
              <h3 className="font-heading text-2xl font-normal">Format</h3>
              <p className="mt-2 text-sm text-white/62">Online sessions for students worldwide.</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
