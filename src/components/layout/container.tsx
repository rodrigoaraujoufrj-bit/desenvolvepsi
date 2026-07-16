import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      narrow: "max-w-[760px]",
      default: "max-w-[1120px]",
      wide: "max-w-[1200px]",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  /** Conteudo que deve respeitar largura maxima e gutters responsivos. */
  children: React.ReactNode;
}

/** Controla largura, margens e alinhamento dos blocos de interface. */
function Container({ className, size, children, ...props }: ContainerProps) {
  return (
    <div data-slot="container" className={cn(containerVariants({ size, className }))} {...props}>
      {children}
    </div>
  );
}

export { Container, containerVariants };
