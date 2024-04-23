import Detalhe from "../components/Detalhe/Detalhe";
import FooterNav from "../components/FooterNav/FooterNav";
import Navbar from "../components/Navbar/Navbar";
import vacs from "../json/vacs.json";

export default function PagDetalhe({searchParams}) {
	return (
		<div>
			<Navbar />
      <Detalhe id={searchParams.id} />
			<FooterNav />
		</div >
	);
}

