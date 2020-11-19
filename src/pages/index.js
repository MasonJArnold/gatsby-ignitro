import React from "react"
import Layout from "../layouts"
import Hero from '../components/hero';

const IndexPage = props => {
  const {hero} = props.data.wordpressAcfPages;
  return (
    <Layout>
      <Hero 
      		hero_copy={hero.hero_copy} 
      		hero_cta={hero.hero_cta} 
      		hero_cta_link={hero.hero_cta_link} 
      		hero_h1_title={hero.hero_h1_title} 
      		hero_image={hero.hero_background.source_url} 
      />
    </Layout>
  )
}
export default IndexPage


export const query = graphql`
  query {
    wordpressAcfPages(wordpress_id: {eq: 701}) {

      hero: acf {
        hero_copy
        hero_cta
        hero_cta_link
        hero_h1_title
        hero_background {
          source_url
        }
      }

    }
  }
`