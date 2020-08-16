import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../../static/styles/main.scss";
import logo from "../../static/images/logo.svg";
import facebookIcon from "../../static/images/fb-icon.svg";
import beIcon from "../../static/images/be-icon.svg";
import instagramIcon from "../../static/images/instagram-icon.svg";

const socialLinks = [
  {
    url: "https://facebook.com/ignisdzcreativity",
    icon: facebookIcon,
    title: "Facebook"
  },
  {
    url: "https://www.instagram.com/degitalservice_agency",
    icon: instagramIcon,
    title: "Instagram"
  },
  {
    url: "https://behance.net/ignisdz",
    icon: beIcon,
    title: "Be"
  }
];

const Footer = ({ siteTitle, siteDescription }) => (
  <footer>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-6"}>
          <div className={"widget__item"}>
            <div className="footer_logo">
              <Link to="/" title={siteTitle}>
                <img alt={"Logo"} src={logo} />
              </Link>
            </div>

            <div className={"about"}>
              <p>{siteDescription}</p>
            </div>
          </div>
        </div>

        <div className={"col-3"}>
          <div className={"widget__item"}>
            <ul className={"links"}>
              <h4>Evo</h4>
              <ul>
                <li>
                  <Link to="/contact" title="Contactez Nous">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/about" title="A Propos">
                    A Propos
                  </Link>
                </li>
                <li>
                  <a
                    className={"links__special"}
                    href="/docs"
                    title="Documentation"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <div className={"col-3"}>
          <div className={"widget__item"}>
            <div className={"social"}>
              {socialLinks.map(({ url, title, icon }, index) => (
                <a href={url} title={title} key={index}>
                  <img alt={title} src={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={"copyright"}>
        <p>
          Copyright {new Date().getFullYear()}, {siteTitle}. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``,
  siteDescription: ``
};

export default Footer;
