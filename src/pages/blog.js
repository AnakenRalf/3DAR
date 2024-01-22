import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allFile.nodes.map((node) => (
        <li key={node.name}>{node.name}</li>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "mdx" } }) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage
