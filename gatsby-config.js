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
        baseUrl: 'https://gatsbyreact.wpengine.com',
        // Gravity Forms API
        api: {
          key: process.env.GF_CONSUMER_KEY,
          secret: process.env.GF_CONSUMER_SECRET,
        },
      },
    },
  //   {
  //     resolve: `gatsby-source-wordpress`,
  //     options: {
  //         // Your WordPress source.
  //         baseUrl: `gatsbyreact.wpengine.com`,
  //         protocol: `https`,
  //         // Only fetches posts, tags and categories from the baseUrl.
  //         includedRoutes: ['**/posts','**/pages', '**/tags', '**/categories', '**/menus', '**/users',],
  //         // Not using ACF so putting it off.
  //         useACF: true
  //     }
  // },
  {
    resolve: "gatsby-source-wordpress",
    options: {
      baseUrl: "gatsbyreact.wpengine.com",
      protocol: "http",
      hostingWPCOM: false,
      useACF: true,
      plugins: [
        {
          resolve: `gatsby-wordpress-inline-images`,
          options:
          {
            baseUrl: `inspiring-meninsky-da9386.netlify.app`,
            protocol: `https`
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
      verboseOutput: true,
      searchAndReplaceContentUrls: {
        sourceUrl: "inspiring-meninsky-da9386.netlify.app",
        replacementUrl: "gatsbyreact.wpengine.com",
      },
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
   
    
  ],
  
}
