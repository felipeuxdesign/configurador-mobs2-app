// A versão e a data do CHANGELOG, escritas à mão a cada versão.
// Nunca do relógio (CLAUDE.md: zero new Date()).
export const VERSAO = { versao: '1.10', data: '2026-10-27' }
// o pé do painel diz a data da última atualização, como se lê no Brasil: 04/10/2026
export const atualizadoEm = () => VERSAO.data.split('-').reverse().join('/')
