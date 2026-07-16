# Situacoes em que posso ajudar - Layout Specification

## Posicao na pagina

- A secao deve aparecer imediatamente abaixo da Hero.
- Deve funcionar como primeira confirmacao de identificacao apos a promessa da
  dobra inicial.
- Nao deve competir visualmente com a Hero; deve continuar o ritmo com mais
  densidade informacional e menos impacto dramatico.

## Container

- Container maximo: 1200px.
- Fundo da secao: full width.
- Conteudo interno: centralizado no container.
- Gutter mobile: 16px minimo, 20px preferencial.
- Gutter tablet: 24px.
- Gutter notebook: 32px.
- Gutter desktop: 40px.

## Padding vertical

- Desktop: 104px a 128px.
- Notebook: 88px a 112px.
- Tablet: 72px a 96px.
- Mobile: 56px a 72px.

## Cabecalho da secao

### Titulo

- Desktop: 40px a 48px.
- Notebook: 36px a 44px.
- Tablet: 34px a 40px.
- Mobile: 30px a 34px.
- Line-height: 1.12 a 1.2.
- Peso: semibold.
- Largura maxima: 720px.
- Limite visual: ate 3 linhas desktop/tablet; ate 4 linhas mobile.

### Subtitulo

- Desktop: 18px a 20px.
- Tablet: 17px a 18px.
- Mobile: 16px a 17px.
- Line-height: 1.55 a 1.7.
- Largura maxima: 680px.
- Limite visual: 2 a 3 linhas desktop/tablet; ate 4 linhas mobile.
- Cor: Text Secondary com contraste AA.

### Alinhamento

- Desktop: alinhado a esquerda quando a secao mantiver continuidade editorial
  com a Hero.
- Alternativa permitida: centralizado apenas se a landing estiver seguindo uma
  composicao mais simetrica apos a primeira dobra.
- Mobile: sempre alinhado a esquerda para leitura natural.

## Espaco entre cabecalho e grid

- Desktop: 44px a 48px.
- Notebook: 40px a 44px.
- Tablet: 36px a 40px.
- Mobile: 32px.

## Grid

### Desktop

- Colunas: 3.
- Linhas: 2.
- Gap horizontal: 20px a 24px.
- Gap vertical: 20px a 24px.
- Cada card deve ocupar largura equivalente.

### Notebook

- Colunas: 3 se cada card mantiver largura minima de 300px.
- Alternativa: 2 colunas se o container ficar comprimido.
- Gap: 20px a 24px.

### Tablet

- Colunas: 2.
- Linhas: 3.
- Gap horizontal: 18px a 22px.
- Gap vertical: 18px a 22px.

### Mobile

- Colunas: 1.
- Linhas: 6.
- Gap vertical: 14px a 18px.
- Cards ocupam 100% da largura disponivel.

## Cards

### Dimensoes

- Altura minima desktop: 188px.
- Altura minima tablet: 176px.
- Altura minima mobile: 156px.
- Padding desktop: 24px.
- Padding tablet: 22px.
- Padding mobile: 20px.
- Radius: 8px.
- Borda: Border ou Border/70.
- Fundo: Surface ou Surface com transparencia leve.

### Conteudo interno

- Icone no topo.
- Titulo abaixo do icone.
- Descricao abaixo do titulo.
- Gap icone -> titulo: 16px a 20px.
- Gap titulo -> descricao: 8px a 10px.

### Icones

- Tamanho do wrapper: 40px a 44px.
- Icone interno: 18px a 20px.
- Cor: Primary ou Secondary suave.
- Funcao: apoiar reconhecimento, nunca substituir o titulo.

### Titulo do card

- Desktop: 20px a 22px.
- Mobile: 18px a 20px.
- Line-height: 1.25 a 1.35.
- Peso: semibold.
- Limite: 1 a 2 linhas.

### Descricao do card

- Tamanho: 15px a 16px.
- Line-height: 1.55 a 1.65.
- Limite visual: 2 a 3 linhas.
- Linguagem: situacional, nao diagnostica.

## Comportamento visual

- Cards devem parecer acolhedores e organizados, nao comerciais.
- Hover so deve existir se houver interacao real futura.
- Se cards nao forem clicaveis, usar apenas estado visual estatico.
- Nao usar sombras fortes.
- Nao usar cards aninhados.
- Nao destacar um card especifico.
- Nao criar selo de "mais procurado" ou hierarquia artificial.

## Peso visual

- Titulo da secao: maior peso.
- Grid: segundo maior peso por massa visual.
- Titulos dos cards: prioridade dentro do grid.
- Icones: apoio visual.
- Descricoes: explicacao curta.
- Nenhum card deve roubar a atencao da jornada principal.

## Responsividade

- A transicao de 3 para 2 colunas deve acontecer antes de os cards ficarem
  estreitos demais.
- Em mobile, cards devem formar uma lista ritmada, sem carrossel.
- Evitar sliders: a pessoa deve ver a amplitude das situacoes com rolagem
  natural.
- Garantir que o primeiro card apareca parcialmente acima da dobra seguinte
  quando a Hero terminar, criando continuidade de leitura.

## Acessibilidade

- Titulos dos cards devem ser texto real, nao imagem.
- Icones decorativos devem ser ocultados de leitores de tela.
- Contraste minimo AA para titulo e descricao.
- Area de toque minima de 44px se os cards se tornarem interativos no futuro.
- Ordem de leitura deve seguir linha por linha no desktop e ordem vertical no
  mobile.
