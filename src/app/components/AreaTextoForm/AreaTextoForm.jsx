import styles from './areatextoform.module.css';

const AreaTextoForm = ({ label, valor, onChange, obrigatorio = false, type = 'text' }) => {
  return (
    <div className={styles.areaTexto}>
      <label>{label}</label>
      <textarea type={type} value={valor} onChange={evento => onChange(evento.target.value)} required={obrigatorio} />
    </div>
  );
}

export default AreaTextoForm;