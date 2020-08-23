import React from "react"
import { Link, graphql } from "gatsby"
import "typeface-kanit"
import { css } from "glamor"
import Header from "../components/header";

const topPageHeaderStyle = css({
  fontSize: 50,
  textAlign: 'center',
  borderBottom: 'medium solid #000000',
})

export default function Home({ data } : { data: any }) {
  return (
    <div>
      <Header 
        headerText={"Kami Blog"}
        styleAttribute={topPageHeaderStyle} 
      />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node } : { node: any }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
          </Link>
          <span>
          — {node.frontmatter.date}
          </span>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
