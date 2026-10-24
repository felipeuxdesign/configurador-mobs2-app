// T10 · os textos exatos (02-telas/T10-ciclo-dinamico/textos.md). Onde o texto
// traz um dado — a contagem, a fila do módulo, o prazo, a hora, o lido e o
// esperado do cartão —, ele é montado do mock na hora e confere com o textos.md.
// A frase da causa ('ligue o motor') é texto; o lido ('0 rpm') é do
// caso motor-desligado-no-ciclo (T10/03, decisão 54).
import { minSeg } from '../../dados/formato.js'

// o que o técnico faz pra o passo reprovado passar, pelo `passo` do caso (T10/03) ·
// o cartão em três momentos (a vez, o lido e a resposta) e a espera da ignição
const O_QUE_FAZER = { rotacao: 'ligue o motor' }

export const T = {
  titulo: 'Ciclo de testes',
  encerrar: 'ENCERRAR',
  dePassos: (total) => `de ${total} passos`,
  // o prazo do evento
  prazo: 'PRAZO DO EVENTO',
  chegouEm: 'O EVENTO CHEGOU EM',
  filaDrenando: 'FILA DRENANDO',
  filaDrenada: 'FILA DRENADA',
  limite: (seg) => `limite ${minSeg(seg)}`,
  disparadoAs: (hora) => `disparado ${hora}`,
  filaSaindo: (fila) => `${fila.mensagens} mensagens e ${fila.diagnostico} de diagnóstico saindo do módulo`,
  // a frase do prazo estourado, numa linha (T10/02)
  secaoF: 'A Seção F reprova · os passos continuam valendo.',
  segundaVez: 'Segunda vez sem chegar: confira a conexão do módulo.',   // T10/09
  // o bloco do evento
  evento: 'EVENTO DE TESTE',
  disparado: 'disparado pelo app',
  recebido: 'recebido no servidor',
  naoChegou: 'não chegou',
  campos: 'campos conferidos',
  conferidos: (campos) => `${campos} de ${campos}`,
  // os passos: a causa do passo que o motor desligado reprova, e o cartão (T10/08 e 10)
  causaDoPasso: (caso) => `${caso.lido} · ${O_QUE_FAZER[caso.passo]}`,
  leu: (lido) => `leu ${lido}`,
  confereComOCartao: 'Confere com o cartão',
  naoConfere: 'Não confere',
  naoConfereValor: 'não confere',
  // o não confere se refaz, cada um na sua linha (decisões 64 e 79, a 10): a causa em vermelho, embaixo do nome, e o
  // botão da linha · a causa é só *não confere*: a justificativa quem pede é o checklist
  naoConfereJustifique: 'não confere',
  passarDeNovo: 'Passar de novo',
  pisarDeNovo: 'Pisar de novo',
  // a ignição desligada explica a espera (T10/10 e 11), e o pedal, o que o app confere (T10/13, decisão 67)
  esperaDaIgnicao: 'O módulo leva alguns segundos para perceber que a ignição foi desligada.',
  esperaDoPedal: 'O app confere sozinho: primeiro o pedal acionado, depois solto.',
  // o passo da vez: a ação do técnico, pela chave do passo; o que não tem
  // texto aprovado (a velocidade do tacógrafo) fica só com o quadrado
  acao: { 'cartao do motorista': 'passe o cartão', 'pedal acelerador': 'pise e solte', 'ignicao desligada': 'desligue a ignição' },
  // o rodapé
  aguardandoEvento: 'Aguardando o evento',
  disparar: 'Disparar evento de teste',
  dispararOutro: 'Disparar outro evento',
  encerrarCiclo: 'Encerrar o ciclo',
  // com passo faltando, o Encerrar vira secundário e diz quantos faltam, e pergunta antes (decisão 68)
  encerrarComFaltando: (n) => `Encerrar com ${n} ${n === 1 ? 'passo' : 'passos'} faltando`,
  confirmacao: {
    titulo: (n) => `Encerrar com ${n} ${n === 1 ? 'passo' : 'passos'} faltando?`,
    frase: 'O checklist fica incompleto, e a instalação só é homologada quando você voltar aqui e terminar o ciclo.',
    voltar: 'Voltar ao ciclo',
    encerrar: 'Encerrar mesmo assim',
  },
  irAoChecklist: 'Ir para o checklist',
  voltarAoMenu: 'Voltar ao menu',
}
