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
          <Link to="/docs" href="#">
            Documentation
          </Link>
          <Link to="/contact" href="#">
            Contact
          </Link>
          <Link to="/about" href="#">
            About
          </Link>
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
