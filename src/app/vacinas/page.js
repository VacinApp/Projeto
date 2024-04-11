"use client";

import Link from "next/link";

import Navbar from "../components/Navbar/Navbar";
import FooterNav from "../components/FooterNav/FooterNav";
import CardVacina from "../components/CardVacina/CardVacina";

import "./vacinas.css";

const vacinas = [
  {
    nome: "BCG",
    descricao:
      "A vacina contra a tuberculose é o BCG (bacilo de Calmette & Guérin) liofilizado, obtido por atenuação do Mycobacterium bovis, apresentada em ampolas com múltiplas doses.",
    imagem: "/assets/img/vacinas/bcg.png",
    index: 0,
  },
  {
    nome: "Hepatite A",
    descricao:
      "A vacina hepatite A é indicada para todas as pessoas a partir de 12 meses...",
    imagem: "/assets/img/vacinas/hepatiteA.png",
    index: 1,
  },
  {
    nome: "Hepatite B",
    descricao:
      "A vacina Hepatite B (recombinante) é indicada para esquema de vacinação...",
    imagem: "/assets/img/vacinas/hepatiteB.png",
    index: 2,
  },
  {
    nome: "Penta (DTP/Hib/Hep. B)",
    descricao:
      "A vacina BCG (Bacilo de Calmette e Guérin) é indicada para prevenir as...",
    imagem: "/assets/img/vacinas/penta.png",
    index: 3,
  },
  {
    nome: "Pneumocócica 10 valente",
    descricao:
      "A vacina hepatite A é indicada para todas as pessoas a partir de 12 meses...",
    imagem: "/assets/img/vacinas/pneumococica.png",
    index: 4,
  },
  {
    nome: "Vacina Inativada Poliomielite",
    descricao:
      "A vacina Hepatite B (recombinante) é indicada para esquema de vacinação...",
    imagem: "/assets/img/vacinas/poliomielite.png",
    index: 5,
  },
  {
    nome: "Vacina Oral Poliomielite (VOP)",
    descricao: "A vacina contra a Poliomielite é indicada para prevenir a...",
    imagem: "/assets/img/vacinas/poliomieliteOral.png",
    index: 6,
  },
  {
    nome: "Vacina Rotavírus Humano (VRH)",
    descricao: "Um imunizante que previne contra o rotavírus humano...",
    imagem: "/assets/img/vacinas/rotavirus.png",
    index: 7,
  },
  {
    nome: "Meningocócica C (conjugada)",
    descricao: "A vacina meningocócica C (conjugada) é usada para...",
    imagem: "/assets/img/vacinas/menigococicaC.png",
    index: 8,
  },
  {
    nome: "Febre amarela",
    descricao:
      "A vacina contra a febre amarela é segura e considerada a medida...",
    imagem: "/assets/img/vacinas/febreAmarela.png",
    index: 9,
  },
  {
    nome: "Tríplice viral",
    descricao: "A tríplice viral é uma vacina atenuada, que contém vírus...",
    imagem: "/assets/img/vacinas/tripliceViral.png",
    index: 10,
  },
  {
    nome: "Tetraviral",
    descricao:
      "Vacina atenuada, contendo vírus vivos “enfraquecidos” do saram...",
    imagem: "/assets/img/vacinas/tetraviral.png",
    index: 11,
  },
  {
    nome: "DTP (tríplice bacteriana)",
    descricao: "A vacina tríplice bacteriana (DTP) é indicada para prevenir...",
    imagem: "/assets/img/vacinas/dtp.png",
    index: 12,
  },
  {
    nome: "Varicela",
    descricao:
      "A primeira dose deve ser tomada aos 12 meses de idade e a segun...",
    imagem: "/assets/img/vacinas/varicela.png",
    index: 13,
  },
  {
    nome: "HPV quadrivalente",
    descricao: "Ela trabalha na prevenção de lesões genitais pré-cancerosas...",
    imagem: "/assets/img/vacinas/hpv.png",
    index: 14,
  },
  {
    nome: "dT (dupla adulto)",
    descricao: "A vacina adsorvida difteria e tétano (dT - dupla bacteriana...",
    imagem: "/assets/img/vacinas/dt.png",
    index: 15,
  },
  {
    nome: "dTpa (DTP adulto)",
    descricao:
      "A vacina dTpa Adulto é indicada para reforço das vacinas DTPa...",
    imagem: "/assets/img/vacinas/dtp.png",
    index: 16,
  },
  {
    nome: "Menigocócica ACWY",
    descricao: "A vacina meningocócica ACWY (conjugada), também conhecida...",
    imagem: "/assets/img/vacinas/menigococicaACWY.png",
    index: 17,
  },
];
const numeroDeCards = vacinas.length;
const vacinasParaRenderizar = vacinas.slice(0, numeroDeCards);

export default function Vacinas() {
  return (
    <div>
      <Navbar />
      <div className="conteudo">
        <h1>Vacinas Disponíveis</h1>
        <div className="vacinas-card">
          {vacinasParaRenderizar.map((vacina) => (
            <Link
              href={`/detalhe?nome=${vacina.nome}`}
              className="vacina-link"
              key={vacina.index}
            >
              <CardVacina
                key={vacina.nome}
                nome={vacina.nome}
                descricao={vacina.descricao}
                imagem={vacina.imagem}
              />
            </Link>
          ))}
        </div>
      </div>
      <FooterNav />
    </div>
  );
}
