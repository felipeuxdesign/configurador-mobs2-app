# 78 · O resultado das cercas chega num aviso do Android

**O contexto.** As cercas são gravadas pelo sistema depois da visita (decisão 69), e o resultado só aparecia em Últimas instalações (decisão 72): conferidas pelo sistema, ou não chegaram em 24 h. O técnico que já saiu do ônibus só fica sabendo se abrir a T15. A falha das cercas vira pendência na web, mas quem resolve mais rápido é quem esteve no ônibus.

**A decisão.**

- o servidor manda um aviso do Android (push) com o resultado das cercas pedidas, **um por instalação, só o resultado**: *Cercas conferidas*, quando o sistema confere, e *Cercas não chegaram*, quando passam 24 h sem elas chegarem · nada enquanto envia
- o aviso desce por cima de qualquer tela, mesmo de outra visita (T15/08 e T15/10), e fica na gaveta com o app fechado (T15/09) · o canal é de importância alta, pra descer por cima da tela
- **o toque** abre a instalação em Últimas instalações, com a linha das cercas já atualizada: a T15/06 no conferido, a T15/07 na falha
- quem desenha o aviso é o Android: o app escolhe o ícone, a cor do círculo, os textos, o canal e o toque · o círculo é lima no celular escuro, roxo no claro e vermelho na falha, e o ícone dentro dele é o ícone pequeno do app, o M na mira (folha 0) · a fonte é a do sistema, nunca a do app (lei 22)
- **a permissão** é o próprio Android que pede, uma vez, na primeira cadeia concluída no aparelho (T08/37), sem folha do app antes · recusando, nada trava: o resultado continua em Últimas instalações · no celular da empresa gerenciado pela TI, o aviso já vem permitido, e o técnico não desliga
- o aviso não muda a regra das cercas: a instalação continua aprovada com elas pendentes ou que não chegaram (decisão 72)

**O que foi descartado.** Uma folha do app explicando o aviso antes do pedido do Android: é um passo a mais na primeira instalação, e a recusa não trava nada. Um aviso a cada etapa das cercas (enviando, gravando, conferindo): o técnico só precisa do resultado.

**A consequência.** Quatro estados novos: a T08/37, o pedido do Android, e a T15/08 a 10, o aviso por cima de outra tela, na gaveta e na falha · a folha 11 do design system, *O aviso do Android*, com as medidas, os dois temas e as regras · o aviso, a gaveta e o pedido entram no cenário do sistema (lei 22), com a Roboto, a fonte do Android, em `05-recursos/fontes/` · no mock, a permissão do aparelho (`situacao.permissaoDoAviso`) e os casos `aviso-sem-resposta`, `aviso-cercas-conferidas`, `aviso-na-gaveta` e `aviso-cercas-nao-chegaram`.
