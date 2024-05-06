"use client";

import Link from "next/link";

import FooterNav from "./components/FooterNav/FooterNav";
import Navbar from "./components/Navbar/Navbar";
import CardVacina from "./components/CardVacina/CardVacina";
import CardTipoVacina from "./components/CardTiposVacina/CardTiposVacina";
import Carousel from "./components/Carousel/Carousel";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getCategoria, getVacinas } from "@/util/api";




export default function Home() {

  const [vacinas, setVacinas] = useState(null);
  useEffect(() => {
    getVacinas()
      .then((data) => setVacinas(data), [])
  })

  const [categorias, setCategorias] = useState(null);
  useEffect(() => {
    getCategoria()
      .then((data) => setCategorias(data), [])
  })


  return (
    <div>
      <Navbar />

      <div className={`${styles.conteudo} conteudo`}>
        <section className={styles.banner}>
          <Carousel />
        </section>

        <h1>Tipos de Vacina</h1>
        <section className={styles.tipoVacina}>
          {categorias ? (categorias.map((tiposVacina) => (
            <Link
              href={`/detalhe/tipo?nome=${tiposVacina.nome}`}
              className={styles.vacinaLink}
              key={tiposVacina.nome}
            >
              <CardTipoVacina
                key={tiposVacina.nome}
                nome={tiposVacina.nome}
                imagem={tiposVacina.imagem}
              />
            </Link>
          ))) : (<p>Loading</p>)}
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
            {vacinas ? (vacinas.slice(vacinas.length - 6, vacinas.length).map((vacina) => (
              <Link
                href={`/detalhe?nome=${vacina.nome}`}
                className={styles.vacinaLink}
                key={vacina.id}
              >
                <CardVacina
                  key={vacina.nome}
                  nome={vacina.nome}
                  descricao={vacina.descricao}
                  imagem={vacina.imagem}
                />
              </Link>
            ))) : (<p>Loading</p>)}
          </div>
        </section>
      </div>

      <FooterNav />
    </div>
  );
}
