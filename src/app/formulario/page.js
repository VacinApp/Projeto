"use client"

import Formulario from "../components/Formulario/Formulario"
import Footer from "../components/Footer/Footer"
import Menu from "../components/Menu/menu";

export default function PagFormulario() {
	return (
		<div>
			<Menu />
			<div className="conteudo">
				<Formulario />
			</div>
			<Footer />
		</div>
	);
}   