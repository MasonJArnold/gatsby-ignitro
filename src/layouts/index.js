/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from '../containers/header';
import Footer from '../containers/footer'
import Hamburger from '../components/hamburger';

import '../css/grid.css';
import '../css/global.css';

const Layout = ({ children }) => (
  
  <div id="outer-container">
  	<Hamburger />
	<main id="page-wrap">
		<Header />
		{children}
		<Footer />
	</main>
  </div>
)


export default Layout
