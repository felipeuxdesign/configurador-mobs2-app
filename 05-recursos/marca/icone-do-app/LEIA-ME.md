# O ícone do app

Os arquivos do ícone, todos do mesmo desenho, o da folha 0 do design system: **o M escaneado** (o M facetado dentro da mira, com a linha de luz), colorido no ícone do celular, nas lojas e no cartão do aviso, e **de uma cor**, com o 3D feito de transparência, na camada dos ícones temáticos e no ícone pequeno da barra de status (decisão 80). Nada aqui se redesenha: um arquivo novo sai destes.

| Arquivo | O que é | Onde entra |
|---|---|---|
| `icone-do-app.svg` | o desenho principal, o quadrado inteiro, sem canto | a fonte dos outros · quem mostra põe a máscara |
| `ic_launcher_background.svg` | a camada do fundo do ícone adaptável, 108 dp: o degradê roxo | Android, `mipmap-anydpi-v26/ic_launcher.xml`, o `background` |
| `ic_launcher_foreground.svg` | a camada da frente, 108 dp: o M, a mira e a luz, dentro do círculo de 66 dp (a zona segura) | Android, o `foreground` |
| `ic_launcher_monochrome.svg` | a camada de uma cor, 108 dp: o mesmo desenho, no mesmo lugar da frente, branco, com o 3D feito de transparência | Android 13 em diante, o `monochrome` (os ícones temáticos) |
| `ic_stat_configurador.svg` | o ícone pequeno, 24 dp: o mesmo desenho, branco, com o 3D feito de transparência e a mira nos 22 dp do meio | a fonte dos PNGs abaixo |
| `drawable-mdpi/` a `drawable-xxxhdpi/`, `ic_stat_configurador.png` | o ícone pequeno em PNG, branco com transparência: 24, 36, 48, 72 e 96 px | a barra de status (`setSmallIcon`), cada um na pasta de mesmo nome do `res/` · vale igual em qualquer versão do Android |
| `google-play-512.png` | 512 × 512, PNG de 32 bits, quadrado e sem canto | a Google Play: a loja arredonda e põe a sombra |
| `app-store-1024.png` | 1024 × 1024, PNG sem transparência, quadrado e sem canto | a App Store: a Apple recorta o canto |

- **os SVGs do Android** viram vector drawable no Android Studio (*New > Vector Asset*, ou *Image Asset* pro adaptável) · a frente tem uma sombra macia embaixo do M (um filtro do SVG), que o vector drawable não guarda: confira o ícone gerado e, se a sombra fizer falta, gere a frente em PNG por densidade a partir deste SVG
- **o de uma cor** (a camada dos temáticos e o ícone pequeno) é só branco: o 3D vem da transparência de cada parte, as facetas em opacidades diferentes, o vidro e a luz em degradês de transparência. O Android guarda só a transparência e pinta com a cor do lugar: a do tema, nos temáticos, e a da barra, no ícone pequeno (branco no escuro, preto a 60% no claro). No tema claro, a luz fica escura: é o mesmo desenho, pintado de uma cor · os degradês do vector drawable pedem o Android 7 em diante: no ícone pequeno, use os PNGs
- **na barra de status**, o Android desenha o ícone pequeno com uns 15 dp, ao lado da hora, e na tela sempre ligada deixa as partes transparentes mais opacas: o 3D fica mais sutil, quase cheio · no Android padrão, guardar a transparência está no código do sistema; no Samsung, que é fechado, o pior caso é o ícone sair branco cheio, que continua certo · confira num Samsung, na barra escura, na clara e na tela sempre ligada
- **o cartão do aviso**: no Android 17, no Samsung e no iPhone, o cartão mostra o ícone do app, colorido (o adaptável, o fundo e a frente), e o app não escolhe · nos Androids até o 16, fora o Samsung, o cartão mostra o ícone pequeno num círculo da cor do app (`setColor`): use a do logo, o `--logo`
- os PNGs saem do SVG de onde vêm, no tamanho certo, sem redimensionar outro PNG
