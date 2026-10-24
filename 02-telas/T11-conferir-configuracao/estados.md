# T11 · estados e momentos

**Momento** é aonde se chega tocando, no fluxo. **Estado** depende do mundo — do módulo, do ônibus, da rede —, e no palco abre pela coluna: é o próprio app montado pelo caso do mock, parado e sem toque.

| Referência | Tipo | Como se chega · o que causa | Caso do mock |
|---|---|---|---|
| `00-tela` | tela | referência da divergência · consulta parada *Não bate com o cadastro* na coluna | M2C-0438 + ONK-8Q90 · caso diff-divergente |
| `01-estado-conteudo-que-o-app-nao-reconhece` | estado | índice que o app não classifica | `indice-nao-classificado` |
| `02-momento-tudo-confere` | momento | a leitura do herói termina sem divergência | `conferencia-confere` |
| `03-momento-outras-acoes` | momento | tocar em Outras ações, no rodapé da conferência | derivado do fluxo |
| `04-momento-conferindo` | momento | a conferência correndo · 400ms por linha | `conferencia-confere` |
| `06-momento-folha-de-confirmacao` | momento | *Solicitar as cercas* nas cercas: a mesma folha da T09/13, *Solicitar as cercas de novo?* (decisão 71) | `diff-divergente` |
| `07-momento-folha-de-confirmacao-da-conexao` | momento | *Corrigir este bloco* na Conexão, com a operadora do cadastro diferente da do módulo: a folha pede pra conferir o chip | `diff-divergente` |

A regra de todo estado: **ele muda o conteúdo, nunca o desenho.** Os blocos ficam onde estão; muda o que eles dizem. A falha mora no elemento que falhou.

No protótipo, **a entrada normal pelo painel é a sessão do herói**, M2C-0417 + RKT-8H42 (`conferencia-confere`): a leitura chega ao `02`, *Tudo confere*, como a entrada pelo menu nessa sessão. A coluna mantém o estado `01` e acrescenta, abaixo dele, **Não bate com o cadastro**, usando a referência `00-tela` montada pelo `diff-divergente`, já lida, parada e sem toque. Esse acesso de consulta não transforma a referência em estado nem cria um fluxo alternativo. O `Voltar ao fluxo` restaura a sessão, o quadro e o avanço guardados antes da consulta; aberto diretamente pelo endereço parado, ele volta à semente normal da T11. As referências e as contagens permanecem as mesmas.

No protótipo: o `02` é o par do herói — o caso `conferencia-confere`, o RKT-8H42 com o M2C-0417 —, que confere, como a referência desenha. O endereço do `02` monta esse par (`06-prototipo/logica.md` · o que diverge).

A `05`, *revisar em seguida*, saiu com a decisão 71: era o quadro do arraste das cercas, que agora são um pedido. O *revisar em seguida* dos eventos deixados para depois (pela pergunta do ativo ou do leitor, T09/14 e 15) segue no fluxo com o desenho que ela tinha, sem referência.

A folha `03`, *Divergência · outras ações*, também está na coluna, parada sobre o exemplo divergente. O link desse momento abre a mesma consulta. O endereço simples da T11 abre a conferência normal; o print conserva a referência.

No protótipo: as folhas de confirmação `06` e `07`, *Divergência · solicitar as cercas* e *Divergência · corrigir a conexão*, também ficam na coluna, paradas sobre o exemplo divergente. No fluxo, nascem do `Solicitar as cercas` e do `Corrigir este bloco` na Conexão de outra operadora, no par divergente (`tela.md`).
