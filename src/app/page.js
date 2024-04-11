"use client";

import FooterNav from "./components/FooterNav/FooterNav";
import Navbar from "./components/Navbar/Navbar";
import Link from "next/link";
import CardVacina from "./components/CardVacina/CardVacina";
import CardTipoVacina from "./components/Home/home";

import { motion } from "framer-motion";
import { useState, useEffect, userRef } from "react";

import "./pagemodule.css";

const imagens = [
  { imagem: "/assets/img/banner/Frame1.png" },
  { imagem: "/assets/img/banner/Frame2.png" },
  { imagem: "/assets/img/banner/Frame3.png" },
];

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
];

const tiposVacina = [
  {
    nome: "Intradérmica",
    imagem: "/assets/img/vacinas/intradermica.png",
    index: 0,
  },
  {
    nome: "Intramuscular (Vírus Inativo)",
    imagem: "/assets/img/vacinas/intramuscular_virus.png",
    index: 1,
  },
  {
    nome: "Oral",
    imagem: "/assets/img/vacinas/oral.png",
    index: 2,
  },
  {
    nome: "Subcutânea",
    imagem: "/assets/img/vacinas/subcutanea.png",
    index: 3,
  },
  {
    nome: "Intramuscular (Bactéria Inativo)",
    imagem: "/assets/img/vacinas/intramuscular_bacteria.png",
    index: 4,
  },
];

const numeroDeCards = vacinas.length;
const vacinasParaRenderizar = vacinas.slice(0, numeroDeCards);

const numeroDeCardsTipo = tiposVacina.length;
const vacinasParaRenderizarTipo = tiposVacina.slice(0, numeroDeCardsTipo);

const banner = imagens.length;
const banners = imagens.slice(0, banner);

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="conteudo">
        <div className="App">
          <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="inner" drag="x">
              {banners.map((imagens) => (
                <motion.div className="carrossel" key={imagens.imagem}>
                  <img src={imagens.imagem} alt="1" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <h1>Tipos de Vacina</h1>
        <div className="conteudo2">
          <div className="vacinas-card2">
            {vacinasParaRenderizarTipo.map((tiposVacina) => (
              <Link
                href={`/detalhe?nome=${tiposVacina.nome}`}
                className="vacina-link"
                key={tiposVacina.index}
              >
                <CardTipoVacina
                  key={tiposVacina.nome}
                  nome={tiposVacina.nome}
                  imagem={tiposVacina.imagem}
                />
              </Link>
            ))}
          </div>
        </div>
        <h1>Saiba Mais</h1>
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
        <h3>Ver Tudo</h3>
      </div>
      <FooterNav nome="Home" />
    </div>
  );
}
