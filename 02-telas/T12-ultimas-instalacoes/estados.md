# T12 · estados e momentos

**Momento** é aonde se chega tocando, no fluxo. **Estado** depende do mundo — do módulo, do ônibus, da rede —, e no palco abre pela coluna: é o próprio app montado pelo caso do mock, parado e sem toque.

| Referência | Tipo | Como se chega · o que causa | Caso do mock |
|---|---|---|---|
| `00-tela` | tela | a entrada da tela | empresa Viação Atlântico Sul · as 13 instalações |
| `01-momento-detalhe-da-instalacao` | momento | tocar numa instalação · as cercas de hoje pendentes, e a instalação aprovada · também pela coluna (decisão 76) | `instalacoes · i-01` |
| `02-estado-nenhuma-instalacao` | estado | a empresa não tem instalações | `instalacoes` |
| `03-estado-sem-rede` | estado | a consulta sem rede | `instalacoes-sem-rede` |
| `04-estado-criterio-indisponivel` | estado | o pacote não declara o parâmetro do critério — aqui, o modo de fila do módulo | `criterio-indisponivel` |
| `05-estado-criterio-pendente` | estado | o servidor não respondeu à consulta | `criterio-pendente` |
| `06-estado-as-cercas-conferidas-pelo-sistema` | estado | o sistema conferiu as cercas que o técnico pediu: *conforme*, *4 regiões · conferidas às 12:03* (decisão 72) | `cercas-conferidas` |
| `07-estado-as-cercas-nao-chegaram-em-24-h` | estado | as cercas não chegaram em 24 h: *não chegaram*, em vermelho, *pendência na web* · a instalação continua aprovada (decisão 72) | `cercas-nao-chegaram` |

- no protótipo · a linha *02-estado-nenhuma-instalacao*: | `02-estado-nenhuma-instalacao` | estado | a empresa não tem instalações — a consulta volta vazia, e sem sessão | `instalacoes` + `instalacoes-vazia` |

- no protótipo · a linha *00-tela*: | `00-tela` | tela | a entrada da tela | empresa Viação Atlântico Sul · as 13 instalações · sessão M2C-0417 + RKT-8H42 |

A regra de todo estado: **ele muda o conteúdo, nunca o desenho.** Os blocos ficam onde estão; muda o que eles dizem. A falha mora no elemento que falhou.

**No protótipo · a 06 e a 07**: o detalhe da i-01, a instalação de hoje do herói, com as cercas do caso no lugar das dela, parado e sem toque: conferidas pelo sistema (06) ou que não chegaram em 24 h (07). O status geral continua *aprovada*: as cercas não contam pro status (decisão 72). A 01 abre também pela coluna, parada, no quadro do endereço.

**No protótipo · a 04 e a 05**: o detalhe da instalação mais nova do ativo do caso — a-03, a PCX-9A17, a i-02 — com o `recebimento` do caso no lugar do da instalação, parado e sem toque, com a faixa da sessão do herói. O status geral sai dos critérios: *aguardando validação*. A seção *A INSTALAÇÃO* mostra as seis etapas da i-02, e a linha embaixo da placa, *Rafael Vieira*, como as duas referências desenham (ver `tela.md`). As receitas: `criterio-indisponivel` e `criterio-pendente` (`app/src/estado/receitas.js`).
