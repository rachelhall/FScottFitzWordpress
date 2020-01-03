import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
flex-grow: 1;
color: white;
margin: auto 0;
`

const SiteTitle = styled.div`
letter-spacing: 3px;
font-size: 32px;
font: 65px 'Muli', Helvetica , Arial, sans-serif;
color: #FFFAFA;
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
   `} 
   render={props => (
       <SiteInfoWrapper>
       <SiteTitle>
        {props.allWordpressSiteMetadata.edges[0].node.name}
       </SiteTitle>
       <div>
        {props.allWordpressSiteMetadata.edges[0].node.description}
       </div>
       </SiteInfoWrapper>
       
)
   }
   />
)

export default SiteInfo;