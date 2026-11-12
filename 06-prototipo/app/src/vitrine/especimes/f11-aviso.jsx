// Folhas 0 e 11 · o ícone pequeno e o aviso do Android (decisões 78 e 80): cenário do sistema, como a barra e o
// teclado (lei 22), nas peças de src/ds/chrome/AvisoDoAndroid.jsx. A moldura é a das folhas, com as larguras
// delas: 380 na folha 11 e 520 no ícone da folha 0 · os avisos no fundo do sistema (o da gaveta, nos dois
// temas), com o ícone do app no cartão; o ícone pequeno na barra de status, no fundo da página · os textos e o
// número são os da T15/08 a 10, do mock, como na tela.
import { AvisoRecolhido, AvisoAberto, IconePequeno } from '../../ds/index.js'
import { M } from '../../dados/mock.js'
import { TX } from '../../telas/T15/textos.js'

// o resultado das cercas da folha: o da i-01, a instalação de hoje do herói (o caso cercas-conferidas)
const CONFERIDAS = M.casos['cercas-conferidas']
const inst = M.instalacoes.find((i) => i.id === CONFERIDAS.instalacaoId)
const placa = M.ativos.find((a) => a.id === inst.ativoId).placa
const { regioes, conferidasAs } = CONFERIDAS.cercas

const recolhido = (falha) => (
  <AvisoRecolhido hora={TX.aviso.agora}
    titulo={falha ? TX.aviso.naoChegaram : TX.aviso.conferidas}
    texto={falha ? TX.aviso.naoChegaramRecolhido(placa) : TX.aviso.conferidasRecolhido(placa, regioes)} />
)
const Sistema = ({ claro, children }) => (
  <div className={`vitrine-sistema ${claro ? 'vitrine-sistema-claro' : ''}`} data-tema={claro ? 'claro' : undefined}>{children}</div>
)
// as cinco densidades do ícone pequeno: 24, 36, 48, 72 e 96 (a folha 0)
const DENSIDADES = [24, 36, 48, 72, 96]
// a barra de status da folha 11: a hora que a folha desenha (o cenário, não o relógio do produto) e as três
// barras, cada uma com o ícone de 15 ao lado da hora e o de 60, de perto
const HORA_DA_FOLHA = '9:41'
const BARRAS = [
  { id: 'escura', nome: 'barra escura' },
  { id: 'clara', nome: 'barra clara' },
  { id: 'sempre-ligada', nome: 'tela sempre ligada', reforco: true },
]

export const especimes = [
  { id: 'f11-aviso-recolhido-escuro', folha: 11, chrome: true, largura: 'sistema', rotulo: 'recolhido · celular escuro',
    legenda: 'o ícone do app, colorido, no recorte do celular · desce por cima de qualquer tela e fica na gaveta (T15-08)',
    render: () => <Sistema>{recolhido(false)}</Sistema> },
  { id: 'f11-aviso-recolhido-claro', folha: 11, chrome: true, largura: 'sistema', rotulo: 'recolhido · celular claro',
    legenda: 'o mesmo ícone: ele não muda com o tema do celular, só o cartão muda',
    render: () => <Sistema claro>{recolhido(false)}</Sistema> },
  { id: 'f11-aviso-falha', folha: 11, chrome: true, largura: 'sistema', rotulo: 'a falha',
    legenda: 'o mesmo ícone, e o título diz que falhou (T15-10) · o toque abre a instalação com as cercas que não chegaram (T15-07)',
    render: () => <Sistema>{recolhido(true)}</Sistema> },
  { id: 'f11-aviso-aberto', folha: 11, chrome: true, largura: 'sistema', rotulo: 'aberto, na gaveta',
    legenda: 'o texto inteiro e a ação (T15-09) · o toque abre a instalação (T15-06)',
    render: () => (
      <Sistema>
        <AvisoAberto app={TX.aviso.app(conferidasAs)} titulo={TX.aviso.conferidas}
          texto={TX.aviso.conferidasAberto(regioes, placa, inst.moduloSerial)} acao={TX.aviso.verAInstalacao} />
      </Sistema>
    ) },
  { id: 'f11-icone-na-barra', folha: 11, largura: 'sistema', rotulo: 'na barra de status · ao lado da hora',
    legenda: 'o ícone pequeno da A00, que o Android desenha com uns 15 dp, na cor da barra: branco no escuro, preto a 60% no claro, e mais cheio na tela sempre ligada · ao lado, de perto',
    render: () => (
      <div className="vitrine-barras">
        {BARRAS.map((b) => (
          <div key={b.id} className={`vitrine-barra-linha vitrine-barra-${b.id}`}>
            <span className="vitrine-barra"><span className="vitrine-barra-hora">{HORA_DA_FOLHA}</span><IconePequeno className="vitrine-barra-icone" reforco={b.reforco} /></span>
            <span className="vitrine-de-perto"><IconePequeno className="vitrine-de-perto-icone" reforco={b.reforco} /></span>
            <span className="vitrine-barra-nome">{b.nome}</span>
          </div>
        ))}
      </div>
    ) },
  { id: 'f0-icone-pequeno', folha: 0, largura: 'icone', rotulo: 'o ícone pequeno · a barra de status',
    legenda: '24 dp, branco com transparência: o mesmo desenho, com o 3D feito de transparência · o Android desenha ele com uns 15 dp, ao lado da hora, na cor da barra, e guarda a transparência · vai em PNG, 24, 36, 48, 72 e 96 px, um por densidade, e em SVG · a barra de verdade está na A11',
    render: () => (
      <div className="vitrine-icones">
        {DENSIDADES.map((n) => (
          <span key={n} className="vitrine-icone">
            <span className={`vitrine-icone-fundo vitrine-icone-${n}`}><IconePequeno /></span>
            <span className="vitrine-icone-tamanho">{n} px</span>
          </span>
        ))}
      </div>
    ) },
]
