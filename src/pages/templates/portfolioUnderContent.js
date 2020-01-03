import React from 'react';
import Layout from '../../components/Layout'
import PortfolioItems from '../../components/PortfolioItems';
import styled, { css } from 'styled-components'


export default( {pageContext} ) => (
    
    <Layout>
        <h1>
            {pageContext.title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />

        <PortfolioItems />
    </Layout>
);