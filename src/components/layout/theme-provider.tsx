"use client";

import type * as React from "react";

export interface ThemeProviderProps {
  /** Conteudo da aplicacao renderizado sobre os tokens globais do tema. */
  children: React.ReactNode;
}

/** Provider reservado para evolucao de tema sem acoplar componentes ao documento HTML. */
function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}

export { ThemeProvider };
