import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg border bg-card text-card-foreground transition-colors", {
  variants: {
    variant: {
      default: "border-border shadow-card",
      subtle: "border-border/70 bg-card/70",
      accent: "border-primary/20 bg-accent/60",
    },
    padding: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    interactive: {
      true: "focus-within:ring-2 focus-within:ring-ring hover:border-primary/35 hover:bg-card",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    interactive: false,
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  /** Conteudo agrupado pelo card. Evite aninhar outro Card dentro dele. */
  children: React.ReactNode;
}

/** Superficie reutilizavel para agrupamentos de informacao de mesma hierarquia. */
function Card({ className, variant, padding, interactive, children, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, padding, interactive, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card, cardVariants };
