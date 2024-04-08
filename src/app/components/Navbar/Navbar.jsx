"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import './navbar.css';


const Navbar = () => {
	const pathname = usePathname()
	return (
		
		<div className='container'>
			<img src='/assets/img/logo.png' className='titulo'/>
			<nav className='container__nav'>
				<Link href="/" className={pathname === "/" ? 'nav__links ativa' : 'nav__links'}>Home</Link>
				<Link href="/formulario" className={pathname === "/formulario" ? 'nav__links ativa' : 'nav__links'}>Localização</Link>
				<Link href="/vacinas" className={pathname === "/vacinas" ? 'nav__links ativa' : 'nav__links'}>Vacinas</Link>
				<Link href="#" className={pathname === "minha-carteira" ? 'nav__links ativa' : 'nav__links'}>Minha Carteira</Link>
			</nav>
		</div>
	);
}

export default Navbar;
