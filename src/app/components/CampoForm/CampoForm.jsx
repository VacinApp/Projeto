import './campoform.css';

const CampoForm = ({ label, valor, aoAlterar, obrigatorio = false, type = 'text' }) => {
	return (
		<div className='campo__texto'>
			<label>{label}</label>
			<input type={type} value={valor} onChange={evento => aoAlterar(evento.target.value)} required={obrigatorio} />
		</div>
	);
}

export default CampoForm;