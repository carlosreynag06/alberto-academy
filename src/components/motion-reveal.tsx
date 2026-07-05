"use client";

import type { ReactNode } from "react";
import type { HTMLMotionProps } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

type DivRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

type ArticleRevealProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

function revealTransition(delay = 0) {
  return {
    duration: 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1],
  } as const;
}

export function MotionReveal({ children, className, delay = 0, y = 28, ...props }: DivRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -90px 0px" }}
      transition={revealTransition(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({ children, className, delay = 0, y = 24, ...props }: ArticleRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -80px 0px" }}
      transition={revealTransition(delay)}
      {...props}
    >
      {children}
    </motion.article>
  );
}

export function MotionImagePanel({ children, className, delay = 0, ...props }: DivRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28, margin: "0px 0px -90px 0px" }}
      transition={revealTransition(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
