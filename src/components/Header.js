import React from "react"
import { graphql, StaticQuery, Link } from "gatsby";
import styled from 'styled-components';
import SiteInfo from './SiteInfo';
import MainMenu from '../components/MainMenu'

const HeaderContainer = styled.div`
background-color: #222;
min-height: 300px`

const HeroHeading = styled.h1`
font: 65px Muli,Helvetica,Arial,sans-serif;
    margin: 0 0 10px;
    padding: 0;
    color: snow;
    font-weight: 100;`

const Header = () => {
    return <HeaderContainer>
        <HeroHeading>Thomas Harbin</HeroHeading>
        <MainMenu />
    </HeaderContainer>

};

export default Header;