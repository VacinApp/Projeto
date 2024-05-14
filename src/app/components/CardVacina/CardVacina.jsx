import styles from './cardvacina.module.css';

const CardVacina = ({ nome, apresentacao, imagem }) => {
  return (
    <article className={styles.cardVacina}>
      <img src={imagem} />

      <div className={styles.descricao}>
        <h1>{nome}</h1>
        <p>{apresentacao}</p>
      </div>
    </article>
  );
};
export default CardVacina;
