"use client"
import { useState } from "react"
import Formulario from "../components/Formulario/Formulario"
import Navbar from "../components/Navbar/Navbar"
import FooterNav from "../components/FooterNav/FooterNav"

export default function PagFormulario() {
	return (
		<div>
			<Navbar />
			<div className="conteudo">
				<Formulario />
			</div>
			<FooterNav />
		</div>
	);
}   