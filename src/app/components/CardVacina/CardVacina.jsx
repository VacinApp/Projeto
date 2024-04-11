import "./cardvacina.css";

const CardVacina = ({ nome, descricao, imagem }) => {
  return (
    <article className="cardVacina">
      <img src={imagem} />

      <div className="descricao">
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </div>
    </article>
  );
};
export default CardVacina;
