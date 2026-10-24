// T11 · a peça que só o nível do item desenha e que não tem linha no
// componentes.md (T11 · 2): o instrumento do item automático
// reprovado. Montada com os primitivos do DS (Escala, a caixa de poço) — nada
// redesenhado. O quadro da câmera do item manual é a peça ds/checklist/VisorCamera,
// a câmera do app da folha 7, só com o ícone (decisão 60; o mundo real).
import { Escala, Glifo } from '../../ds/index.js'
import './pecas.css'

// O instrumento do item reprovado (T11/09): o poço com o traço de baixo
// vermelho (a falha mora no elemento, Lei 2), o rótulo em vermelho, o número
// de 48 na tinta, a barra de 22 com a faixa esperada, as três marcas e a frase.
// O que não é número (as entradas e o modem, T11/24 e 26): o rótulo, o
// valor escrito de 48, centrado, que quebra em duas linhas se precisar, e o porquê — sem régua.
// Relido e dentro (T11/30 a 33 · a regra *reler no lugar* do componentes.md): o
// mesmo instrumento sem a falha — o traço de baixo do poço, o rótulo na tinta secundária, a marca
// branca — e, no lugar da frase, o check pequeno com *relido às · o veredito*, como o relido da T09.
// Relido e ainda fora (T11/34 a 37): o instrumento em falha, como antes, e no lugar da
// frase o xis pequeno com *relido às · o que ainda falta*, em vermelho — o não confere da T09/10.
export function InstrumentoDoItem({ rotulo, valor, unidade, escala, legendas, frase, texto, relido, naoResolvido }) {
  const caixa = `t11-instrumento ds-caixa-poco ${relido ? '' : 'ds-caixa-falha'}`
  const pe = relido
    ? <span className="t11-instrumento-relido"><Glifo estado="ok" poco={24} />{relido}</span>
    : naoResolvido
      ? <span className="t11-instrumento-relido t11-instrumento-nao-resolvido"><Glifo estado="xis" poco={24} />{naoResolvido}</span>
      : frase && <span className="t11-instrumento-frase">{frase}</span>
  const rot = <span className={`t11-instrumento-rotulo ${relido ? 't11-instrumento-rotulo-relido' : ''}`}>{rotulo}</span>
  if (texto != null) {
    return (
      <div className={caixa}>
        {rot}
        <span className="t11-instrumento-numero t11-instrumento-texto">{texto}</span>
        {pe}
      </div>
    )
  }
  return (
    <div className={caixa}>
      {rot}
      <span className="t11-instrumento-numero">{valor}{unidade && <span className="t11-instrumento-unidade">{unidade}</span>}</span>
      <Escala {...escala} tam="item" semLados falha={!relido} />
      <div className="t11-instrumento-legendas">
        <span>{legendas.min}</span><span className="t11-instrumento-faixa">{legendas.faixa}</span><span>{legendas.max}</span>
      </div>
      {pe}
    </div>
  )
}
