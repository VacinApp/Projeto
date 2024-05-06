"use client"
import Link from "next/link";
import styles from'./detalhe.module.css';
import { useEffect, useState } from "react";
import { getCategoria, getVacinaByNome, getVacinas } from "@/util/api";

const Detalhe = ({nome}) => {
  
  const [vacina, setVacina] = useState(null);
  useEffect(() => {
    getVacinaByNome(nome)
      .then((data) => setVacina(data), [])
  })

  const [categoria, setCategorias] = useState(null);
  useEffect(() => {
    getCategoria()
      .then((data) => setCategorias(data), [])
  })


  return (vacina ? (
    <section className={styles.detalheContainer}>
      <img className={styles.detalheImg} src={vacina[0].imagem} alt={vacina[0].nome} />
      <div className={styles.detalheConteudo}>
        <h1>{vacina[0].nome}</h1>
        <p>{vacina[0].descricao}</p>
        <div className={styles.botao}>
          <Link
            href={'/localizacao'}
            className={styles.detalheBotao}
          >
            Encontrar posto
          </Link>
        </div>      
      </div>
    </section>): (<p>Loading</p>)
  );
}

export default Detalhe;