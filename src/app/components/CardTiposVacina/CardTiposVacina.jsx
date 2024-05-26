import styles from './cardtiposvacina.module.css';

const CardTiposVacina = ({ nome, imagem }) => {
  return (
    <div className={styles.cardTiposVacina}>
      <img src={imagem} />

      <div>
        <p>{nome}</p>
      </div>
    </div>
  );
}

export default CardTiposVacina;
