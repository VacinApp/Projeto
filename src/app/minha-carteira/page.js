"use client"

import Link from 'next/link';

import { useState } from 'react';
import FooterNav from "../components/FooterNav/FooterNav";
import Navbar from "../components/Navbar/Navbar";
import VacinaCadastrada from "../components/VacinaCadastrada/VacinaCadastrada";
import { v4 as uuidv4 } from 'uuid';

import './minhacarteira.css';

export default function MinhaCarteira() {


  const [minhasVacinas, setMinhasVacinas] = useState([
    {
      nome: 'Influenza H1N1',
      dose: '1ª Dose',
      validade: '24/10/2024',
      data: '12/08/2023',
      lote: 'H06',
      lab: 'Abbot',
      obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
      id: uuidv4(),
      key: 0
    },
    {
      nome: 'Hepatite A',
      dose: '1ª Dose',
      validade: '24/10/2024',
      data: '12/08/2023',
      lote: 'H06',
      lab: 'Fiocruz',
      obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
      id: uuidv4(),
      key: 1
    },
    {
      nome: 'Penta (DTP/Hib/Hep. B)',
      dose: '1ª Dose',
      validade: '24/10/2024',
      data: '12/08/2023',
      lote: 'H06',
      lab: 'Pfizer',
      obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
      id: uuidv4(),
      key: 2
    },
    {
      nome: 'Influenza H1N1',
      dose: '1ª Dose',
      validade: '24/10/2024',
      data: '12/08/2023',
      lote: 'H06',
      lab: 'Abbot',
      obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
      id: uuidv4(),
      key: 3
    },
    {
      nome: 'Hepatite A ',
      dose: '1ª Dose',
      validade: '24/10/2024',
      data: '12/08/2023',
      lote: 'H06',
      lab: 'Fiocruz',
      obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
      id: uuidv4(),
      key: 4
    },
    {
      nome: 'Penta (DTP/Hib/Hep. B)',
      dose: '1ª Dose',
      validade: '24/10/2024',
      data: '12/08/2023',
      lote: 'H06',
      lab: 'Pfizer',
      obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
      id: uuidv4(),
      key: 5
    },
  ]);

  function deletarVacina(id) {
    setMinhasVacinas(minhasVacinas.filter(vacina => vacina.id !== id))
    console.log(minhasVacinas)
  }

  return (
    <div>
      <Navbar />

      <section className="minhasVacinas">
        <header className="minhasVacinasCabecalho">
          <Link href='/formulario' className="linkAdicionar">
            <div className="icon-plus"></div>
          </Link>
          <h1>Minhas Vacinas</h1>
        </header>
        {minhasVacinas.map((dados) => (
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
        ))}
        <div className={minhasVacinas.length !== 0 ? 'temAqui' : 'nadaAqui'}>
          <p>Ops! Parece que você ainda não cadastrou nenhuma vacina nesta página.</p>
        </div>
      </section>
      <FooterNav />
    </div>
  );
}