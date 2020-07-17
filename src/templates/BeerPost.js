import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


class BeerPost extends Component {
  render() {
    const post = this.props.data.wordpressPost
    // @TODO: STEP #5: Use title and content in Gatsby.
    return (
      <Layout>
        <SEO title={post.title} description={(post.excerpt)} />
        <h1 class="beer-test" dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

BeerPost.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BeerPost

// @TODO: STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
  query{
   
    allWordpressWpBeer(filter: {type: {eq: "beer"}}) {
        edges {
          node {
            wordpress_id
            title
            content
            excerpt
            date(formatString: "MMMM DD, YYYY")
            author {
              name
              wordpress_id
            }
          }
        }
      }
  }
`