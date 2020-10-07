import React from "react"
import { StaticQuery, graphql } from "gatsby"
import '../css/nav.css';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "primary"}}) {
          edges {
            node {
              slug
              name
              items {
                title
                url
                object_slug
                type
                wordpress_children {
                  title
                  url
                  wordpress_id
                }
                wordpress_id
              }
            }
          }
        }
      }
    `}
    render={data => {

      return (
          <ul className="main-navigation">
            {data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
                  return (
                    <li 
                    id={"nav-menu-item-"+prop.wordpress_id}
                    >
                      <a
                        className="nav-link active"
                        href={prop.url}
                        alt={prop.title}
                      >
                        {prop.title}
                      </a>
                      <ul className="dropdown-menu">
                        {prop &&
                          prop.wordpress_children &&
                          prop.wordpress_children.map(child => {
                            return (
                              <li id={"nav-menu-item-"+prop.wordpress_id}>
                              <a
                                href={child.url}
                                alt={child.title}
                              >
                                {child.title}
                              </a>
                              </li>
                            )
                          })}
                      </ul>

                    </li>
                  )
                }
              )}
          </ul>
      )
    }}
  />
)