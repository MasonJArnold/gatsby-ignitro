import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import Layout from "../layouts"
import Head from "../components/head"


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    // @TODO: STEP #5: Use title and content in Gatsby.
    return (
      <Layout>
        <Head title={post.title} description={(post.excerpt)} />
        <h1 className="test" dangerouslySetInnerHTML={{ __html: post.title }} />
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

// @TODO: STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
    }
  }
`