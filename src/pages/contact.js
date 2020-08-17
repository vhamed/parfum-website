import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={"container contact"}>
      <div className={"row"}>
        <div className={"col-7"}>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={"col-5"}>
          <h2>Email</h2>
          <h4>ignis-msz@gmail.com</h4>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
