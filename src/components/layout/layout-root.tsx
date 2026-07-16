import type * as React from "react";

import { AnimationProvider } from "@/components/layout/animation-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";
import { ScrollProvider } from "@/components/layout/scroll-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";

export interface LayoutRootProps {
  /** Conteudo da rota atual. */
  children: React.ReactNode;
}

/** Compoe providers globais, Navbar estrutural e transicao de pagina. */
function LayoutRoot({ children }: LayoutRootProps) {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <ScrollProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ScrollProvider>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export { LayoutRoot };
