import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BeerPostTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
    </p>
    <Img sizes={data.wordpressPost.acf.feat_img.localFile.childImageSharp.sizes} alt={data.wordpressPost.title} style={{ maxHeight: 450 }} />
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </Layout>
)
export default BeerPostTemplate
export const query = graphql`
query($slug: String!) {
    allWordpressWpBeer(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }


`