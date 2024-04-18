"use client";

import Link from "next/link";

import FooterNav from "./components/FooterNav/FooterNav";
import Navbar from "./components/Navbar/Navbar";
import CardVacina from "./components/CardVacina/CardVacina";
import CardTipoVacina from "./components/CardTiposVacina/CardTiposVacina";
import Carousel from "./components/Carousel/Carousel";

import styles from "./page.module.css";

const vacinas = [
  {
    nome: "BCG",
    descricao: "A vacina contra a tuberculose é o BCG (bacilo de Calmette & Guérin) liofilizado, obtido por atenuação do Mycobacterium bovis, apresentada em ampolas com múltiplas doses.",
    imagem: "/assets/img/vacinas/bcg.png",
    index: 0,
  },
  {
    nome: "Hepatite A",
    descricao: "A vacina hepatite A é indicada para todas as pessoas a partir de 12 meses...",
    imagem: "/assets/img/vacinas/hepatiteA.png",
    index: 1,
  },
  {
    nome: "Hepatite B",
    descricao: "A vacina Hepatite B (recombinante) é indicada para esquema de vacinação...",
    imagem: "/assets/img/vacinas/hepatiteB.png",
    index: 2,
  },
  {
    nome: "Penta (DTP/Hib/Hep. B)",
    descricao: "A vacina BCG (Bacilo de Calmette e Guérin) é indicada para prevenir as...",
    imagem: "/assets/img/vacinas/penta.png",
    index: 3,
  },
  {
    nome: "Pneumocócica 10 valente",
    descricao: "A vacina hepatite A é indicada para todas as pessoas a partir de 12 meses...",
    imagem: "/assets/img/vacinas/pneumococica.png",
    index: 4,
  },
  {
    nome: "Vacina Inativada Poliomielite",
    descricao: "A vacina Hepatite B (recombinante) é indicada para esquema de vacinação...",
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

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className={`${styles.conteudo} conteudo`}>
        <section className={styles.banner}>
          <Carousel />
        </section>

        <h1>Tipos de Vacina</h1>
        <section className={styles.tipoVacina}>
          {vacinasParaRenderizarTipo.map((tiposVacina) => (
            <Link
              href={`/detalhe?nome=${tiposVacina.nome}`}
              className={styles.vacinaLink}
              key={tiposVacina.index}
            >
              <CardTipoVacina
                key={tiposVacina.nome}
                nome={tiposVacina.nome}
                imagem={tiposVacina.imagem}
              />
            </Link>
          ))}
        </section>

        <section className={styles.vacinas}>
          <div className={styles.saiba}>
            <div className={styles.saibaMais}>
              <h1>Saiba Mais</h1>
            </div>
            <div className={styles.verTudo}>
              <Link href={'/vacinas'}>
                Ver Tudo
              </Link>
            </div>
          </div>

          <div className={styles.cardSaibaMais}>
            {vacinasParaRenderizar.map((vacina) => (
              <Link
                href={`/detalhe?nome=${vacina.nome}`}
                className={styles.vacinaLink}
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
        </section>
      </div>

      <FooterNav />
    </div>
  );
}
