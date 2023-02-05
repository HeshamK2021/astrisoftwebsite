import "./styles.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import BurgerMenu from "../BurgerMenu";

import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as BurgerMenuIcon } from "../../assets/burger.svg";

function Nav() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const toggleMenu = () => setMenuIsOpen((value) => !value);

  const location = useLocation();
  const renderActiveClass = (path) =>
    path === location.pathname ? "active" : "";

  return (
    <>
      <BurgerMenu setIsOpen={setMenuIsOpen} modalIsOpen={menuIsOpen} />
      <div className="fixed-nav">
        <div className="fixed-nav-links">
          <p>
            <Link className={renderActiveClass("/")} to="/">
              HOME
            </Link>
          </p>
          <p>
            <Link className={renderActiveClass("/about")} to="/about">
              ABOUT US
            </Link>
          </p>
          <p>
            <Link className={renderActiveClass("/services")} to="/services">
              OUR SERVICES
            </Link>
          </p>
          <p>
            <Link className={renderActiveClass("/work")} to="/work">
              OUR WORK
            </Link>
          </p>
          <p>
            <Link className={renderActiveClass("/contact-us")} to="/contact-us">
              CONTACT US
            </Link>
          </p>
        </div>
      </div>
      <nav>
        <Link to="/">
          <LogoIcon />
        </Link>
        <p className="site-name text-secondary">
          <Link className="text-secondary" to="/">
            Astrisoft
          </Link>
        </p>
        {menuIsOpen ? (
          <span className="close-icon" onClick={toggleMenu}>
            <span className="x">&#9747;</span>
          </span>
        ) : (
          <BurgerMenuIcon onClick={toggleMenu} className="burger-menu-icon" />
        )}
      </nav>
    </>
  );
}

export default Nav;
