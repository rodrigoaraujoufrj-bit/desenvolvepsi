"use client";

import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const motionEase = [0.22, 1, 0.36, 1] as const;

const trustIndicators = [
  "Mestre e Doutor pela USP",
  "Atendimento Online",
  "Atendimento Presencial",
  "CRP ativo",
] as const;

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const contentMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18, filter: "blur(3px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.34, ease: motionEase },
      };
  const visualMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.38, delay: 0.08, ease: motionEase },
      };

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-background pt-10 sm:pt-14 lg:pt-18"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,theme(colors.accent)_0%,transparent_42%),linear-gradient(180deg,theme(colors.background),transparent)]" />
      <MaxWidthContainer size="wide">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <m.div className="max-w-[46rem]" {...contentMotion}>
            <Badge variant="primary">
              <Sparkles aria-hidden="true" className="size-3.5" />
              Psicoterapia com escuta, contexto e cuidado
            </Badge>

            <div className="mt-6 space-y-6">
              <h1 className="max-w-[15ch] text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-[3.5rem]">
                Psicoterapia para compreender sua história e construir novas possibilidades.
              </h1>
              <p className="max-w-[39rem] text-lg leading-8 text-muted-foreground sm:text-xl">
                Atendimento online e presencial para adultos, casais e famílias, com uma abordagem
                baseada na Psicologia Histórico Cultural.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" aria-label="Agendar conversa">
                <MessageCircle aria-hidden="true" />
                Agendar conversa
              </Button>
              <Button variant="secondary" size="lg" aria-label="Conheça minha abordagem">
                Conheça minha abordagem
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>

            <ul
              className="mt-8 grid max-w-[41rem] gap-3 text-sm font-medium text-foreground sm:grid-cols-2"
              aria-label="Indicadores de confiança"
            >
              {trustIndicators.map((indicator) => (
                <li key={indicator} className="flex items-center gap-2.5">
                  <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
                  <span>{indicator}</span>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            className="relative mx-auto min-h-[27rem] w-full max-w-[33rem] overflow-hidden rounded-lg border border-border bg-card shadow-soft sm:min-h-[34rem]"
            {...visualMotion}
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,theme(colors.card)_0%,theme(colors.accent)_52%,theme(colors.muted)_100%)]" />
            <div className="absolute -right-14 top-10 h-40 w-40 rounded-full border border-primary/20 bg-primary/10" />
            <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full border border-secondary/20 bg-secondary/10" />

            <figure
              aria-label="Espaço reservado para foto profissional do psicólogo"
              className="absolute inset-x-6 bottom-6 top-6 overflow-hidden rounded-lg border border-border bg-background/76 shadow-card backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:top-8"
              role="img"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,theme(colors.primary/0.16),transparent_34%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(180deg,transparent,theme(colors.background/0.86))]" />
              <div className="absolute left-1/2 top-[21%] size-24 -translate-x-1/2 rounded-full border border-primary/15 bg-card shadow-card sm:size-28" />
              <div className="absolute bottom-[18%] left-1/2 h-48 w-[62%] -translate-x-1/2 rounded-t-full border border-primary/15 bg-card shadow-card sm:h-56" />
              <figcaption className="absolute bottom-6 left-6 right-6 rounded-md border border-border bg-card/88 px-4 py-3 text-sm text-muted-foreground shadow-card backdrop-blur-sm">
                Foto profissional em destaque, preparada para receber o retrato oficial.
              </figcaption>
            </figure>

            <div className="absolute left-4 top-8 rounded-md border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur-sm sm:left-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                Abordagem
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">Histórico Cultural</p>
            </div>

            <div className="absolute bottom-10 right-4 rounded-md border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur-sm sm:right-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 aria-hidden="true" className="size-4 text-primary" />
                Atendimento ético
              </div>
            </div>
          </m.div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { HeroSection };
