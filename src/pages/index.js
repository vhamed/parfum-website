import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/header.png";
import trustLogo from "../../static/images/zara.svg";
import thumbnailBoard from "../../static/images/feature-board.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={"page-header home"}>
      <h1>Gérez votre boutique facilement</h1>
      <span className="buttons">
        <div className="button">
          <a href="#" className="secondary">Version d'Essai</a>
        </div>
        <div className="button">
          <a href="#">Télécharger</a>
        </div>
      </span>
      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container-fluid"}>
      <div className={"trust"}>
        <div className={"row"}>
          <div className={"col-3"}>
            <img src={trustLogo} />
          </div>
          <div className={"col-3"}>
            <img src={trustLogo} />
          </div>
          <div className={"col-3"}>
            <img src={trustLogo} />
          </div>
          <div className={"col-3"}>
            <img src={trustLogo} />
          </div>
        </div>
      </div>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <h1>Features</h1>
        <div className={"row"}>
          <div className={"col-4"}>
            <img src={thumbnailBoard} />
            <h3>Feature 1</h3>
            <p>Feature 1</p>
          </div>
          <div className={"col-4"}>
            <img src={thumbnailBoard} />
            <h3>Feature 1</h3>
            <p>Feature 1</p>
          </div>
          <div className={"col-4"}>
            <img src={thumbnailBoard} />
            <h3>Feature 1</h3>
            <p>Feature 1</p>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Essayer Gratuitement</h2>
          <p>
            Nous vous garantit un passage vers une interface plus attractive et
            des fonctionnalités encore plus riches
          </p>
        </div>

        <div className="button">
          <a href="#">Télécharger</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
