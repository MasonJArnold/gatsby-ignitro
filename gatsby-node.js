/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: ser
 */

const path = require("path")
const slash = require("slash")

/*require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})*/

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
      allWordpressPost(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            id
            wordpress_id
            slug:path
            status
            format
          }
        }
      }
      allWordpressPage(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            id
            wordpress_id
            slug:path
            status
            template
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
  const { allWordpressPost, allWordpressPage } = result.data

  const postTemplate = path.resolve("./src/templates/post.js");
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const pageTemplate = path.resolve("./src/templates/page.js")
  allWordpressPage.edges.forEach(edge => {
    const {slug, template, wordpress_id} = edge.node;
    let wpTemplate = pageTemplate;
    if(template)
      wpTemplate = path.resolve("./src/templates/"+template.replace('.php','.js'));

    createPage({
      path: `${slug}`,
      component: wpTemplate,
      context: {
        id: wordpress_id,
      },
    })
  })
   
}