import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


class BeerTemplate extends Component {
  render() {
    const post = this.props.data.wordpressWpBeer
    // @TODO: STEP #5: Use title and content in Gatsby.
    return (
      <Layout>
        <SEO title={post.title} description={(post.excerpt)} />
        <h1 className="test" dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <ul>
          <li>Brand: {{post.acf.brand}}</li>
          <li>Alcohol Content: {{post.acf.alcohol_content}}</li>
        </ul>
      </Layout>
    )
  }
}

BeerTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BeerTemplate

// @TODO: STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
  query($id: Int!) {
    wordpressWpBeer(wordpress_id: {eq: $id}) {
      id
      template
      slug
      status
      wordpress_id
      excerpt
      content
      acf {
        alcohol_content
        brand
      }
    }
  }
`