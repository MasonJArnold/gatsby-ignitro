// src/templates/page/index.js

// import React  from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"


// const Page = ({ pageContext }) => {

//   const page = pageContext.page

//   return (
//     <Layout>
//       <SEO title={page.title} />

//       <h1>{page.title}</h1>
//       <div dangerouslySetInnerHTML={{__html: page.content}} />

//     </Layout>
//   )
// }

// export default Page


import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import Head from "../components/head"

const Page = ({ data }) => (
  <Layout>
    <Head
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
  </Layout>
)
export default Page

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`