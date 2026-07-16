"use client";

import {
  Brain,
  Compass,
  HeartHandshake,
  Leaf,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const serviceItems: ServiceItem[] = [
  {
    title: "Ansiedade e sobrecarga",
    description:
      "Acolhimento para compreender sinais de tensão, excesso de responsabilidade e dificuldade de descanso.",
    icon: Brain,
  },
  {
    title: "Relacionamentos e família",
    description:
      "Espaço para elaborar conflitos, limites, comunicação e mudanças nos vínculos importantes.",
    icon: HeartHandshake,
  },
  {
    title: "Autoestima e autoconhecimento",
    description:
      "Processo de escuta para reconhecer padrões, inseguranças e formas mais cuidadosas de se posicionar.",
    icon: Leaf,
  },
  {
    title: "Transições de vida e carreira",
    description:
      "Apoio em fases de escolha, mudança, adaptação e reorganização de prioridades pessoais.",
    icon: Compass,
  },
  {
    title: "Luto, separação e perdas",
    description:
      "Cuidado para atravessar despedidas, rupturas e transformações sem precisar apressar o próprio tempo.",
    icon: RefreshCw,
  },
  {
    title: "Limites e organização emocional",
    description:
      "Construção de clareza para lidar com decisões, demandas externas e necessidades pessoais.",
    icon: ShieldCheck,
  },
];

const motionEase = [0.22, 1, 0.36, 1] as const;

function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="atendimentos" className="bg-muted/45 py-16 sm:py-20 lg:py-28">
      <MaxWidthContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <SectionTitle
            eyebrow="Atendimentos"
            title="Demandas que podem ser acolhidas no processo terapêutico."
            description="A psicoterapia oferece um espaço profissional para olhar com cuidado para questões emocionais, relacionais e momentos de mudança."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceItems.map((service, index) => {
              const Icon = service.icon;

              return (
                <m.div
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.24,
                    delay: reduceMotion ? 0 : index * 0.035,
                    ease: motionEase,
                  }}
                >
                  <Card variant="subtle" className="h-full">
                    <div className="flex h-full flex-col gap-5">
                      <IconWrapper variant="primary" size="md">
                        <Icon aria-hidden="true" />
                      </IconWrapper>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold leading-snug text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-base leading-7 text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </m.div>
              );
            })}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { ServicesSection };
