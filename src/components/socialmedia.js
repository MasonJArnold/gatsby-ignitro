import React from 'react';
import '../css/socialmedia.css';
import { StaticQuery, graphql } from "gatsby"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfOptions {
            nodes {
              options {
                facebook
                instagram
                linkedin
                twitter
                youtube
              }
            }
          }
      }
    `}
    render={data => {

      let facebook = data.allWordpressAcfOptions.nodes[0].options.facebook;
      let twitter = data.allWordpressAcfOptions.nodes[0].options.twitter;
      let linkedin = data.allWordpressAcfOptions.nodes[0].options.linkedin;
      let youtube = data.allWordpressAcfOptions.nodes[0].options.youtube;
      let instagram = data.allWordpressAcfOptions.nodes[0].options.instagram;

      return (
         <div className="socialWrapper">
         <a rel="noreferrer" aria-label="social link" target="_blank" href={facebook}><FontAwesomeIcon icon={faFacebookSquare} /></a>
         <a rel="noreferrer" aria-label="social link" target="_blank" href={twitter}><FontAwesomeIcon icon={faTwitterSquare} /></a>
         <a rel="noreferrer" aria-label="social link" target="_blank" href={linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
         <a rel="noreferrer" aria-label="social link" target="_blank" href={youtube}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
         <a rel="noreferrer" aria-label="social link" target="_blank" href={instagram}><FontAwesomeIcon icon={faInstagramSquare} /></a>
         </div>
      );
    }
  }
  />
)