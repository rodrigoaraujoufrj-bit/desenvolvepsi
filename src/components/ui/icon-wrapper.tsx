import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva("inline-flex shrink-0 items-center justify-center rounded-md", {
  variants: {
    variant: {
      neutral: "bg-muted text-muted-foreground",
      primary: "bg-primary/10 text-primary",
      secondary: "bg-secondary/10 text-secondary",
      surface: "border border-border bg-card text-foreground",
    },
    size: {
      sm: "size-8 [&_svg]:size-4",
      md: "size-10 [&_svg]:size-5",
      lg: "size-12 [&_svg]:size-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface IconWrapperProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof iconWrapperVariants> {
  /** Icone visual. Informe `aria-label` quando o icone tiver significado proprio. */
  children: React.ReactNode;
  /** Use true quando o icone for apenas decorativo. */
  decorative?: boolean;
}

/** Moldura consistente para icones de apoio visual ou informativo. */
function IconWrapper({
  className,
  variant,
  size,
  decorative = true,
  children,
  ...props
}: IconWrapperProps) {
  return (
    <span
      data-slot="icon-wrapper"
      aria-hidden={decorative ? true : undefined}
      className={cn(iconWrapperVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </span>
  );
}

export { IconWrapper, iconWrapperVariants };
