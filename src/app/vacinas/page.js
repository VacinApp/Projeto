"use client";
import Link from "next/link";
import FooterNav from "../components/FooterNav/FooterNav";
import CardVacina from "../components/CardVacina/CardVacina";
import styles from "./vacinas.module.css";
import { useEffect, useState } from "react";
import { getVacinas } from "@/util/api";
import Menu from "../components/Menu/menu";


export default function Vacinas() {
  const [vacinas, setVacinas] = useState(null);
  useEffect(() => {
    getVacinas()
      .then((data) => setVacinas(data), [])
  })

  return (
    <div>
      <Menu />
      <div className={`${styles.conteudo} conteudo`}>
        <h1>Vacinas Disponíveis</h1>
        <div className={styles.vacinasCard}>
          {vacinas ? (vacinas.map((vacina) => (
            <Link
              href={`/detalhe?nome=${vacina.nome}`}
              className={styles.vacinaLink}
              key={vacina.id}
            >
              <CardVacina
                key={vacina.id}
                nome={vacina.nome}
                apresentacao={vacina.apresentacao}
                imagem={vacina.imagem}
              />
            </Link>
          ))) : (<p>Loading</p>)}
        </div>
      </div>
      <FooterNav />
    </div>

  );
}
