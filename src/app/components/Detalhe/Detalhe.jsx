import './detalhe.css'
const Detalhe = ({nome, imagem, descricao}) => {  
  return (
      <section>
          <img src={imagem} alt={nome} />
          <div>
              <h2>{nome}</h2>
              <p>{descricao}</p>
          </div>
              <button>Encontrar posto</button>
      </section>
  );
}


export default Detalhe;