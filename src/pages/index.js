import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/header.png";
import trustLogo from "../../static/images/zara.svg";
import feature1 from "../../static/images/fonction1.svg";
import feature2 from "../../static/images/fonction2.svg";
import feature3 from "../../static/images/fonction3.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={"page-header home"}>
      <h1>Gérez votre boutique facilement</h1>
      <span className="buttons">
        <div className="button">
          <a href="#" className="secondary">
            Version d'Essai
          </a>
        </div>
        <div className="button">
          <a href="#">Télécharger</a>
        </div>
      </span>
      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container-fluid"}>
      <div className={"trust"}>
        <h3>Nos Clients</h3>
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
        <h2>Fonctionnalités</h2>
        <div className={"row"}>
          <div className={"col-4"}>
            <img src={feature1} />
            <h3>Simple et Facile</h3>
            <p>
              Vous en avez assez des programmes extrêmement complexes qui ne
              correspondent pas à votre façon de travailler?! Nous avons la
              solution !! Notre logiciel a été programmé et adapté au
              fonctionnement de nombreux magasins
            </p>
          </div>
          <div className={"col-4"}>
            <img src={feature2} />
            <h3>systéme de fidélité</h3>
            <p>
              notre système de fidélité vous fera gagner du temps et de
              l'argent! Testé et approuvé par de nombreux clients !! Dites adieu
              à cette carte de fidélité jetable et dites bonjour à la nouvelle
              carte durable au superbe design spécialement conçue pour vos
              clients par des professionnels, elle vous aidera à les fidéliser
            </p>
          </div>
          <div className={"col-4"}>
            <img src={feature3} />
            <h3>support</h3>
            <p>
              Notre équipe sera disponible 24h / 24 et 7j / 7 pour vous aider à
              gérer le logiciel ou à résoudre tout problème que vous pourriez
              rencontrer.
            </p>
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
