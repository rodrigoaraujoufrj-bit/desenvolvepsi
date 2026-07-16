# Biblioteca de Componentes

## Objetivo do Documento

Documentar os componentes previstos para a landing page DesenvolvePsi. Esta sprint nao
implementa componentes, React, Tailwind, CSS ou paginas. O objetivo e definir
responsabilidades, variantes, estados e regras para guiar a implementacao futura.

## Principios da Biblioteca

- Componentes devem existir para resolver uma necessidade real da landing page.
- Componentes reutilizaveis devem preservar clareza, acessibilidade e consistencia.
- Componentes nao devem criar uma experiencia comercial agressiva.
- Variantes devem ser poucas, previsiveis e ligadas a usos concretos.
- Estados interativos devem ser documentados antes da implementacao.
- A composicao deve evitar cards dentro de cards e excesso de superficies.

## Componentes Previstos

## Navbar

### Objetivo

Orientar o usuario na landing page e oferecer acesso rapido ao CTA principal.

### Responsabilidade

- Exibir marca ou identificacao do profissional.
- Apresentar links de navegacao para secoes relevantes.
- Disponibilizar CTA principal sem pressionar o usuario.
- Adaptar navegacao para desktop e mobile.

### Variantes

- Desktop horizontal.
- Mobile com menu recolhido.
- Transparente ou integrada ao Hero, se houver contraste adequado.
- Surface fixa ou sticky, apenas se nao atrapalhar leitura.

### Estados

- Default.
- Hover em links.
- Active para secao atual, se houver scroll spy futuro.
- Focus visivel.
- Menu mobile aberto.
- Menu mobile fechado.

### Propriedades

- Logo ou nome textual.
- Lista de links.
- CTA principal.
- Estado de menu mobile.
- Comportamento sticky opcional.

### Regras de Uso

- Usar labels curtos e claros.
- Manter CTA principal consistente com a jornada.
- Garantir navegacao por teclado.
- Evitar ocupar altura excessiva no mobile.

### Regras de Nao Uso

- Nao usar muitos links.
- Nao duplicar CTAs concorrentes.
- Nao esconder informacao essencial atras de menu complexo.
- Nao usar sticky se isso reduzir conforto de leitura.

## Button

### Objetivo

Representar acoes claras da landing page, especialmente contato, navegacao interna e
solicitacao de informacoes.

### Responsabilidade

- Comunicar acao.
- Indicar prioridade.
- Fornecer feedback visual de interacao.
- Preservar area de toque acessivel.

### Variantes

- Primary.
- Secondary.
- Tertiary ou text button.
- Link button.
- Icon leading.
- Icon trailing.

### Estados

- Default.
- Hover.
- Active.
- Focus.
- Disabled.
- Loading futuro, apenas se houver acao assincrona.

### Propriedades

- Label.
- Variante.
- Tamanho.
- Icone opcional.
- Destino ou acao.
- Disabled.

### Regras de Uso

- Usar texto orientado a acao.
- Reservar Primary para a acao mais importante.
- Manter tamanho minimo de toque.
- Usar no maximo um Primary por bloco visual.

### Regras de Nao Uso

- Nao usar labels vagos como "Clique aqui".
- Nao usar cor de erro como CTA.
- Nao usar varios botoes primarios lado a lado.
- Nao usar Disabled sem explicar motivo quando a acao for relevante.

## Hero

### Objetivo

Apresentar imediatamente a proposta da landing page e conduzir o usuario ao primeiro
entendimento ou contato.

### Responsabilidade

- Comunicar que se trata de atendimento psicologico.
- Transmitir acolhimento e confianca.
- Apresentar headline, texto de apoio e CTAs.
- Estabelecer o tom visual da pagina.

### Variantes

- Hero com conteudo centralizado.
- Hero com texto e area visual complementar.
- Hero editorial com imagem futura.

### Estados

- Default.
- Mobile reordenado.
- Com imagem carregada.
- Sem imagem, usando apenas composicao editorial.

### Propriedades

- Eyebrow opcional.
- Headline.
- Descricao.
- CTA principal.
- CTA secundario.
- Midia opcional.

### Regras de Uso

- Usar uma headline direta e humana.
- Evitar promessa terapeutica absoluta.
- Manter CTAs claros e nao agressivos.
- Garantir que a primeira dobra indique o proximo conteudo.

### Regras de Nao Uso

- Nao transformar Hero em landing comercial agressiva.
- Nao usar imagem escura ou dramatica.
- Nao esconder o CTA principal.
- Nao sobrecarregar com muitos argumentos.

## SectionTitle

### Objetivo

Organizar a hierarquia das secoes e facilitar leitura escaneavel.

### Responsabilidade

- Exibir titulo de secao.
- Apoiar com descricao curta quando necessario.
- Manter consistencia entre blocos da pagina.

### Variantes

- Alinhado a esquerda.
- Centralizado.
- Com eyebrow.
- Compacto.

### Estados

- Default.
- Em superficie clara.
- Em fundo destacado.

### Propriedades

- Eyebrow opcional.
- Titulo.
- Descricao opcional.
- Alinhamento.
- Largura maxima.

### Regras de Uso

- Usar titulos claros e especificos.
- Manter descricao curta.
- Escolher alinhamento conforme fluxo de leitura.

### Regras de Nao Uso

- Nao usar como card.
- Nao repetir o mesmo titulo em secoes proximas.
- Nao usar texto longo demais na descricao.

## Card

### Objetivo

Agrupar informacoes relacionadas, como temas atendidos, beneficios e blocos de
conteudo.

### Responsabilidade

- Criar agrupamento visual.
- Facilitar comparacao entre itens.
- Sustentar leitura modular.

### Variantes

- Informativo.
- Destaque.
- Clicavel futuro.
- Com icone.
- Compacto.

### Estados

- Default.
- Hover, apenas se clicavel.
- Focus, apenas se interativo.
- Disabled futuro, se houver contexto.

### Propriedades

- Titulo.
- Descricao.
- Icone opcional.
- Link opcional.
- Variante visual.

### Regras de Uso

- Usar para itens repetidos com mesma hierarquia.
- Manter conteudo conciso.
- Usar radius padrao de 8px.
- Evitar sombra quando borda e espacamento resolverem.

### Regras de Nao Uso

- Nao colocar card dentro de card.
- Nao usar para qualquer bloco da pagina.
- Nao transformar secoes inteiras em cards flutuantes.
- Nao usar hover em card nao clicavel.

## Accordion

### Objetivo

Organizar perguntas frequentes e conteudos expansaveis sem alongar excessivamente a
pagina.

### Responsabilidade

- Exibir pergunta.
- Controlar abertura e fechamento.
- Comunicar estado de expansao.
- Preservar acessibilidade por teclado e leitores de tela.

### Variantes

- FAQ simples.
- FAQ com categorias futuras.
- Acordeao compacto.

### Estados

- Fechado.
- Aberto.
- Hover no trigger.
- Focus no trigger.
- Disabled futuro, se necessario.

### Propriedades

- Lista de itens.
- Pergunta.
- Resposta.
- Estado aberto.
- Permitir item unico ou multiplos abertos, decisao futura.

### Regras de Uso

- Usar para duvidas frequentes e respostas curtas.
- Manter perguntas em linguagem do usuario.
- Garantir estado expandido anunciado.

### Regras de Nao Uso

- Nao esconder informacao essencial para conversao primaria.
- Nao usar para conteudos longos que precisam ser lidos em sequencia.
- Nao criar acordeoes aninhados.

## Timeline

### Objetivo

Explicar etapas do processo terapeutico ou do primeiro contato.

### Responsabilidade

- Representar sequencia.
- Reduzir incerteza sobre o funcionamento.
- Tornar o processo previsivel.

### Variantes

- Vertical mobile.
- Horizontal desktop, se houver espaco.
- Numerada.
- Com icones discretos.

### Estados

- Default.
- Item atual futuro, se houver fluxo interativo.
- Compacta em mobile.

### Propriedades

- Lista de etapas.
- Titulo da etapa.
- Descricao.
- Numero ou marcador.
- Icone opcional.

### Regras de Uso

- Usar para processos com ordem clara.
- Manter no maximo quatro ou cinco etapas na landing page.
- Escrever etapas com verbos simples.

### Regras de Nao Uso

- Nao usar para listas sem sequencia.
- Nao usar animacao complexa para explicar o processo.
- Nao criar timeline longa demais.

## Badge

### Objetivo

Destacar informacoes curtas, categorias ou sinais de contexto.

### Responsabilidade

- Comunicar status ou categoria.
- Apoiar escaneabilidade.
- Criar enfase leve sem competir com titulos.

### Variantes

- Neutral.
- Primary soft.
- Secondary soft.
- Success.
- Warning.

### Estados

- Default.
- Com icone.
- Interativo futuro, apenas se agir como filtro ou link.

### Propriedades

- Label.
- Variante.
- Icone opcional.
- Tamanho.

### Regras de Uso

- Usar para textos curtos.
- Manter contraste legivel.
- Usar cores funcionais com criterio.

### Regras de Nao Uso

- Nao usar para paragrafos.
- Nao usar muitos badges em uma mesma secao.
- Nao usar Warning ou Error como decoracao.

## Footer

### Objetivo

Encerrar a pagina com informacoes institucionais, legais e caminhos de contato.

### Responsabilidade

- Exibir nome ou marca.
- Reforcar contato.
- Incluir informacoes legais futuras.
- Dar fechamento visual calmo.

### Variantes

- Simples.
- Com colunas.
- Com CTA discreto.

### Estados

- Default.
- Mobile empilhado.

### Propriedades

- Nome ou logo.
- Links.
- Informacoes legais.
- Contato.
- Texto institucional curto.

### Regras de Uso

- Manter informacoes objetivas.
- Garantir contraste.
- Incluir links legais quando existirem.

### Regras de Nao Uso

- Nao repetir toda a landing page no Footer.
- Nao usar como segunda Navbar complexa.
- Nao esconder informacoes essenciais apenas no Footer.

## CTA

### Objetivo

Organizar chamadas para acao em blocos narrativos da pagina.

### Responsabilidade

- Reforcar decisao do usuario.
- Apresentar texto de apoio.
- Exibir um CTA principal e, quando necessario, um secundario.

### Variantes

- CTA inline em secao.
- CTA em bloco final.
- CTA compacto.
- CTA com suporte textual.

### Estados

- Default.
- Mobile empilhado.
- Com CTA secundario.

### Propriedades

- Titulo opcional.
- Descricao.
- Botao principal.
- Botao secundario opcional.
- Alinhamento.

### Regras de Uso

- Usar apos secoes que removem objecoes ou explicam valor.
- Manter linguagem etica.
- Evitar pressao ou urgencia artificial.

### Regras de Nao Uso

- Nao repetir CTA a cada poucos blocos.
- Nao usar promessa clinica como argumento.
- Nao usar visual agressivo.

## Container

### Objetivo

Controlar largura, margens e alinhamento de conteudo.

### Responsabilidade

- Centralizar conteudo.
- Aplicar largura maxima.
- Garantir gutters responsivos.

### Variantes

- Default.
- Narrow para leitura longa.
- Wide para secoes amplas.
- Full para fundos de secao sem limitar cor de fundo.

### Estados

- Desktop.
- Notebook.
- Tablet.
- Mobile.

### Propriedades

- Largura.
- Alinhamento.
- Gutters.
- Tipo de container.

### Regras de Uso

- Usar em todas as secoes principais.
- Controlar largura de texto para legibilidade.
- Separar fundo de secao da largura do conteudo.

### Regras de Nao Uso

- Nao usar para criar cards visuais.
- Nao aninhar containers sem necessidade.
- Nao deixar texto longo ocupar largura total.

## Icon

### Objetivo

Complementar informacoes e reforcar reconhecimento visual sem depender apenas de texto.

### Responsabilidade

- Apoiar leitura.
- Identificar acoes ou temas.
- Manter consistencia visual.

### Variantes

- Line.
- Filled futuro, apenas se houver necessidade.
- Decorative.
- Informative.

### Estados

- Default.
- Active.
- Disabled.
- Decorative hidden para leitores de tela.

### Propriedades

- Nome.
- Tamanho.
- Cor.
- Rotulo acessivel quando informativo.
- Decorative true ou false.

### Regras de Uso

- Usar icones simples e reconheciveis.
- Acompanhar texto quando o significado nao for universal.
- Manter tamanho coerente com tipografia.

### Regras de Nao Uso

- Nao usar icone como unica forma de comunicar informacao complexa.
- Nao misturar estilos de icones.
- Nao usar icones decorativos em excesso.

## Divider

### Objetivo

Separar grupos de conteudo sem criar peso visual excessivo.

### Responsabilidade

- Indicar mudanca de contexto.
- Organizar blocos.
- Apoiar ritmo vertical.

### Variantes

- Horizontal.
- Vertical futuro.
- Subtle.
- Strong, apenas quando a hierarquia exigir.

### Estados

- Default.
- Em fundo claro.
- Em surface.

### Propriedades

- Orientacao.
- Intensidade.
- Espacamento.

### Regras de Uso

- Usar quando espacamento sozinho nao for suficiente.
- Manter cor discreta.
- Preservar alinhamento com container.

### Regras de Nao Uso

- Nao usar para decorar.
- Nao separar todos os elementos com linhas.
- Nao usar contraste alto sem necessidade.

## Regras Gerais de Composicao

- Navbar, Hero, secoes de conteudo, CTA final e Footer devem formar uma narrativa unica.
- Cards devem aparecer em grupos consistentes, nunca como solucao automatica para todo
  conteudo.
- Accordions devem ser reservados para FAQ e duvidas praticas.
- CTAs devem respeitar o momento emocional do usuario.
- Componentes devem ter estados de foco definidos antes da implementacao.
- Toda variante precisa ter justificativa de uso real.

## Criterios de Manutencao

- Novos componentes devem ser adicionados a este documento antes da implementacao.
- Variantes sem uso concreto devem ser evitadas.
- Mudancas visuais devem respeitar o design system definido em `docs/05_design_system.md`.
- Componentes devem ser avaliados por acessibilidade, responsividade e clareza de uso.
