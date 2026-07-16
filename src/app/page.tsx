import { MainContainer } from "@/components/layout/main-container";
import { SectionContainer } from "@/components/layout/section-container";

const spacingBlocks = [
  { label: "Container default", tone: "bg-card" },
  { label: "Espacamento medio", tone: "bg-muted" },
  { label: "Container amplo", tone: "bg-card" },
] as const;

export default function LayoutValidationPage() {
  return (
    <MainContainer>
      <SectionContainer spacing="lg" containerSize="wide">
        <div className="grid min-h-[36rem] gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">
              Validacao de layout
            </p>
          </div>
          <div className="grid gap-4">
            {spacingBlocks.map((block) => (
              <div
                key={block.label}
                className={`${block.tone} min-h-36 rounded-lg border border-border p-6`}
              >
                <p className="text-sm font-medium text-muted-foreground">{block.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
      <SectionContainer spacing="md" tone="muted">
        <div className="min-h-64 rounded-lg border border-border bg-background" />
      </SectionContainer>
    </MainContainer>
  );
}
