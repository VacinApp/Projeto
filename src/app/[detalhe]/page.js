import Detalhe from "../components/Detalhe/Detalhe";
import FooterNav from "../components/Footer/Footer";
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

