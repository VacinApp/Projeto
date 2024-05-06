"use client"
import Link from "next/link";
import styles from'./tipo.module.css';
import { useEffect, useState } from "react";
import { getCategoriaByNome} from "@/util/api";

const Tipo = ({nome}) => {
  
  const [categoria, setCategoria] = useState(null);
  useEffect(() => {
    getCategoriaByNome(nome)
      .then((data) => setCategoria(data), [])
  })


  return (categoria ? (
    <section className={styles.detalheContainer}>
      <img className={styles.detalheImg} src={categoria[0].imagem} alt={categoria[0].nome} />
      <div className={styles.detalheConteudo}>
        <h1>{categoria[0].nome}</h1>
        <p>{categoria[0].descricao}</p>
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

export default Tipo;