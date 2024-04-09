import './detalhe.css'

const vacina = {
  nome: 'BCG',
  descricao: 'A vacina contra a tuberculose é o BCG (bacilo de Calmette & Guérin) liofilizado, obtido por atenuação do Mycobacterium bovis, apresentada em ampolas com múltiplas doses.',
  imagem: '/assets/img/vacinas/bcg.png',
}

const Detalhe = () => {
  return (
    <section>
      <img src={vacina.imagem} />
      <div>
        <h2>{vacina.nome}</h2>
        <p>{vacina.descricao}</p>
      </div>
      <button>Encontrar posto</button>
    </section>
  );
}


export default Detalhe;