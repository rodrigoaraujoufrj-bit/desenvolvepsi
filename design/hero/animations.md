# Hero - Animacoes

## Animacoes permitidas

Usar apenas movimentos discretos:

- Fade.
- Opacity.
- Translate vertical leve.
- Scale muito suave.
- Blur leve em elementos decorativos.

## Duracao

As entradas devem permanecer entre 220ms e 380ms. Transicoes de hover podem
ficar entre 160ms e 220ms.

## Easing

Usar easing suave e natural, preferencialmente equivalente a
`[0.22, 1, 0.36, 1]`. Evitar curvas elasticas, bounce ou aceleracoes bruscas.

## Ordem de entrada

1. Coluna textual e contexto.
2. Headline e subheadline.
3. CTAs.
4. Indicadores de confianca.
5. Painel visual.
6. Elementos decorativos.

## Comportamento durante scroll

A Hero nao deve depender do scroll para revelar seu conteudo essencial. Todo o
conteudo principal precisa estar visivel no carregamento, mesmo se animacoes
falharem ou forem reduzidas.

## Comportamento em Mobile

Reduzir deslocamentos e atrasos. Em telas pequenas, priorizar leitura estavel
e evitar qualquer animacao que cause salto visual, atraso no CTA ou mudanca de
altura perceptivel.
