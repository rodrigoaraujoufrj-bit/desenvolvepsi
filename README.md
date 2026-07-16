# DesenvolvePsi

DesenvolvePsi e um projeto digital voltado a estruturar uma presenca profissional, clara e escalavel para iniciativas relacionadas a psicologia, desenvolvimento humano e comunicacao institucional.

## Objetivo

Preparar uma base tecnica moderna para evolucao futura do produto, com arquitetura organizada, padroes consistentes e configuracoes essenciais para desenvolvimento front-end profissional.

## Visao Geral

Esta entrega corresponde a Sprint 00. O foco e exclusivamente estrutural: configuracao do projeto, organizacao de pastas, documentacao base e convencoes de desenvolvimento.

Nenhuma funcionalidade de landing page, componente visual, integracao externa, logica de negocio ou dado ficticio foi implementado nesta etapa.

## Stack Tecnologica

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

O projeto foi preparado para futura adocao de Shadcn UI, Framer Motion e Supabase, sem adicionar dependencias que ainda nao sejam necessarias.

## Arquitetura

A arquitetura segue uma organizacao modular baseada em responsabilidades:

- `src/app`: configuracao do App Router do Next.js.
- `src/assets`: ativos internos do projeto.
- `src/components`: estrutura reservada para componentes reutilizaveis.
- `src/hooks`: hooks reutilizaveis.
- `src/lib`: utilitarios, clientes e configuracoes compartilhadas.
- `src/styles`: estilos globais e fundacao visual.
- `src/types`: tipos compartilhados da aplicacao.
- `docs`: documentacao de produto, UX, design system e biblioteca de componentes.
- `public`: arquivos estaticos publicos.

## Estrutura das Pastas

```text
/
├── docs
├── public
├── src
│   ├── app
│   ├── assets
│   ├── components
│   │   ├── layout
│   │   ├── sections
│   │   └── ui
│   ├── hooks
│   ├── lib
│   ├── styles
│   └── types
├── .env.example
├── .gitignore
├── README.md
└── package.json
```

## Convencoes de Desenvolvimento

- Utilizar TypeScript com tipagem forte.
- Manter organizacao modular por dominio tecnico.
- Priorizar nomes claros e previsiveis.
- Criar componentes reutilizaveis apenas quando houver necessidade real.
- Manter comentarios somente quando agregarem contexto relevante.
- Usar imports com alias `@/` para arquivos dentro de `src`.
- Executar validacoes antes de abrir Pull Requests.
- Evitar dependencias sem uso imediato.

## Roadmap Inicial

1. Sprint 00: fundacao tecnica e documentacao base.
2. Sprint 01: definicao visual inicial e sistema de design aplicavel.
3. Sprint 02: estrutura da landing page e secoes principais.
4. Sprint 03: refinamento responsivo, acessibilidade e animacoes.
5. Sprint 04: preparacao para integracoes e formularios.

## Execucao Local

Instale as dependencias:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Valide o projeto:

```bash
npm run lint
npm run typecheck
npm run build
```
