# Design Bible - DesenvolvePsi

## Objetivo

Esta pasta e a fonte oficial de UX e UI da Landing Page do DesenvolvePsi.
Ela traduz a visao do produto, a especificacao de experiencia, o Design
System e a biblioteca de componentes em orientacoes praticas para as proximas
features.

## Como utilizar

Antes de iniciar qualquer feature visual, leia este README e os arquivos da
secao correspondente. A implementacao deve seguir a documentacao especifica da
secao, respeitando tambem os documentos existentes em `docs/`.

Use esta ordem de leitura:

1. `docs/01_product_vision.md`
2. `docs/04_ux_specification.md`
3. `docs/05_design_system.md`
4. `docs/06_component_library.md`
5. Arquivos da secao em `design/`

## Fluxo de trabalho

Cada feature deve comecar pela conferencia do wireframe, do layout e da
estrategia de copy da secao. Apos implementar, o Pull Request deve explicar
como a entrega respeita esta Design Bible e registrar qualquer desvio
necessario.

Se uma decisao de UX ou UI precisar mudar, a documentacao deve ser atualizada
em uma sprint propria antes da implementacao correspondente.

## Responsabilidades

- Produto: garantir que cada secao apoie a jornada definida para o usuario.
- UX: preservar clareza, acolhimento, autonomia e reducao de friccao.
- UI: aplicar tokens, hierarquia visual, responsividade e acessibilidade.
- Conteudo: manter linguagem etica, humana, objetiva e sem promessas.
- Engenharia: implementar apenas o escopo da feature, sem improvisar secoes.

## Uso em futuras features

As proximas features devem tratar estes arquivos como contrato de construcao.
Componentes, copy, animacoes e composicao visual precisam nascer das decisoes
descritas aqui.

Nao utilize dados ficticios, claims clinicos nao validados, imagens genericas
ou elementos visuais fora do Design System. A conversao deve acontecer por
clareza, confianca e acolhimento, nunca por pressao.

## Secoes documentadas

- [Hero](hero/README.md)
- [Services](services/README.md)
- [About](about/README.md)
- [FAQ](faq/README.md)
- [Footer](footer/README.md)
