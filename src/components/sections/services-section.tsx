import { Baby, Brain, Heart, HeartHandshake, Leaf, Users, type LucideIcon } from "lucide-react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";

interface SituationItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const situationItems: SituationItem[] = [
  {
    title: "Ansiedade",
    description:
      "Quando a antecipação, a inquietação ou a dificuldade de descanso começam a ocupar espaço demais.",
    icon: Brain,
  },
  {
    title: "Conflitos familiares",
    description:
      "Para olhar com cuidado para tensões, limites e formas de comunicação dentro dos vínculos próximos.",
    icon: Users,
  },
  {
    title: "Relacionamentos",
    description:
      "Espaço para compreender dificuldades afetivas, repetições, escolhas e modos de se posicionar.",
    icon: Heart,
  },
  {
    title: "Parentalidade",
    description:
      "Acolhimento para dúvidas, culpa, cansaço e desafios que aparecem na experiência de cuidar.",
    icon: HeartHandshake,
  },
  {
    title: "Autoconhecimento",
    description:
      "Para reconhecer padrões, escolhas e necessidades que podem abrir novas possibilidades de vida.",
    icon: Leaf,
  },
  {
    title: "Desenvolvimento infantil",
    description:
      "Cuidado para compreender preocupações sobre comportamento, aprendizagem, emoções e vínculos.",
    icon: Baby,
  },
];

function ServicesSection() {
  return (
    <section id="atendimentos" className="bg-muted/45 py-14 sm:py-20 lg:py-28">
      <MaxWidthContainer size="wide">
        <div className="max-w-[720px] space-y-4">
          <h2 className="text-balance text-3xl font-semibold leading-[1.16] text-foreground sm:text-4xl lg:text-5xl">
            Situações em que posso ajudar.
          </h2>
          <p className="max-w-[680px] text-pretty text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl">
            Algumas experiências pedem um espaço de escuta para serem compreendidas com calma,
            contexto e cuidado.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {situationItems.map((situation) => {
            const Icon = situation.icon;

            return (
              <Card
                key={situation.title}
                variant="subtle"
                className="min-h-[156px] bg-card/70 p-5 sm:min-h-[176px] sm:p-[22px] lg:min-h-[188px] lg:p-6"
              >
                <div className="flex h-full flex-col">
                  <IconWrapper variant="primary" size="md">
                    <Icon aria-hidden="true" />
                  </IconWrapper>
                  <div className="mt-4 space-y-2 lg:mt-5">
                    <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                      {situation.title}
                    </h3>
                    <p className="text-[15px] leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {situation.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { ServicesSection };
