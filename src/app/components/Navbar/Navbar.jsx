"use client";

import { usePathname } from "next/navigation";
import MenuItem from "../MenuItem/menuItem";

import "./navbar.css";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="container">
      <img src="/assets/img/logo.png" className="titulo" />
      <nav className="container__nav">
        <ul>
          <li> <MenuItem text="Home" route="/" className={pathname === "/" ? "nav__links ativa" : "nav__links"}/> </li>
          <li> <MenuItem text="Localização" route="/localizacao" className={pathname === "/localizacao" ? "nav__links ativa" : "nav__links"}/> </li>
          <li> <MenuItem text="Vacinas" route="/vacinas" className={pathname === "/vacinas" ? "nav__links ativa" : "nav__links"} /> </li>
          <li> <MenuItem text="Minha Carteira" route="/minha-carteira" className={pathname === "/minha-carteira" ? "nav__links ativa" : "nav__links"}/> </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
