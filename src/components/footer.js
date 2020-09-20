import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../../static/styles/main.scss";
import logo from "../../static/images/ignis2.jpg";
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
  <footer className="container" id="footer">
    <div className="footer_logo">
      <Link to="/" title={siteTitle}>
        <img alt={"Logo"} src={logo} />
      </Link>
    </div>
    <div className={"row"}>
      <h3>0541-37-48-04 / 033-24-96-98</h3>
      <h3>ignis-msz@gmail.com</h3>
    </div>
    <div className={`row social`}>
      {socialLinks.map(({ url, title, icon }, index) => (
        <a href={url} title={title} key={index}>
          <img alt={title} src={icon} />
        </a>
      ))}
    </div>
    <div className={"copyright"}>
      <p>&#169; {new Date().getFullYear()} IGNIS</p>
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
