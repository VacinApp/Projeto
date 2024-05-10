import './listasuspensaform.css';

const ListaSuspensaForm = ({ label, itens, valor, onChange, obrigatorio = false }) => {
	return (
		<div className="lista__suspensa">
			<label>{label}</label>
			<select required={obrigatorio} value={valor} onChange={evento => onChange(evento.target.value)}>
				<option />
				{itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	);
}

export default ListaSuspensaForm;