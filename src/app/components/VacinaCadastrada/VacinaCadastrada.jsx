"use client"
import { useState } from 'react';

import './vacinacadastrada.css';
import { deleteVacCarteira, updateVacCarteira } from '@/util/api';

const VacinaCadastrada = ({ nome, dose, validade, data, lote, lab, obs, id, onUpdate }) => {


  const [dos, setDos] = useState(dose);
  const [date, setDate] = useState(data);
  const [val, setVal] = useState(validade);
  const [lot, setLot] = useState(lote);
  const [laboratorio, setLaboratorio] = useState(lab);
  const [observacao, setObservacao] = useState(obs);
  const [edicao, setEdicao] = useState(false);
  const [carteiraAtiva, setCarteiraAtiva] = useState(false);

  function handleDeleteVacCarteira() {
    deleteVacCarteira(id).then((status) => {
      if (status === 200) {
        onUpdate();
      }
    });
  }


  function handleUpdateVacCarteira(event) {
    event.preventDefault();
    const dose = dos;
    const data = date;
    const validade = val;
    const lote = lot;
    const lab = laboratorio;
    const obs = observacao;
    const v = { id, nome, dose, data, validade, lote, lab, obs }
    updateVacCarteira(v).then((status) => {
      if (status === 201) {
        onUpdate();
      }
    });
  }

  function ativarEdicao() {
    setEdicao(!edicao);
  }

  const alternarCarteira = () => {
    setCarteiraAtiva(!carteiraAtiva)
  }

  return (
    <section className="containerVacinaCadastrada">
      <header className="vacinaCadastradaCabecalho">
        <h1>{nome}</h1>
        <button className="botaoAbrirFechar" onClick={alternarCarteira}>
          <div className={carteiraAtiva ? "icon-chevron-up" : "icon-chevron-down"}></div>
        </button>
      </header>

      <div className="conteudoCarteira">
        <p>{data}</p>
        <li>{lab}</li>
      </div>

      {/* VIZUALIZAÇÃO PADRÃO */}
      <div className={carteiraAtiva ? "carteiraAtiva" : "carteira"}>
        <div className={edicao ? "escondido" : undefined}>
          <div className="carteiraConteudoPrincipal">
            <p><strong>Dose: </strong>{dose}</p>
            <p><strong>Validade do Lote: </strong>{validade}</p>
            <p><strong>Laboratório: </strong>{lab}</p>
            <p><strong>Data da Vacinação: </strong>{data}</p>
            <p><strong>Lote: </strong>{lote}</p>
          </div>
          <p><strong>Observação: </strong>{obs}</p>
        </div>


        {/* MODO EDIÇÃO */}
        <div className={edicao ? "modoEdicao" : "escondido"}>
          <div className="inputs">
            <div>
              <label><strong>Dose:</strong></label>
              <input className="editar" value={dos} onChange={valor => setDos(valor.target.value)} />
            </div>

            <div>
              <label><strong>Validade do Lote:</strong></label>
              <input className="editar" value={val} type='date' onChange={valor => setVal(valor.target.value)} />
            </div>

            <div>
              <label><strong>Laboratório:</strong></label>
              <input className="editar" value={laboratorio} onChange={valor => setLaboratorio(valor.target.value)} />
            </div>

            <div>
              <label><strong>Data da Vacinação:</strong></label>
              <input className="editar" value={date} type='date' onChange={valor => setDate(valor.target.value)} />
            </div>

            <div>
              <label><strong>Lote:</strong></label>
              <input className="editar" Nvalue={lot} onChange={valor => setLot(valor.target.value)} />
            </div>
          </div>

          <div className="textArea">
            <label><strong>Observação:</strong></label>
            <textarea className="editarArea" value={observacao} onChange={valor => setObservacao(valor.target.value)} />
          </div>

          <div className="botaoSalvar">
            <button className="salvar" onClick={handleUpdateVacCarteira}>Salvar</button>
				  </div>
        </div>


        <div className="carteiraAcoes">
          <div className="icon-edit" onClick={ativarEdicao}></div>
          <div className="icon-trash" onClick={handleDeleteVacCarteira}></div>
        </div>
      </div>
    </section>
  );
}

export default VacinaCadastrada;