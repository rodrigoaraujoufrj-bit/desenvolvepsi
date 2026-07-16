"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const motionEase = [0.22, 1, 0.36, 1] as const;

function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contato" className="bg-muted/45 py-16 sm:py-20 lg:py-28">
      <MaxWidthContainer size="wide">
        <m.div
          className="relative overflow-hidden rounded-lg border border-primary/20 bg-card px-6 py-12 shadow-soft sm:px-10 sm:py-16 lg:px-16"
          initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease: motionEase }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.accent/0.76),transparent_34%),linear-gradient(135deg,theme(colors.card),theme(colors.muted/0.42))]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Badge variant="primary" className="mx-auto">
              Primeiro passo
            </Badge>

            <div className="mt-6 space-y-5">
              <h2 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Você pode começar com uma conversa simples.
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                O primeiro contato serve para entender sua demanda, esclarecer dúvidas e avaliar os
                próximos passos com calma, privacidade e respeito ao seu tempo.
              </p>
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg">
                <MessageCircle aria-hidden="true" />
                Iniciar conversa
              </Button>
              <Button variant="secondary" size="lg">
                Tirar uma dúvida
                <ArrowUpRight aria-hidden="true" />
              </Button>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
              Nenhuma decisão precisa ser tomada com pressa. O contato inicial existe para trazer
              clareza antes de marcar um atendimento.
            </p>
          </div>
        </m.div>
      </MaxWidthContainer>
    </section>
  );
}

export { CtaSection };
