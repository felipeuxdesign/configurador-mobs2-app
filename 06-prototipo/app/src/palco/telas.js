// As 15 telas e o índice das 204 referências (02-telas/indice.json, lido de
// onde está). O painel em duas partes (decisão 25, quadro 04).
import indice from '../../../../02-telas/indice.json'

// os nomes como o painel do quadro 04 escreve · as telas vão de T01 a T15, na ordem do caminho
export const NOMES = {
  T01: 'Login', T02: 'Selecionar contexto', T03: 'Sincronizar', T04: 'Menu', T05: 'Conectar módulo',
  T06: 'Diagnóstico do módulo', T07: 'Selecionar ativo', T08: 'Configurar módulo',
  T09: 'Calibração', T10: 'Ciclo de testes', T11: 'Checklist', T12: 'Sessão',
  T13: 'Fila de saída', T14: 'Conferir configuração', T15: 'Últimas instalações',
}
// o diagnóstico vem antes do vínculo, como a cena 04 desenha; a T06 só no caminho
export const CAMINHO = ['T01', 'T02', 'T03', 'T04', 'T05', 'T06', 'T07', 'T08', 'T09', 'T10', 'T11', 'T12']
export const CONSULTAS = ['T13', 'T14', 'T15']
export const REFERENCIAS = indice.itens
// a coluna: quem entra é o campo `coluna` do indice.json — falso pros estados que abrem
// por um toque (as duas de trocar de empresa da T04: a 08 e a 09), e, sem o campo, o estado entra. Fora
// da coluna, o estado continua abrindo pelo endereço
// os estados da coluna, e o que nasce de dentro de um estado, logo depois dele (`depoisDe`, no
// indice.json): o momento (com `coluna` verdadeiro) e
// o estado também — a T11/09, o detalhe, depois da T11/16, a lista · abre parado, como os estados ·
// a família em cadeia (o detalhe, o não resolvido, o relido), cada um depois do anterior,
// e a coluna os recua um nível (Coluna.jsx)
export const estadosDa = (tela) => {
  const naColuna = REFERENCIAS.filter((r) => r.tela === tela && (r.tipo === 'estado' ? r.coluna !== false : r.coluna === true))
  const filhosDe = (id) => naColuna.filter((r) => r.depoisDe === id)
  const comFilhos = (r) => [r, ...filhosDe(r.id).flatMap(comFilhos)]
  const raizes = naColuna.filter((r) => !r.depoisDe)
  return [...raizes.filter((r) => !r.colunaNoFim), ...raizes.filter((r) => r.colunaNoFim)].flatMap(comFilhos)
}
// Consultas de cenários especiais, sempre paradas; os tipos normativos continuam no índice.
export const consultaDa = (tela, nome) => REFERENCIAS.some((r) => r.tela === tela && r.nome === nome && r.consulta === true)
export const momentosDa = (tela) => REFERENCIAS.filter((r) => r.tela === tela && r.tipo === 'momento')
// a regra dos seis (palco.md): com mais de seis estados na coluna, eles se agrupam — só a T06, pelo `grupo` do indice.json
export const GRUPOS = { T06: [['modulo', 'O módulo'], ['can', 'A CAN']] }
