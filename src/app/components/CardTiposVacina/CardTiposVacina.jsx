import "./cardtiposvacina.css";

const CardTiposVacina = ({ nome, imagem }) => {
  return (
    <article className="cardTiposVacina">
      <img src={imagem} />

      <div className="nome">
        <p>{nome}</p>
      </div>
    </article>
  );
}

export default CardTiposVacina;
