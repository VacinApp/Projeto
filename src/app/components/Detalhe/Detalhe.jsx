import Link from "next/link";

import styles from'./detalhe.module.css';
import vacs from '../../json/vacs.json'


const Detalhe = ({id}) => {
  const vacina = {
    nome: vacs[id].nome,
    descricao: vacs[id].descricao,
    imagem: vacs[id].imagem,
  }
  return (
    <section className={styles.detalheContainer}>
      <img className={styles.detalheImg} src={vacina.imagem} alt={vacina.nome} />
      <div className={styles.detalheConteudo}>
        <h1>{vacina.nome}</h1>
        <p>{vacina.descricao}</p>
        <div className={styles.botao}>
          <Link
            href={'/localizacao'}
            className={styles.detalheBotao}
          >
            Encontrar posto
          </Link>
        </div>      
      </div>
    </section>
  );
}

export default Detalhe;