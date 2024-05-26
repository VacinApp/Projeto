import MenuItem from "../MenuItem/menuItem";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src="/assets/img/logo.png" className={styles.titulo} />
        <div className={styles.menu}>
          <ul className={styles.grid}>
            <li><MenuItem className={styles.titleMenu} text="Home" route="/" iconClass="icon-home" /></li>
            <li><MenuItem className={styles.titleMenu} text="Vacinas" route="/vacinas" iconClass="icon-droplet" /></li>
            <li><MenuItem className={styles.titleMenu} text="Localização" route="/localizacao" iconClass="icon-map" /></li>
            <li><MenuItem className={styles.titleMenu} text="Minha Carteira" route="/minha-carteira" iconClass="icon-folder" /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Menu;