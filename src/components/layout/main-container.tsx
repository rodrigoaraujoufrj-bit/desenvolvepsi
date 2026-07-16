import type * as React from "react";

import { cn } from "@/lib/utils";

export interface MainContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Conteudo principal da pagina. */
  children: React.ReactNode;
}

/** Estrutura semantica principal, com compensacao para Navbar fixa. */
function MainContainer({ className, children, ...props }: MainContainerProps) {
  return (
    <main className={cn("min-h-screen pt-20", className)} {...props}>
      {children}
    </main>
  );
}

export { MainContainer };
