"use client";

import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { IconWrapper } from "@/components/ui/icon-wrapper";

const aboutPrinciples = [
  "Escuta sem julgamento e com respeito ao seu tempo.",
  "Clareza sobre o processo, sem promessas simplistas.",
  "Cuidado com privacidade, autonomia e limites profissionais.",
] as const;

const trustItems = [
  {
    title: "Ética",
    description: "Comunicação responsável e respeito aos limites da psicologia.",
    icon: Shield,
  },
  {
    title: "Presença",
    description: "Um espaço de escuta para elaborar experiências com calma.",
    icon: Sparkles,
  },
  {
    title: "Clareza",
    description: "Orientação simples sobre o atendimento e os próximos passos.",
    icon: CheckCircle2,
  },
] as const;

const motionEase = [0.22, 1, 0.36, 1] as const;

function AboutSection() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.28, ease: motionEase },
      };

  return (
    <section id="sobre" className="bg-background py-16 sm:py-20 lg:py-28">
      <MaxWidthContainer size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <m.div className="space-y-8" {...motionProps}>
            <SectionTitle
              eyebrow="Sobre"
              title="Uma presença profissional para acolher, organizar e acompanhar."
              description="O atendimento psicológico é conduzido como um espaço de escuta qualificada, construção de sentido e cuidado com a singularidade de cada história."
            />

            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                A proposta é oferecer uma experiência clara e humana para quem está iniciando ou
                retomando a psicoterapia, com uma comunicação que respeita dúvidas, receios e o
                tempo necessário para confiar no processo.
              </p>
              <p>
                Em vez de respostas prontas, o acompanhamento favorece reflexão, elaboração e
                desenvolvimento de recursos internos para lidar com emoções, relações e mudanças de
                vida.
              </p>
            </div>

            <ul className="grid gap-3" aria-label="Princípios do atendimento">
              {aboutPrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 text-base leading-7 text-foreground">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </m.div>

          <m.aside
            className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8"
            aria-label="Sinais de confiança do atendimento"
            {...motionProps}
          >
            <Badge variant="secondary">Forma de trabalho</Badge>

            <div className="mt-7 space-y-6">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <div className="flex gap-4">
                      <IconWrapper variant="secondary" size="md">
                        <Icon aria-hidden="true" />
                      </IconWrapper>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-base leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < trustItems.length - 1 ? (
                      <Divider tone="subtle" className="mt-6" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </m.aside>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { AboutSection };
