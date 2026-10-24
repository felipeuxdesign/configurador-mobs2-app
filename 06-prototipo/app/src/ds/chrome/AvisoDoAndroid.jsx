// O aviso do Android (decisões 78 e 80, folhas 0 e 11): cenário do sistema, como a barra, a pílula e o teclado
// (lei 22). O app de verdade não desenha nenhuma destas peças: quem desenha é o Android, e o app só escolhe
// os textos, o canal e o toque · no cartão vai o ícone do app, colorido, e ao lado da hora, o ícone pequeno, de
// uma cor (decisão 80). As cores e as medidas são as do sistema, não tokens do app: moram em
// 05-recursos/sistema/aviso-do-android.css, com o claro do sistema (R-19), papel por papel, como o teclado ·
// a fonte é a Roboto, a do Android, dos arquivos de 05-recursos/fontes (nunca a Barlow).
//
// As peças, uma vez:
//   IconeDoApp       o ícone do app, colorido: o adaptável de 05-recursos/marca/icone-do-app/ (o fundo
//                    embaixo e a frente em cima), só os 72 dp do meio, no recorte do celular · o cartão do aviso
//   IconePequeno     o mesmo desenho, de uma cor, com o 3D feito de transparência: o de
//                    05-recursos/marca/icone-do-app/ic_stat_configurador.svg, com o branco na tinta do lugar
//                    (currentColor) · a barra de status, fora das telas: as folhas 0 e 11
//   AvisoRecolhido   o cartão que desce por cima de qualquer tela (T15/08 e 10)
//   AvisoAberto      o cartão aberto, na gaveta, com o texto inteiro e a ação (T15/09)
//   Gaveta           a gaveta do Android, com o app fechado: a data, os blocos rápidos, o brilho, o aviso
//                    aberto, o Gerenciar e o Limpar tudo (T15/09)
//   PedidoDePermissao o diálogo do próprio Android, por cima de tudo, inclusive da barra (T08/37)
//
// No protótipo, as quatro telas que mostram o aviso são estados, parados: nada aqui recebe toque, e a regra do
// toque (o aviso abre a instalação; o Permitir e o Não permitir respondem ao Android) mora na ficha da T15 e na
// da T08. O cenário da gaveta e a tela de trás são inertes (a régua dos textos conta só o aviso); o texto do
// aviso e o do pedido ficam de fora do inerte, como numa folha.
import { useId } from 'react'
import pequeno from '../../../../../05-recursos/marca/icone-do-app/ic_stat_configurador.svg?raw'
import fundo from '../../../../../05-recursos/marca/icone-do-app/ic_launcher_background.svg?raw'
import frente from '../../../../../05-recursos/marca/icone-do-app/ic_launcher_foreground.svg?raw'
import '../../../../../05-recursos/fontes/roboto.css'
import '../../../../../05-recursos/sistema/aviso-do-android.css'
import { BarraDoSistema } from './BarraDoSistema.jsx'
import './AvisoDoAndroid.css'

// os nomes de dentro de um SVG (os id dos degradês, do recorte, da sombra) únicos em cada cópia na página: a
// vitrine mostra vários avisos juntos, e o primeiro id repetido pintaria todos · o prefixo sai do useId, sem os
// dois-pontos: o mesmo a cada render, pela posição na árvore
const unicos = (svg, prefixo) => svg
  .replace(/\sid="([^"]+)"/g, (_, id) => ` id="${prefixo}-${id}"`)
  .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefixo}-${id})`)
const prefixoDe = (id) => 'i' + id.replace(/[^a-zA-Z0-9]/g, '')

// a abertura trocada: sem o tamanho (o tamanho é do lugar) e, no adaptável, só os 72 dp do meio dos 108,
// o que o Android mostra · nada de dentro muda
const abre = (svg, viewBox) => svg.replace(/<svg\b[^>]*>/, (a) => {
  let r = a.replace(/\s(width|height)="[^"]*"/g, '')
  if (viewBox) r = r.replace(/viewBox="[^"]*"/, `viewBox="${viewBox}"`)
  return r.replace(/viewBox="/, 'aria-hidden="true" focusable="false" viewBox="')
})
const FUNDO = abre(fundo, '18 18 72 72')
const FRENTE = abre(frente, '18 18 72 72')

// o ícone do app no recorte redondo do celular, as duas camadas uma por cima da outra: 40 no recolhido e 28 no
// aberto · o mesmo no escuro, no claro e na falha
export function IconeDoApp({ aberto = false }) {
  const p = prefixoDe(useId())
  return (
    <span className={`sis-icone-do-app ${aberto ? 'sis-icone-do-app-aberto' : ''}`} aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: unicos(FUNDO, p) + unicos(FRENTE, p) }} />
  )
}

// o branco do ícone pequeno na tinta do lugar: só o branco do fill, do stroke e do stop-color (o F seis vezes) ·
// as opacidades, os url(#…) e o recorte ficam como estão, e é a transparência que guarda o 3D
const PEQUENO = abre(pequeno).replace(/(fill|stroke|stop-color)="#F{6}"/gi, '$1="currentColor"')
// `reforco`: a tela sempre ligada, em que o Android multiplica a opacidade por 1,67 (a folha 11)
const PEQUENO_REFORCADO = PEQUENO
  .replace(/(<svg\b[^>]*>)/, '$1<defs><filter id="t3r"><feComponentTransfer><feFuncA type="linear" slope="1.67"/></feComponentTransfer></filter></defs><g filter="url(#t3r)">')
  .replace(/<\/svg>\s*$/, '</g></svg>')

export function IconePequeno({ className = '', reforco = false }) {
  const p = prefixoDe(useId())
  return <span className={`sis-icone ${className}`} dangerouslySetInnerHTML={{ __html: unicos(reforco ? PEQUENO_REFORCADO : PEQUENO, p) }} />
}

// a seta de abrir (recolhido) ou de fechar (aberto), na pílula do Android · o chevron do Material
function Seta({ abre = true }) {
  return (
    <span className="sis-seta" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d={abre ? 'M6 9l6 6 6-6' : 'M6 15l6-6 6 6'} />
      </svg>
    </span>
  )
}

// recolhido: o ícone do app de 40, o título 15/20 em 500 com a hora em seguida, numa linha, o texto 14/20 numa
// linha com reticências, e a seta de abrir · `porCima`: na tela, a 8 das bordas e a 36 do topo, com a sombra ·
// o ícone é o mesmo no escuro, no claro e na falha: quem diz que falhou é o título
export function AvisoRecolhido({ titulo, hora, texto, porCima = false }) {
  return (
    <div className={`sis-aviso sis-aviso-recolhido ${porCima ? 'sis-aviso-por-cima' : ''}`} data-sistema="aviso-do-android">
      <IconeDoApp />
      <span className="sis-aviso-linhas">
        <span className="sis-aviso-titulo"><span className="sis-aviso-titulo-nome">{titulo}</span><span className="sis-aviso-hora"> {hora}</span></span>
        <span className="sis-aviso-texto">{texto}</span>
      </span>
      <Seta />
    </div>
  )
}

// aberto, na gaveta: o ícone do app de 28, o nome do app e a hora em 12/16 e a seta de fechar · o título 16/22 em
// 500 e o texto inteiro, a 38 da esquerda · a ação, sem fundo, a 26
export function AvisoAberto({ app, titulo, texto, acao }) {
  return (
    <div className="sis-aviso sis-aviso-aberto" data-sistema="aviso-do-android">
      <div className="sis-aviso-cabeca">
        <IconeDoApp aberto />
        <span className="sis-aviso-app">{app}</span>
        <Seta abre={false} />
      </div>
      <div className="sis-aviso-corpo">
        <span className="sis-aviso-titulo-aberto">{titulo}</span>
        <span className="sis-aviso-texto-aberto">{texto}</span>
      </div>
      <div className="sis-aviso-acoes"><span className="sis-aviso-acao">{acao}</span></div>
    </div>
  )
}

// os blocos rápidos da gaveta: o desenho de cada um, como o Android desenha (Material Symbols, em traço)
const BLOCOS = {
  internet: <><path d="M2.5 8.8a14 14 0 0119 0M5.6 12.2a9.5 9.5 0 0112.8 0M8.8 15.5a5 5 0 016.4 0" /><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" /></>,
  bluetooth: <path d="M7 7l10 10-5 4V3l5 4L7 17" />,
  naoPerturbe: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></>,
  lanterna: <><path d="M7 3h10v4l-3 4v10h-4V11L7 7z" /><path d="M12 13v2" /></>,
}
const BRILHO = <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
function Bloco({ desenho: d, nome, estado, ligado }) {
  return (
    <span className={`sis-bloco ${ligado ? 'sis-bloco-ligado' : ''}`}>
      <svg className="sis-bloco-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
      <span className="sis-bloco-textos">
        <span className="sis-bloco-nome">{nome}</span>
        {estado && <span className="sis-bloco-estado">{estado}</span>}
      </span>
    </span>
  )
}

// a gaveta, com o app fechado: a barra do sistema sobre o fundo da gaveta, e o cenário inerte em volta do aviso
// aberto · `data`: o dia, como o Android escreve (qui., 12 de mar.) · `aviso`: o AvisoAberto
export function Gaveta({ data, aviso }) {
  return (
    <div className="sis-gaveta" data-sistema="gaveta-do-android">
      <BarraDoSistema fundo="sistema" />
      <div className="sis-gaveta-miolo">
        <div className="sis-gaveta-cenario" inert="">
          <span className="sis-gaveta-data">{data}</span>
          <div className="sis-gaveta-blocos">
            <Bloco desenho={BLOCOS.internet} nome="Internet" estado="Wi-Fi" ligado />
            <Bloco desenho={BLOCOS.bluetooth} nome="Bluetooth" estado="Ativado" ligado />
            <Bloco desenho={BLOCOS.naoPerturbe} nome="Não perturbe" />
            <Bloco desenho={BLOCOS.lanterna} nome="Lanterna" />
          </div>
          <div className="sis-gaveta-brilho"><span className="sis-gaveta-brilho-cheio">
            <svg className="sis-gaveta-brilho-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">{BRILHO}</svg>
          </span></div>
          <div className="sis-gaveta-folga" />
        </div>
        {aviso}
        <div className="sis-gaveta-botoes" inert="">
          <span className="sis-gaveta-botao">Gerenciar</span>
          <span className="sis-gaveta-botao">Limpar tudo</span>
        </div>
      </div>
    </div>
  )
}

// o pedido de permissão do Android: o véu do sistema sobre a tela inteira, inclusive a barra e a pílula, o
// diálogo de 312, o sino, a pergunta com o nome do app em 500, e os dois botões · `pergunta`: [antes, app, depois]
export function PedidoDePermissao({ pergunta: [antes, app, depois], permitir, naoPermitir }) {
  return (
    <div className="sis-pedido" data-sistema="permissao-do-android">
      <div className="sis-pedido-dialogo" role="dialog" aria-label={`${antes} ${app} ${depois}`}>
        <svg className="sis-pedido-sino" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
        <span className="sis-pedido-pergunta">{antes} <b>{app}</b> {depois}</span>
        <div className="sis-pedido-botoes">
          <span className="sis-pedido-botao">{permitir}</span>
          <span className="sis-pedido-botao">{naoPermitir}</span>
        </div>
      </div>
    </div>
  )
}
