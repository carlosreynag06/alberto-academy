"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenCheck, BriefcaseBusiness, CheckCircle2, PenLine } from "lucide-react";
import { programTracks } from "@/lib/programs";

const complementaryIds = ["programa-por-niveles", "tutorias-personalizadas", "coaching-especializado"];
const complementaryPrograms = programTracks.filter((program) => complementaryIds.includes(program.id));
const icons = [BookOpenCheck, PenLine, BriefcaseBusiness];

export function ComplementaryProgramsScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({ left: direction * Math.max(scroller.clientWidth * 0.72, 300), behavior: "smooth" });
  }

  return (
    <section id="rutas-complementarias" className="overflow-hidden bg-brand-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 border-b border-white/14 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker-dark">Rutas complementarias</p>
            <h2 className="section-heading mt-3 text-white">Más opciones para avanzar según su objetivo.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/66">
              Explore una ruta completa por niveles, apoyo puntual o preparación para una meta específica.
            </p>
          </div>
          <div className="flex gap-2" aria-label="Controles del carrusel">
            <button type="button" onClick={() => move(-1)} className="grid size-12 place-items-center rounded-full border border-white/22 text-white transition hover:border-brand-teal-light hover:bg-brand-teal hover:text-white" aria-label="Ver servicio anterior">
              <ArrowLeft size={20} aria-hidden />
            </button>
            <button type="button" onClick={() => move(1)} className="grid size-12 place-items-center rounded-full bg-brand-red text-white transition hover:bg-brand-red-dark" aria-label="Ver servicio siguiente">
              <ArrowRight size={20} aria-hidden />
            </button>
          </div>
        </div>

        <div ref={scrollerRef} className="mt-8 grid snap-x snap-mandatory grid-flow-col auto-cols-[88%] gap-4 overflow-x-auto overscroll-x-contain pb-4 sm:auto-cols-[66%] lg:auto-cols-[46%] xl:auto-cols-[38%]" tabIndex={0} aria-label="Servicios complementarios">
          {complementaryPrograms.map((program, index) => {
            const Icon = icons[index] ?? BookOpenCheck;

            return (
              <article key={program.id} id={program.id} className="flex min-h-[31rem] snap-start flex-col rounded-xl border border-brand-navy/10 bg-surface-white p-6 text-brand-navy shadow-2xl shadow-black/14 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-lg bg-brand-navy text-white"><Icon size={21} strokeWidth={1.8} aria-hidden /></span>
                  <span className="font-heading text-4xl font-normal leading-none text-brand-navy/14">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.09em] text-brand-red">{program.eyebrow}</p>
                <h3 className="mt-3 font-heading text-3xl font-normal leading-tight">{program.title}</h3>
                <p className="mt-4 font-heading text-xl font-normal leading-snug text-brand-blue">{program.headline}</p>
                <p className="mt-4 text-sm leading-7 text-brand-navy/64">{program.description}</p>

                <div className="mt-6 grid gap-3 border-t border-brand-navy/10 pt-5">
                  {program.outcomes.slice(0, 3).map((outcome) => (
                    <p key={outcome} className="flex items-center gap-2 text-sm font-bold text-brand-navy/72">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-teal" aria-hidden />
                      {outcome}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <p className="border-t border-brand-navy/10 pt-5 text-xs font-extrabold uppercase leading-6 tracking-[0.07em] text-brand-navy/48">
                    {program.badge} · {program.format} · {program.focus}
                  </p>
                  <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-red transition hover:text-brand-red-dark">
                    Consultar esta opción <ArrowRight size={17} aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
