import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const maxWidthContainerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
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

export interface MaxWidthContainerProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof maxWidthContainerVariants> {
  /** Conteudo que deve respeitar largura maxima e gutters responsivos. */
  children: React.ReactNode;
}

/** Controla largura maxima, margens e gutters responsivos dos blocos de interface. */
function MaxWidthContainer({ className, size, children, ...props }: MaxWidthContainerProps) {
  return (
    <div
      data-slot="max-width-container"
      className={cn(maxWidthContainerVariants({ size, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export { MaxWidthContainer, maxWidthContainerVariants };
