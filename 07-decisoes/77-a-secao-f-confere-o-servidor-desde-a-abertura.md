# 77 · A Seção F confere o servidor desde a abertura do checklist

**O contexto.** A Seção F confere o que o servidor recebeu do módulo, a posição e o evento de teste (`01-produto/dominio.md`), e não o que o app envia: o relatório, as evidências e o checklist vão pela fila de saída, que é da T15. Esses dados chegam antes do Finalizar: a posição desde que a Conexão gravou (T09/04, *O módulo falou com o servidor · sim*) e o evento de teste durante o ciclo (T14/05, *recebido no servidor 14:30:24*). Esperando o Finalizar, o técnico só descobre que a posição ou o evento não chegou quando pode já ter saído do ônibus, e antena e chip se resolvem na hora.

**A decisão.**

- ao abrir o checklist, o app pergunta ao servidor, e a F acompanha o que chega, sem esperar o Finalizar · ele pergunta de novo ao voltar pro checklist e de tempos em tempos, enquanto falta
- **Posição**: confere quando o servidor confirma as posições · no caminho principal, já na entrada (T13/00)
- **Evento de teste**: esperando até o ciclo; confere quando a T14 recebe o evento; *não chegou ao servidor* quando o prazo estoura, como hoje (T14/02 e T13/49)
- a linha usa os estados que já existem: *esperando*, com o relógio claro do pendente do servidor (decisão 74); *confere*; e *não chegou ao servidor* · sem o *conferindo*, que é o quadrado de quando o próprio app está trabalhando e o técnico espera alguns segundos
- a segunda linha do cartão: *espera o servidor · não bloqueia*, enquanto falta; *o servidor confirmou*, quando as duas conferem, mesmo antes do Finalizar
- **sem internet no celular**, o app não consegue perguntar: as duas linhas ficam *esperando*, e a segunda linha do cartão diz *sem internet no celular* (T13/53) · assim o técnico não confunde o celular sem internet com o módulo sem sinal
- a F continua sem bloquear; o Finalizar continua sendo o envio do relatório pela fila, e a ciência quando a F falha (T13/10)
- registrada sem a F avaliada, a instalação cai em *Aguardando validação · até 24 h*, como hoje

**Como fica cada quadro da T13.**

- **antes do ciclo, no caminho normal**, a Posição confere e o Evento de teste espera: a F em 1 de 2, e a conta sobe um · a entrada e as seções abertas (00 a 06), a D sendo lida (38), as cercas conferidas (52), a B com ressalva (12), os bips (39 a 42 e 50), a C com a alimentação reprovada (16) e a C com as entradas reprovadas (23) · a entrada vai a 17 de 28
- **depois do ciclo**, as duas conferem: a F em 2 de 2, *o servidor confirmou*, e a conta sobe dois · a E resolvida (13), em 24 de 28
- **sem posição chegando ao servidor**, a F fica em 0 de 2, com a Posição esperando · a C com o GPS reprovado (21) e com o modem sem sinal (25): sem antena ou sem rede no módulo, não há posição pra conferir, e a F espera ao lado do item que explica o porquê
- **não mudam**: a F falhando (49 e 10), que já mostra a Posição conferida, e os quadros depois do Finalizar (11 e 14)
- **sem internet no celular** (53): a F em 0 de 2, as duas linhas esperando, e o cartão diz o porquê

O *Faltam* não muda em nenhum quadro, porque a F não bloqueia. A barra do checklist é sempre a conta sobre 28.

**O que esta decisão substitui.** O parágrafo da Seção F no protótipo, em `02-telas/T13-checklist/tela.md`, que diz que a F conta o que entrou na fila depois da abertura da sessão, espera o Finalizar e vai a 3 de 3. A F tem dois itens, e confere o servidor.

**Em aberto, pro produto.** A Posição não tem prazo no app: se ela não confere até o Finalizar, a instalação vai como *Aguardando validação*, e o servidor decide em até 24 h. Se o produto quiser avisar o técnico antes, a Posição precisa de um prazo, como o evento tem.
