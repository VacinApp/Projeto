import Detalhe from "../components/Detalhe/Detalhe";
import FooterNav from "../components/FooterNav/FooterNav";
import Menu from "../components/Menu/menu";

export default function PagDetalhe({ searchParams }) {
	return (
		<div>
			<Menu />
			<Detalhe nome={searchParams.nome} />
			<FooterNav />
		</div >
	);
}

