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
import MainMenu from './MainMenu'

import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`


  body{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`
const LayoutWrapper = styled.div`
  max-width:960px;
  margin: 0 auto;
  padding-left:10px;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
    {children}
    </LayoutWrapper>
  </div>
)


export default Layout
