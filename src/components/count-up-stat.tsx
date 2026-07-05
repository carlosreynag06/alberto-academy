"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: string;
  className?: string;
};

export function CountUpStat({ value, className }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const statMatch = value.match(/^(\d+)(.*)$/);
  const [displayValue, setDisplayValue] = useState(() => (statMatch ? `0${statMatch[2] ?? ""}` : value));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const match = value.match(/^(\d+)(.*)$/);

    if (!match) {
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? "";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      if (hasAnimated.current) {
        return;
      }

      hasAnimated.current = true;

      if (reduceMotion) {
        setDisplayValue(value);
        return;
      }

      const duration = 1100;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);

        setDisplayValue(`${current}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
