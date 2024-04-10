"use client"

import { useState } from 'react';

import CampoForm from '../CampoForm/CampoForm';
import ListaSuspensaForm from '../ListaSuspensaForm/ListaSuspensaForm';
import AreaTextoForm from '../AreaTextoForm/AreaTextoForm';

import './formulario.css';

const Formulario = ({ aoCadastrar, vacinas, doses }) => {

	const [vacina, setVacina] = useState('');
	const [dose, setDose] = useState('');
	const [data, setData] = useState('');
	const [validade, setValidade] = useState('');
	const [lote, setLote] = useState('');
	const [lab, setLab] = useState('');
	const [obs, setObs] = useState('');

	const aoEnviar = (evento) => {
		evento.preventDefault();
		console.log('form enviado', vacina, dose, data, validade, lote, lab, obs);
		aoCadastrar({
			vacina,
			dose,
			data,
			validade,
			lote,
			lab,
			obs
		});
	}

	return (
		<section className='containerForm'>
			<div className="formImg">
				<img className='doutoresImg' src='/assets/img/form/doutores.svg' />
			</div>
			<form className='formulario' onSubmit={aoEnviar}>
				<div className='cabecalho'>
					<h1>Registre sua Vacina</h1>
					<p>Mantenha-se informado sobre o seu histórico de imunização. Faça a sua parte na proteção da saúde pública. </p>
				</div>
				
				<ListaSuspensaForm
					label='Vacina'
					valor={vacina}
					itens={vacinas}
					aoAlterar={valor => setVacina(valor)}
				/>

				<ListaSuspensaForm
					label='Dose'
					itens={doses}
					valor={dose}
					aoAlterar={valor => setDose(valor)} 
				/>

				<div className='campo__data-validade'>
					<CampoForm
						label='Data da Vacinação'
						valor={data}
						type='date'
						aoAlterar={valor => setData(valor)}
					/>
					<CampoForm
						label='Validade do Lote'
						valor={validade}
						type='date'
						aoAlterar={valor => setValidade(valor)} 
					/>
				</div>

				<CampoForm
					label='Lote'
					valor={lote}
					aoAlterar={valor => setLote(valor)}
				/>
				<CampoForm
					label='Laboratório'
					valor={lab}
					aoAlterar={valor => setLab(valor)} 
				/>

				<div className='observacoes'>
					<AreaTextoForm
						label='Observações'
						valor={obs}
						aoAlterar={valor => setObs(valor)}
					/>
				</div>

				<div className="botao">
					<input className='cadastrar' type='button' value="Cadastrar"/>
				</div>
			</form>
		</section>
	);
}
export default Formulario;
