# Registro de mudanças

As versões do protótipo navegável e do design que ele implementa. As regras de cada tela estão nas fichas de [02-telas](02-telas/), e o porquê de cada escolha, em [07-decisoes](07-decisoes/). Quando o protótipo não segue uma referência, a diferença e o motivo estão na ficha da tela, nas notas *no protótipo*.

## 1.13 · 05/11/2026 · o aviso com o ícone do app

- **O aviso leva o ícone do app, colorido:** como no Android 17, no Samsung e no iPhone, o cartão do aviso mostra o M escaneado no recorte do celular, o mesmo no escuro, no claro e na falha: quem diz que falhou é o título. Sai o círculo lima, roxo ou vermelho com o M na mira (decisão 80). A T15/08 a 10 refeitas.
- **O ícone de uma cor é o mesmo desenho, com o 3D feito de transparência:** cada faceta numa opacidade, o vidro, a linha de luz e o brilho em volta. O Android guarda só a transparência e pinta com a cor do lugar. Vai nos ícones temáticos e na barra de status, ao lado da hora, e o M na mira sai. O ícone pequeno vai também em PNG, nas cinco densidades.
- **A sombra do M sai inteira:** no ícone do app, a sombra embaixo do M era cortada no topo.
- **As folhas 0 e 11 refeitas:** a 0, com o temático e o ícone pequeno em 3D de uma cor; a 11, com o ícone do app no cartão e o ícone pequeno na barra de status, na barra escura, na clara e na tela sempre ligada.
- **No protótipo:** o cartão do aviso monta o ícone adaptável do app, o fundo e a frente, no recorte redondo, de 40 no recolhido e de 28 no aberto, com os nomes de dentro do desenho únicos em cada cópia. O ícone pequeno vira a tinta do lugar só no branco, e a transparência guarda o 3D. Na vitrine, as folhas 0 e 11 refeitas, com um espécime novo, o ícone na barra de status. A aba do navegador ganha o ícone do app.

## 1.12 · 05/11/2026 · o aviso das cercas e o pedal acelerador

- **O resultado das cercas chega num aviso do Android:** quando o sistema confere as cercas pedidas, ou quando elas não chegam em 24 h, o técnico recebe um aviso, um por instalação, por cima de qualquer tela ou na gaveta, com o app fechado. O toque abre a instalação em Últimas instalações, com a linha das cercas já atualizada. Na primeira configuração no aparelho, o próprio Android pede a permissão, uma vez; recusando, nada trava (decisão 78). São 4 estados novos, na coluna do palco: o pedido do Android (T08/37) e o aviso por cima de outra tela, na gaveta e na falha (T15/08 a 10).
- **O pedal do ciclo é o acelerador, e cada passo que não confere se refaz na linha dele:** o cartão com `Passar de novo`, o pedal com `Pisar de novo`. A linha diz só *não confere*, e a justificativa continua no checklist (decisão 79).
- **O ícone do app:** o M escaneado no celular e nas lojas, e o M na mira, de uma cor só, no aviso e na barra de status. Os arquivos, todos do mesmo desenho, estão em `05-recursos/marca/icone-do-app/`.
- **O design system ganha duas folhas:** a 0, o logo e o ícone do app, e a 11, o aviso do Android, que é cenário do sistema, na Roboto. As referências passam a 234: 19 refeitas e 4 novas.
- **No protótipo, o aviso é cenário do sistema, como a barra e o teclado:** o aviso recolhido, o aberto, a gaveta e o pedido são peças uma vez só, na Roboto empacotada, com as cores e as medidas do Android nos dois temas, num arquivo só ao lado dos desenhos do sistema (`05-recursos/sistema/aviso-do-android.css`). A tela de trás é a do próprio app, parada e inerte: a calibração do caminhão na T15/08, a alimentação relida na T15/10 e a cadeia concluída na T08/37.
- **O `Pisar de novo` anda como o `Passar de novo`:** o *não confere* e o botão esmaecem, a linha volta ao *pise e solte*, e o app confere de novo 3 s depois. O pedal que não conferiu vai pro checklist como não conforme, com o campo do que aconteceu, como o cartão.
- **Também:** a Conferir configuração desenha o *Solicitar as cercas* também em Outras ações (T14/03), e as folhas 3 e 4 trazem o relógio da decisão 74, como o jogo de ícones.

## 1.11 · 04/11/2026 · as telas na ordem do caminho

- **As telas agora são numeradas na ordem do caminho**, de T01 a T15, sem pular número. Da T01 à T05 nada muda; as outras trocam de código, e cada referência mantém o número de dentro: a T09/04 de antes, a cadeia concluída, agora é a T08/04. As telas, os estados, os textos e o comportamento são os mesmos; mudam só os códigos, nas pastas, nas fichas, no índice, no mock, no código, nos testes e nos links de cada estado.

| Antes | Tela | Agora |
|---|---|---|
| T07 | Diagnóstico do módulo | T06 |
| T06 | Selecionar ativo | T07 |
| T09 | Configurar módulo | T08 |
| T10 | Calibração | T09 |
| T14 | Ciclo de testes | T10 |
| T13 | Checklist | T11 |
| T16 | Sessão | T12 |
| T15 | Fila de saída | T13 |
| T11 | Conferir configuração | T14 |
| T12 | Últimas instalações | T15 |

- As versões abaixo usam a numeração de antes.

## 1.10.1 · 27/10/2026 · as cercas sem tropeço

- **A cadeia não tropeça mais nas cercas:** na configuração, as cercas apareciam um instante como se gravassem, com uma barra que começava a andar e um texto que não era o delas, antes de virar *solicitadas*. Agora elas viram *solicitadas* no mesmo instante em que o Ativo confere, sem barra, como a decisão 69 manda: o relógio e *o sistema envia e confere depois* entram junto com o check do Ativo, os dois trilhos acendem juntos, e o Leitor começa a gravar na hora.

## 1.10 · 27/10/2026 · a Seção F desde a abertura

- **A Seção F acompanha o servidor desde a abertura do checklist:** o app pergunta ao servidor ao abrir o checklist, e a F mostra o que já chegou, sem esperar o `Finalizar instalação`. A Posição confere já na entrada, e o Evento de teste, quando o ciclo o recebe; com as duas, o cartão diz *o servidor confirmou*, antes do registro. A F continua sem bloquear, e a conta do checklist sobe com ela: a entrada vai a 17 de 28 (decisão 77).
- **Sem posição chegando, a F espera ao lado da causa:** com o GPS sem posição ou o modem sem sinal na Seção C, a Posição fica esperando, e o item vermelho diz o porquê.
- **Sem internet no celular, o cartão diz por quê:** as duas linhas esperam, e a segunda linha do cartão diz *sem internet no celular*, pro técnico não confundir o celular sem internet com o módulo sem sinal. É um estado novo, na coluna do palco, e as referências passam a 230: 20 substituídas e 1 nova.
- **Também:** a barra do checklist acompanha o número em todos os quadros desenhados; a Seção F aberta abre sem rolar a lista, e a linha que espera diz *esperando* na cor do texto, como as referências desenham.

## 1.9 · 27/10/2026 · as cercas pelo sistema e o pedal no ciclo

- **As cercas são pedidas, e o sistema grava:** na configuração, o passo *Cercas* só solicita e termina na hora, com o relógio e *solicitadas*; o topo conta 5 passos conferidos no módulo. O módulo não recusa mais as cercas, e o bloco recusado de exemplo passa a ser o leitor (decisão 69).
- **O verde só quando o sistema confere:** no checklist, as cercas pedidas ficam com o relógio e *o sistema confere depois*, sem contar como feitas e sem segurar o `Finalizar instalação`. Quando o sistema confere com o técnico ainda na sessão, a linha fica verde, *conferidas pelo sistema às 14:52* (decisão 70).
- **A manutenção das cercas é um pedido:** escolhida a cerca, a folha pergunta *Solicitar as cercas de novo?*, e o resultado diz que o sistema regrava o leitor e os eventos depois delas. No Conferir configuração, a cerca divergente ganha *Solicitar as cercas*. Saem os quadros que só existiam pra dependência das cercas (decisão 71).
- **Últimas instalações mostra as cercas:** pendente, conforme ou não chegaram em 24 h, com a pendência na web. A instalação continua aprovada (decisão 72).
- **O pedal de freio no ciclo de testes:** entre o cartão e a ignição desligada, o app confere sozinho o pedal acionado e depois solto. O ciclo vai a até 5 passos, e o checklist, a 28 itens (decisão 67).
- **O Encerrar diz o que falta:** com passo faltando, o botão vira *Encerrar com N passos faltando* e pergunta antes de encerrar (decisão 68).
- **O diagnóstico lê a temperatura dos sensores 1 e 2**, e o consumo vem com a numeração do hodômetro; o combustível sai (decisão 66).
- **O reset de leitura sai da v1:** o autoteste do encerramento fica com 6 verificações, *5 aprovadas · 1 pendente* (decisão 65).
- **Também:** o ativo de uma empresa que o técnico não atende não mostra o nome do cliente (decisão 73); o pendente tem um relógio só (decisão 74); e as janelas da home seguem o padrão do design system (decisão 75).
- **Todo quadro novo ou mudado se alcança pelo palco:** os momentos que só se veem no meio de um processo entram na coluna, parados, na ordem do caminho (decisão 76). As referências passam a 229: 68 substituídas, 7 novas e 8 que saíram.

## 1.8 · 26/10/2026 · o fim e as esperas na coluna

- **A instalação homologada na coluna:** a coluna da T16 começa pela *Instalação homologada*, logo antes da *Homologação bloqueada*. Quem chega à Sessão pelo painel vê os dois fins do autoteste sem esperar o encerramento, e o link do momento continua abrindo o fim vivo.
- **As esperas do botão na coluna:** cada tela que tem um quadro de carregando o mostra no fim da coluna, parado, com o botão como ele fica enquanto espera: o *Entrando* (T01), o *Baixando o pacote* (T03), o *Procurando* e o *Conectando* (T05), o *Lendo o módulo* e o *Relendo a CAN* (T07), a *Seção D sendo lida* e o *bip tocando* (T13), a *Fila drenando* (T14), e o *Encerrando* e o *Autoteste correndo* (T16). São onze linhas em sete telas, e cada uma sai igual à fotografia da referência. As esperas que já estavam na coluna ficam onde estão, e a coluna da T13 passa a rolar, como a da T09.

## 1.7 · 23/10/2026 · toda espera tem fim

- **O caminho segue sem voltar ao menu:** a configuração concluída leva à CAN lida, e a CAN lida, à calibração.
- **Toda espera tem fim:** o pareamento, a reconexão, a atualização do firmware, a queda da cadeia e o reinício têm um desfecho que diz o que aconteceu e o que fazer (decisão 64).
- **A resposta se refaz:** o bip, o cartão e o número semeado se corrigem na hora, e o bip não ouvido só conta com o que aconteceu escrito.
- **O que se perde pergunta antes:** sair da conta, descartar a sessão interrompida e voltar com a ressalva escrita perguntam, e dizem o que fica. Um toque não vale por dois.
- **O mesmo fato se diz igual:** a fila do aparelho conta o mesmo em toda tela, e o pacote diz a idade e se venceu.
- **O protótipo publicado ganha de volta o movimento que só faltava nele:** a saída das folhas e dos diálogos, a troca de tema e o indicador de rolagem. O build de produção escreve os tempos dos tokens em segundos (o 150ms vira .15s), e três peças liam o número como milissegundos; agora leem a unidade, e os roteiros rodam também contra o build de produção.
- **O handoff de design** (`08-handoff/`) fica completo pra qualquer stack: as regras que valem em todas as telas e como levar o design system pra outra plataforma.
- **O repositório** fica mais enxuto: o guia de leitura de cada perfil (`GUIA-DE-LEITURA.md`) substitui o antigo *leia primeiro*, que repetia o README; os dados ganham um README próprio; e saem as ferramentas de bancada que ninguém usava mais.

## 1.6 · 22/10/2026 · a foto que vale no Usar foto

- **A foto vale no `Usar foto`:** o `Tirar foto` mostra a foto no quadro da câmera, com a hora e o que conferir, e o item só conta no `Usar foto`. O `Tirar de novo` descarta a foto e volta à câmera, e a foto do problema segue a mesma regra (decisão 63).
- **As fotos de exemplo:** o protótipo, que não tem câmera, mostra uma foto desenhada de cada item da Montagem e do problema, e a do painel diz o que o painel do ativo mostra.
- **O design system em nove folhas:** as peças da folha da manutenção e do rodapé moram nas folhas da família delas, e a folha 9 é o tema escuro e claro. Entraram o botão da linha, a câmera com a foto e as variantes que o protótipo já usava.
- **As imagens do README** no desenho novo: o canto, o contorno e a sombra.

## 1.5 · 22/10/2026 · o equipamento de verdade

- **O contexto é a empresa:** o pacote é o da empresa inteira, e a unidade saiu do app. Com uma empresa só, o app pula a escolha, e o `Trocar de empresa` mora no topo do menu (decisão 56).
- **A configuração etapa por etapa:** cada etapa mostra a barra, o que já foi e o que falta, relê no lugar e diz o que gravou. A concluída diz o resultado numa faixa (decisão 57).
- **A limpeza completa** na instalação nova: zera o módulo, e a rede volta no último passo. Com mensagens por enviar, o app pergunta antes (decisão 58).
- **O módulo de verdade:** só módulos com Bluetooth na busca, o firmware 8.04, a faixa de 9 a 40 V, a CAN da biblioteca do modelo, o leitor pelos fios, a operadora e a APN do chip, e a capacidade que conta também eventos, filtros, regiões e cartões (decisão 59).
- **O GPS pela posição:** o checklist aprova o GPS pela posição, e a foto diz o que enquadrar embaixo do título (decisão 60).
- **As telas cabem sem rolar** (decisão 61), e **o teclado do aparelho** aparece na tela do código (decisão 62).

## 1.4 · 17/10/2026 · os ícones próprios e os fluxos alternativos

- **Ícones:** o app usa só o jogo de 48 SVGs do design system, as setas das linhas inclusive. A biblioteca de ícones de fora saiu (decisão 55).
- **Tema claro mais leve:** as superfícies rebaixadas grandes ganham um token próprio, `--fundo-rebaixado`, leve no claro. O cinza do poço fica só nos quadradinhos (decisão 55).
- **Fluxos alternativos:** cada escolha do técnico segue o mock, e os desvios (outra empresa, o pacote vencido, a busca sem resultado) acontecem no caminho, cada um com a sua saída.
- **Palco:** o *Voltar ao fluxo* devolve o percurso guardado depois de consultar qualquer estado. A coluna mostra cinco momentos que são difíceis de alcançar ao vivo.
- **Fichas:** a contagem de momentos e estados de cada ficha bate com as referências, e a checagem de cobertura confere isso.
- **Menu:** o cartão que espera o módulo tem o mesmo respiro do cartão ligado.

## 1.3 · 13/10/2026 · o tema claro

- **Modo claro**, neutro frio, como escolha do técnico na folha da Conta. Ele é gerado dos tokens, e o escuro continua sendo o padrão.
- O logo passa a vir de um token (`--logo`). O palco ganha a linha *Modo claro*, que troca só o celular.
- O véu das folhas e dos diálogos segue o Material 3, cobrindo inclusive a barra do sistema.
- O estado vazio usa o contorno tracejado nos dois temas.

## 1.2 · 11/10/2026 · a segunda revisão de produto

- **Calibração sem foto:** o ônibus não calibra nada. O caminhão coletor calibra o hodômetro e a rotação, e a velocidade e o horímetro são opcionais (decisão 52).
- **Conferência por conteúdo:** a T11 compara cinco linhas de negócio, e o *Corrigir* reenvia um bloco por vez (decisão 53).
- **Ciclo de testes com o ônibus parado:** até quatro passos (ignição ligada, rotação, cartão e ignição desligada). O técnico confere o cartão lido com o número impresso (decisão 54).
- **A APN aparece** na tela, como a única informação técnica que o técnico confere (decisão 51).
- **Manutenção:** reenviar um bloco avisa quais blocos dependem dele, e o técnico decide se reenvia agora ou deixa para depois.

## 1.1 · 05/10/2026 · a primeira revisão de produto

- **Diagnóstico do módulo (T07)** entra no caminho, antes do vínculo, no lugar da pré-checagem. Ele mostra o serial, o firmware, a alimentação, o GPS, as entradas, o modem e o SIM, e embaixo a CAN do modelo (decisão 44).
- **Vínculo sem chassi:** o ônibus é confirmado pela placa, pela frota, pelo fabricante e pelo modelo (decisão 46).
- **O que vai ser gravado:** antes do envio, a T09 mostra os blocos, a limpeza (o que ela apaga e o que preserva) e as duas pré-condições, os pinos e o espaço. A cadeia mostra o conteúdo de cada bloco, não códigos de versão (decisões 47 e 49).
- **O pacote sincronizado não leva os cartões** (decisão 45).
- **Menu sem rede** (decisão 48) e **cercas contadas por região** (decisão 50).
- **Handoff de design** (`08-handoff/`): por onde começar cada tarefa e os testes prontos.

## 1.0 · 27/09/2026 · o protótipo completo

- As telas do login ao encerramento, navegáveis por toque, com todos os estados montados a partir dos dados de exemplo.
- O design system construído no projeto: tokens, primitivos e peças, sem biblioteca de componentes de fora.
- O palco: o painel com as telas, a coluna de estados e um endereço próprio para cada tela, momento e estado.
- Movimento em todas as telas, dentro das leis, com suporte a reduzir movimento.
- Cada referência fotografada e comparada pixel a pixel. Toda diferença que sobrou tem um nome e um motivo.
- Publicado na Vercel.

## 0.1 · 24/09/2026 · a fundação

- O projeto Vite com React, os tokens, a fonte, os ícones, a ponte com o mock e o estado único.
- A ferramenta de print em 720 × 1600 e a bancada de comparação com as referências.
- As primeiras telas: login, empresa e unidade, sincronização e menu.
