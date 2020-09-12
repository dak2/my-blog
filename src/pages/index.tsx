import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import "../styles/index.css";

export default function Index({ data } : { data: any }) {
  return (
    <Layout>
      <title>{"ホーム | KamiBlog"}</title>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node } : { node: any }) => (
          <div key={node.id} style={{marginBottom: '10%'}}>
            <Link
              to={node.fields.slug}
            >
              <div className="title">
                {node.frontmatter.title}{" "}
              </div>
            </Link>
            <div>
            — {node.frontmatter.date}
            </div>
            <p className="description">{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
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
