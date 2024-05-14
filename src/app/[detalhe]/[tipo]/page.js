import Tipo from "../../components/Tipo/Tipo";
import FooterNav from "../../components/FooterNav/FooterNav";
import Menu from "@/app/components/Menu/menu";

export default function PagTipo({ searchParams }) {
  return (
    <div>
      <Menu />
      <Tipo nome={searchParams.nome} />
      <FooterNav />
    </div >
  );
}

