"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { useScrollState } from "@/components/layout/scroll-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = ["Início", "Atendimentos", "Sobre", "FAQ"] as const;

function Navbar() {
  const { isScrolled } = useScrollState();
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/70 bg-background/78 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <MaxWidthContainer size="wide" className="flex h-20 items-center justify-between gap-6">
        <button
          type="button"
          className="rounded-md text-lg font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="DesenvolvePsi"
        >
          DesenvolvePsi
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm">Agendar conversa</Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-card transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </MaxWidthContainer>

      <AnimatePresence>
        {isOpen ? (
          <>
            <m.button
              type="button"
              className="fixed inset-0 top-20 z-40 bg-foreground/20 backdrop-blur-sm md:hidden"
              aria-label="Fechar menu"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={closeMenu}
            />
            <m.aside
              id={menuId}
              className="fixed right-4 top-24 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-lg border border-border bg-card p-4 shadow-soft md:hidden"
              initial={reduceMotion ? false : { opacity: 0, x: 18, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col gap-1" aria-label="Navegacao mobile">
                {navItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-md px-3 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={closeMenu}
                  >
                    {item}
                  </button>
                ))}
              </nav>
              <div className="mt-4">
                <Button fullWidth onClick={closeMenu}>
                  Agendar conversa
                </Button>
              </div>
            </m.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export { Navbar };
