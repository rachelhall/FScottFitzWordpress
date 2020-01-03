import React from "react"
import { graphql, StaticQuery, Link } from "gatsby";
import styled from 'styled-components';
import SiteInfo from './SiteInfo';

const MainMenuWrapper = styled.div`
display: flex;
`
const MenuItem = styled(Link)`
color: white;
display: block;
padding: 8px 16px;
text-transform: uppercase;
text-decoration: none;
`

const MainMenuInner = styled.div`
max-width: 960px;
margin: 0 auto;
width: 960px;
display: flex;
height: 100%`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {
          name: {
            eq:"Main-menu"
          }
        }){
          edges{
            node{
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
      <MainMenuInner>
      {/* <SiteInfo /> */}
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <MenuItem to={`/${item.object_slug}`} key={item.title}>{item.title}</MenuItem>
          )
        )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
