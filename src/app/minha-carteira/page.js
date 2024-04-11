"use client"

import Link from 'next/link';

import FooterNav from "../components/FooterNav/FooterNav";
import Navbar from "../components/Navbar/Navbar";
import VacinaCadastrada from "../components/VacinaCadastrada/VacinaCadastrada";

import './minhacarteira.css';


const minhasVacinas = [
  {
    nome: 'Influenza H1N1',
    dose: '1ª Dose',
    validade: '24/10/2024',
    data: '12/08/2023',
    lote: 'H06',
    lab: 'Abbot',
    obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
    index: 0
  },
  {
    nome: 'Hepatite A',
    dose: '1ª Dose',
    validade: '24/10/2024',
    data: '12/08/2023',
    lote: 'H06',
    lab: 'Fiocruz',
    obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
    index: 1
  },
  {
    nome: 'Penta (DTP/Hib/Hep. B)',
    dose: '1ª Dose',
    validade: '24/10/2024',
    data: '12/08/2023',
    lote: 'H06',
    lab: 'Pfizer',
    obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
    index: 2
  },
  {
    nome: 'Influenza H1N1',
    dose: '1ª Dose',
    validade: '24/10/2024',
    data: '12/08/2023',
    lote: 'H06',
    lab: 'Abbot',
    obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
    index: 3
  },
  {
    nome: 'Hepatite A ',
    dose: '1ª Dose',
    validade: '24/10/2024',
    data: '12/08/2023',
    lote: 'H06',
    lab: 'Fiocruz',
    obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
    index: 4
  },
  {
    nome: 'Penta (DTP/Hib/Hep. B)',
    dose: '1ª Dose',
    validade: '24/10/2024',
    data: '12/08/2023',
    lote: 'H06',
    lab: 'Pfizer',
    obs: 'Senti dor no braço, tive febre e sintomas da gripe.',
    index: 5
  },
];


export default function MinhaCarteira() {
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
            key={dados.index} 
          />
        ))}
      </section>
      <FooterNav />
    </div>
  );
}