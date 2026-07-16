"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const motionEase = [0.22, 1, 0.36, 1] as const;

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
    <section id="inicio" className="relative overflow-hidden bg-background pt-10 sm:pt-14 lg:pt-18">
      <MaxWidthContainer size="wide">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:py-24">
          <m.div className="max-w-[46rem]" {...contentMotion}>
            <Badge variant="primary">Psicoterapia com escuta e clareza</Badge>

            <div className="mt-6 space-y-6">
              <h1 className="max-w-[13ch] text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-[3.5rem]">
                Um espaço para entender o que você sente.
              </h1>
              <p className="max-w-[39rem] text-lg leading-8 text-muted-foreground sm:text-xl">
                Acompanhamento psicológico para acolher sua história, organizar emoções e construir
                caminhos possíveis com cuidado, ética e presença.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                <MessageCircle aria-hidden="true" />
                Iniciar conversa
              </Button>
              <Button variant="secondary" size="lg">
                Entender o atendimento
                <ArrowDown aria-hidden="true" />
              </Button>
            </div>

            <p className="mt-5 max-w-[34rem] text-sm leading-6 text-muted-foreground">
              Você pode começar com uma conversa inicial, sem precisar explicar tudo de uma vez.
            </p>
          </m.div>

          <m.div
            className="relative min-h-[24rem] overflow-hidden rounded-lg border border-border bg-card shadow-soft sm:min-h-[31rem]"
            aria-label="Composicao visual abstrata sobre acolhimento e clareza"
            role="img"
            {...visualMotion}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.accent/0.82),theme(colors.card)_42%,theme(colors.muted)_100%)]" />
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-primary/20 bg-primary/10" />
            <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full border border-secondary/20 bg-secondary/10" />
            <div className="absolute inset-x-8 top-1/2 h-px bg-border" />
            <div className="absolute left-10 right-10 top-[38%] rounded-md border border-border bg-background/82 p-5 shadow-card backdrop-blur-sm">
              <div className="h-3 w-28 rounded-full bg-primary/30" />
              <div className="mt-5 space-y-3">
                <div className="h-2.5 rounded-full bg-muted-foreground/18" />
                <div className="h-2.5 w-10/12 rounded-full bg-muted-foreground/16" />
                <div className="h-2.5 w-7/12 rounded-full bg-muted-foreground/14" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 rounded-md border border-border bg-card/88 px-4 py-3 text-sm font-medium text-muted-foreground shadow-card backdrop-blur-sm">
              Clareza no primeiro passo
            </div>
          </m.div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { HeroSection };
