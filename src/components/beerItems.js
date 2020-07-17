import { graphql, StaticQuery, Link } from "gatsby"

import React from "react"


const BeerItems = () => {
    return(
        <StaticQuery query={graphql`
        query {
            allWordpressWpBeer(filter: {type: {eq: "beer"}}){
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
        `}render = {props=>
            (<div>
            {props.allWordpressWpBeer.edges.map(BeerItem => (
            <div key={BeerItem.node.id}>
                <h2>{BeerItem.node.title}</h2>
                
                <div dangerouslySetInnerHTML={{__html:BeerItem.node.excerpt}} />
                <Link to={`/beer/${BeerItem.node.slug}`}>
                    Read more...
                </Link>
            </div>
            ))}
            </div>
        )}/>
    )
}

export default BeerItems;
