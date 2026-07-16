import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold leading-none",
  {
    variants: {
      variant: {
        neutral: "border-border bg-muted text-muted-foreground",
        primary: "border-primary/20 bg-primary/10 text-primary",
        secondary: "border-secondary/25 bg-secondary/10 text-secondary",
        success: "border-emerald-700/20 bg-emerald-700/10 text-emerald-800",
        warning: "border-amber-700/20 bg-amber-700/10 text-amber-800",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  /** Label curto de status, categoria ou contexto. */
  children: React.ReactNode;
}

/** Indicador textual compacto para status e categorias. */
function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
