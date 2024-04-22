import Link from "next/link";

import styles from'./detalhe.module.css';

const vacina = {
  nome: 'BCG',
  descricao: 'A vacina contra a tuberculose é o BCG (bacilo de Calmette & Guérin) liofilizado, obtido por atenuação do Mycobacterium bovis, apresentada em ampolas com múltiplas doses.',
  imagem: '/assets/img/vacinas/bcg.png',
}

const Detalhe = () => {
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