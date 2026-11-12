# As telas

Uma pasta por tela. Dentro de cada uma, sempre os mesmos cinco itens:

| Arquivo | O que tem |
|---|---|
| `tela.md` | a função, o elemento-assinatura, o chrome, os toques, as peças do design system e as histórias |
| `estados.md` | cada momento e estado: como se chega, o que causa, e o caso do mock que produz |
| `animacao.md` | cada elemento que se move: quando, o quê, quanto tempo, que curva, e o que faz com reduzir movimento |
| `textos.md` | os textos exatos de cada referência, na ordem |
| `referencias/` | `html/` e `png/` com o mesmo nome · **o número diz a ordem, a palavra diz o tipo** |

**Tela** é a referência da entrada ou do quadro base. **Momento** é aonde se chega tocando. **Estado** depende do mundo — módulo, ônibus, rede. Esses tipos classificam as referências; não determinam sozinhos os acessos do palco.

No protótipo, **Estados desta tela** também oferece momentos e quadros base como consultas paradas, conforme `indice.json` (`coluna`, `consulta`, `depoisDe` e `colunaNoFim`). A consulta preserva o desenho e não recebe toque, relógio ou gravação. **Voltar ao fluxo** restaura o percurso anterior. O painel e o endereço simples abrem a entrada normal; a fotografia com `print=1` conserva o gabarito. Em cada tela, as regras vêm antes das notas do protótipo.

| Tela | Pasta | Momentos | Estados |
|---|---|---|---|
| T01 · Login | `T01-login/` | 15 | 8 |
| T02 · Selecionar contexto | `T02-selecionar-contexto/` | 1 | 0 |
| T03 · Sincronizar | `T03-sincronizar/` | 1 | 4 |
| T04 · Menu | `T04-menu/` | 13 | 7 |
| T05 · Conectar módulo | `T05-conectar-modulo/` | 5 | 7 |
| T06 · Diagnóstico do módulo | `T06-diagnostico-do-modulo/` | 4 | 10 |
| T07 · Selecionar ativo | `T07-selecionar-ativo/` | 3 | 5 |
| T08 · Configurar módulo | `T08-configurar-modulo/` | 20 | 11 |
| T09 · Calibração | `T09-calibracao/` | 7 | 5 |
| T10 · Ciclo de testes | `T10-ciclo-dinamico/` | 7 | 4 |
| T11 · Checklist | `T11-checklist/` | 37 | 13 |
| T12 · Sessão | `T12-sessao/` | 8 | 3 |
| T13 · Fila de saída | `T13-fila-de-saida/` | 0 | 5 |
| T14 · Conferir configuração | `T14-conferir-configuracao/` | 5 | 1 |
| T15 · Últimas instalações | `T15-ultimas-instalacoes/` | 1 | 9 |

`indice.json` lista as 234 referências (15 telas, 127 momentos e 92 estados) com tela, tipo, nome, título, como se chega, caso do mock e os caminhos do HTML e do PNG. **É o que o palco lê pra montar a coluna.**

**As referências são gabarito, nunca peça do app.** O HTML existe pra você ler um valor exato e pra comparar o seu print com o PNG. O app se constrói com os componentes do design system.
