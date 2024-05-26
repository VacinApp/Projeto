"use client"

import { useEffect, useState } from 'react';

import CampoForm from '../CampoForm/CampoForm';
import ListaSuspensaForm from '../ListaSuspensaForm/ListaSuspensaForm';
import AreaTextoForm from '../AreaTextoForm/AreaTextoForm';

import { useRouter } from 'next/navigation';

import './formulario.css';
import { getCarteira, addVacCarteira } from '@/util/api';
import {v4 as uuid4} from "uuid";
import db from '../../../../data/db.json'

const Formulario = () => {
  const router = useRouter();

	const nomesVacinas = db.vacinas.map((vac) => vac.nome)

	const doses = [
		'1ª Dose',
		'2ª Dose',
		'3ª Dose',
		'Reforço',
	]

	const[Vacs, setVacs] = useState(null);
	useEffect(() => {
		getCarteira()
		.then((data) => setVacs(data), [])
	})

	const [vac, setVac] = useState('');
	const [dos, setDos] = useState('');
	const [date, setDate] = useState('');
	const [val, setVal] = useState('');
	const [lot, setLot] = useState('');
	const [laboratorio, setLaboratorio] = useState('');
	const [observacao, setObservacao] = useState('');

	const handleVacina = (evento) => {
		evento.preventDefault();
    const nome = vac;
    const dose = dos;
    const data = date;
    const validade = val;
    const lote = lot;
    const lab = laboratorio;
		const obs = observacao;
		const id = uuid4();
		const v = {nome, dose, data, validade, lote, lab, obs, id} 
    addVacCarteira(v).then((status) => {
      if (status === 201) {
        getCarteira()
          .then((data) => setVacs(data))
					router.push('/minha-carteira');
      }
    })
  }
	

	return (
		<section className='containerForm'>
			<div className="formImg">
				<img className='doutoresImg' src='/assets/img/form/doutores.svg' />
			</div>
			<form className='formulario' onSubmit={handleVacina}>
				<div className='cabecalho'>
					<h1>Registre sua Vacina</h1>
					<p>Mantenha-se informado sobre o seu histórico de imunização. Faça a sua parte na proteção da saúde pública. </p>
				</div>
				
				<ListaSuspensaForm
					label='Vacina'
					valor={vac}
					itens={nomesVacinas}
					onChange={valor => setVac(valor)}
				/>

				<ListaSuspensaForm
					label='Dose'
					itens={doses}
					valor={dos}
					onChange={valor => setDos(valor)} 
				/>

				<div className='campo__data-validade'>
					<CampoForm
						label='Data da Vacinação'
						valor={date}
						type='date'
						onChange={valor => setDate(valor)}
					/>
					<CampoForm
						label='Validade do Lote'
						valor={val}
						type='date'
						onChange={valor => setVal(valor)} 
					/>
				</div>

				<CampoForm
					label='Lote'
					valor={lot}
					onChange={valor => setLot(valor)}
				/>
				<CampoForm
					label='Laboratório'
					valor={laboratorio}
					onChange={valor => setLaboratorio(valor)} 
				/>

				<div className='observacoes'>
					<AreaTextoForm
						label='Observações'
						valor={observacao}
						onChange={valor => setObservacao(valor)}
					/>
				</div>

				<div className="botao">
					<button className='cadastrar' onClick={handleVacina}>Cadastrar</button>
				</div>
			</form>
		</section>
	);
}
export default Formulario;
