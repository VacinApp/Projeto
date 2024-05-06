"use client"

import Link from 'next/link';

import { useState, useEffect } from 'react';
import FooterNav from "../components/FooterNav/FooterNav";
import Navbar from "../components/Navbar/Navbar";
import VacinaCadastrada from "../components/VacinaCadastrada/VacinaCadastrada";
import { getCarteira } from "@/util/api";

import './minhacarteira.css';

export default function MinhaCarteira() {

  function deletarVacina(id) {
    setCarteira(carteira.filter(vacina => vacina.id !== id))
  }
  const [carteira, setCarteira] = useState(null);
  useEffect(() => {
    getCarteira()
      .then((data) => setCarteira(data), [])
  })

  console.log(carteira)
  return (

    < div >
      <Navbar />
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
            key={dados.key}
            aoDeletar={deletarVacina}
          />
        ))) : (<p>Loading</p>)}
        <div className={carteira ? 'temAqui' : 'nadaAqui'}>
          <p>Ops! Parece que você ainda não cadastrou nenhuma vacina nesta página.</p>
        </div>
      </section>
      <FooterNav />
    </div >
  );
}