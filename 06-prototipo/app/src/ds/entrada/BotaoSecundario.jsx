// O botão secundário (folha 6, T15): a ação da linha, fora do rodapé. Fundo
// --fundo-botao, borda --borda-botao, 52 de alto, o texto em --tinta (um desenho só). Não é o
// primário (Lei 8): sem roxo e sem lima. No toque afunda 2%, como o primário,
// e solta em 100ms (só transform se move).
import './BotaoSecundario.css'

// `compacto` (T15/02): o botão do cartão com dois erros, 46 de
// desenho e 15 de letra; o toque de 48 cresce por fora, sem mudar o desenho.
// `doRodape` (T14, decisão 68): o secundário no lugar do primário do rodapé — o *Encerrar com 3 passos
// faltando* —, na altura do primário e só com a borda, como a referência desenha.
export function BotaoSecundario({ children, aoTocar, rotulo, desabilitado = false, forcaToque = false, compacto = false, doRodape = false }) {
  return (
    <button
      type="button"
      className={`ds-secundario ${compacto ? 'ds-secundario-compacto' : ''} ${doRodape ? 'ds-secundario-rodape' : ''} ${forcaToque ? 'ds-forca-toque' : ''}`}
      disabled={desabilitado}
      aria-label={rotulo}
      onClick={desabilitado ? undefined : aoTocar}
    >
      {children}
    </button>
  )
}
