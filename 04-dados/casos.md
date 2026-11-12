# Os casos do mock

O mock tem **79 casos**, contados nas chaves de `mocks.js.casos`. O índice contém 234 referências: algumas usam um caso, outras uma coleção, uma semente ou o resultado de um toque. IDs de ativo, modelo e pacote são dados, não casos adicionais.

## Casos e referências declaradas

A tabela reúne declarações do [índice](../02-telas/indice.json) e das [receitas do protótipo](../06-prototipo/app/src/estado/receitas.js), incluindo os casos aditivos já presentes no mock. As condições reais de entrada e os quadros de cada família estão nos `estados.md` das telas; a coluna do palco abre os exemplos parados.

| Caso em `mocks.js.casos` | Referências que o declaram |
|---|---|
| `ativo-de-empresa-sem-acesso` | [T07/12-estado-fora-do-pacote-de-empresa-que-o-tecnico-nao-atende](../02-telas/T07-selecionar-ativo/referencias/html/12-estado-fora-do-pacote-de-empresa-que-o-tecnico-nao-atende.html) |
| `ativo-fora-pacote` | [T07/04-estado-fora-do-pacote](../02-telas/T07-selecionar-ativo/referencias/html/04-estado-fora-do-pacote.html) |
| `atualizacao-nao-terminou` | [T06/14-estado-atualizacao-nao-terminou](../02-telas/T06-diagnostico-do-modulo/referencias/html/14-estado-atualizacao-nao-terminou.html) |
| `autoteste-falhando` | [T12/05-estado-homologacao-bloqueada](../02-telas/T12-sessao/referencias/html/05-estado-homologacao-bloqueada.html) |
| `aviso-cercas-conferidas` | [T15/08-estado-o-aviso-por-cima-de-outra-tela](../02-telas/T15-ultimas-instalacoes/referencias/html/08-estado-o-aviso-por-cima-de-outra-tela.html) |
| `aviso-cercas-nao-chegaram` | [T15/10-estado-o-aviso-das-cercas-que-nao-chegaram](../02-telas/T15-ultimas-instalacoes/referencias/html/10-estado-o-aviso-das-cercas-que-nao-chegaram.html) |
| `aviso-na-gaveta` | [T15/09-estado-o-aviso-na-gaveta](../02-telas/T15-ultimas-instalacoes/referencias/html/09-estado-o-aviso-na-gaveta.html) |
| `aviso-sem-resposta` | [T08/37-estado-o-android-pede-o-aviso](../02-telas/T08-configurar-modulo/referencias/html/37-estado-o-android-pede-o-aviso.html) |
| `bloco-recusado` | [T08/01-estado-bloco-recusado](../02-telas/T08-configurar-modulo/referencias/html/01-estado-bloco-recusado.html) |
| `bloco-recusado-de-novo` | [T08/31-estado-bloco-recusado-de-novo](../02-telas/T08-configurar-modulo/referencias/html/31-estado-bloco-recusado-de-novo.html) · [T08/32-momento-folha-gravar-so-a-conexao](../02-telas/T08-configurar-modulo/referencias/html/32-momento-folha-gravar-so-a-conexao.html) · [T08/33-momento-gravando-so-a-conexao](../02-telas/T08-configurar-modulo/referencias/html/33-momento-gravando-so-a-conexao.html) |
| `bluetooth-desligado` | [T05/16-estado-bluetooth-desligado](../02-telas/T05-conectar-modulo/referencias/html/16-estado-bluetooth-desligado.html) |
| `bluetooth-sem-permissao` | [T05/17-estado-bluetooth-sem-permissao](../02-telas/T05-conectar-modulo/referencias/html/17-estado-bluetooth-sem-permissao.html) |
| `busca-vazia` | [T05/03-estado-nenhum-encontrado](../02-telas/T05-conectar-modulo/referencias/html/03-estado-nenhum-encontrado.html) |
| `can-estatico-ausente` | [T06/08-estado-sinal-da-can-sem-leitura](../02-telas/T06-diagnostico-do-modulo/referencias/html/08-estado-sinal-da-can-sem-leitura.html) |
| `can-estatico-bateria` | [T06/12-estado-alimentacao-abaixo-da-faixa](../02-telas/T06-diagnostico-do-modulo/referencias/html/12-estado-alimentacao-abaixo-da-faixa.html) · [T11/09-estado-item-reprovado](../02-telas/T11-checklist/referencias/html/09-estado-item-reprovado.html) · [T11/16-estado-secao-c-com-item-reprovado](../02-telas/T11-checklist/referencias/html/16-estado-secao-c-com-item-reprovado.html) · [T11/29-momento-relendo-o-modulo](../02-telas/T11-checklist/referencias/html/29-momento-relendo-o-modulo.html) · [T11/30-momento-alimentacao-relida](../02-telas/T11-checklist/referencias/html/30-momento-alimentacao-relida.html) · [T11/34-momento-alimentacao-nao-resolvida](../02-telas/T11-checklist/referencias/html/34-momento-alimentacao-nao-resolvida.html) |
| `can-estatico-hodometro` | Sem referência própria declarada no índice/receitas; não implica ausência de uso no fluxo. |
| `can-estatico-hodometro-a22` | Sem referência própria declarada no índice/receitas; não implica ausência de uso no fluxo. |
| `can-estatico-isolado` | [T06/09-estado-sinal-da-can-fora-do-esperado](../02-telas/T06-diagnostico-do-modulo/referencias/html/09-estado-sinal-da-can-fora-do-esperado.html) |
| `can-fora-esperado` | Sem referência própria declarada no índice/receitas; não implica ausência de uso no fluxo. |
| `cercas-conferidas` | [T15/06-estado-as-cercas-conferidas-pelo-sistema](../02-telas/T15-ultimas-instalacoes/referencias/html/06-estado-as-cercas-conferidas-pelo-sistema.html) |
| `cercas-conferidas-na-visita` | [T08/36-estado-o-sistema-conferiu-as-cercas-durante-a-visita](../02-telas/T08-configurar-modulo/referencias/html/36-estado-o-sistema-conferiu-as-cercas-durante-a-visita.html) · [T11/52-estado-as-cercas-conferidas-pelo-sistema-durante-a-visita](../02-telas/T11-checklist/referencias/html/52-estado-as-cercas-conferidas-pelo-sistema-durante-a-visita.html) |
| `cercas-nao-chegaram` | [T15/07-estado-as-cercas-nao-chegaram-em-24-h](../02-telas/T15-ultimas-instalacoes/referencias/html/07-estado-as-cercas-nao-chegaram-em-24-h.html) |
| `cercas-solicitadas` | [T08/10-momento-manutencao-concluida](../02-telas/T08-configurar-modulo/referencias/html/10-momento-manutencao-concluida.html) |
| `checklist-sem-internet` | [T11/53-estado-a-secao-f-sem-internet-no-celular](../02-telas/T11-checklist/referencias/html/53-estado-a-secao-f-sem-internet-no-celular.html) |
| `conexao-falha` | [T05/04-estado-conexao-falhou](../02-telas/T05-conectar-modulo/referencias/html/04-estado-conexao-falhou.html) |
| `conferencia-confere` | [T14/02-momento-tudo-confere](../02-telas/T14-conferir-configuracao/referencias/html/02-momento-tudo-confere.html) · [T14/04-momento-conferindo](../02-telas/T14-conferir-configuracao/referencias/html/04-momento-conferindo.html) · [T08/30-momento-o-que-vai-ser-gravado-menos-a-conexao](../02-telas/T08-configurar-modulo/referencias/html/30-momento-o-que-vai-ser-gravado-menos-a-conexao.html) |
| `conflito-pinos-sem-saida` | [T07/06-estado-conflito-de-pinos-sem-saida](../02-telas/T07-selecionar-ativo/referencias/html/06-estado-conflito-de-pinos-sem-saida.html) |
| `conteudo-nao-cabe` | [T08/06-estado-a-configuracao-nao-cabe](../02-telas/T08-configurar-modulo/referencias/html/06-estado-a-configuracao-nao-cabe.html) |
| `criterio-indisponivel` | [T15/04-estado-criterio-indisponivel](../02-telas/T15-ultimas-instalacoes/referencias/html/04-estado-criterio-indisponivel.html) |
| `criterio-pendente` | [T15/05-estado-criterio-pendente](../02-telas/T15-ultimas-instalacoes/referencias/html/05-estado-criterio-pendente.html) |
| `diff-divergente` | [T14/00-tela](../02-telas/T14-conferir-configuracao/referencias/html/00-tela.html) · [T14/03-momento-outras-acoes](../02-telas/T14-conferir-configuracao/referencias/html/03-momento-outras-acoes.html) · [T14/06-momento-folha-de-confirmacao](../02-telas/T14-conferir-configuracao/referencias/html/06-momento-folha-de-confirmacao.html) · [T14/07-momento-folha-de-confirmacao-da-conexao](../02-telas/T14-conferir-configuracao/referencias/html/07-momento-folha-de-confirmacao-da-conexao.html) |
| `entrada-ignicao` | [T11/23-estado-secao-c-com-entradas-reprovadas](../02-telas/T11-checklist/referencias/html/23-estado-secao-c-com-entradas-reprovadas.html) · [T11/24-estado-entradas-reprovadas](../02-telas/T11-checklist/referencias/html/24-estado-entradas-reprovadas.html) · [T11/32-momento-entradas-relidas](../02-telas/T11-checklist/referencias/html/32-momento-entradas-relidas.html) · [T11/36-momento-entradas-nao-resolvidas](../02-telas/T11-checklist/referencias/html/36-momento-entradas-nao-resolvidas.html) |
| `evento-nao-chega-de-novo` | [T10/09-estado-segunda-falha-do-evento](../02-telas/T10-ciclo-dinamico/referencias/html/09-estado-segunda-falha-do-evento.html) |
| `evento-sem-resposta` | [T10/02-estado-prazo-estourado](../02-telas/T10-ciclo-dinamico/referencias/html/02-estado-prazo-estourado.html) |
| `fila-dois-erros` | [T13/02-estado-dois-erros](../02-telas/T13-fila-de-saida/referencias/html/02-estado-dois-erros.html) |
| `fila-parada` | [T04/16-estado-fila-parada](../02-telas/T04-menu/referencias/html/16-estado-fila-parada.html) |
| `fila-sem-erro` | [T13/01-estado-sem-erro](../02-telas/T13-fila-de-saida/referencias/html/01-estado-sem-erro.html) |
| `fila-vazia` | [T13/03-estado-fila-vazia](../02-telas/T13-fila-de-saida/referencias/html/03-estado-fila-vazia.html) · [T13/04-estado-secao-f-em-re-checagem](../02-telas/T13-fila-de-saida/referencias/html/04-estado-secao-f-em-re-checagem.html) · [T04/17-momento-folha-conta-sair-sem-pendencia](../02-telas/T04-menu/referencias/html/17-momento-folha-conta-sair-sem-pendencia.html) |
| `firmware-fora-matriz` | [T06/04-estado-firmware-fora-da-lista](../02-telas/T06-diagnostico-do-modulo/referencias/html/04-estado-firmware-fora-da-lista.html) · [T06/06-momento-atualizando-o-firmware](../02-telas/T06-diagnostico-do-modulo/referencias/html/06-momento-atualizando-o-firmware.html) |
| `firmware-fora-sem-rede` | Sem referência própria declarada no índice/receitas; não implica ausência de uso no fluxo. |
| `firmware-sem-rede-no-modulo` | [T06/05-estado-firmware-sem-rede-no-modulo](../02-telas/T06-diagnostico-do-modulo/referencias/html/05-estado-firmware-sem-rede-no-modulo.html) |
| `gps-fraco` | [T11/21-estado-secao-c-com-gps-reprovado](../02-telas/T11-checklist/referencias/html/21-estado-secao-c-com-gps-reprovado.html) · [T11/22-estado-gps-reprovado](../02-telas/T11-checklist/referencias/html/22-estado-gps-reprovado.html) · [T11/31-momento-gps-relido](../02-telas/T11-checklist/referencias/html/31-momento-gps-relido.html) · [T11/35-momento-gps-nao-resolvido](../02-telas/T11-checklist/referencias/html/35-momento-gps-nao-resolvido.html) |
| `grandeza-indisponivel` | [T09/04-estado-modulo-sem-pulsos](../02-telas/T09-calibracao/referencias/html/04-estado-modulo-sem-pulsos.html) |
| `indice-nao-classificado` | [T14/01-estado-conteudo-que-o-app-nao-reconhece](../02-telas/T14-conferir-configuracao/referencias/html/01-estado-conteudo-que-o-app-nao-reconhece.html) |
| `instalacoes-sem-rede` | [T15/03-estado-sem-rede](../02-telas/T15-ultimas-instalacoes/referencias/html/03-estado-sem-rede.html) |
| `instalacoes-vazia` | [T15/02-estado-nenhuma-instalacao](../02-telas/T15-ultimas-instalacoes/referencias/html/02-estado-nenhuma-instalacao.html) |
| `link-perdido` | [T04/03-estado-faixa-modulo-com-falha](../02-telas/T04-menu/referencias/html/03-estado-faixa-modulo-com-falha.html) · [T04/18-momento-reconectando-ao-modulo](../02-telas/T04-menu/referencias/html/18-momento-reconectando-ao-modulo.html) |
| `localizacao-negada` | [T11/14-estado-aguardando-autoteste-sem-localizacao](../02-telas/T11-checklist/referencias/html/14-estado-aguardando-autoteste-sem-localizacao.html) |
| `mensagens-pendentes` | [T08/27-estado-mensagens-que-o-modulo-nao-enviou](../02-telas/T08-configurar-modulo/referencias/html/27-estado-mensagens-que-o-modulo-nao-enviou.html) · [T08/29-momento-esperando-o-envio](../02-telas/T08-configurar-modulo/referencias/html/29-momento-esperando-o-envio.html) |
| `modelo-sem-driver` | [T06/03-estado-modelo-sem-suporte](../02-telas/T06-diagnostico-do-modulo/referencias/html/03-estado-modelo-sem-suporte.html) |
| `modem-sem-sinal` | [T06/07-estado-modem-sem-sinal](../02-telas/T06-diagnostico-do-modulo/referencias/html/07-estado-modem-sem-sinal.html) · [T11/25-estado-secao-c-com-modem-reprovado](../02-telas/T11-checklist/referencias/html/25-estado-secao-c-com-modem-reprovado.html) · [T11/26-estado-modem-reprovado](../02-telas/T11-checklist/referencias/html/26-estado-modem-reprovado.html) · [T11/33-momento-modem-relido](../02-telas/T11-checklist/referencias/html/33-momento-modem-relido.html) · [T11/37-momento-modem-nao-resolvido](../02-telas/T11-checklist/referencias/html/37-momento-modem-nao-resolvido.html) |
| `modulo-com-pendencias` | [T06/13-estado-sessao-anterior-mal-encerrada](../02-telas/T06-diagnostico-do-modulo/referencias/html/13-estado-sessao-anterior-mal-encerrada.html) |
| `modulo-em-outro-ativo` | [T07/10-estado-modulo-em-outro-ativo](../02-telas/T07-selecionar-ativo/referencias/html/10-estado-modulo-em-outro-ativo.html) |
| `modulo-ja-deste-ativo` | [T07/11-estado-modulo-ja-deste-ativo](../02-telas/T07-selecionar-ativo/referencias/html/11-estado-modulo-ja-deste-ativo.html) · [T08/08-momento-manutencao-escolher-o-bloco](../02-telas/T08-configurar-modulo/referencias/html/08-momento-manutencao-escolher-o-bloco.html) · [T08/10-momento-manutencao-concluida](../02-telas/T08-configurar-modulo/referencias/html/10-momento-manutencao-concluida.html) · [T08/13-momento-manutencao-folha-de-confirmacao](../02-telas/T08-configurar-modulo/referencias/html/13-momento-manutencao-folha-de-confirmacao.html) · [T08/14-momento-manutencao-o-ativo-pergunta-pelos-eventos](../02-telas/T08-configurar-modulo/referencias/html/14-momento-manutencao-o-ativo-pergunta-pelos-eventos.html) · [T08/15-momento-manutencao-o-leitor-pergunta-pelos-eventos](../02-telas/T08-configurar-modulo/referencias/html/15-momento-manutencao-o-leitor-pergunta-pelos-eventos.html) · [T08/17-momento-manutencao-folha-do-ativo](../02-telas/T08-configurar-modulo/referencias/html/17-momento-manutencao-folha-do-ativo.html) · [T08/18-momento-manutencao-folha-do-leitor](../02-telas/T08-configurar-modulo/referencias/html/18-momento-manutencao-folha-do-leitor.html) · [T08/28-momento-manutencao-pelo-menu-nada-escolhido](../02-telas/T08-configurar-modulo/referencias/html/28-momento-manutencao-pelo-menu-nada-escolhido.html) · [T08/34-momento-manutencao-conexao-conferindo-o-servidor](../02-telas/T08-configurar-modulo/referencias/html/34-momento-manutencao-conexao-conferindo-o-servidor.html) |
| `modulo-nao-voltou` | [T08/35-estado-o-modulo-nao-voltou](../02-telas/T08-configurar-modulo/referencias/html/35-estado-o-modulo-nao-voltou.html) |
| `motor-desligado-no-ciclo` | [T10/03-estado-dinamico-fora-do-esperado](../02-telas/T10-ciclo-dinamico/referencias/html/03-estado-dinamico-fora-do-esperado.html) |
| `outro-usuario` | [T01/18-estado-outro-usuario-no-aparelho](../02-telas/T01-login/referencias/html/18-estado-outro-usuario-no-aparelho.html) |
| `pareamento-nao-confirmado` | [T05/20-estado-pareamento-nao-confirmado](../02-telas/T05-conectar-modulo/referencias/html/20-estado-pareamento-nao-confirmado.html) |
| `pareando` | [T05/18-estado-pareando](../02-telas/T05-conectar-modulo/referencias/html/18-estado-pareando.html) |
| `pedal-sem-leitura` | [T10/10-momento-cartao-nao-confere](../02-telas/T10-ciclo-dinamico/referencias/html/10-momento-cartao-nao-confere.html), com o cartão que não confere: a linha do pedal diz *não confere*, com o `Pisar de novo` (decisões 67 e 79) |
| `pedal-sempre-acionado` | nenhuma referência: o desfecho fica no mock, sem quadro · a linha do pedal diz *não confere*, como na T10/10 (decisões 67 e 79) |
| `pool-esgotado` | [T08/07-estado-pontos-de-cerca-demais](../02-telas/T08-configurar-modulo/referencias/html/07-estado-pontos-de-cerca-demais.html) |
| `primeiro-acesso` | [T01/15-estado-primeiro-acesso](../02-telas/T01-login/referencias/html/15-estado-primeiro-acesso.html) |
| `pronto-para-fechar` | [T11/10-estado-finalizar-com-a-secao-f-falhando](../02-telas/T11-checklist/referencias/html/10-estado-finalizar-com-a-secao-f-falhando.html) · [T11/49-estado-secao-f-falhando](../02-telas/T11-checklist/referencias/html/49-estado-secao-f-falhando.html) · [T12/09-momento-o-corte-de-alimentacao](../02-telas/T12-sessao/referencias/html/09-momento-o-corte-de-alimentacao.html) |
| `queda-na-cadeia` | [T08/02-estado-queda-na-cadeia](../02-telas/T08-configurar-modulo/referencias/html/02-estado-queda-na-cadeia.html) · [T08/03-estado-recuperacao-ate-a-conexao-gravar](../02-telas/T08-configurar-modulo/referencias/html/03-estado-recuperacao-ate-a-conexao-gravar.html) |
| `reconectando` | [T05/19-estado-reconectando](../02-telas/T05-conectar-modulo/referencias/html/19-estado-reconectando.html) |
| `reinicio-sem-volta` | [T12/10-estado-o-modulo-nao-voltou-do-reinicio](../02-telas/T12-sessao/referencias/html/10-estado-o-modulo-nao-voltou-do-reinicio.html) |
| `releitura-nao-confere` | [T09/10-estado-releitura-nao-confere](../02-telas/T09-calibracao/referencias/html/10-estado-releitura-nao-confere.html) |
| `sem-conexao-no-login` | [T01/14-estado-login-sem-conexao](../02-telas/T01-login/referencias/html/14-estado-login-sem-conexao.html) |
| `sem-conexao-no-menu` | [T04/15-estado-sem-conexao](../02-telas/T04-menu/referencias/html/15-estado-sem-conexao.html) · [T13/05-estado-sem-rede](../02-telas/T13-fila-de-saida/referencias/html/05-estado-sem-rede.html) |
| `sem-leitor` | [T10/12-estado-ativo-sem-leitor](../02-telas/T10-ciclo-dinamico/referencias/html/12-estado-ativo-sem-leitor.html) |
| `serial-nao-cadastrado` | [T06/02-estado-serial-nao-cadastrado](../02-telas/T06-diagnostico-do-modulo/referencias/html/02-estado-serial-nao-cadastrado.html) |
| `servidor-ainda-nao` | [T08/12-estado-o-modulo-ainda-nao-falou-com-o-servidor](../02-telas/T08-configurar-modulo/referencias/html/12-estado-o-modulo-ainda-nao-falou-com-o-servidor.html) |
| `sessao-interrompida` | [T12/06-estado-sessao-interrompida](../02-telas/T12-sessao/referencias/html/06-estado-sessao-interrompida.html) · [T12/11-momento-descartar-a-instalacao](../02-telas/T12-sessao/referencias/html/11-momento-descartar-a-instalacao.html) |
| `sync-falha-rede` | [T03/05-estado-falha-de-rede-sem-pacote-valido](../02-telas/T03-sincronizar/referencias/html/05-estado-falha-de-rede-sem-pacote-valido.html) |
| `sync-falha-rede-pacote-valido` | [T03/01-estado-falha-de-rede](../02-telas/T03-sincronizar/referencias/html/01-estado-falha-de-rede.html) |
| `teto-de-envios` | [T01/17-estado-teto-de-envios](../02-telas/T01-login/referencias/html/17-estado-teto-de-envios.html) · [T01/23-momento-folha-nao-recebi-no-teto](../02-telas/T01-login/referencias/html/23-momento-folha-nao-recebi-no-teto.html) |
| `uma-empresa` | nenhuma referência: é caso de teste — o app pula a T02 e o nome no menu não é botão, provado no node (`app/scripts/testar-empresa.mjs`, `testar-trocar-empresa.mjs`) |
| `usuario-lembrado` | [T01/16-estado-usuario-lembrado](../02-telas/T01-login/referencias/html/16-estado-usuario-lembrado.html) |

## Condições que não são casos próprios

A rotação e a velocidade opcional do caminhão vêm de `calibracao.porModelo`; os quadros de calibração usam a semente do caminhão. O mundo de uma empresa só é o caso `uma-empresa`, que nenhuma referência desenha; a entrada normal usa as três empresas do técnico, cada uma com o pacote dela. As referências sem chave de `casos` continuam montadas a partir dos dados que a ficha e a receita indicam.

O campo `caso` do índice é uma indicação de origem, não um mecanismo de navegação. Na T14/02 e 04 ele traz a descrição “diff-divergente, invertido”; o cenário que confere é `conferencia-confere`, e a divergência permanece na T14/00 e 03. Não confundir esses dois resultados.

Nem todo caso do mock tem tela própria. Por exemplo, o `can-fora-esperado` não produz um passo de movimento na T10; ré, porta e comparação do cartão com cadastro não fazem parte do ciclo. O técnico confere o número lido com o cartão impresso.

Para o dev, [testes-prontos.md](../08-handoff/testes-prontos.md) explica como reaproveitar os casos no aceite.
