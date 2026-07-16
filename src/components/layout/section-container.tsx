import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const sectionContainerVariants = cva("w-full", {
  variants: {
    spacing: {
      sm: "py-12 sm:py-14",
      md: "py-16 sm:py-20",
      lg: "py-20 sm:py-24 lg:py-28",
    },
    tone: {
      background: "bg-background",
      muted: "bg-muted/50",
      surface: "bg-card",
    },
  },
  defaultVariants: {
    spacing: "md",
    tone: "background",
  },
});

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionContainerVariants> {
  /** Conteudo estrutural da area. */
  children: React.ReactNode;
  /** Largura maxima herdada do componente Container. */
  containerSize?: React.ComponentProps<typeof Container>["size"];
}

/** Container vertical para ritmo e espacamento global, sem definir conteudo de landing. */
function SectionContainer({
  className,
  spacing,
  tone,
  containerSize,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section
      data-slot="section-container"
      className={cn(sectionContainerVariants({ spacing, tone, className }))}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export { SectionContainer, sectionContainerVariants };
