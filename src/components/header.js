import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../../static/images/logo.svg";
import menu from "../../static/images/menu.svg";

const Header = ({ siteTitle }) => {
  const [responsive, setResponsive] = useState(false);

  return (
    <header>
      <div className={"container"}>
        <div className={`topnav ${responsive ? "responsive" : ""}`}>
          <Link to="/" title={siteTitle} className="logo">
            <img alt={"Logo"} src={logo} />
          </Link>
          <div className="nav-items">
            <Link to="#features" href="#">
              Fonctionalités
            </Link>
            <Link to="#price" href="#">
              Prix
            </Link>
            <Link to="#footer" href="#">
              Contact
            </Link>
          </div>
          <a className="icon" onClick={() => setResponsive(!responsive)}>
            <img alt="Toggle" src={menu} width="40px" />
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
