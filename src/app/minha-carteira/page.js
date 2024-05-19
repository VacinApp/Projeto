"use client"

import Link from 'next/link';

import { useState, useEffect } from 'react';
import FooterNav from "../components/FooterNav/FooterNav";
import VacinaCadastrada from "../components/VacinaCadastrada/VacinaCadastrada";
import { getCarteira } from "@/util/api";

import './minhacarteira.css';
import Menu from '../components/Menu/menu';

export default function MinhaCarteira() {

  const [carteira, setCarteira] = useState(null);
  useEffect(() => {
    getCarteira()
      .then((data) => setCarteira(data), [])
  })

  function loadVacinas() {
    getCarteira().then((data) => setCarteira(data))
  }

  const tamanhoCarteira = carteira ? carteira.length : null

  return (

    <div>
      <Menu />
      <section className="minhasVacinas">
        <header className="minhasVacinasCabecalho">
          <Link href='/formulario' className="linkAdicionar">
            <div className="icon-plus"></div>
          </Link>
          <h1>Minhas Vacinas</h1>
        </header>
        {carteira ? (carteira.map((dados) => (
          <VacinaCadastrada nome={dados.nome}
            dose={dados.dose}
            validade={dados.validade}
            data={dados.data}
            lote={dados.lote}
            lab={dados.lab}
            obs={dados.obs}
            id={dados.id}
            key={dados.id}
            onUpdate={loadVacinas}
          />
        ))) : (<p>Loading</p>)}
        <div className={tamanhoCarteira !== 0 ? 'temAqui' : 'nadaAqui'}>
          <p>Ops! Parece que você ainda não cadastrou nenhuma vacina nesta página.</p>
        </div>
      </section>
      <FooterNav />
    </div >
  );
}