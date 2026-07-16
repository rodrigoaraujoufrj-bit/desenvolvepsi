import { ArrowRight, Check, HeartHandshake, Info } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/sections/section";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { IconWrapper } from "@/components/ui/icon-wrapper";

const componentCards = [
  {
    title: "Button",
    description: "Acoes principais, secundarias e textuais com foco acessivel.",
  },
  {
    title: "Card",
    description: "Agrupamento visual para informacoes de mesma hierarquia.",
  },
  {
    title: "Badge",
    description: "Indicadores compactos para status, categorias e contexto.",
  },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-background">
      <Section tone="background" spacing="lg" animated>
        <Container className="space-y-12">
          <SectionTitle
            eyebrow="Showcase interno"
            title="Fundacao visual reutilizavel"
            description="Pagina temporaria para validar tokens, estados e componentes base da Sprint 03."
          />

          <Card padding="lg" className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge>Neutral</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>

            <Divider />

            <div className="flex flex-wrap items-center gap-3">
              <Button>
                Acao principal
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button variant="secondary">Acao secundaria</Button>
              <Button variant="tertiary">Acao terciaria</Button>
              <Button variant="link">Link visual</Button>
              <Button size="icon" aria-label="Confirmar item">
                <Check aria-hidden="true" />
              </Button>
            </div>
          </Card>

          <div className="grid gap-5 md:grid-cols-3">
            {componentCards.map((item) => (
              <Card key={item.title} variant="subtle" interactive className="space-y-4">
                <IconWrapper>
                  <HeartHandshake aria-hidden="true" />
                </IconWrapper>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                  <p className="leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card variant="accent" className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <IconWrapper variant="surface" decorative={false} aria-label="Informacao">
              <Info aria-hidden="true" />
            </IconWrapper>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Section e Container</h2>
              <p className="max-w-2xl leading-7 text-muted-foreground">
                A estrutura controla largura, respiro, tom visual e entrada sutil com Motion.
              </p>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
