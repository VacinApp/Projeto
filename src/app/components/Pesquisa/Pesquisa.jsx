

const Pesquisa = ( label, valor, onChange, obrigatorio = false, type = 'text') => {

  return (
    <div className="campoTexto">
			<label>{label}</label>
			<input type={type} value={valor} onChange={evento => onChange(evento.target.value)} required={obrigatorio} />
		</div>
  );
}

export default Pesquisa;