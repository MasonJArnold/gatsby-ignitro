require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: `${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}`,
        // Gravity Forms API
        api: {
          key: process.env.GF_CONSUMER_KEY,
          secret: process.env.GF_CONSUMER_SECRET,
        },
      },
    },
  {
    resolve: "gatsby-source-wordpress",
    options: {
      baseUrl: process.env.GATSBY_WP_URL,
      protocol: process.env.GATSBY_WP_PROTOCOL,
      restApiRoutePrefix: "wp-json",
      hostingWPCOM: false,
      useACF: true,
      plugins: [
        {
          resolve: `gatsby-wordpress-inline-images`,
          options:
          {
            baseUrl: process.env.GATSBY_WP_URL,
            protocol: process.env.GATSBY_WP_PROTOCOL,
          }
        }
      ],
      excludedRoutes: ["**/settings", "**/themes", "**/users/me"],
      includedRoutes: [
        "**/categories",
        "**/posts",
        "**/pages",
        "**/media",
        "**/tags",
        "**/taxonomies",
        "**/users",
        "**/menus",
        "**/beer"
      ],
      searchAndReplaceContentUrls: {
        sourceUrl: `${process.env.GATSBY_WP_PROTOCOL}:\/\/${process.env.GATSBY_WP_URL}(?!\/wp-content)`,
        replacementUrl: process.env.GATSBY_REPLACEMENT_URL,
      },
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
   
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
  
}
