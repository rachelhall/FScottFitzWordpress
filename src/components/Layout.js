import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from '../components/Header'
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');

body {
  font-family: 'Open Sans', sans-serif; 
  margin: 0;
  padding: 0;
}
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
