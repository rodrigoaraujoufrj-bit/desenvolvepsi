# Hero - Layout Specification

## Container

- Container maximo: 1200px.
- Gutter mobile: 16px minimo, 20px preferencial.
- Gutter tablet: 24px.
- Gutter notebook: 32px.
- Gutter desktop: 40px.
- Alinhamento: centralizado no viewport.
- Fundo da secao: full width, com conteudo limitado pelo container.

## Altura da Hero

- Desktop: minimo `calc(100svh - 80px)`.
- Notebook: minimo `calc(100svh - 80px)`, com conteudo cabendo sem corte.
- Tablet: minimo 860px quando empilhada.
- Mobile: altura natural, sem forcar 100vh; conteudo completo deve aparecer
  com rolagem confortavel.
- Padding vertical desktop: 56px topo e 72px base.
- Padding vertical notebook: 48px topo e 64px base.
- Padding vertical tablet: 48px topo e 64px base.
- Padding vertical mobile: 36px topo e 56px base.

## Grid

### Desktop

- Layout: duas colunas.
- Coluna textual: 52%.
- Coluna visual: 48%.
- Grid gap: 56px.
- Alinhamento vertical: centro optico, nao centro matematico.
- A coluna textual deve subir 8px a 16px acima do centro para favorecer a
  leitura inicial.

### Notebook

- Coluna textual: 54%.
- Coluna visual: 46%.
- Grid gap: 48px.
- Reduzir escala da fotografia antes de reduzir a headline.

### Tablet

- Layout preferencial: uma coluna.
- Ordem: texto, CTAs, indicadores, fotografia.
- Gap entre texto e visual: 40px.
- Container textual: max 680px.

### Mobile

- Layout: uma coluna.
- Gap entre grupos principais: 24px a 32px.
- Foto abaixo dos indicadores.
- CTAs empilhados.

## Proporcoes

- Headline: maior massa visual textual da dobra.
- CTA principal: maior elemento interativo.
- Fotografia: maior massa visual nao textual.
- Cards flutuantes: apoio maximo de 15% do peso visual da coluna direita.
- Indicadores: apoio maximo de 20% do peso visual da coluna esquerda.

## Margens e padding internos

- Badge para headline: 28px desktop, 24px tablet, 20px mobile.
- Headline para subheadline: 20px desktop, 18px tablet, 16px mobile.
- Subheadline para CTAs: 32px desktop, 28px tablet, 24px mobile.
- CTAs para indicadores: 32px desktop, 28px tablet, 24px mobile.
- Indicadores para foto no mobile/tablet: 36px a 44px.

## Headline

- Desktop: 60px a 72px.
- Notebook: 56px a 64px.
- Tablet: 48px a 56px.
- Mobile: 38px a 44px.
- Line-height: 1.02 a 1.08.
- Peso: semibold.
- Largura maxima: 16ch no desktop; 18ch no tablet; 100% no mobile.
- Limite: 4 linhas no desktop/tablet; 5 linhas no mobile.
- Letter spacing: 0.

## Subheadline

- Desktop: 19px a 20px.
- Tablet: 18px a 19px.
- Mobile: 17px a 18px.
- Line-height: 1.55 a 1.65.
- Largura maxima: 38rem.
- Limite visual: 3 linhas desktop/tablet; 4 linhas mobile.
- Cor: Text Secondary com contraste AA.

## Badge superior

- Altura: 32px a 36px.
- Padding horizontal: 12px a 14px.
- Icone: 14px a 16px.
- Posicao: primeiro elemento textual.
- Peso visual: baixo; deve contextualizar, nao disputar com headline.

## CTAs

### CTA principal

- Altura desktop: 56px a 60px.
- Altura mobile: 52px a 56px.
- Padding horizontal desktop: 28px a 32px.
- Mobile: largura 100%.
- Cor: Primary com texto Primary Foreground.
- Sombra: suave, relacionada ao Primary, sem brilho exagerado.
- Posicao: imediatamente apos subheadline.
- Deve ser o primeiro destino de foco apos a leitura textual.

### CTA secundario

- Altura desktop: 52px a 56px.
- Altura mobile: 48px a 52px.
- Mobile: largura 100%.
- Variante: surface ou secondary discreta.
- Peso visual: 60% a 70% do CTA principal.
- Deve ficar ao lado do CTA principal no desktop e abaixo dele no mobile.

## Indicadores de confianca

- Quantidade: quatro.
- Layout desktop: grid 2 x 2.
- Layout tablet: grid 2 x 2 se houver largura acima de 640px.
- Layout mobile: uma coluna.
- Altura minima do item: 40px desktop, 44px mobile.
- Icone: 16px, cor Primary.
- Gap interno: 10px a 12px.
- Padding horizontal: 12px.
- Largura maxima do grupo: 38rem.
- Posicao: abaixo dos CTAs, sempre dentro da coluna textual.

## Fotografia

- Posicao desktop: coluna direita, centralizada, com leve deslocamento vertical
  para baixo de 8px a 16px em relacao ao bloco textual.
- Largura maxima do painel: 552px.
- Altura minima desktop: 640px.
- Altura minima notebook: 560px.
- Altura tablet: 480px a 560px.
- Altura mobile: 360px a 430px.
- Enquadramento recomendado: plano medio ou meio corpo, rosto visivel,
  iluminacao natural, fundo claro ou neutro.
- Nao usar imagem generica, escura, dramatica, muito recortada ou com expressao
  performatica.
- Alt obrigatorio quando a foto real existir.

## Cards flutuantes

### Card A

- Posicao desktop: top-left do painel visual, deslocado 16px a 24px para fora
  do eixo da foto.
- Conteudo: informacao curta de abordagem ou credibilidade.
- Largura: 160px a 200px.
- Padding: 12px a 16px.
- Nao cobrir rosto.

### Card B

- Posicao desktop: bottom-right do painel visual, deslocado 12px a 20px para
  fora do eixo da foto.
- Conteudo: reforco de clareza ou primeiro contato.
- Largura: 180px a 220px.
- Padding: 12px a 16px.
- Nao cobrir areas expressivas da fotografia.

### Mobile

- Cards devem ser reposicionados dentro do painel visual.
- Reduzir largura para 150px a 180px.
- Se houver sobreposicao, priorizar fotografia e remover um card.

## Background

- Base: Background quente do Design System.
- Gradiente: suave, com Primary/Accent em opacidade baixa.
- Formas organicas: no maximo duas massas visuais.
- Blur: discreto, sem comprometer performance.
- Nenhum elemento decorativo pode ficar acima do conteudo textual em z-index.

## Hierarquia visual final

1. Headline.
2. CTA principal.
3. Fotografia profissional.
4. Subheadline.
5. CTA secundario.
6. Indicadores de confianca.
7. Badge superior.
8. Cards flutuantes.
9. Fundo organico.

## Regras de responsividade

- A headline reduz antes do grid quebrar.
- O grid quebra para uma coluna abaixo de 1024px se a foto comprimir a leitura.
- CTAs empilham abaixo de 640px.
- Indicadores empilham abaixo de 640px.
- A fotografia nunca deve causar overflow horizontal.
- Cards flutuantes podem ser ocultados no mobile se prejudicarem leitura ou
  enquadramento.
