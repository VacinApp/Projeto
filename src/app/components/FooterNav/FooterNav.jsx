"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './footerNav.css';
import '../../../../public/assets/icons/style.css';

const FooterNav = () => {
	const pathname = usePathname()
	return (
		<div>
			<nav className='nav'>
				<Link href="/">
					<i className={ pathname === "/" ? "icon-home active" : "icon-home" }></i>
				</Link>
				<Link href="/vacinas">
					<i className={ pathname === "/vacinas" ? "icon-droplet active" : "icon-droplet" }></i>
				</Link>
				<Link href="/formulario" >
					<i className={ pathname === "/formulario" ? "icon-map active" : "icon-map" }></i>
				</Link>
				<Link href="/minha-carteira" >
					<i className={ pathname === "/minha-carteira" ? "icon-folder active" : "icon-folder" }></i>
				</Link>
			</nav>

			<footer className='rodape'>
				<div>
					<img src='/assets/img/logo.png' className='titulo'/>
					<p>Todos direitos reservados</p>
				</div>

				<div>
					<h3>Integrantes</h3>
					<p>Geovanna da Silva Lima</p>
					<p>Pedro Henrique M. Fernandes</p>
					<p>Vinícius Gutierrez Gomes</p>
				</div>
			</footer>
		</div>
	);
}

export default FooterNav;