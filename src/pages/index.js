import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/header.png";
import trustLogo1 from "../../static/images/zara.svg";
import trustLogo2 from "../../static/images/zaki.svg";
import trustLogo3 from "../../static/images/expert.svg";
import trustLogo4 from "../../static/images/attia.svg";
import trustLogo5 from "../../static/images/sook.svg";
import trustLogo6 from "../../static/images/infopharm.svg";
import feature1 from "../../static/images/fonction1.svg";
import feature2 from "../../static/images/fonction2.svg";
import feature3 from "../../static/images/fonction3.svg";
import feature4 from "../../static/images/fonction4.svg";
import feature5 from "../../static/images/fonction5.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={"page-header home"}>
      <h1>Gérez votre Parfumerie facilement</h1>
      <div className="subheader">
        N'attendez pas pour test notre application <span>gratuitement</span>{" "}
        online
      </div>
      <span className="buttons">
        <div className="button">
          <a
            href="https://agitated-almeida-3c7a92.netlify.app/#/"
            target="__blank"
            className="secondary"
          >
            Essayez en Ligne
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
          <div className={"col-2"}>
            <img src={trustLogo1} />
          </div>
          <div className={"col-2"}>
            <img src={trustLogo2} />
          </div>
          <div className={"col-2"}>
            <img src={trustLogo3} />
          </div>
          <div className={"col-2"}>
            <img src={trustLogo4} />
          </div>
          <div className={"col-2"}>
            <img src={trustLogo5} />
          </div>
          <div className={"col-2"}>
            <img src={trustLogo6} />
          </div>
        </div>
      </div>
    </div>

    <div className={"container"} id="features">
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
            <img src={feature3} />
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
            <img src={feature2} />
            <h3>support et MAJ</h3>
            <p>
              Notre équipe sera disponible 24h / 24 et 7j / 7 pour vous aider à
              gérer le logiciel ou à résoudre tout problème que vous pourriez
              rencontrer. Aussi des mises à jour seront apportées constamment,
              pour améliorer votre expérience sans perdre vous marques et tout
              cela GRATUITEMENT.
            </p>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-2"}></div>
          <div className={"col-4"}>
            <img src={feature4} />
            <h3>Sauveguarde</h3>
            <p>
              La fonctionnalité du backup un outil indispensable qui vous permet
              de garder une copie de vos informations concernant vos clients,
              prix de produits et noms de produits..ect et les récupérer en cas
              de sinistre ou perte de système en toute simplicité
            </p>
          </div>
          <div className={"col-4"}>
            <img src={feature5} />
            <h3>Code Barre</h3>
            <p>
              La fonctionnalité du code barre, Permet de gagner du temps lors de
              la saisie des quantités de produit, la gestion des clients, aussi
              plus besoin de mémoriser tous les prix et les noms de produits car
              en un seule BIP Vous pouvez consulter ou modifier les
              informations.
            </p>
          </div>
          <div className={"col-2"}></div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"} id="price">
      <h1 className="header">Nos Packs</h1>
      <div className={"container"}>
        <div className="card">
          <div>
            <h2>Logiciel Parfumerie</h2>
          </div>
          <div className="card-content">
            <h3>20,000 DA</h3>
            <ul>
              <li>option </li>
              <li>option </li>
              <li>option </li>
              <li>option </li>
              <li>option </li>
            </ul>
            <div className="button">
              <a href="#">Contactez Commercial</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <h2>Gestionnaire de Stock</h2>
          </div>
          <div className="card-content">
            <h3>20,000 DA</h3>
            <ul>
              <li>option </li>
              <li>option </li>
              <li>option </li>
              <li>option </li>
              <li>option </li>
            </ul>
            <div className="button">
              <a href="#">Contactez Commercial</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
