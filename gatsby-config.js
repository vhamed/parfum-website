module.exports = {
  siteMetadata: {
    title: `Parfum`,
    short: `Parfum`,
    description: `IGNIS_DZ est une agence de services degital travaillant depuis 10 ans avec des clients locaux et internationaux ,nous fournissons différents services dans le domain marketing ou solution software personnalisées pour chaque problème, faciles à utiliser et à gérer, nous accompagnons les clients dans  leurs demarche,mission et leur activité avec la technologie la plus moderne  .en conclusion  nous visons à améliorer votre entreprise, car nous savons que votre succès est notre succès.`,
    author: `@vhamed`,
    siteUrl: `http://parfum.ignis-dz.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `parfum`,
        short_name: `parfum`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FF54AC`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/icon.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["PT Serif"]
        },
        custom: {
          families: ["Inter"],
          urls: ["/fonts/fonts.css"]
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
