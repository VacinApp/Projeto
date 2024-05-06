import Detalhe from "../components/Detalhe/Detalhe";
import FooterNav from "../components/FooterNav/FooterNav";
import Navbar from "../components/Navbar/Navbar";


export default function PagDetalhe({ searchParams }) {
	return (
		<div>
			<Navbar />
			<Detalhe nome={searchParams.nome} />
			<FooterNav />
		</div >
	);
}

