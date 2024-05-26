"use client"

import styles from './footer.module.css';
import '../../../../public/assets/icons/style.css';

const Footer = () => {
	return (
		<div>
			<footer className={styles.rodape}>
				<div>
					<img src='/assets/img/logo.png' className={styles.titulo}/>
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

export default Footer;