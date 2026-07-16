# Hero - Motion Specification

## Principio de motion

As animacoes da Hero devem aumentar percepcao de cuidado e continuidade, nunca
criar espetaculo. O conteudo essencial deve estar disponivel mesmo sem
animacao, com `prefers-reduced-motion` respeitado.

## Motion hierarchy

1. Conteudo textual essencial.
2. CTAs.
3. Indicadores de confianca.
4. Fotografia.
5. Cards flutuantes.
6. Fundo e formas decorativas.

Elementos mais importantes entram antes e com menor deslocamento. Elementos
decorativos entram depois e com opacidade baixa.

## Animacoes de entrada

### Badge

- Tipo: fade + translateY.
- Deslocamento: 8px.
- Duracao: 220ms.
- Delay: 0ms.
- Easing: `[0.22, 1, 0.36, 1]`.

### Headline

- Tipo: fade + translateY.
- Deslocamento: 10px.
- Duracao: 300ms.
- Delay: 40ms.
- Easing: `[0.22, 1, 0.36, 1]`.
- Regra: nunca iniciar com opacidade persistente em 0.

### Subheadline

- Tipo: fade + translateY.
- Deslocamento: 10px.
- Duracao: 300ms.
- Delay: 80ms.
- Easing: `[0.22, 1, 0.36, 1]`.

### CTAs

- Tipo: fade + translateY.
- Deslocamento: 8px.
- Duracao: 260ms.
- Delay: 120ms.
- Easing: `[0.22, 1, 0.36, 1]`.
- Regra: CTA principal nao pode aparecer depois da fotografia.

### Indicadores

- Tipo: fade + translateY.
- Deslocamento: 8px.
- Duracao: 240ms por grupo.
- Delay: 160ms.
- Stagger: 30ms maximo entre itens.
- Easing: `[0.22, 1, 0.36, 1]`.

### Fotografia

- Tipo: fade + scale.
- Scale inicial: 0.985.
- Duracao: 360ms.
- Delay: 120ms.
- Easing: `[0.22, 1, 0.36, 1]`.
- Regra: a foto nao deve saltar posicao apos carregar.

### Cards flutuantes

- Tipo: fade + translateY + scale leve.
- Deslocamento: 8px.
- Scale inicial: 0.98.
- Duracao: 260ms.
- Delay card A: 220ms.
- Delay card B: 260ms.
- Easing: `[0.22, 1, 0.36, 1]`.

### Background organico

- Tipo: fade simples.
- Duracao: 420ms.
- Delay: 0ms.
- Opacidade final: baixa e constante.
- Regra: nao usar movimento continuo.

## Hover

### CTA principal

- Duracao: 160ms a 200ms.
- Efeito permitido: leve elevacao de -2px, ajuste de sombra e cor.
- Active: retornar ou deslocar +1px para feedback tactil.
- Focus: anel visivel, sem depender de hover.

### CTA secundario

- Duracao: 160ms a 200ms.
- Efeito permitido: mudanca de borda/fundo e leve elevacao de -1px.
- Nao competir com o CTA principal.

### Indicadores

- Se nao forem interativos, nao aplicar hover chamativo.
- Permitido apenas transicao sutil de borda/fundo se houver feedback visual
  consistente.

### Cards flutuantes

- Se nao forem clicaveis, nao usar hover.
- Se se tornarem interativos no futuro, usar apenas borda, fundo e foco
  visivel.

## Scroll

- A Hero nao deve depender de scroll para revelar informacao essencial.
- Nao usar parallax intenso.
- Nao mover fotografia em velocidades diferentes do texto.
- Permitido: Navbar mudar para glass ao rolar, ja dentro do comportamento
  global.
- Permitido: leve reducao de opacidade de formas decorativas se isso nao
  causar repintura pesada.

## Timing geral

- Tempo total ate conteudo essencial visivel: maximo 420ms.
- Tempo total ate todos os elementos de apoio visiveis: maximo 620ms.
- Nenhuma animacao individual acima de 420ms na Hero.
- Stagger total nao pode atrasar leitura ou clique.

## Easing

Usar padrao suave:

```text
[0.22, 1, 0.36, 1]
```

Evitar:

- Bounce.
- Elastic.
- Rotacao.
- Pulsar continuo.
- Scroll reveal agressivo.
- Animacoes que simulam urgencia.

## Comportamento Mobile

- Reduzir delays em 50%.
- Deslocamento maximo: 6px.
- Remover stagger dos indicadores se causar atraso.
- CTAs devem ficar clicaveis imediatamente.
- Foto pode entrar sem scale para evitar sensacao de salto.
- Cards flutuantes podem aparecer sem animacao ou ser omitidos quando houver
  risco de sobreposicao.

## Reduced motion

Quando `prefers-reduced-motion` estiver ativo:

- Remover translate e scale.
- Manter conteudo renderizado imediatamente.
- Permitir apenas transicoes instantaneas ou fade abaixo de 100ms.
- Nao atrasar CTA, headline ou fotografia.
