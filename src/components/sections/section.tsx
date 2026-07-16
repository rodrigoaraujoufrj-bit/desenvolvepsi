"use client";

import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LazyMotion, domAnimation, m, useReducedMotion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative overflow-hidden", {
  variants: {
    spacing: {
      sm: "py-14 sm:py-16",
      md: "py-16 sm:py-20 lg:py-24",
      lg: "py-20 sm:py-24 lg:py-32",
    },
    tone: {
      background: "bg-background",
      surface: "bg-card",
      muted: "bg-muted/60",
    },
  },
  defaultVariants: {
    spacing: "md",
    tone: "background",
  },
});

export interface SectionProps
  extends Omit<HTMLMotionProps<"section">, "children">, VariantProps<typeof sectionVariants> {
  /** Conteudo interno da area visual. Nao deve representar uma secao final de landing por si so. */
  children: React.ReactNode;
  /** Ativa entrada sutil permitida pelo Design System. */
  animated?: boolean;
}

/** Wrapper estrutural com espacamento vertical e motion discreto. */
function Section({ className, spacing, tone, animated = false, children, ...props }: SectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        data-slot="section"
        className={cn(sectionVariants({ spacing, tone, className }))}
        initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={shouldAnimate ? { once: true, margin: "-80px" } : undefined}
        transition={shouldAnimate ? { duration: 0.28, ease: [0.22, 1, 0.36, 1] } : undefined}
        {...props}
      >
        {children}
      </m.section>
    </LazyMotion>
  );
}

export { Section, sectionVariants };
