"use client"
import { useState } from 'react'

import './vacinacadastrada.css'

const VacinaCadastrada = ({ nome, dose, validade, data, lote, lab, obs, id, aoDeletar}) => {

  const [carteiraAtiva, setCarteiraAtiva] = useState(false);

  const alternarCarteira = () => {
    setCarteiraAtiva(!carteiraAtiva);
  }

  return (
    <section className='containerVacinaCadastrada'>
      <header className='vacinaCadastradaCabecalho'>
        <h1>{nome}</h1>
        <button className='botaoAbrirFechar' onClick={alternarCarteira}>
          <div className={carteiraAtiva ? 'icon-chevron-up' : 'icon-chevron-down'}></div>
        </button>
      </header>

      <div className="conteudoCarteira">
        <p>{data}</p>
        <li>{lab}</li>
      </div>

      <div className={carteiraAtiva ? 'carteiraAtiva' : 'carteira'}>
        <div className='carteiraConteudoPrincipal'>
          <p><strong>Dose: </strong>{dose}</p>
          <p><strong>Validade do Lote: </strong>{validade}</p>
          <p><strong>Laboratório: </strong>{lab}</p>
          <p><strong>Data da Vacinação: </strong>{dose}</p>
          <p><strong>Lote: </strong>{lote}</p>
        </div>

        <p><strong>Observação: </strong>{obs}</p>

        <div className='carteiraAcoes'>
          <div className='icon-edit'></div>
          <div className='icon-trash' onClick={() => aoDeletar(id)}></div>
        </div>
      </div>
    </section>
  )
}

export default VacinaCadastrada;