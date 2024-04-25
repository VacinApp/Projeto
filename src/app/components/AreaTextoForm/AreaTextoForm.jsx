import styles from './areatextoform.module.css';

const AreaTextoForm = ({ label, valor, aoAlterar, obrigatorio = false, type = 'text' }) => {
  return (
    <div className={styles.areaTexto}>
      <label>{label}</label>
      <textarea type={type} value={valor} onChange={evento => aoAlterar(evento.target.value)} required={obrigatorio} />
    </div>
  );
}

export default AreaTextoForm;