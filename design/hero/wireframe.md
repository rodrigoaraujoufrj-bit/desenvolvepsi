# Hero - Wireframe

## Desktop - 1280px ou mais

```text
+--------------------------------------------------------------------------------+
| NAVBAR FIXA                                                                    |
| 1200px max | altura 80px | logo esq. | links centro | CTA navbar dir.          |
+--------------------------------------------------------------------------------+
| HERO BACKGROUND: neutro quente + gradiente suave + formas organicas discretas  |
|                                                                                |
|  top padding 48-64px abaixo da navbar                                           |
|                                                                                |
|  +--------------------------------------------+   gap 56px   +---------------+ |
|  | BADGE SUPERIOR                             |              | CARD FLUT. A  | |
|  | 32-36px altura                             |              | top-left      | |
|  |                                            |              +---------------+ |
|  | HEADLINE                                   |        +--------------------+  |
|  | 60-72px / 1.02-1.08 line-height            |        |                    |  |
|  | max 4 linhas / max 16ch                    |        | FOTOGRAFIA         |  |
|  |                                            |        | PROFISSIONAL       |  |
|  | SUBHEADLINE                                |        |                    |  |
|  | 18-20px / max 3 linhas / max 38rem         |        | enquadramento      |  |
|  |                                            |        | humano, sereno     |  |
|  | +------------------+ +-------------------+  |        |                    |  |
|  | | CTA PRINCIPAL    | | CTA SECUNDARIO    |  |        +--------------------+  |
|  | | 56-60px altura   | | 52-56px altura    |  |              +---------------+ |
|  | +------------------+ +-------------------+  |              | CARD FLUT. B  | |
|  |                                            |              | bottom-right  | |
|  | INDICADORES DE CONFIANCA                   |              +---------------+ |
|  | 2 colunas x 2 linhas                       |                               |
|  | [icone] indicador  [icone] indicador       |                               |
|  | [icone] indicador  [icone] indicador       |                               |
|  +--------------------------------------------+   +-------------------------+ |
|                                                                                |
|  bottom padding 64-80px                                                         |
+--------------------------------------------------------------------------------+
| Proxima secao deve aparecer sugerida abaixo da dobra, sem competir com a Hero   |
+--------------------------------------------------------------------------------+
```

### Fluxo visual desktop

```text
Navbar -> Badge -> Headline -> CTA principal -> Foto -> Subheadline
       -> CTA secundario -> Indicadores -> Cards flutuantes -> Proxima secao
```

## Tablet - 768px a 1023px

```text
+------------------------------------------------------------+
| NAVBAR FIXA                                                |
| logo esq. | menu/links reduzidos | CTA ou hamburger dir.   |
+------------------------------------------------------------+
| HERO BACKGROUND                                            |
|                                                            |
| BADGE SUPERIOR                                             |
|                                                            |
| HEADLINE                                                   |
| 48-56px / max 4 linhas / largura controlada                |
|                                                            |
| SUBHEADLINE                                                |
| 18-19px / max 3 linhas                                     |
|                                                            |
| +------------------+ +-------------------+                 |
| | CTA PRINCIPAL    | | CTA SECUNDARIO    |                 |
| +------------------+ +-------------------+                 |
|                                                            |
| INDICADORES DE CONFIANCA                                   |
| 2 colunas, cards compactos                                 |
|                                                            |
| +--------------------------------------------------------+ |
| | PAINEL VISUAL                                          | |
| | foto centralizada + card flutuante A + card flutuante B | |
| +--------------------------------------------------------+ |
+------------------------------------------------------------+
```

### Fluxo visual tablet

```text
Badge -> Headline -> Subheadline -> CTAs -> Indicadores -> Fotografia
```

## Mobile - ate 639px

```text
+----------------------------------------+
| NAVBAR MOBILE                          |
| logo esq. | hamburger dir.             |
+----------------------------------------+
| HERO BACKGROUND SIMPLIFICADO           |
| padding lateral 16-20px                |
|                                        |
| BADGE SUPERIOR                         |
| largura conforme conteudo              |
|                                        |
| HEADLINE                               |
| 38-44px / max 5 linhas                 |
| largura 100% / sem palavras espremidas |
|                                        |
| SUBHEADLINE                            |
| 17-18px / max 4 linhas                 |
|                                        |
| +------------------------------------+ |
| | CTA PRINCIPAL                      | |
| | altura 52-56px / largura 100%      | |
| +------------------------------------+ |
| +------------------------------------+ |
| | CTA SECUNDARIO                     | |
| | altura 48-52px / largura 100%      | |
| +------------------------------------+ |
|                                        |
| INDICADORES DE CONFIANCA               |
| lista em 1 coluna                      |
| [icone] indicador                      |
| [icone] indicador                      |
| [icone] indicador                      |
| [icone] indicador                      |
|                                        |
| +------------------------------------+ |
| | FOTOGRAFIA PROFISSIONAL            | |
| | altura 360-430px                   | |
| | card flutuante A acima/esq.        | |
| | card flutuante B abaixo/dir.       | |
| +------------------------------------+ |
+----------------------------------------+
```

### Fluxo visual mobile

```text
Navbar -> Badge -> Headline -> Subheadline -> CTA principal
       -> CTA secundario -> Indicadores -> Fotografia -> Proxima secao
```

## Regras estruturais

- A fotografia nunca deve vir antes da mensagem textual no mobile.
- Os cards flutuantes nao podem esconder rosto, maos ou area expressiva da foto.
- O CTA principal deve aparecer antes dos indicadores.
- Indicadores devem reforcar confianca, nao competir com os CTAs.
- A proxima secao deve ser sugerida pela continuidade da rolagem, nao por seta
  animada ou artificio chamativo.
