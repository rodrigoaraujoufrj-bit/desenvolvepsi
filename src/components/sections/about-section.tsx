"use client";

import {
  BadgeCheck,
  BookOpen,
  Brain,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Layers3,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";

interface TimelineItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface DifferentialItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Graduação em Psicologia",
    description: "Base profissional para escuta clínica, ética e compreensão do sujeito.",
    icon: BookOpen,
  },
  {
    title: "Mestrado pela USP",
    description: "Pesquisa acadêmica orientada por rigor, contexto e formação crítica.",
    icon: GraduationCap,
  },
  {
    title: "Doutorado pela USP",
    description: "Aprofundamento teórico e científico para sustentar a prática clínica.",
    icon: Landmark,
  },
  {
    title: "Especialização em Neuropsicologia",
    description: "Olhar atento para desenvolvimento, cognição e singularidade.",
    icon: Brain,
  },
  {
    title: "Atuação Clínica",
    description: "Experiência no cuidado com adultos, casais, famílias e crianças.",
    icon: Stethoscope,
  },
];

const differentials: DifferentialItem[] = [
  {
    title: "Psicologia Histórico Cultural",
    description: "Compreensão da pessoa em sua história, vínculos e contexto de vida.",
    icon: Layers3,
  },
  {
    title: "Atendimento Humanizado",
    description: "Escuta cuidadosa, linguagem clara e respeito ao tempo de cada processo.",
    icon: HeartHandshake,
  },
  {
    title: "Formação Acadêmica Sólida",
    description: "Percurso de estudo e pesquisa que sustenta uma prática responsável.",
    icon: ShieldCheck,
  },
];

const motionEase = [0.22, 1, 0.36, 1] as const;

function AboutSection() {
  const reduceMotion = useReducedMotion();

  const sectionMotion = reduceMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.3, ease: motionEase },
      };

  return (
    <section id="sobre" className="overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <MaxWidthContainer size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <m.div className="relative order-1 lg:order-none" {...sectionMotion}>
            <div className="relative mx-auto min-h-[28rem] w-full max-w-[34rem] sm:min-h-[34rem] lg:min-h-[42rem]">
              <div className="absolute inset-x-5 bottom-4 top-8 rounded-[2rem] border border-border bg-card/80 shadow-soft backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:top-10" />
              <div className="absolute left-2 top-10 h-44 w-52 rounded-[55%_45%_49%_51%/45%_52%_48%_55%] border border-primary/15 bg-accent/50" />
              <div className="absolute bottom-4 right-4 h-48 w-60 rounded-[45%_55%_56%_44%/52%_45%_55%_48%] border border-secondary/15 bg-secondary/10" />

              <figure
                role="img"
                aria-label="Espaço reservado para fotografia profissional de Ricardo"
                className="absolute inset-x-9 bottom-14 top-4 overflow-hidden rounded-lg border border-border bg-background shadow-soft sm:inset-x-14 sm:bottom-20"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,theme(colors.accent/0.7)_0%,theme(colors.card)_48%,theme(colors.background)_100%)]" />
                <div className="absolute left-1/2 top-[12%] h-60 w-[76%] -translate-x-1/2 rounded-[48%_52%_44%_56%/52%_46%_54%_48%] bg-primary/12 blur-2xl" />
                <div className="absolute left-1/2 top-[16%] size-28 -translate-x-1/2 rounded-full border border-primary/15 bg-card shadow-card sm:size-36" />
                <div className="absolute bottom-[10%] left-1/2 h-[17rem] w-[76%] -translate-x-1/2 rounded-t-[999px] border border-primary/15 bg-card shadow-card sm:h-[22rem]" />
                <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,transparent,theme(colors.background/0.94))]" />
                <figcaption className="absolute bottom-5 left-5 right-5 rounded-lg border border-border bg-card/90 px-4 py-3 text-sm leading-6 text-muted-foreground shadow-card backdrop-blur-sm">
                  Espaço reservado para a fotografia profissional oficial de Ricardo.
                </figcaption>
              </figure>

              <Card
                variant="default"
                className="absolute left-0 top-16 max-w-[13rem] bg-card/92 p-4 backdrop-blur-sm sm:left-2"
              >
                <div className="flex items-start gap-3">
                  <IconWrapper variant="secondary" size="sm">
                    <BadgeCheck aria-hidden="true" />
                  </IconWrapper>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
                      Formação
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5 text-foreground">
                      Mestre e Doutor pela USP
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </m.div>

          <m.div className="order-2 space-y-10 lg:order-none" {...sectionMotion}>
            <div className="max-w-3xl">
              <Badge variant="primary" className="px-3 py-1.5">
                <Sparkles aria-hidden="true" className="size-3.5" />
                Sobre Ricardo
              </Badge>

              <div className="mt-6 space-y-5">
                <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Experiência acadêmica e presença clínica para acompanhar histórias reais.
                </h2>
                <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  <p>
                    Ricardo conduz o atendimento como um espaço de escuta qualificada, cuidado e
                    construção de sentido para quem deseja compreender melhor sua própria história.
                  </p>
                  <p>
                    Sua atuação articula formação acadêmica sólida, Psicologia Histórico Cultural e
                    atenção ao contexto de vida de cada pessoa, sem respostas prontas ou promessas
                    simplistas.
                  </p>
                  <p>
                    O objetivo é oferecer uma experiência clara, humana e ética para adultos,
                    casais, famílias e crianças que buscam apoio profissional.
                  </p>
                </div>
              </div>
            </div>

            <div aria-labelledby="formation-timeline-title">
              <h3
                id="formation-timeline-title"
                className="text-xl font-semibold leading-snug text-foreground"
              >
                Formação e atuação
              </h3>
              <ol className="mt-6 grid gap-0">
                {timelineItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <m.li
                      key={item.title}
                      className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-6 last:pb-0"
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.24,
                        delay: reduceMotion ? 0 : index * 0.04,
                        ease: motionEase,
                      }}
                    >
                      {index < timelineItems.length - 1 ? (
                        <div className="absolute bottom-0 left-5 top-10 w-px bg-border" />
                      ) : null}
                      <IconWrapper variant="surface" size="md" className="relative z-10 bg-card">
                        <Icon aria-hidden="true" />
                      </IconWrapper>
                      <div className="pt-1">
                        <h4 className="text-base font-semibold leading-6 text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </m.li>
                  );
                })}
              </ol>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {differentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <m.div
                    key={item.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.24,
                      delay: reduceMotion ? 0 : index * 0.05,
                      ease: motionEase,
                    }}
                  >
                    <Card
                      variant="subtle"
                      className="h-full bg-card/74 p-5 transition-colors hover:border-primary/30 hover:bg-card"
                    >
                      <IconWrapper variant="primary" size="sm">
                        <Icon aria-hidden="true" />
                      </IconWrapper>
                      <div className="mt-4 space-y-2">
                        <h3 className="text-base font-semibold leading-6 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { AboutSection };
