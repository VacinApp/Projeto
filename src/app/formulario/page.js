"use client"

import Formulario from "../components/Formulario/Formulario"
import FooterNav from "../components/FooterNav/FooterNav"
import Menu from "../components/Menu/menu";

export default function PagFormulario() {
	return (
		<div>
			<Menu />
			<div className="conteudo">
				<Formulario />
			</div>
			<FooterNav />
		</div>
	);
}   