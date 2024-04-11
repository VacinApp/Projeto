import "./cardvacina.css";

const CardVacina = ({ nome, descricao, imagem }) => {
  return (
    <article className="cardVacina">
      <img src={imagem} />

      <div className="descricao">
        <h1>{nome}</h1>
        <p>{descricao}</p>
      </div>
    </article>
  );
};
export default CardVacina;
