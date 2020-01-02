import React from 'react';
import Layout from '../../components/Layout'
import PortfolioItems from '../../components/PortfolioItems';
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export default( {pageContext} ) => (
    
    <Layout>
        <h1>
            {pageContext.title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <Button>Click Me!</Button>
        <Button primary>Pink Button</Button>
        <PortfolioItems />
    </Layout>
);