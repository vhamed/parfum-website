import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../../static/styles/main.scss";
import logo from "../../static/images/icon-github.svg";
import iconTwitter from "../../static/images/icon-twitter.svg";
import iconLinkedin from "../../static/images/icon-linkedin.svg";
import iconGitHub from "../../static/images/icon-github.svg";
import iconInstagram from "../../static/images/icon-instagram.svg";

const Footer = ({ siteTitle, siteDescription }) => (
  <footer>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-5"}>
          <div className={"widget__item"}>
            <div className="logo">
              <Link to="/" title={siteTitle}>
                <img alt={"Logo"} src={logo} />
              </Link>
            </div>

            <div className={"about"}>
              <p>{siteDescription}</p>
            </div>
          </div>
        </div>

        <div className={"col-2"}>
          <div className={"widget__item"}>
            <ul className={"links"}>
              <h4>Company</h4>
              <ul>
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

        <div className={"col-2"}>
          <div className={"widget__item"}>
            <div className={"links"}>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="/about" title="A Propos">
                    A Propos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" title="Contactez Nous">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={"col-3"}>
          <div className={"widget__item"}>
            <div className={"social"}>
              <a
                href="https://twitter.com/histaffio"
                target={"_blank"}
                title={"Twitter"}
              >
                <img alt={"Twitter"} src={iconTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/company/histaff/"
                target={"_blank"}
                title={"LinkedIn"}
              >
                <img alt={"LinkedIn"} src={iconLinkedin} />
              </a>
              <a
                href="https://github.com/histaff"
                target={"_blank"}
                title={"GitHub"}
              >
                <img alt={"GitHub"} src={iconGitHub} />
              </a>
              <a
                href="https://www.instagram.com/histaff.io/"
                target={"_blank"}
                title={"Instagram"}
              >
                <img alt={"Instagram"} src={iconInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={"copyright"}>
        <p>
          Copyright {new Date().getFullYear()}, {` `}{" "}
          <a href="https://histaff.io" title={siteTitle}>
            {siteTitle}
          </a>
          . All rights reserved.
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
