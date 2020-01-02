import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"

const FeaturedImaged = styled.img`
  max-width: 300px;
  margin: 16px 0;
`
const Portfolio = ({ pageContext }) => {
  if (!pageContext) {
    return null
  }

  const portfolioURL =
    pageContext && pageContext.acf && pageContext.acf.portfolio_url
      ? pageContext.acf.portfolio_url
      : ""

  const imageURL =
    pageContext &&
    pageContext.featured_media &&
    pageContext.featured_media.source_url
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <strong>Website url:</strong>
      <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
        {portfolioURL}
      </a>
      <div>
        <FeaturedImaged src={imageURL} />
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
    </Layout>
  )
}

Portfolio.defaultProps = {
  pageContext: {
    title: "page title",
    featured_media: {
      source_url: "",
    },
    content: "there is no content",
  },
}

export default Portfolio
