"use client"

import { usePathname } from 'next/navigation';

import './footerNav.css';
import '../../../../public/assets/icons/style.css';

const FooterNav = () => {
	const pathname = usePathname()
	return (
		<div>
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