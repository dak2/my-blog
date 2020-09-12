import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout";
import "../styles/index.scss";

export default function Index({ data } : { data: any }) {
  return (
    <Layout>
      <title>{"ホーム | Kami Blog"}</title>
      <div>
        {data.allMarkdownRemark.edges.map(({ node } : { node: any }) => (
          <div key={node.id} className="articleContent">
            <Link
              to={node.fields.slug}
            >
              <div className="articleTitle">
                {node.frontmatter.title}{" "}
              </div>
            </Link>
            <div className="articleCreatedAt">
              <FontAwesomeIcon icon={faClock} />
              <span>
                {node.frontmatter.date}
              </span>
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
