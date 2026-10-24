# T15 · estados e momentos

**Momento** é aonde se chega tocando, no fluxo. **Estado** depende do mundo — do módulo, do ônibus, da rede —, e no palco abre pela coluna: é o próprio app montado pelo caso do mock, parado e sem toque.

| Referência | Tipo | Como se chega · o que causa | Caso do mock |
|---|---|---|---|
| `00-tela` | tela | a entrada da tela | empresa Viação Atlântico Sul · as 13 instalações |
| `01-momento-detalhe-da-instalacao` | momento | tocar numa instalação · as cercas de hoje pendentes, e a instalação aprovada · também pela coluna (decisão 76) | `instalacoes · i-01` |
| `02-estado-nenhuma-instalacao` | estado | a empresa não tem instalações | `instalacoes` |
| `03-estado-sem-rede` | estado | a consulta sem rede | `instalacoes-sem-rede` |
| `04-estado-criterio-indisponivel` | estado | o pacote não declara o parâmetro do critério — aqui, o modo de fila do módulo | `criterio-indisponivel` |
| `05-estado-criterio-pendente` | estado | o servidor não respondeu à consulta | `criterio-pendente` |
| `06-estado-as-cercas-conferidas-pelo-sistema` | estado | o sistema conferiu as cercas que o técnico pediu: *conforme*, *4 regiões · conferidas às 12:03* (decisão 72) · também pelo toque no aviso (a 08 e a 09, decisão 78) | `cercas-conferidas` |
| `07-estado-as-cercas-nao-chegaram-em-24-h` | estado | as cercas não chegaram em 24 h: *não chegaram*, em vermelho, *pendência na web* · a instalação continua aprovada (decisão 72) · também pelo toque no aviso da falha (a 10, decisão 78) | `cercas-nao-chegaram` |
| `08-estado-o-aviso-por-cima-de-outra-tela` | estado | as cercas conferem com o técnico já em outro ônibus: o aviso do Android desce por cima da tela que estiver aberta, aqui a calibração do KNB-5H39, com o ícone do app (decisões 78 e 80) | `aviso-cercas-conferidas` |
| `09-estado-o-aviso-na-gaveta` | estado | o mesmo aviso, com o app fechado: aberto na gaveta do Android, com o texto inteiro e o `Ver a instalação` (decisão 78) | `aviso-na-gaveta` |
| `10-estado-o-aviso-das-cercas-que-nao-chegaram` | estado | passam 24 h sem as cercas chegarem: o aviso da falha por cima de outra tela, com o ícone do app e o título da falha · o toque abre a 07 (decisões 78 e 80) | `aviso-cercas-nao-chegaram` |

- no protótipo · a linha *02-estado-nenhuma-instalacao*: | `02-estado-nenhuma-instalacao` | estado | a empresa não tem instalações — a consulta volta vazia, e sem sessão | `instalacoes` + `instalacoes-vazia` |

- no protótipo · a linha *00-tela*: | `00-tela` | tela | a entrada da tela | empresa Viação Atlântico Sul · as 13 instalações · sessão M2C-0417 + RKT-8H42 |

A regra de todo estado: **ele muda o conteúdo, nunca o desenho.** Os blocos ficam onde estão; muda o que eles dizem. A falha mora no elemento que falhou.

**A 08, a 09 e a 10 são o aviso do Android** (decisão 78, folha 11), que não é do app: é cenário do sistema, como a barra e o teclado (lei 22), na fonte do sistema. Na 08 e na 10, o aviso desce por cima de uma tela de outra visita, que fica parada e inerte atrás dele: na 08, a calibração do caminhão (a T09/00, o KNB-5H39); na 10, a alimentação relida do QJF-2C61 (a T11/30). Na 09, o app está fechado, e o aviso fica aberto na gaveta, com o cenário do Android em volta: a data do dia, os blocos rápidos, o brilho, o *Gerenciar* e o *Limpar tudo*. O que o aviso diz sai do dado: a placa e o módulo da i-01, as 4 regiões e a hora do resultado das cercas (os casos da 06 e da 07). Os textos que contam são só os do aviso (`textos.md`): a tela de trás e o cenário da gaveta ficam inertes, como atrás de uma folha.

**No protótipo · a 06 e a 07**: o detalhe da i-01, a instalação de hoje do herói, com as cercas do caso no lugar das dela, parado e sem toque: conferidas pelo sistema (06) ou que não chegaram em 24 h (07). O status geral continua *aprovada*: as cercas não contam pro status (decisão 72). A 01 abre também pela coluna, parada, no quadro do endereço.

**No protótipo · a 04 e a 05**: o detalhe da instalação mais nova do ativo do caso — a-03, a PCX-9A17, a i-02 — com o `recebimento` do caso no lugar do da instalação, parado e sem toque, com a faixa da sessão do herói. O status geral sai dos critérios: *aguardando validação*. A seção *A INSTALAÇÃO* mostra as seis etapas da i-02, e a linha embaixo da placa, *Rafael Vieira*, como as duas referências desenham (ver `tela.md`). As receitas: `criterio-indisponivel` e `criterio-pendente` (`app/src/estado/receitas.js`).
