import './listasuspensaform.css';

const ListaSuspensaForm = ({ label, itens, valor, aoAlterar, obrigatorio = false }) => {
	return (
		<div className="lista__suspensa">
			<label>{label}</label>
			<select required={obrigatorio} value={valor} onChange={evento => aoAlterar(evento.target.value)}>
				<option />
				{itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	);
}

export default ListaSuspensaForm;