import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/layout/layout'
import Seo from '../../components/seo/seo'

const StyledFrame = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;

  & h1 {
    color: #022;
    font-size: 2rem;
  }

  & h2 {
    font-size: 2rem;
    background-color: azure;
  }
`

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <StyledFrame>{children}</StyledFrame>
    </Layout>
  )
}

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
