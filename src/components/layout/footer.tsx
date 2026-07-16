import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Divider } from "@/components/ui/divider";

const footerLinks = ["Início", "Atendimentos", "Sobre", "FAQ", "Contato"] as const;

function Footer() {
  return (
    <footer className="border-t border-border bg-card" aria-label="Rodapé institucional">
      <MaxWidthContainer size="wide">
        <div className="grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-start lg:py-12">
          <div className="max-w-xl space-y-4">
            <p className="text-xl font-semibold text-foreground">DesenvolvePsi</p>
            <p className="text-base leading-7 text-muted-foreground">
              Presença digital para comunicar psicoterapia com acolhimento, clareza e
              responsabilidade ética.
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              Informações profissionais, contato e registro serão exibidos quando os dados oficiais
              forem definidos.
            </p>
          </div>

          <nav className="grid gap-3 md:justify-end md:text-right" aria-label="Navegação do rodapé">
            {footerLinks.map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-md text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card md:text-right"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <Divider tone="subtle" />

        <div className="flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DesenvolvePsi. Todos os direitos reservados.</p>
          <p>Conteúdo informativo. Não substitui atendimento psicológico profissional.</p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}

export { Footer };
