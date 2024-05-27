"use client"
import Link from "next/link";
import styles from'./detalhe.module.css';
import { useEffect, useState } from "react";
import { getCategoria, getVacinaByNome } from "@/util/api";

const Detalhe = ({nome}) => {
  
  const [vacina, setVacina] = useState(null);
  useEffect(() => {
    getVacinaByNome(nome)
      .then((data) => setVacina(data), [])
  })

  const [categoria, setCategorias] = useState(null);
  useEffect(() => {
    console.log(vacina)
    getCategoria()
      .then((data) => setCategorias(data), [])
  })

  return (vacina ? (
    <section className={styles.detalheContainer}>
      <img className={styles.detalheImg} src={vacina[0].imagem} alt={vacina[0].nome} />
      <div>
        <div className={styles.detalheConteudo}>
          <h1>{vacina[0].nome}</h1>
          
          <div className={styles.textoVacina}>
            <div className={styles.descricao}>
              <span className={styles.apresentacao}>{vacina[0].apresentacao}</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Máximo de Doses: </strong></span>
              <span>{vacina[0].maximoDoses}</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Obrigatória: </strong></span>
              <span>{(vacina[0].obrigatoriedade) ? "Sim" : "Não" }</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Idade: </strong></span>
              <span>{vacina[0].idade}</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Tipo de Vacina: </strong></span>
              <span>{vacina[0].administracao}</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Esquema vacinal: </strong></span>
              <span>{vacina[0].esquema}</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Sintomas adversos: </strong></span>
              <span>{vacina[0].adversos}</span>
            </div>

            <div className={styles.descricao}>
              <span><strong>Contra indicação: </strong></span>
              <span>{vacina[0].contraIndicacao}</span>
            </div>
          </div>
        </div>

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