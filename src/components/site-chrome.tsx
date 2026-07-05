import Link from "next/link";
import { CalendarCheck, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs#programs-hero" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Login", href: "/login" },
];

export function SiteHeader() {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-brand-navy/10 bg-surface-white/90 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:gap-3 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden" aria-label="Alberto Academy home">
            <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brand-red font-heading text-lg font-semibold text-white">
              A
            </span>
            <span className="truncate font-heading text-base font-semibold text-brand-navy sm:text-xl">Alberto Academy</span>
          </Link>

          <nav className="hidden items-center justify-center gap-6 text-sm font-semibold text-brand-navy/70 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-brand-navy">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle scope="public" compact />
            <Link
              href="/contact"
              className="hidden h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-brand-red px-3 text-sm font-bold text-white shadow-sm shadow-brand-red/20 transition hover:bg-brand-red-dark sm:inline-flex sm:px-4"
            >
              <CalendarCheck size={16} aria-hidden />
              <span className="hidden sm:inline">Book a Trial</span>
            </Link>

            <details className="mobile-nav block lg:hidden">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-brand-navy/12 text-brand-navy transition hover:border-brand-teal hover:text-brand-blue" aria-label="Toggle navigation">
                <Menu className="mobile-nav-open" size={20} aria-hidden />
                <X className="mobile-nav-close hidden" size={20} aria-hidden />
              </summary>
              <div className="absolute left-4 right-4 top-[4.5rem] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-xl border border-brand-navy/10 bg-surface-white p-3 shadow-2xl shadow-brand-navy/18">
                <nav className="grid gap-1 text-sm font-extrabold text-brand-navy" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} className="rounded-lg px-4 py-3 transition hover:bg-surface-cream hover:text-brand-blue">
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-red-dark">
                    <CalendarCheck size={16} aria-hidden />
                    Book a Trial
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>
      <div aria-hidden="true" className="h-16" />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 xl:grid-cols-[0.82fr_1.48fr] xl:gap-12">
        <div className="bg-brand-blue p-6 sm:p-8 lg:p-10">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Alberto Academy home">
            <span className="grid size-11 place-items-center rounded-md bg-brand-red font-heading text-xl font-semibold text-white">
              A
            </span>
            <span className="font-heading text-2xl font-semibold">Alberto Academy</span>
          </Link>

          <p className="mt-7 max-w-sm text-base leading-7 text-white/76">
            Premium online English coaching for adults who want practical language skills for work, study, travel, and daily life.
          </p>

          <div className="mt-8 flex items-center gap-3" aria-label="Social media">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative grid size-12 place-items-center rounded-full bg-white/8 text-white ring-1 ring-white/10 transition hover:bg-brand-teal hover:ring-brand-teal"
                aria-label={link.label}
              >
                <SocialIcon kind={link.icon} />
              </a>
            ))}
          </div>

          <div className="mt-9 space-y-3 text-sm font-semibold text-white/76">
            <a href="mailto:hello@albertoacademy.com" className="flex items-center gap-3 break-all transition hover:text-white">
              <Mail size={17} className="text-brand-teal-light" aria-hidden />
              hello@albertoacademy.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={17} className="text-brand-teal-light" aria-hidden />
              Online lessons from the Dominican Republic
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-6 text-sm font-extrabold text-white shadow-lg shadow-brand-navy/18 transition hover:bg-brand-red-dark"
          >
            Book A Trial
            <CalendarCheck size={17} aria-hidden />
          </Link>
        </div>

        <div className="py-2 lg:py-10">
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.15fr]">
            <FooterColumn title="Menu" links={navItems} />
            <FooterColumn
              title="Resources"
              links={[
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <FooterColumn
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ]}
            />
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">Contact</h3>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-teal-light via-brand-teal/30 to-transparent" aria-hidden />
              <div className="mt-6 grid gap-4 text-sm font-semibold text-white/68">
                <a href="tel:+18095550194" className="flex items-center gap-3 transition hover:text-white">
                  <Phone size={17} className="text-brand-teal-light" aria-hidden />
                  +1 (809) 555-0194
                </a>
                <a href="mailto:hello@albertoacademy.com" className="flex items-center gap-3 break-all transition hover:text-white">
                  <Mail size={17} className="text-brand-teal-light" aria-hidden />
                  hello@albertoacademy.com
                </a>
                <p className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-brand-teal-light" aria-hidden />
                  Global online operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs font-semibold uppercase tracking-[0.08em] text-white/48 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>(c) 2026 Alberto Academy. All rights reserved.</p>
          <p>Personalized ESL instruction for real-world confidence.</p>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "WhatsApp", href: "#", icon: "whatsapp" },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-teal-light via-brand-teal/30 to-transparent" aria-hidden />
      <div className="mt-6 grid gap-4 text-sm font-semibold text-white/68">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ kind }: { kind: (typeof socialLinks)[number]["icon"] }) {
  if (kind === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M14 8.5V6.9c0-.7.2-1.1 1.2-1.1H17V2.4c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.6 1.7-4.6 4.8v1.5H6.8v3.8h2.9V22H14v-9.7h2.9l.5-3.8H14Z" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <rect width="16" height="16" x="4" y="4" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.8h.01" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M5.4 19.2 6.5 16A7.3 7.3 0 1 1 9 18.2l-3.6 1Z" />
      <path d="M9.2 8.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.4.5c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.3 2.1.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.6 0 .6-.4 1.4-.9 1.6-.7.3-1.7.3-3.3-.4-2.8-1.2-4.6-3.8-4.8-5.1-.2-.8.2-1.8.7-2.3Z" />
    </svg>
  );
}
