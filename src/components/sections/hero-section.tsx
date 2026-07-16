"use client";

import { ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Sparkles } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const motionEase = [0.22, 1, 0.36, 1] as const;

const trustIndicators = [
  { label: "Mestre pela USP", icon: GraduationCap },
  { label: "Doutor pela USP", icon: GraduationCap },
  { label: "Atendimento Online", icon: CheckCircle2 },
  { label: "Atendimento Presencial", icon: CheckCircle2 },
] as const;

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const contentMotion = reduceMotion
    ? { initial: false as const }
    : {
        initial: false as const,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.34, ease: motionEase },
      };
  const visualMotion = reduceMotion
    ? { initial: false as const }
    : {
        initial: false as const,
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.38, delay: 0.08, ease: motionEase },
      };

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-background pt-10 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(125deg,theme(colors.background)_0%,theme(colors.accent/0.82)_45%,theme(colors.background)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-border/70" />
      <MaxWidthContainer size="wide">
        <div className="grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-18 xl:py-20">
          <m.div className="max-w-[47rem]" {...contentMotion}>
            <Badge
              variant="primary"
              className="border-primary/25 bg-card/72 px-3 py-1.5 shadow-card backdrop-blur-sm"
            >
              <Sparkles aria-hidden="true" className="size-3.5" />
              Psicoterapia com escuta, contexto e cuidado
            </Badge>

            <div className="mt-7 space-y-5">
              <h1 className="max-w-[16ch] text-[3.25rem] font-semibold leading-[1.02] text-foreground sm:text-[4rem] lg:text-[4.35rem] xl:text-[4.5rem]">
                Psicoterapia para compreender sua história e construir novas possibilidades.
              </h1>
              <p className="max-w-[37rem] text-lg leading-8 text-muted-foreground sm:text-xl">
                Atendimento online e presencial para adultos, casais e famílias, com uma abordagem
                baseada na Psicologia Histórico Cultural.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                aria-label="Agendar conversa"
                className="h-14 px-7 text-base shadow-[0_22px_44px_-24px_theme(colors.primary)] hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-26px_theme(colors.primary)] focus-visible:ring-4 active:translate-y-px sm:h-[3.75rem] sm:px-8"
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                Agendar conversa
              </Button>
              <Button
                variant="secondary"
                size="lg"
                aria-label="Conheça minha abordagem"
                className="h-14 border-primary/20 bg-card/72 px-7 text-base backdrop-blur-sm hover:-translate-y-0.5 hover:bg-card hover:text-primary active:translate-y-px sm:h-[3.75rem]"
              >
                Conheça minha abordagem
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>

            <ul
              className="mt-8 grid max-w-[38rem] gap-3 text-sm font-medium text-foreground sm:grid-cols-2"
              aria-label="Indicadores de confiança"
            >
              {trustIndicators.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex min-h-10 items-center gap-2.5 rounded-md border border-border/80 bg-card/58 px-3 text-sm shadow-card backdrop-blur-sm"
                >
                  <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            className="relative mx-auto min-h-[30rem] w-full max-w-[34.5rem] sm:min-h-[38rem] lg:min-h-[41rem]"
            {...visualMotion}
          >
            <div className="absolute inset-x-4 bottom-5 top-8 rounded-[2rem] border border-border/80 bg-card/72 shadow-soft backdrop-blur-sm sm:inset-x-6 sm:bottom-8 sm:top-10" />
            <div className="absolute right-4 top-4 h-44 w-56 rounded-[42%_58%_52%_48%/45%_42%_58%_55%] border border-primary/15 bg-card/40" />
            <div className="absolute bottom-4 left-4 h-52 w-64 rounded-[58%_42%_44%_56%/52%_56%_44%_48%] border border-secondary/15 bg-card/34" />

            <figure
              aria-label="Espaço reservado para foto profissional do psicólogo"
              className="absolute inset-x-8 bottom-12 top-4 overflow-hidden rounded-[1.25rem] border border-border bg-background shadow-soft sm:inset-x-12 sm:bottom-16"
              role="img"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,theme(colors.accent/0.62)_0%,theme(colors.card)_48%,theme(colors.background)_100%)]" />
              <div className="absolute left-1/2 top-[12%] h-[18rem] w-[70%] -translate-x-1/2 rounded-[48%_52%_44%_56%/52%_46%_54%_48%] bg-primary/12 blur-2xl sm:h-[22rem]" />
              <div className="absolute left-1/2 top-[16%] size-28 -translate-x-1/2 rounded-full border border-primary/15 bg-card shadow-card sm:size-36" />
              <div className="absolute bottom-[12%] left-1/2 h-[17rem] w-[72%] -translate-x-1/2 rounded-t-[999px] border border-primary/15 bg-card shadow-card sm:h-[22rem]" />
              <div className="absolute inset-x-0 bottom-0 h-[32%] bg-[linear-gradient(180deg,transparent,theme(colors.background/0.92))]" />
              <figcaption className="absolute bottom-5 left-5 right-5 rounded-lg border border-border bg-card/90 px-4 py-3 text-sm leading-6 text-muted-foreground shadow-card backdrop-blur-sm">
                Espaço reservado para a fotografia profissional oficial, sem uso de imagem genérica.
              </figcaption>
            </figure>

            <div className="absolute left-1 top-14 rounded-lg border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur-sm sm:left-0">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                Abordagem
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">Histórico Cultural</p>
            </div>

            <div className="absolute bottom-10 right-1 rounded-lg border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur-sm sm:right-0">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 aria-hidden="true" className="size-4 text-primary" />
                Primeiro contato claro
              </div>
            </div>
          </m.div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { HeroSection };
