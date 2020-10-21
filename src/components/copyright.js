import React from 'react';
import '../css/copyright.css';
import { StaticQuery, graphql } from "gatsby"

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfOptions {
            nodes {
              options {
                copyright
              }
            }
          }
      }
    `}
    render={data => {

      let copyright = data.allWordpressAcfOptions.nodes[0].options.copyright;

      return (
          <p className="copyRight">{copyright}</p>
      );
    }
  }
  />
)