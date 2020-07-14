import { graphql, StaticQuery, Link } from "gatsby"
// import styled from 'styled-components';
import React from "react"

// const beerItemWrapper = styled.div`
//  display:flex;
//  justify-content:center;
// `
// const beerItem = styled.div`
//     width:300px;
//     border: 1px solid #ccc;
//     padding: 16px;
//     margin: 16px;
// `
// const beerImage = styled.img`
//     max-width:100%;
// `
const beerItems = () => {
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
            (<beerItemWrapper>
            {props.allWordpressWpBeer.edges.map(beerItem => (
            <beerItem key={beerItem.node.id}>
                <h2>{beerItem.node.title}</h2>
                
                <div dangerouslySetInnerHTML={{__html:beerItem.node.excerpt}} />
                <Link to={`/beer/${beerItem.node.slug}`}>
                    Read more...
                </Link>
            </beerItem>
            ))}
            </beerItemWrapper>
        )}/>
    )
}

export default beerItems;
