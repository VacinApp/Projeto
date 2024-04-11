import "./home.css";

const CardTiposVacina = ({ nome, imagem }) => {
  return (
    <article className="cardTiposVacina">
      <img src={imagem} />

      <div className="nome">
        <h2>{nome}</h2>
      </div>
    </article>
  );
};
export default CardTiposVacina;
