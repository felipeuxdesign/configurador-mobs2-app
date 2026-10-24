# 66 · A temperatura vem dos sensores, e o consumo tem a numeração do hodômetro

**O contexto.** No Diagnóstico do módulo, a CAN mostrava a temperatura do motor e o combustível em porcentagem, que hoje não existe. O produto mostrou no sistema que o consumo usa os mesmos caracteres do hodômetro.

**A decisão.**

- a temperatura do motor dá lugar a duas linhas, *Temperatura · sensor 1* e *Temperatura · sensor 2*, sem título de grupo, só nos ativos com sensor, com a faixa esperada vinda do cadastro (T07/01, 08, 09 e 10)
- o *Combustível* sai
- o *Consumo total* tem a numeração do hodômetro: seis dígitos com o ponto dos milhares (*219.235 L*) · a unidade em litros é premissa, a confirmar com o produto
- a contagem continua em 14: entram duas temperaturas no lugar de uma, e sai o combustível

**O que foi descartado.**

- tirar o *L*: sem unidade, o número não diz o que é
- um título de grupo pros sensores
