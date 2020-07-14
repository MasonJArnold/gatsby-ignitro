const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser:true, isPermanent: true })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
 
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
 
        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const beerContentTemplate = path.resolve("./src/templates/beer.js")

        //const newsUnderContentTemplate = path.resolve("./src/templates/newsUnderContent.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
 
 
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            //component: slash(edge.node.template==='items_under_content.php' ? newsUnderContentTemplate : pageTemplate),
            //component: slash(pageTemplate),
            component: slash(edge.node.template==='beer_content.php' ? beerContentTemplate : pageTemplate),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====
       // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
       .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges{
                  node{
                    id
                    title
                    slug
                    excerpt
                    content
                    template
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            //Gatsby uses redux to manage its internal state
            //plugins and sites can use fucntions like "createPage"
            //to interact with Gatsby
            console.log('---------');
            console.log(edge.node.title,edge.node.template);
            console.log('---------');
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
    // ==== MTB NEWS (WORDPRESS CUSTOM) ====
    .then(() => {
      graphql(
        `
          {
            
              allWordpressWpBeer{
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
          
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const beerTemplate = path.resolve("./src/templates/beer.js")
        // We want to create a detailed page for each
        // post node. We'll just use the WordPress Slug for the slug.
        // The Post ID is prefixed with 'POST_'
        _.each(result.data.allWordpressWpBeer.edges, edge => {
          // console.log('---------');
          //   console.log(edge.node.title,edge.node.template);
          //   console.log('---------');
          createPage({
            path: `/beer/${edge.node.slug}/`,
            component: slash(beerTemplate),
            context: edge.node,
          })
        })
        resolve()
      })
    })
  // ==== END POSTS ====
    })
}