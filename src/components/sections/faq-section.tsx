"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Como sei se preciso de terapia?",
    answer:
      "A terapia pode ser considerada quando emoções, relações, decisões ou mudanças começam a pedir mais atenção do que você consegue oferecer sozinho. Não é necessário esperar que a situação se torne extrema para buscar escuta profissional.",
  },
  {
    question: "O que acontece no primeiro contato?",
    answer:
      "O primeiro contato serve para entender, de forma breve, o que você procura, esclarecer dúvidas iniciais e avaliar os próximos passos possíveis. Você não precisa contar toda a sua história nesse momento.",
  },
  {
    question: "Preciso falar tudo logo no início?",
    answer:
      "Não. O processo terapêutico respeita seu tempo. Algumas questões aparecem aos poucos, conforme a confiança, a escuta e o vínculo vão sendo construídos.",
  },
  {
    question: "Quanto tempo dura o processo?",
    answer:
      "A duração varia conforme a demanda, o momento de vida e os objetivos trabalhados. Esse alinhamento pode ser revisitado ao longo do acompanhamento, sem promessas fechadas ou prazos artificiais.",
  },
  {
    question: "O atendimento é sigiloso?",
    answer:
      "Sim. O sigilo é parte fundamental do cuidado psicológico, respeitando os limites éticos e legais da profissão. Informações sensíveis são tratadas com responsabilidade e privacidade.",
  },
  {
    question: "Posso tirar dúvidas antes de marcar?",
    answer:
      "Sim. Você pode iniciar com uma conversa para esclarecer dúvidas práticas e entender se faz sentido seguir para um atendimento inicial.",
  },
] as const;

const motionEase = [0.22, 1, 0.36, 1] as const;

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-background py-16 sm:py-20 lg:py-28">
      <MaxWidthContainer size="default">
        <div className="mx-auto grid max-w-4xl gap-10">
          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.28, ease: motionEase }}
          >
            <SectionTitle
              align="center"
              eyebrow="Perguntas frequentes"
              title="Respostas claras para começar com menos dúvidas."
              description="Algumas perguntas aparecem antes do primeiro contato. Aqui estão respostas objetivas para ajudar sua decisão no seu próprio tempo."
            />
          </m.div>

          <div className="rounded-lg border border-border bg-card shadow-card">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const triggerId = `faq-trigger-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={item.question} className="border-b border-border last:border-b-0">
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left outline-none transition-colors hover:bg-accent/55 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:px-6"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span className="flex items-center gap-3">
                        <Badge variant={isOpen ? "primary" : "neutral"}>
                          {String(index + 1).padStart(2, "0")}
                        </Badge>
                        <span className="text-lg font-semibold leading-snug text-foreground">
                          {item.question}
                        </span>
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen ? "rotate-180 text-primary" : "",
                        )}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <m.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: motionEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-5 text-base leading-7 text-muted-foreground sm:px-6 sm:pl-[5.25rem]">
                          {item.answer}
                        </div>
                      </m.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export { FaqSection };
