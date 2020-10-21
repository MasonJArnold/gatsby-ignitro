import React from 'react';
import '../css/address.css';
import { StaticQuery, graphql } from "gatsby"

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfOptions {
            nodes {
              options {
                address
                city
                state
                zip
              }
            }
          }
      }
    `}
    render={data => {

      let address = data.allWordpressAcfOptions.nodes[0].options.address;
      let city = data.allWordpressAcfOptions.nodes[0].options.city;
      let state = data.allWordpressAcfOptions.nodes[0].options.state;
      let zip = data.allWordpressAcfOptions.nodes[0].options.zip;

      return (
        <div className="addressWrap">
         <p>{address}</p>
         <p>{city}, {state} {zip}</p>
        </div>
      );
    }
  }
  />
)