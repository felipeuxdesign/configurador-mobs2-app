// A manutenção, viva: o pedido das cercas (decisão 71) e o arrastado, que nunca é reenviado sozinho.
// Nenhuma entrada viva do palco leva à manutenção (os exemplos dela são consultas paradas),
// então o roteiro semeia o que a T06 gravaria num vínculo de manutenção (etapas.ativo.modo) e segue só
// com toques: a pergunta *Solicitar as cercas de novo?* e o pedido, que termina na hora (a 10); depois o
// leitor, que tem dependente: a folha dele, a curta, a pergunta pelos eventos, o Deixar para depois, o
// Finalizar travado no checklist, e o reenvio do que ficou, até o Finalizar voltar. Decisão 64: pelo menu,
// a manutenção começa sem nada escolhido (a 28), e o toque marca o bloco; e um toque não vale por dois —
// o toque duplo no Solicitar as cercas abre a folha, e o segundo toque não confirma o primário dela, que
// nasceu embaixo do dedo (a 13 · o primário que nasce de um toque, 300 ms), também com reduzir movimento ·
// e o Reenviar tudo, menos a conexão da T11 abre a 30 também num vínculo de manutenção.
const FOLHA_SOBE = [{ prop: 'transform', ms: 200, em: 'ds-folha' }]
const FOLHA_DESCE = [{ prop: 'transform', ms: 150, em: 'ds-folha' }, { prop: 'opacity', ms: 150, em: 'ds-veu' }]
const SURGE = [{ prop: 'opacity', ms: 150, em: 't09-pergunta-surge' }]
// o primário da folha nasce onde estava o do rodapé: o ponto do dedo (o centro do Solicitar as cercas da 08,
// atrás do véu) cai dentro do Solicitar as cercas da folha
const SOB_O_DEDO = `
  const bs = [...document.querySelectorAll('.t09 button')].filter((b) => b.textContent.trim() === 'Solicitar as cercas')
  const folha = bs.find((b) => b.closest('.ds-folha')), pe = bs.find((b) => b.closest('.t09-pe'))
  if (!folha || !pe) return 'faltou um dos dois primários: ' + bs.length
  const p = pe.getBoundingClientRect(), f = folha.getBoundingClientRect()
  const x = p.left + p.width / 2, y = p.top + p.height / 2
  return (x >= f.left && x <= f.right && y >= f.top && y <= f.bottom) || 'o dedo em ' + [x, y] + ', o primário da folha em ' + [f.left, f.top, f.right, f.bottom]`
const ACENDE = [{ prop: 'opacity', ms: 150, em: 't09-pergunta-acende' }]
// o vínculo de manutenção que a T06 grava, num módulo já configurado — a cadeia gravada (estado/estado.jsx: o despachar do provedor, achado pela árvore do React)
const MANUTENCAO = `
  const el = document.querySelector('.t04'); const k = Object.keys(el).find((x) => x.startsWith('__reactFiber$'))
  let f = el[k]; while (f && !(f.memoizedProps?.value?.despachar && f.memoizedProps.value.estado)) f = f.return
  const { estado, despachar } = f.memoizedProps.value; const e = estado.etapas
  despachar({ tipo: 'mesclar', parcial: { etapas: { ...e, ativo: { ...(e.ativo ?? {}), modo: 'manutencao' }, cadeia: { confirmados: 6 } } } })
  despachar({ tipo: 'ir', tela: 'T09' })
  return true`

export default [
  { abre: '?tela=T04' },
  { chega: 'T04' },
  { executa: MANUTENCAO },
  { chega: 'T09', momento: '28-momento-manutencao-pelo-menu-nada-escolhido' },
  { ve: 'Reenvie um bloco por vez. A limpeza apaga só o que você escolher.' },
  { desligado: 'Escolha um bloco' },
  { marca: 'Cercas' },
  { chega: 'T09', momento: '08-momento-manutencao-escolher-o-bloco' },
  // ── a folha (13): o pedido pergunta antes, e diz o que o sistema faz · o Cancelar só fecha ──
  { toca: 'Solicitar as cercas', anima: FOLHA_SOBE },
  { chega: 'T09', momento: '13-momento-manutencao-folha-de-confirmacao' },
  { ve: 'Solicitar as cercas de novo?' },
  { ve: 'O sistema envia as cercas do cadastro pro módulo em segundo plano e regrava o leitor e os eventos logo depois. Você acompanha em Últimas instalações.' },
  { naoToca: 'ENCERRAR' },
  { dorme: 300 },
  { toca: 'Cancelar', anima: FOLHA_DESCE },
  { naoVe: 'Solicitar as cercas de novo?' },
  { chega: 'T09', momento: '08-momento-manutencao-escolher-o-bloco' },
  // ── um toque não vale por dois: o toque duplo abre a folha, e o segundo toque não a confirma ──
  { toqueDuplo: 'Solicitar as cercas' },
  { chega: 'T09', momento: '13-momento-manutencao-folha-de-confirmacao' },
  { fica: 'T09', ms: 500 },
  { ve: 'Solicitar as cercas de novo?' },
  { naoVe: 'Cercas solicitadas. O sistema regrava o leitor e os eventos depois delas.' },
  { toca: 'Cancelar', anima: FOLHA_DESCE },
  { chega: 'T09', momento: '08-momento-manutencao-escolher-o-bloco' },
  // e com reduzir movimento, o mesmo: a espera não é movimento · sem a folha subindo, o segundo toque cai em
  // cheio no primário dela, que nasceu embaixo do dedo — e não confirma
  { reduzir: true },
  { toqueDuplo: 'Solicitar as cercas' },
  { chega: 'T09', momento: '13-momento-manutencao-folha-de-confirmacao' },
  { executa: SOB_O_DEDO },
  { fica: 'T09', ms: 500 },
  { naoVe: 'Cercas solicitadas. O sistema regrava o leitor e os eventos depois delas.' },
  { toca: 'Cancelar' },
  { chega: 'T09', momento: '08-momento-manutencao-escolher-o-bloco' },
  { reduzir: false },
  // ── o pedido (10): o mesmo toque duplo, com o segundo toque depois dos 300 ms, confirma — e o pedido
  // termina na hora, sem limpeza e sem cadeia curta, a linha só das cercas, 1 de 1 ──
  { toqueDuplo: 'Solicitar as cercas', intervalo: 500 },
  { chega: 'T09', momento: '10-momento-manutencao-concluida' },
  { ve: 'Cercas solicitadas. O sistema regrava o leitor e os eventos depois delas.' },
  { ve: 'solicitadas' },
  { ve: 'o sistema envia e regrava o leitor e os eventos' },
  { naoVe: 'Dois blocos dependem delas' },
  { toca: 'Voltar ao menu' },
  { chega: 'T04' },
  { toca: 'Entendi' },                                   // o aviso do acesso vencendo, na primeira chegada ao menu
  // ── o leitor, que tem dependente: a folha (18), a curta, e a pergunta pelos eventos (15) ──
  { executa: MANUTENCAO },
  { chega: 'T09', momento: '28-momento-manutencao-pelo-menu-nada-escolhido' },
  { marca: 'Leitor' },
  { chega: 'T09', momento: '08-momento-manutencao-escolher-o-bloco' },
  { toca: 'Reenviar o leitor', anima: FOLHA_SOBE },
  { chega: 'T09', momento: '18-momento-manutencao-folha-do-leitor' },
  { ve: 'Reenviar o leitor pede reenviar os eventos depois.' },
  { dorme: 300 },
  { toca: 'Reenviar o leitor' },                        // o da folha: o rodapé atrás dela fica inerte
  { chega: 'T09', momento: '15-momento-manutencao-o-leitor-pergunta-pelos-eventos', ms: 8000 },
  { ve: 'Leitor confere. Um bloco depende dele.' },
  { anima: SURGE },
  { ve: '1 · Eventos' },
  { ve: 'usam o leitor' },
  // ── Deixar para depois: o link vira *fica para depois* no lugar, e o Reenviar continua do lado ──
  { toca: 'Deixar para depois: Eventos', anima: ACENDE },
  { ve: 'fica para depois' },
  { naoToca: 'Deixar para depois: Eventos' },
  { toca: 'Voltar ao menu' },
  { chega: 'T04' },
  // ── o checklist: a Seção D com o revisar em seguida, e o Finalizar travado com a causa ──
  { toca: 'Finalizar com checklist' },
  { chega: 'T13' },
  { ve: 'Falta reenviar os eventos.', ms: 8000 },
  { desligado: 'Finalizar instalação' },
  { toca: 'D · Configuração' },
  { ve: 'revisar em seguida' },
  { ve: 'roda ao encerrar' },
  // ── o Reenviar dos eventos, pela Seção D: a lista com o que falta; os eventos não têm dependente: sem folha ──
  { toca: 'Reenviar: Eventos' },
  { chega: 'T09', momento: '08-momento-manutencao-escolher-o-bloco' },
  { ve: 'Falta reenviar os eventos.' },
  { toca: 'Reenviar os eventos' },
  { ve: 'Reenviando só os eventos.' },
  { ve: 'Eventos conferem.', ms: 8000 },
  { toca: 'Voltar ao menu' },
  { chega: 'T04' },
  // ── nada falta: o Finalizar volta a ser decidido pelo resto do checklist ──
  { toca: 'Finalizar com checklist' },
  { chega: 'T13' },
  { naoVe: 'Falta reenviar', ms: 8000 },
  { toca: 'D · Configuração' },
  { naoVe: 'revisar em seguida' },
  // ── o Reenviar tudo, menos a conexão da T11 abre a 30 também num vínculo de manutenção: é a cadeia sem a
  // Conexão, não um bloco · concluída, a faixa conta os passos conferidos no módulo, sem a Conexão e sem as
  // cercas pedidas (decisão 69), e a manutenção volta a abrir na lista, sem nada escolhido ──
  { abre: '?tela=T04' },
  { chega: 'T04' },
  { executa: MANUTENCAO },
  { chega: 'T09', momento: '28-momento-manutencao-pelo-menu-nada-escolhido' },
  { toca: 'Voltar ao menu' },
  { chega: 'T04' },
  { toca: 'Entendi' },
  { toca: 'Conferir configuração' },
  { chega: 'T11' },
  { ve: 'CONFERE COM O CADASTRO', ms: 5000 },
  { toca: 'Outras ações' },
  { toca: 'Reenviar tudo, menos a conexão' },
  { chega: 'T09', momento: '30-momento-o-que-vai-ser-gravado-menos-a-conexao' },
  { toca: 'Gravar no módulo' },
  { ve: 'CONFERIDO NO MÓDULO\n4 passos', ms: 14000 },
  { toca: 'Voltar ao menu' },
  { chega: 'T04' },
  { toca: 'Configurar módulo' },
  { chega: 'T09', momento: '28-momento-manutencao-pelo-menu-nada-escolhido' },
]
