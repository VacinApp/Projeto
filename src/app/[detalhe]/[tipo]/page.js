import Tipo from "../../components/Tipo/Tipo";
import Footer from "../../components/Footer/Footer";
import Menu from "@/app/components/Menu/menu";

export default function PagTipo({ searchParams }) {
  return (
    <div>
      <Menu />
      <Tipo nome={searchParams.nome} />
      <Footer />
    </div >
  );
}

