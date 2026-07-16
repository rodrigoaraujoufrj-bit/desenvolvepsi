import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("space-y-3", {
  variants: {
    align: {
      left: "text-left",
      center: "mx-auto text-center",
    },
    width: {
      default: "max-w-3xl",
      narrow: "max-w-2xl",
      wide: "max-w-4xl",
    },
  },
  defaultVariants: {
    align: "left",
    width: "default",
  },
});

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionTitleVariants> {
  /** Texto curto opcional para contextualizar a secao. */
  eyebrow?: string;
  /** Titulo principal do bloco. */
  title: string;
  /** Descricao auxiliar. Deve ser curta e objetiva. */
  description?: string;
  /** Nivel semantico do titulo renderizado. */
  headingLevel?: 1 | 2 | 3 | 4;
}

/** Componente de hierarquia textual para organizar blocos reutilizaveis. */
function SectionTitle({
  className,
  align,
  width,
  eyebrow,
  title,
  description,
  headingLevel = 2,
  ...props
}: SectionTitleProps) {
  const Heading = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;

  return (
    <div
      data-slot="section-title"
      className={cn(sectionTitleVariants({ align, width, className }))}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">{eyebrow}</p>
      ) : null}
      <Heading className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionTitle, sectionTitleVariants };
