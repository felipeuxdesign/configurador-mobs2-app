# 65 · O reset de leitura sai da v1

**O contexto.** O reset de leitura estava nos requisitos como ferramenta da home, mas nunca entrou no app: a home tem 9 ferramentas, e nenhuma é ele. No autoteste da sessão, a linha dele dizia sempre *não foi usado*.

**A decisão.**

- o reset de leitura sai da v1: a home continua com 9 ferramentas, e os requisitos passam de 10 pra 9
- o autoteste fica com 6 verificações: sai a linha *Reset de leitura* da sessão (T16/02, 05 e 07) e do detalhe da instalação (T12)
- o resumo perde o *não se aplica*: *5 aprovadas · 1 pendente*

**O que foi descartado.**

- manter a linha como *não se aplica*: ela diria isso sempre
