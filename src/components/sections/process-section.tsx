"use client";

import { CalendarCheck, ClipboardCheck, MessageCircle, RefreshCw } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";

const processSteps = [
  {
    title: "Primeiro contato",
    description:
      "Você inicia uma conversa breve para apresentar sua demanda e tirar dúvidas iniciais.",
    icon: MessageCircle,
  },
  {
    title: "Alinhamento inicial",
    description:
      "O atendimento é contextualizado com cuidado, respeitando seu ritmo e suas necessidades.",
    icon: ClipboardCheck,
  },
  {
    title: "Início dos atendimentos",
    description: "As sessões começam como um espaço de escuta, elaboração e construção de sentido.",
    icon: CalendarCheck,
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "O processo segue com revisões, aprofundamentos e atenção ao que emerge ao longo do caminho.",
    icon: RefreshCw,
  },
] as const;

const motionEase = [0.22, 1, 0.36, 1] as const;

function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="processo" className="bg-muted/45 py-16 sm:py-20 lg:py-28">
      <MaxWidthContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <m.div
            className="space-y-8"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.28, ease: motionEase }}
          >
            <SectionTitle
              eyebrow="Como funciona"
              title="Um processo simples para começar com mais segurança."
              description="A jornada de atendimento é organizada para reduzir incertezas antes do primeiro passo e manter clareza ao longo do acompanhamento."
            />

            <Button variant="secondary" size="lg">
              Quero saber disponibilidade
            </Button>
          </m.div>

          <div className="relative">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border md:block" />
            <ol className="grid gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <m.li
                    key={step.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.24,
                      delay: reduceMotion ? 0 : index * 0.04,
                      ease: motionEase,
                    }}
                  >
                    <Card variant="subtle" className="relative bg-card/86">
                      <div className="flex gap-5">
                        <IconWrapper variant="primary" size="md" className="relative z-10 bg-card">
                          <Icon aria-hidden="true" />
                        </IconWrapper>

                        <div className="space-y-2">
                          <Badge variant="neutral">Etapa {index + 1}</Badge>
                          <h3 className="text-xl font-semibold leading-snug text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-base leading-7 text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </m.li>
                );
              })}
            </ol>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { ProcessSection };
