import styles from './campoform.module.css';

const CampoForm = ({ label, valor, onChange, obrigatorio = false, type = 'text' }) => {
	return (
		<div className={styles.campoTexto}>
			<label>{label}</label>
			<input type={type} value={valor} onChange={evento => onChange(evento.target.value)} required={obrigatorio} />
		</div>
	);
}

export default CampoForm;