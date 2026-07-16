import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dividerVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full min-h-6 w-px",
    },
    tone: {
      subtle: "bg-border/60",
      default: "bg-border",
      strong: "bg-foreground/20",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    tone: "default",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
  /** Orientacao visual do separador. Use `vertical` apenas dentro de layouts com altura definida. */
  orientation?: "horizontal" | "vertical";
}

/** Separador visual sem significado interativo. */
function Divider({
  className,
  orientation = "horizontal",
  tone,
  role = "separator",
  ...props
}: DividerProps) {
  return (
    <div
      data-slot="divider"
      role={role}
      aria-orientation={orientation}
      className={cn(dividerVariants({ orientation, tone, className }))}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
