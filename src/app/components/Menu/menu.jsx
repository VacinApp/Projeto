import MenuItem from "../MenuItem/menuItem";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/img/logo.png" className={styles.titulo} />
      <nav className={styles.menu}>
        <ul>
          <li>
						<MenuItem text="Home" route="/" iconClass="icon-home" />
          </li>
          <li>
						<MenuItem text="Vacinas" route="/vacinas" iconClass="icon-droplet" />
          </li>
          <li>
						<MenuItem text="Localização" route="/localizacao" iconClass="icon-map" />
          </li>
          <li>
						<MenuItem text="Minha Carteira" route="/minha-carteira" iconClass="icon-folder" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;