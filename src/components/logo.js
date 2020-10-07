import React from 'react';

import { StaticQuery, graphql } from "gatsby"

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              logo {
                alt_text
                source_url
              }
            }
          }
        }
      }
    `}
    render={data => {
      let logo = data.allWordpressAcfOptions.nodes[0].options.logo;

      return (
         <img className={props.className} src={logo.source_url} alt={logo.alt_text} />
      );
    }
  }
  />
)