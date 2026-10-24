// T12 · os textos, exatamente como o textos.md da tela (02-telas/T12-ultimas-instalacoes/textos.md).
// O dado (placa, serial, hora, contagem, nome) vem do mock e entra pelos parâmetros.
// Os que o textos.md não tem estão marcados, com a fonte e a decisão (T12·2, T12·3).
export const TX = {
  encerrar: 'ENCERRAR',
  semSessao: 'Sem sessão de configuração',
  semAtivo: 'sem ativo', // a faixa com o módulo e sem o ônibus: o texto da T06 e da T04 (não há referência da T12 sem ativo)
  titulo: 'Últimas instalações',
  nestaEmpresa: 'nesta empresa', // a lei 18: o contexto é a empresa (decisão 56)
  grupos: { hoje: 'HOJE', ontem: 'ONTEM', esteMes: 'ESTE MÊS', maisDeUmMes: 'MAIS DE UM MÊS' },
  entre: ' · ',
  haDias: (n) => `há ${n} dias`,

  // o veredito de cada estado de M.instalacoes (T12·3 a), como as referências desenham: a
  // reprocessada diz só *aprovada* na lista (a 00, o ONK-8Q90), com o check — o nome inteiro
  // empurraria a placa pra duas linhas —, e o nome inteiro fica no cabeçalho do detalhe
  // (`naCabeca`, sem referência: o nome da máquina de estado, dominio.md §4.1, em caixa baixa)
  veredito: {
    aprovada: 'aprovada',
    'aguardando-validacao': 'aguardando validação',
    'falha-recebimento-reconhecida': 'falha reconhecida',
    'aprovada-reprocessamento': 'aprovada',
    reprovada: 'reprovada',
  },
  naCabeca: { 'aprovada-reprocessamento': 'aprovada após reprocessamento' },

  semConexao: 'SEM CONEXÃO',
  consultaDas: (hora) => `Esta é a consulta das ${hora}.`,
  vazioTitulo: 'Nenhuma instalação nesta empresa',
  vazioFrase: 'O que foi instalado em outra empresa aparece ao trocar de empresa.',
  voltarAoMenu: 'Voltar ao menu',

  // o detalhe (01, 04, 05)
  hoje: (hora) => `hoje, ${hora}`,
  // T12/04 e 05: o quando de ontem tem texto, 'ontem, 16:05'.
  // As de mais de um dia repetem no detalhe a linha de baixo da lista: o
  // 'há 9 dias, 13:58' não existe no textos.md
  ontem: (hora) => `ontem, ${hora}`,

  // o que o servidor recebeu (decisões 41 e 72, T12/01, 04 a 07): os três critérios,
  // cada um com o veredito e o porquê numa linha. O número vem do mock
  // (instalacoes[].recebimento, ou o recebimento do caso) e entra pelos parâmetros
  oQueRecebeu: 'O QUE O SERVIDOR RECEBEU',
  aInstalacao: 'A INSTALAÇÃO',
  criterios: { posicionamento: 'Posicionamento', eventos: 'Eventos', cercas: 'Cercas' }, // sem a viagem (decisão 54) · as cercas (decisão 72)
  // o veredito de cada critério pelo estado dele: os quatro desenhados e, sem
  // referência, os valores da regra do mock (criteriosRegra.porEstado), como vêm
  vereditoDoCriterio: {
    conforme: 'conforme',
    completa: 'completa',
    indisponivel: 'indisponível',
    pendente: 'pendente',
    ausente: 'ausente',                         // sem referência (criteriosRegra.porEstado)
    'fora do parâmetro': 'fora do parâmetro',   // sem referência (criteriosRegra.porEstado)
    incompleta: 'incompleta',                   // sem referência (criteriosRegra.porEstado)
    atrasado: 'atrasado',                       // sem referência (criteriosRegra.excecoes)
    'nao-chegaram': 'não chegaram',             // as cercas que não chegaram em 24 h (07)
  },
  posicoesEm: (n, tempo) => `${n} posições em ${tempo}`,
  testeChegouEm: (tempo) => `o teste chegou em ${tempo}`,
  confereDeNovo: (motivo, horas) => `${motivo} · confere por ${horas} h`,
  // as cercas (decisão 72): conferidas pelo sistema (04 a 06), ou que não chegaram (07)
  regioesConferidas: (n, hora) => `${n} regiões · conferidas às ${hora}`,
  naoChegaram: (horas, pendencia) => `não chegaram em ${horas} h · ${pendencia}`,
  pendencia: { web: 'pendência na web' },
  // o tempo do porquê: '1 min 12 s', '24 s'
  seg: (s) => `${s} s`,
  min: (m) => `${m} min`,

  etapas: {
    // decisão 44: a etapa é o Diagnóstico do módulo, e o resumo diz as linhas dele
    diagnostico: 'Diagnóstico',
    configuracao: 'Configuração',
    calibracao: 'Calibração',
    ciclo: 'Ciclo de testes', // decisão 54
    checklist: 'Checklist',
    autoteste: 'Autoteste',
  },
  deN: (feito, total) => `${feito} de ${total}`,
  blocosRelidos: (n) => `${n} blocos relidos`,
  // T12/01, 04 a 07: a configuração em passos conferidos no módulo — o requisito
  // conta a limpeza como passo, e as cercas, pedidas, não (decisão 69) —, a calibração do ônibus
  // sem nada a calibrar, e o autoteste nos dois contadores, embaixo do nome, nunca 'N de N'
  // (o *não se aplica* saiu com o reset de leitura, decisão 65)
  passos: (n) => `${n} passos`,
  nadaACalibrar: 'nada a calibrar',
  contadores: (a, p) => [
    `${a} ${a === 1 ? 'aprovada' : 'aprovadas'}`,
    `${p} ${p === 1 ? 'pendente' : 'pendentes'}`,
  ].join(' · '),
  e: ' e ', // as grandezas da calibração: 'hodômetro e horímetro' (decisão 52)
  voltarAsInstalacoes: 'Voltar às instalações',
}
