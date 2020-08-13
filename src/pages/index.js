import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import InverseTextBlock from "../components/TextBlock/inverseTextBlock"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/database.svg"
import perk2Img from "../images/profile1.svg"
import perk3Img from "../images/support1.svg"
import perk4Img from "../images/import.svg"
import perk5Img from "../images/scanner.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <InverseTextBlock
        id="features"
        title="Stock Organise tous les services de votre Entreprise"
        subtitle="Startup is perfect for helping to to start and grow your business. As
          you begin to gain new clients and expand you will see the benefits of
          a super-fast Gatsby website"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Base de données performante"
            title="Base de données performante"
            content="Peu importe le volume de vos données"
          />
          <Perk
            img={perk2Img}
            alt="Interface Moderne"
            title="Interface Moderne"
            content="A choice of packages to suit every business type and size"
          />
          <Perk
            img={perk3Img}
            alt="Service après vente de qualité"
            title="Service après vente de qualité"
            content="Nous vous écoute pour aider à exploiter votre licence dans les meilleures conditions"
          />
          <Perk
            img={perk4Img}
            alt="Importation / Exportation"
            title="Importation / exportation simples"
            content="Nous vous écoute pour aider à exploiter votre licence dans les meilleures conditions"
          />
          <Perk
            img={perk5Img}
            alt="Vente au Comptoir et périphériques POS"
            title="Vente au Comptoir et périphériques POS"
            content="Nous vous écoute pour aider à exploiter votre licence dans les meilleures conditions"
          />
        </div>
      </InverseTextBlock>
      <TextBlock
        title="Gérez votre activité commerciale en toute simplicité!"
        paragraph="Stock vous garantit un passage vers une interface plus attractive et des fonctionnalités encore plus riches"
      >
        <Link to="packages" smooth={true} duration={500}>
          <Button cta="Essayer Gratuitement!" />
        </Link>
      </TextBlock>
      <Packages
        title="Nos Packs"
        para="Stock vous garantit un passage vers une interface plus attractive et des fonctionnalités encore plus riches"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Gratuite">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="Télécharger" />
            </Link>
          </Package>
          <Package title="Standard" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="Télécharger" />
            </Link>
          </Package>
          <Package title="Version Pro">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="Télécharger" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contactez Nous"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"
      />
    </Layout>
  </>
)
