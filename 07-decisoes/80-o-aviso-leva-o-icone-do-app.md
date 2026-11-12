# 80 · O aviso leva o ícone do app, e o de uma cor é o mesmo desenho

**O contexto.** A decisão 78 pôs no cartão do aviso o ícone pequeno, o M na mira, num círculo da cor do app: lima no escuro, roxo no claro e vermelho na falha. Mas no Android 17, no Samsung e no iPhone, o cartão do aviso mostra o ícone do próprio app, colorido, e o ícone pequeno só aparece na barra de status, ao lado da hora. E o M na mira era um desenho à parte, mais simples, feito pra caber em 24 px.

**A decisão.**

- o cartão do aviso mostra **o ícone do app**, o M escaneado, colorido, no recorte do celular: 40 recolhido, 28 aberto (T15/08 a 10) · o mesmo ícone no celular escuro, no claro e na falha: quem diz que falhou é o título · sai o círculo lima, roxo ou vermelho
- **o ícone de uma cor é o mesmo desenho do ícone do app, com o 3D feito de transparência**: cada faceta numa opacidade, o vidro, a linha de luz e o brilho em volta · o Android guarda só a transparência e pinta com a cor do lugar · vai nos ícones temáticos (a camada de uma cor) e na barra de status (o ícone pequeno), e o M na mira sai
- **na barra de status**, o Android desenha o ícone pequeno com uns 15 dp, ao lado da hora, na cor da barra: branco no escuro, preto a 60% no claro, e mais opaco na tela sempre ligada · o ícone pequeno vai também em PNG, nas cinco densidades, que vale igual em qualquer versão do Android
- nos Androids até o 16, fora o Samsung, o cartão ainda mostra o ícone pequeno num círculo da cor do app: a do logo

**O que foi descartado.** Manter o M na mira: era outro desenho, e o temático e a barra de status mostravam um ícone que não era o do app. Um ícone de uma cor chapado, só com os cortes: a transparência guarda o 3D, e o Android a respeita. A linha de luz vazada no M, que no tema claro ficava clara: com o brilho, o de uma cor é o mesmo desenho do ícone, e no tema claro a luz fica escura.

**A consequência.** A T15/08 a 10 refeitas, com o ícone do app no cartão · a folha 0, com o temático e o ícone pequeno em 3D de uma cor, e a folha 11, com o ícone do app no cartão e o ícone pequeno na barra de status, na barra escura, na clara e na tela sempre ligada · em `05-recursos/marca/icone-do-app/`, a camada de uma cor e o ícone pequeno novos, o ícone pequeno também em PNG, e a sombra do M, que era cortada no topo, inteira.

**Em aberto, pro produto.** A barra de status do Samsung tem código fechado: guardar a transparência está garantido no Android padrão, e no Samsung o pior caso é o ícone sair branco cheio, que continua certo. Confere-se num Samsung quando o app existir.
