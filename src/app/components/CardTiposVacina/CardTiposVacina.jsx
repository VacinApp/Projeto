import styles from './cardtiposvacina.module.css';

const CardTiposVacina = ({ nome, imagem }) => {
  return (
    <article className={styles.cardTiposVacina}>
      <img src={imagem} />

      <div>
        <p>{nome}</p>
      </div>
    </article>
  );
}

export default CardTiposVacina;
