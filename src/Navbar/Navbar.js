import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../dist/css/Navbar.css";
import logo from "../img/logo.svg";
import iconright from "../img/iconright.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(true);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/brilo-react/" className="nav__logo">
          <img src={logo} alt="logo" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/o-nas"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                O nás
              </NavLink>
            </li>
            <li className="nav__item nav__menu-item nav-submenu-link">
              <NavLink
                to="/sluzby"
                className="nav__link "
                onClick={closeMenuOnMobile}
              >
                Služby <img src={iconright} alt="ikonka" />
              </NavLink>
              <ul className="nav__submenu">
                <li className="nav__submenu-item ">
                  <NavLink  to="/sluzby">
                    1 Služba
                  </NavLink>
                </li>
                <li className="nav__submenu-item ">
                  <NavLink to="/aktuality">
                    2 Služba
                  </NavLink>
                </li>
                <li className="nav__submenu-item ">
                  <NavLink  to="/novinky">
                    3 Služba
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <NavLink
                to="/aktuality"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Aktuality
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/novinky"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Novinky
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/kontakty"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Kontakty
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
