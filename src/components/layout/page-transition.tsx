"use client";

import type * as React from "react";
import { usePathname } from "next/navigation";
import { m, useReducedMotion } from "motion/react";

export interface PageTransitionProps {
  /** Conteudo da rota atual. */
  children: React.ReactNode;
}

/** Transicao discreta entre paginas, respeitando reducao de movimento do usuario. */
function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      key={pathname}
      initial={false}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

export { PageTransition };
