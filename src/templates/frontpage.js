import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import Head from "../components/head"

class FrontPageTemplate extends Component {

  render() {
    const post = this.props.data.wordpressPost
    // @TODO: STEP #5: Use title and content in Gatsby.
    return (
      <Layout>
        <div className="container">
         <div className="grid">
            <div className="col-sm-12">
              <h1>FRONT PAGE</h1>
            </div>
         </div>
        </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate


export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
    }
  }
`