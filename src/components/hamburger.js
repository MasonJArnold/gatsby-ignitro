import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu'
import Logo from '../components/logo';
import { StaticQuery, graphql } from "gatsby"

import '../css/hamburger.css';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "mobile"}}) {
          edges {
            node {
              slug
              name
              items {
                title
                url
                object_slug
                type
                wordpress_id
              }
            }
          }
        }
      }
    `}
    render={data => {
     return (
     <div className="hamburgerWrap">
      <Menu disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
       <div className="hamburgerLogoWrap">
       <Logo 
       className="hamburgerLogo flex-img" 
        />
        </div>
            {data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
                  return (
                  <a 
                  className="menu-item" 
                  href={prop.object_slug}>
                  {prop.title}</a>
                  )
                }
              )}
      </Menu>
     </div>
      )
    }}
  />
)