"use client"

import { useState } from "react"

import Formulario from "../components/Formulario/Formulario"
import Navbar from "../components/Navbar/Navbar"
import FooterNav from "../components/FooterNav/FooterNav"

const vacinas = [
	'Vacina 1',
	'Vacina 2',
	'Vacina 3',
]

const doses = [
	'1ª Dose',
	'2ª Dose',
	'3ª Dose',
]

export default function PagFormulario() {
	const [minhasVacinas, setMinhasVacinas] = useState([]);

	return (
		<div>
			<Navbar />
				
			<div className="conteudo">
				<Formulario vacinas={vacinas} doses={doses} aoCadastrar={vacina => setMinhasVacinas([...minhasVacinas, vacina])} />
			</div>

			<FooterNav />
		</div>
	);
}   