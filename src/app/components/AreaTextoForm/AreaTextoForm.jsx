import './areatextoform.css';

const AreaTextoForm = ({ label, valor, aoAlterar, obrigatorio = false, type = 'text' }) => {
  return (
    <div className='area__texto'>
      <label>{label}</label>
      <textarea type={type} value={valor} onChange={evento => aoAlterar(evento.target.value)} required={obrigatorio} />
    </div>
  );
}

export default AreaTextoForm;