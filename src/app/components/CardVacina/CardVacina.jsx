import styles from './cardvacina.module.css';

const CardVacina = ({ nome, descricao, imagem }) => {
  return (
    <article className={styles.cardVacina}>
      <img src={imagem} />

      <div className={styles.descricao}>
        <h1>{nome}</h1>
        <p>{descricao}</p>
      </div>
    </article>
  );
};
export default CardVacina;
