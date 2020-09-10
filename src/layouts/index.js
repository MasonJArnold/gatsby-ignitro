/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import React from "react"

import Header from '../containers/header'

import '../css/grid.css';
import '../css/global.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>
    {children}
    </div>
  </div>
)


export default Layout
