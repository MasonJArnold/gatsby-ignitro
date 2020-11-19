import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import Hero from '../components/hero';

const FrontPage = props => {
  const {hero_h1_title, hero_copy, hero_background, hero_cta, hero_cta_link} = props.data.wordpressPage.hero;

  console.log(hero_background.localFile);

  return (
    <Layout>
      <Hero
        hero_h1_title = {hero_h1_title}
        hero_copy = {hero_copy}
        hero_background = {hero_background.localFile.childImageSharp.fluid.src}
        hero_cta = {hero_cta}
        hero_cta_link = {hero_cta_link}
      />
    </Layout>
  )
}
export default FrontPage

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      hero: acf {
        hero_copy
        hero_cta
        hero_cta_link
        hero_h1_title
        hero_background {
          alt_text
          source_url
          localFile {
            publicURL
            childImageSharp {
              fluid {
                src
                base64
              }
            }
          }
        }
      }
    }
  }

`