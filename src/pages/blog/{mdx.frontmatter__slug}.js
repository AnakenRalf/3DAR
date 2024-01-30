import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/layout/layout'
import { PostPage } from '../../components/PostPage'
import Seo from '../../components/seo/seo'

const StyledFrame = styled.div`
  margin: auto;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: 100%;
  color: #022;
  background-color: #f8f8f8;

  & h1 {
    font-weight: bold;
    font-size: 2.2rem;
    padding: 0.5rem;
    text-indent: 30px;
  }

  & h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 0.5rem;
    padding: 0.5rem;
    text-indent: 30px;
  }
  & h3 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem;
    text-indent: 30px;
  }
  & p,
  ol {
    font-size: 1.3rem;
    padding: 0.5rem;
    text-align: justify;
    text-indent: 30px;
    letter-spacing: -0.016em;
  }
  & ol {
    font-size: 1rem;
    list-style-type: decimal;
    list-style-position: inside;
  }
  & li {
    line-height: 1.5rem;
    font-size: 1.1rem;
  }
`

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <PostPage data={data}>
        <StyledFrame>{children}</StyledFrame>
      </PostPage>
    </Layout>
  )
}

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        tags
        coverimage
        altTextCoverImage
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
