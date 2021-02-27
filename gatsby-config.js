const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Dekos`,
    description: ``,
    author: `@elizeumatheus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "images"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
      },
    },
  ],
};
