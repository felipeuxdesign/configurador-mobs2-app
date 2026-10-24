# T14 · estados e momentos

**Momento** é aonde se chega tocando, no fluxo. **Estado** depende do mundo — do módulo, do ônibus, da rede —, e no palco abre pela coluna: é o próprio app montado pelo caso do mock, parado e sem toque.

| Referência | Tipo | Como se chega · o que causa | Caso do mock |
|---|---|---|---|
| `00-tela` | tela | a referência da vez do cartão, depois do disparo; a entrada normal é a fila drenando (`01`) | sessão M2C-0417 + RKT-8H42 · fila com 6 mensagens e 2 de diagnóstico |
| `01-momento-antes-do-disparo` | momento | a fila do módulo ainda drenando | `ciclo.mensagensGuardadas` |
| `02-estado-prazo-estourado` | estado | o evento não chega em 2:00 | `evento-sem-resposta` |
| `03-estado-dinamico-fora-do-esperado` | estado | a rotação não aparece: o motor está desligado | `motor-desligado-no-ciclo` |
| `05-momento-ciclo-concluido` | momento | os cinco passos do herói aprovados e o evento conferido | `ciclo` |
| `09-estado-segunda-falha-do-evento` | estado | o evento não chega pela segunda vez: confira a conexão do módulo · *padrão, até o produto decidir* | `evento-nao-chega-de-novo` |
| `08-momento-o-modulo-leu-o-cartao` | momento | passar o cartão: o módulo leu 9412857 · Confere com o cartão ou Não confere | `ciclo` |
| `10-momento-cartao-nao-confere` | momento | tocar em Não confere: não conforme, com a justificativa no checklist · `Passar de novo` na linha | `ciclo` |
| `11-momento-vez-da-ignicao-desligada` | momento | o cartão confere: a vez da ignição desligada, com a explicação | `ciclo` |
| `12-estado-ativo-sem-leitor` | estado | o ativo sem leitor: 3 passos na referência, de antes do pedal; 4 no protótipo, com ele | `sem-leitor` |
| `13-momento-a-vez-do-pedal-pisar-e-soltar` | momento | o cartão respondido: a vez do pedal de freio, *pise e solte*, e o app confere sozinho (decisão 67) | `ciclo` |
| `14-momento-a-confirmacao-de-encerrar-com-passos-faltando` | momento | tocar em *Encerrar com 3 passos faltando*: a confirmação por cima do ciclo (decisão 68) | `ciclo` |

- no protótipo · a linha *01-momento-antes-do-disparo*: | `01-momento-antes-do-disparo` | momento | a entrada da tela: a fila do módulo ainda drenando | `ciclo.mensagensGuardadas` |

- no protótipo · a linha *00-tela*: | `00-tela` | tela | 6 s depois do disparo: o prazo em 1:36, o instante antes de o evento chegar (a entrada é a `01`) | sessão M2C-0417 + RKT-8H42 · fila com 6 mensagens e 2 de diagnóstico |

A regra de todo estado: **ele muda o conteúdo, nunca o desenho.** Os blocos ficam onde estão; muda o que eles dizem. A falha mora no elemento que falhou.

**No palco · todo quadro se alcança** (decisão 76): o ciclo concluído (05), o módulo que leu o cartão (08), o cartão que não confere (10), a vez da ignição desligada (11), a vez do pedal (13) e a confirmação de encerrar (14) também abrem pela coluna, parados, no quadro do endereço.

**No palco · a espera do botão:** a `01`, *Fila drenando*, também abre pela coluna, no fim dela, parada no quadro da referência: a fila no meio, sem esvaziar, e o `Disparar evento de teste` apagado · a entrada pelo painel continua drenando (`06-prototipo/palco.md`).
