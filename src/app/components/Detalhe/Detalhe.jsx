import './detalhe.css';

const vacina = {
  nome: 'BCG',
  descricao: 'A vacina contra a tuberculose é o BCG (bacilo de Calmette & Guérin) liofilizado, obtido por atenuação do Mycobacterium bovis, apresentada em ampolas com múltiplas doses.',
  imagem: '/assets/img/vacinas/bcg.png',
}

const Detalhe = () => {
  return (
    <section className="detalheContainer">
        <img className='detalheImg' src={vacina.imagem} alt={vacina.nome} />
        <div className="detalheConteudo">
          <h2>{vacina.nome}</h2>
          <p>{vacina.descricao}</p>
          <button className='detalheBotao'>Encontrar posto</button>
        </div>
    </section>
  );
}

export default Detalhe;