import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const BasicInfoWrapper = styled.div`
    display: flex;
    color:white ;
    padding:10px 10px 10px 0;
    width:auto;
`

const SiteTitle = styled.div`
    font-weight:bold;
    padding:15px 0 0 10px;
`

const Sitelogo = styled.div`
    width:50px;
    height:50px;
    margin-left:10px;
    background-size:100%;
    background-repeat: no-repeat;
    background-image:url(https://www.ignitro.com/wp-content/themes/ignitro/images/primarylogo-min.png) !important;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata{
             edges{
            node{
              name
              description
            }
          } 
        }
      }
      
    `
    } render = {props => (
        <BasicInfoWrapper>
            <Link to="/">
            <Sitelogo>
                
            </Sitelogo>
            </Link>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            
        </BasicInfoWrapper>
    )}/>
);

export default SiteInfo;