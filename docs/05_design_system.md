# Design System

## Objetivo do Documento

Definir o sistema visual do DesenvolvePsi para orientar as proximas sprints de UX,
componentes e implementacao da landing page. Este documento descreve decisoes de
identidade, tokens, acessibilidade e comportamento visual, sem implementar CSS,
Tailwind, React ou componentes.

## Principios Visuais

- Acolhimento antes de persuasao.
- Clareza antes de ornamentacao.
- Confianca antes de impacto.
- Respiracao visual antes de densidade.
- Conversao etica antes de urgencia artificial.

O design deve parecer humano, calmo, profissional e seguro. A interface precisa ajudar
o visitante a ler, reconhecer sua demanda, confiar no processo e decidir o proximo passo
sem pressao.

## Identidade Visual

### Conceito da Marca

DesenvolvePsi deve comunicar desenvolvimento emocional com maturidade e cuidado. A marca
nao deve parecer clinica fria, aplicativo de produtividade ou produto de autoajuda
agressiva. O conceito central e "clareza com acolhimento": uma presenca digital que
organiza informacoes sensiveis de modo simples, respeitoso e confiavel.

### Direcao de Arte

A direcao de arte deve usar:

- Composicoes limpas e bem espacadas.
- Superficies claras, quentes e discretas.
- Contrastes suaves, mas acessiveis.
- Elementos graficos contidos e funcionais.
- Iconografia simples, linear e sem excesso decorativo.
- Fotografia futura com presenca humana serena, natural e nao performatica.

Evitar:

- Aparencia hospitalar excessivamente branca e impessoal.
- Cores vibrantes demais para temas sensiveis.
- Gradientes chamativos.
- Ilustracoes infantilizadas.
- Layouts com excesso de cards sem hierarquia.
- Estetica de vendas agressiva.

### Linguagem Visual

A linguagem visual deve ser:

- Calma: ritmo visual com respiro e poucas disputas de atencao.
- Clara: hierarquia tipografica evidente e secoes previsiveis.
- Humana: curvas discretas, tons suaves e microinteracoes gentis.
- Profissional: consistencia, alinhamento e contraste responsavel.
- Acessivel: leitura confortavel e foco visivel em todos os estados interativos.

### Emocoes que o Design Deve Transmitir

- Seguranca para iniciar contato.
- Alivio por encontrar informacoes claras.
- Confidencialidade e respeito.
- Esperanca realista, sem promessas exageradas.
- Sensacao de cuidado e presenca.
- Autonomia para decidir no proprio tempo.

## Paleta de Cores

A paleta deve evitar dominancia monocromatica. A base combina neutros quentes, verde
suave, azul petroleo discreto e acentos funcionais. Os valores abaixo sao referencias de
design tokens para futura implementacao.

| Token          | Cor     | Finalidade                            | Contexto de uso                                              | Contraste esperado                                        |
| -------------- | ------- | ------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| Primary        | #2F6F68 | Acao principal e identidade funcional | CTA principal, links importantes, estados ativos             | Texto branco deve atingir contraste AA em botoes grandes  |
| Secondary      | #8A6F3D | Acento quente e apoio editorial       | Destaques sutis, badges informativos, detalhes de secao      | Usar com texto escuro ou como fundo claro derivado        |
| Background     | #FAF8F3 | Fundo principal da pagina             | Base geral da landing page                                   | Deve sustentar leitura longa com texto primario           |
| Surface        | #FFFFFF | Superficies elevadas ou agrupamentos  | Cards, acordeoes, blocos de FAQ, containers de conteudo      | Texto primario deve ter contraste AAA sempre que possivel |
| Border         | #D8D2C7 | Separacao e estrutura                 | Divisores, bordas de cards, inputs futuros                   | Deve ser visivel sem criar peso excessivo                 |
| Success        | #2E7D5B | Confirmacao e estados positivos       | Feedback de envio futuro, status validado, mensagens suaves  | Texto branco ou escuro deve ser testado caso a caso       |
| Warning        | #B7791F | Alerta leve e atencao preventiva      | Avisos de informacao incompleta, mensagens administrativas   | Preferir fundo claro com texto escuro para legibilidade   |
| Error          | #B94A48 | Erro e mensagens criticas             | Validacoes futuras, falhas de formulario, alertas relevantes | Deve atingir AA quando usado com texto ou icone           |
| Text Primary   | #1F2421 | Texto principal                       | Titulos, paragrafos importantes, labels                      | Contraste alto contra Background e Surface                |
| Text Secondary | #5E665F | Texto complementar                    | Subtitulos, descricoes, metadados, textos auxiliares         | Contraste minimo AA para corpo de texto                   |
| Disabled       | #A9AFA8 | Estado indisponivel                   | Botoes desabilitados, controles inativos                     | Nao deve ser usado para informacao essencial              |

### Regras de Uso de Cor

- Primary deve ser reservado para acoes e elementos de maior importancia.
- Secondary deve apoiar a narrativa visual sem competir com o CTA principal.
- Background deve dominar a pagina para manter acolhimento e conforto.
- Surface deve organizar conteudos, nao criar uma interface cheia de caixas.
- Border deve separar informacoes sem endurecer a experiencia.
- Success, Warning e Error devem ser usados apenas em feedbacks reais.
- Text Secondary nao deve substituir Text Primary em conteudos essenciais.
- Disabled nunca deve ser a unica forma de comunicar indisponibilidade.

## Tipografia

### Familia Tipografica

A familia principal recomendada e uma sans-serif humanista, com boa legibilidade em
telas e tom profissional. Opcoes futuras aceitaveis:

- Inter.
- Source Sans 3.
- Nunito Sans, apenas se configurada com pesos mais sobrios.

A escolha final deve priorizar:

- Alta legibilidade em corpo de texto.
- Diferenciacao clara entre pesos.
- Suporte amplo a caracteres em portugues.
- Aparencia humana sem informalidade excessiva.

### Escala Tipografica

| Token      | Tamanho desktop | Tamanho mobile | Uso principal                           |
| ---------- | --------------- | -------------- | --------------------------------------- |
| Display    | 56px            | 40px           | Headline principal do Hero              |
| Heading 1  | 44px            | 34px           | Titulos de secoes de maior importancia  |
| Heading 2  | 36px            | 28px           | Titulos de secoes internas              |
| Heading 3  | 28px            | 24px           | Titulos de blocos e cards importantes   |
| Heading 4  | 22px            | 20px           | Subtitulos e grupos de conteudo         |
| Body Large | 20px            | 18px           | Texto introdutorio e apoio do Hero      |
| Body       | 16px            | 16px           | Paragrafos, descricoes e FAQ            |
| Body Small | 14px            | 14px           | Metadados, legendas e textos auxiliares |
| Caption    | 12px            | 12px           | Labels compactos e informacoes legais   |

### Hierarquia

- Display deve aparecer apenas uma vez por pagina.
- Heading 1 deve organizar grandes blocos narrativos.
- Heading 2 e Heading 3 devem sustentar a escaneabilidade.
- Body Large deve ser usado com parcimonia para texto de apoio de alto impacto.
- Body deve ser o padrao para leitura longa.
- Caption nao deve carregar informacao essencial sem alternativa clara.

### Peso

- Regular: textos longos e descricoes.
- Medium: labels, links, CTAs secundarios e destaques sutis.
- Semibold: titulos, botoes principais e componentes de navegacao.
- Bold: uso raro, apenas para enfase pontual em titulos.

### Espacamento Tipografico

- Letter spacing deve ser zero por padrao.
- Titulos devem evitar tracking negativo.
- Paragrafos devem ter largura controlada para leitura confortavel.
- Blocos longos devem usar respiro vertical entre paragrafos.

### Altura de Linha

- Display: 1.05 a 1.12.
- Headings: 1.15 a 1.25.
- Body Large: 1.45 a 1.6.
- Body: 1.55 a 1.75.
- Body Small e Caption: 1.4 a 1.6.

## Grid

### Largura Maxima

- Conteudo principal: 1120px.
- Conteudo de leitura longa: 760px.
- Secoes amplas com elementos lado a lado: 1200px.
- Navegacao e Footer: 1200px.

### Breakpoints

| Nome     | Largura de referencia | Diretriz                                 |
| -------- | --------------------- | ---------------------------------------- |
| Mobile   | ate 639px             | Layout em uma coluna                     |
| Tablet   | 640px a 1023px        | Uma coluna ampla ou duas colunas simples |
| Notebook | 1024px a 1279px       | Grid principal com ate 12 colunas        |
| Desktop  | 1280px ou mais        | Conteudo centralizado com largura maxima |

### Gutters

- Mobile: 16px a 20px.
- Tablet: 24px.
- Notebook: 32px.
- Desktop: 40px.

### Margens

- Mobile: minimo de 16px por lado.
- Tablet: minimo de 24px por lado.
- Notebook: minimo de 32px por lado.
- Desktop: margens fluidas com conteudo centralizado.

### Espacamento Entre Secoes

- Mobile: 56px a 72px.
- Tablet: 72px a 88px.
- Notebook: 88px a 112px.
- Desktop: 104px a 128px.

Secoes de maior carga emocional devem ter mais respiro para evitar sensacao de pressa.

## Espacamentos

A escala deve seguir progressao consistente:

| Token | Valor | Uso recomendado                           |
| ----- | ----- | ----------------------------------------- |
| 0     | 0px   | Remocao de espaco                         |
| 1     | 4px   | Ajustes finos e separacao minima          |
| 2     | 8px   | Espaco entre icone e texto                |
| 3     | 12px  | Agrupamentos compactos                    |
| 4     | 16px  | Padding minimo de componentes             |
| 5     | 20px  | Espaco interno de cards compactos         |
| 6     | 24px  | Padding padrao de cards e blocos          |
| 8     | 32px  | Separacao entre grupos de conteudo        |
| 10    | 40px  | Espaco entre titulo e conteudo            |
| 12    | 48px  | Separacao entre blocos relevantes         |
| 16    | 64px  | Secoes compactas                          |
| 20    | 80px  | Secoes padrao                             |
| 24    | 96px  | Secoes amplas                             |
| 32    | 128px | Hero, CTA final e secoes de maior respiro |

## Radius

| Token | Valor | Uso recomendado                                     |
| ----- | ----- | --------------------------------------------------- |
| None  | 0px   | Divisores e alinhamentos estruturais                |
| XS    | 4px   | Badges pequenos e elementos compactos               |
| SM    | 6px   | Inputs futuros e pequenos controles                 |
| MD    | 8px   | Cards, acordeoes, botoes e superficies principais   |
| LG    | 12px  | Blocos editoriais amplos e containers destacados    |
| XL    | 16px  | Uso raro em secoes especiais                        |
| Full  | 999px | Badges arredondados e botoes pill quando necessario |

Regra: cards devem ficar em 8px por padrao. Radius maior deve ter justificativa clara e
nao pode tornar a interface infantilizada.

## Shadows

Sombras devem ser discretas e funcionais. A interface deve depender mais de
espacamento, borda e contraste do que de elevacao.

| Nivel | Uso recomendado                        | Caracteristica visual                 |
| ----- | -------------------------------------- | ------------------------------------- |
| None  | Layout base                            | Sem sombra                            |
| XS    | Elementos interativos sutis            | Quase imperceptivel                   |
| SM    | Cards que precisam se separar do fundo | Sombra curta, baixa opacidade         |
| MD    | Menus, dropdowns e overlays futuros    | Elevacao clara, ainda suave           |
| LG    | Modais futuros                         | Uso raro, apenas para foco contextual |

Evitar sombras coloridas, densas ou dramaticas.

## Motion

### Duracao

- Microinteracoes: 120ms a 180ms.
- Transicoes de componentes: 180ms a 240ms.
- Entrada de secoes: 240ms a 360ms.
- Mudancas de estado simples: ate 160ms.

### Easing

- Padrao: suave e natural, com aceleracao discreta.
- Entrada: levemente desacelerada.
- Saida: rapida e sem teatralidade.
- Elementos de foco: imediatos o suficiente para acessibilidade.

### Comportamento

Motion deve reforcar orientacao e continuidade. Animacoes nao devem atrasar leitura,
ocultar conteudo importante ou dramatizar temas sensiveis.

### Animacoes Permitidas

- Fade suave em secoes ao entrar na viewport.
- Pequeno deslocamento vertical em conteudos editoriais.
- Transicao de cor em links e botoes.
- Expansao controlada de Accordion.
- Realce sutil em hover de cards clicaveis.
- Indicadores de foco e estado ativo.

### Animacoes Proibidas

- Parallax intenso.
- Rotacoes decorativas.
- Elementos pulsando para forcar clique.
- Auto-play de movimento constante.
- Animacoes que simulem urgencia.
- Movimento que prejudique leitura ou acessibilidade.
- Transicoes longas em CTAs principais.

### Preferencia por Movimento Reduzido

Quando o usuario indicar reducao de movimento, animacoes devem ser removidas ou
reduzidas a mudancas instantaneas de opacidade/estado.

## Responsividade

### Desktop

- Usar largura maxima centralizada.
- Permitir secoes em duas colunas quando isso melhorar hierarquia.
- Evitar linhas de texto muito longas.
- Manter CTA principal visivel em pontos estrategicos, sem fixacao agressiva.

### Notebook

- Preservar layout em duas colunas apenas quando houver espaco confortavel.
- Reduzir espacamentos verticais excessivos.
- Garantir que cards e grids nao fiquem apertados.

### Tablet

- Preferir uma coluna ampla ou duas colunas simples.
- Manter interacoes com area de toque adequada.
- Evitar dependencias de hover.
- Reordenar conteudo para leitura natural.

### Mobile

- Layout em uma coluna.
- CTA com area de toque generosa.
- Titulos menores, sem perder impacto.
- Secoes com respiro, mas sem rolagem excessivamente cansativa.
- Navbar futura deve priorizar clareza e acesso rapido ao CTA.

## Acessibilidade

### Contraste

- Texto essencial deve atingir no minimo WCAG AA.
- Texto primario sobre Background e Surface deve buscar AAA quando possivel.
- CTAs principais devem manter contraste suficiente entre fundo, texto e foco.
- Cores de feedback nao devem depender apenas da cor para comunicar estado.

### Foco

- Todo elemento interativo deve ter foco visivel.
- O foco deve ser perceptivel em fundos claros e surfaces.
- O indicador de foco nao deve ser removido em nenhum contexto.
- Ordem de foco deve seguir a ordem visual e narrativa da pagina.

### Navegacao por Teclado

- Todos os CTAs, links, Accordion e controles futuros devem ser acessiveis por teclado.
- A navegacao deve permitir pular blocos repetitivos quando houver navbar.
- Estados abertos/fechados devem ser previsiveis e anunciaveis.

### ARIA

- Usar ARIA apenas quando semantica HTML nativa nao for suficiente.
- Accordion deve comunicar estado expandido/recolhido.
- Icones decorativos devem ser ocultados de leitores de tela.
- Icones informativos devem ter rotulo textual equivalente.

### Tamanho Minimo de Toque

- Area minima recomendada: 44px por 44px.
- Links em texto corrido devem ter espacamento suficiente para toque preciso.
- Botoes principais em mobile devem ser confortaveis para uso com uma mao.

## Regras de Nao Uso

- Nao usar estetica de urgencia, como vermelho em CTA principal.
- Nao usar componentes arredondados demais sem funcao clara.
- Nao usar sombras fortes para compensar falta de hierarquia.
- Nao usar tipografia decorativa em textos essenciais.
- Nao criar layouts com excesso de cards aninhados.
- Nao depender de animacao para explicar conteudo.
- Nao sacrificar contraste por suavidade visual.
