import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo/seo'
import { CurrentMainPost } from '../../components/CurrentMainPost'
import { ListItem } from '../../components/ListItem'

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <CurrentMainPost data={data} />

      <div className=" mt-5 flex flex-col items-center "></div>
      {data.allMdx.nodes.slice(1).map((node) => (
        <article key={node.id} className="bg-gray-200_02 p-3 gap-10 my-5">
          <ListItem
            id={node.id}
            imgAlt="rectangleNine"
            imgSrc={`/${node.frontmatter.coverImage.relativePath}`}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            tags={node.frontmatter.tags}
            dateOfPublication={node.frontmatter.date}
            description={node.frontmatter.shortdescription}
          />
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          tags
          shortdescription
          coverImage {
            relativePath
          }
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage
