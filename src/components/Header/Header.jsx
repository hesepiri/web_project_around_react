import React from "react";
import logo from "../../images/logo.svg"; // Subimos dos niveles para llegar a images

function Header() {
  return (
    <header className="header page__section">
      <img
        alt="Logotipo Around The U.S."
        className="logo header__logo"
        src={logo}
      />
    </header>
  );
}

export default Header;
