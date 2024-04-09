"use client"
import { useState } from 'react'

import './vacinacadastrada.css'

const VacinaCadastrada = ({ nome, dose, validade, data, lote, lab, obs }) => {

  const [carteiraAtiva, setCarteiraAtiva] = useState(false);

  const alternarCarteira = () => {
    setCarteiraAtiva(!carteiraAtiva);
  }

  return (
    <section className='containerVacinaCadastrada'>
      <header className='vacinaCadastradaCabecalho'>
        <h3>{nome}</h3>
        <button className='botaoAbrirFechar' onClick={alternarCarteira}><img src={carteiraAtiva ? 'assets/img/fi_chevron-up.png' : 'assets/img/fi_chevron-down.png'} /></button>
      </header>
      <div className="conteudoCarteira">
        <p>{data}</p>
        <li>{lab}</li>
      </div>
      <div className={carteiraAtiva ? 'carteiraAtiva' : 'carteira'}>
        <div className='carteiraConteudoPrincipal'>
          <p><strong>Dose:</strong> {dose}</p>
          <p><strong>Validade do Lote:</strong> {validade}</p>
          <p><strong>Laboratório:</strong> {lab}</p>
          <p><strong>Data da Vacinação:</strong> {dose}</p>
          <p><strong>Lote:</strong> {lote}</p>
        </div>
        <p><strong>Observação:</strong> {obs}</p>

        <div className='carteiraAcoes'>
          <p><img src='assets/img/fi_edit.png' /></p>
          <p><img src='assets/img/fi_trash.png' /></p>
        </div>
      </div>
    </section>
  )
}

export default VacinaCadastrada;