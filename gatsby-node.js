/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const slash = require("slash")

/**
 * Implement the Gatsby API “createPages”. This is
 * called after the Gatsby bootstrap is finished so you have
 * access to any information necessary to programmatically
 * create pages.
 * Will create pages for WordPress pages (route : /{slug})
 * Will create pages for WordPress posts (route : /post/{slug})
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // @TODO: STEP #2: Query all WordPress Posts Data.
  /**
   * The “graphql” function allows us to run arbitrary
   * queries against the local Gatsby GraphQL schema. Think of
   * it like the site has a built-in database constructed
   *     from the fetched data that you can run queries against.
   */
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            wordpress_id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            wordpress_id
            slug
            status
            template
            format
          }
        }
      }
      allWordpressWpBeer {
        edges {
          node {
            id
            wordpress_id
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring.
  const { allWordpressPost, allWordpressPage, allWordpressWpBeer } = result.data

  const postTemplate = path.resolve("./src/templates/post.js")
  // const BeerPost = path.resolve("./src/templates/post.js")
  // @TODO: STEP #3: Create pages in Gatsby with WordPress Posts Data.
  /**
   * We want to create a detailed page for each
   * post node. We'll just use the WordPress Slug for the slug.
   * The Post ID is prefixed with 'POST_'
   */
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })


  const pageTemplate = path.resolve("./src/templates/page.js")
  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: pageTemplate,
      context: {
        id: edge.node.wordpress_id,
      },
    })
  })


  const beerTemplate = path.resolve("./src/templates/beer.js")
  allWordpressWpBeer.edges.forEach(edge => {
    createPage({
      path: `/beer/${edge.node.slug}/`,
      component: slash(beerTemplate),
      context: {
        id: edge.node.wordpress_id,
      },
    })
  })

  /*const BeerTemplate = path.resolve("./src/templates/beer.js")
        // We want to create a detailed page for each
        // post node. We'll just use the WordPress Slug for the slug.
        // The Post ID is prefixed with 'POST_'
        _.each(result.data.allWordpressWpBeer.edges, edge => {
          // console.log('---------');
          //   console.log(edge.node.title,edge.node.template);
          //   console.log('---------');
          createPage({
            path: `/beer/${edge.node.slug}/`,
            component: slash(BeerTemplate),
            context: edge.node,
          })
        })*/
   
}