"use client";

import type * as React from "react";
import { LazyMotion, domAnimation } from "motion/react";

export interface AnimationProviderProps {
  /** Arvore que pode utilizar componentes Motion com carregamento leve de features. */
  children: React.ReactNode;
}

/** Centraliza a configuracao de animacoes discretas permitidas pelo Design System. */
function AnimationProvider({ children }: AnimationProviderProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export { AnimationProvider };
