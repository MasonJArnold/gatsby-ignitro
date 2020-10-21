import React from 'react';
import '../css/phone.css';
import { StaticQuery, graphql } from "gatsby"
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default (props) => (
  <StaticQuery
T    query={graphql`
      query {
        allWordpressAcfOptions {
            nodes {
              options {
                phone
              }
            }
          }
      }
    `}
    render={data => {
      let phone = data.allWordpressAcfOptions.nodes[0].options.phone;

      return (
         <a role="button" aria-label="phone icon" className="phoneIcon" href={"tel:"+phone}><FontAwesomeIcon icon={faPhone} /></a>
      );
    }
  }
  />
)