"use client";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import FooterNav from "../components/FooterNav/FooterNav";
import CardVacina from "../components/CardVacina/CardVacina";
import styles from "./vacinas.module.css";
import vacs from "../json/vacs.json";

const numeroDeCards = vacs.length;
const vacinasParaRenderizar = vacs.slice(0, numeroDeCards);

export default function Vacinas() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.conteudo} conteudo`}>
        <h1>Vacinas Disponíveis</h1>
        <div className={styles.vacinasCard}>
          {vacinasParaRenderizar.map((vacina) => (
            <Link
              href={`/detalhe?id=${vacina.id}`}
              className={styles.vacinaLink}
              key={vacina.id}
            >
              <CardVacina
                key={vacina.id}
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
