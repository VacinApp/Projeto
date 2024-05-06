import Tipo from "../../components/Tipo/Tipo";
import FooterNav from "../../components/FooterNav/FooterNav";
import Navbar from "../../components/Navbar/Navbar";

export default function PagTipo({ searchParams }) {
  return (
    <div>
      <Navbar />
      <Tipo nome={searchParams.nome} />
      <FooterNav />
    </div >
  );
}

