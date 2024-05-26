import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/menu";

import styles from "./localizacao.module.css";

export default function Localizacao() {
  return (
    <div>
      <Menu />
      <div className={styles.conteudo}>
      </div>
      <Footer />
    </div>
  );
}
