"use client";

import type * as React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface ScrollContextValue {
  isScrolled: boolean;
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export interface ScrollProviderProps {
  /** Arvore que precisa reagir ao estado de rolagem global. */
  children: React.ReactNode;
}

/** Expoe estado de rolagem para layout fixo, especialmente Navbar com efeito glass. */
function ScrollProvider({ children }: ScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScroll = () => setScrollY(window.scrollY);

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const value = useMemo(
    () => ({
      isScrolled: scrollY > 12,
      scrollY,
    }),
    [scrollY],
  );

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}

function useScrollState() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScrollState must be used within ScrollProvider");
  }

  return context;
}

export { ScrollProvider, useScrollState };
