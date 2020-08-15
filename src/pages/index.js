import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/inventory1.png";
import thumbnailEvent from "../../static/images/inventory1.png";
import thumbnailBoard from "../../static/images/feature-board.png";
import thumbnailNews from "../../static/images/feature-news.png";
import thumbnailTeams from "../../static/images/feature-team.png";
import thumbnailStaff from "../../static/images/feature-user.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Make your Staff and Workspace Happy" />

    <div className={"page-header home"}>
      <h1>Gérez votre boutique facilement</h1>
      <p> Stock facilite votre travail pour aider à atteindre vos buts </p>
      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={thumbnailEvent} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Base de données performante</h2>
                <p>
                  Nous vous écoute pour aider à exploiter votre licence dans les
                  meilleures conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Interface Moderne Avec Mode Nuit</h2>
                <p>
                  Nous vous écoute pour aider à exploiter votre licence dans les
                  meilleures conditions
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailBoard} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNews} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Importer - Exporter Vos Données Facilement</h2>
                <p>
                  Nous vous écoute pour aider à exploiter votre licence dans les
                  meilleures conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Fidélité Avec 1000 Carte Gratuite</h2>
                <p>
                  Nous vous écoute pour aider à exploiter votre licence dans les
                  meilleures conditions
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailBoard} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Users"} src={thumbnailStaff} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Service après vente de qualité</h2>
                <p>
                  Nous vous écoute pour aider à exploiter votre licence dans les
                  meilleures conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Vente au Comptoir et périphériques POS</h2>
                <p>
                  Nous vous écoute pour aider à exploiter votre licence dans les
                  meilleures conditions
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Team"} src={thumbnailTeams} />
              </div>
            </div>
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
