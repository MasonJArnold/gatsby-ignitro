// src/templates/page/index.js

import React from "react"
import Layout from '../components/layout'
import BeerItems from '../components/BeerItems'

export default ({pageContext}) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <BeerItems/>
        
    </Layout>  
);