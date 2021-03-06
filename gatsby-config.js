require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Texadelphia Online`,
    description: `Texadelphia Online Ordering App`,
    author: `@texadelphia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: [
    //       'Balance',
    //       'BalanceTransaction',
    //       'Product',
    //       'Price',
    //       'Sku',
    //       'ApplicationFee',
    //       'Sku',
    //       'Subscription',
    //     ],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        contentTypes: [
          `mcallenproduct`,
          `mcallenprice`,
          // `product`,
          // `restaurant`,
          // `category`,
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/texadelphia-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
