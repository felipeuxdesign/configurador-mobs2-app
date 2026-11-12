// O aviso do Android no protótipo (decisão 78): os quatro estados que o mostram — a T08/37 (o pedido da
// permissão) e a T15/08, 09 e 10 (o aviso por cima de outra tela, na gaveta e na falha). Quem desenha o
// aviso, a gaveta e o pedido é o Android: no app, são cenário do sistema (lei 22, src/ds/chrome/AvisoDoAndroid.jsx).
//
// Cada estado nasce do caso dele, pela receita (src/estado/receitas.js): o `aviso` do caso diz a cena
// ('por-cima' · 'na-gaveta'), e o `permissaoDoAviso: 'sem-resposta'`, o pedido · o resultado é o do caso de
// base (`cercas-conferidas`, `cercas-nao-chegaram`, a T15/06 e a 07), na instalação dele (a i-01, o herói) ·
// a tela de trás é a do `porCimaDe` do caso (a T09/00 do caminhão, a T11/30 do QJF-2C61), e a do pedido, a
// cadeia concluída da T08 (a 04: a ficha da T08 diz *por cima da 04*), no par do caso.
//
// A tela de trás é a do próprio app, montada como a coluna a abre: parada, num estado único só dela (o
// EstadoProvider de dentro), inerte — sem toque, sem o voltar, e fora da régua dos textos, como atrás de uma
// folha. Nada aqui recebe toque: são estados, e a regra do toque mora nas fichas.
import { EstadoProvider, semeado } from '../estado/estado.jsx'
import { RECEITAS } from '../estado/receitas.js'
import { M } from '../dados/mock.js'
import { diaDoAndroid } from '../dados/formato.js'
import { AvisoRecolhido, AvisoAberto, Gaveta, PedidoDePermissao } from '../ds/index.js'
import { telaDe } from './index.jsx'
import { TX } from './T15/textos.js'
import './aviso.css'
import { T as T08 } from './T08/textos.js'

// a cadeia concluída, por baixo do pedido (T08/37): a ficha da T08 diz que o Android pede por cima da 04
const CADEIA_CONCLUIDA = '04-momento-cadeia-concluida'

// o caso do estado, pela receita: o primeiro caso dela
const casoDo = (tela, est) => { const k = RECEITAS[`${tela}/${est}`]?.casos?.[0]; return k ? M.casos[k] : null }

// a cena do aviso deste estado, ou nada: { tipo: 'por-cima' | 'na-gaveta' | 'pedido', caso, fundo }
export function cenaDoAviso(tela, est) {
  if (!est) return null
  const caso = casoDo(tela, est)
  if (!caso) return null
  if (caso.permissaoDoAviso === 'sem-resposta') {
    return { tipo: 'pedido', caso, fundo: { tela: caso.tela, referencia: CADEIA_CONCLUIDA, ativoId: caso.ativoId, moduloSerial: caso.moduloSerial } }
  }
  if (caso.aviso === 'por-cima') return { tipo: 'por-cima', caso, fundo: caso.porCimaDe }
  if (caso.aviso === 'na-gaveta') return { tipo: 'na-gaveta', caso }
  return null
}

// o resultado das cercas do aviso: o do caso de base, na instalação dele (a placa e o módulo)
function resultado(caso) {
  const base = M.casos[caso.base]
  const inst = M.instalacoes.find((i) => i.id === base.instalacaoId)
  const ativo = M.ativos.find((a) => a.id === inst.ativoId)
  return { cercas: base.cercas, placa: ativo.placa, serial: inst.moduloSerial }
}

// a tela de trás, como a coluna a abre: o estado único dela, no par do caso, parado (o estado da tela não é
// nulo: o voltar não escuta) · a referência é um estado, um momento ou a tela (00)
function Fundo({ fundo, est }) {
  const { tela, referencia, ativoId, moduloSerial } = fundo
  const Tela = telaDe(tela)
  const momento = /^\d\d-momento-/.test(referencia) ? referencia : null
  const s = semeado(tela, { momento })
  const sessao = s.sessao ? { ...s.sessao, ativoId, moduloSerial } : s.sessao
  const inicial = { ...s, sessao, tela: { ...s.tela, estado: est } }
  // a tela recebe a referência pelo caminho com que a coluna a abre: a 00 e os momentos parados da coluna,
  // como estado; os outros momentos, pelo endereço
  return (
    <div className="aviso-atras" inert="">
      <EstadoProvider inicial={inicial}>
        <Tela momento={momento} estado={momento && !PARADOS[tela]?.includes(momento) ? null : referencia} />
      </EstadoProvider>
    </div>
  )
}
// os momentos que a tela abre parados pela coluna (o DA_COLUNA de cada uma): esses entram como estado
const PARADOS = { T08: [CADEIA_CONCLUIDA] }

export function CenaDoAviso({ cena, est }) {
  if (cena.tipo === 'pedido') {
    return (
      <>
        <Fundo fundo={cena.fundo} est={est} />
        <PedidoDePermissao pergunta={T08.pedidoDoAviso.pergunta} permitir={T08.pedidoDoAviso.permitir} naoPermitir={T08.pedidoDoAviso.naoPermitir} />
      </>
    )
  }
  const r = resultado(cena.caso)
  const falha = r.cercas.estado !== 'conforme'
  // na gaveta, o aviso das cercas conferidas, aberto, com a hora em que o sistema conferiu (a T15/09) · a falha
  // aberta na gaveta não tem referência nem texto, e nenhum caso a pede
  if (cena.tipo === 'na-gaveta') {
    return (
      <Gaveta data={diaDoAndroid(M.DIA_NOMINAL)} aviso={(
        <AvisoAberto app={TX.aviso.app(r.cercas.conferidasAs)} titulo={TX.aviso.conferidas}
          texto={TX.aviso.conferidasAberto(r.cercas.regioes, r.placa, r.serial)} acao={TX.aviso.verAInstalacao} />
      )} />
    )
  }
  return (
    <>
      <Fundo fundo={cena.fundo} est={est} />
      <AvisoRecolhido porCima hora={TX.aviso.agora}
        titulo={falha ? TX.aviso.naoChegaram : TX.aviso.conferidas}
        texto={falha ? TX.aviso.naoChegaramRecolhido(r.placa) : TX.aviso.conferidasRecolhido(r.placa, r.cercas.regioes)} />
    </>
  )
}
