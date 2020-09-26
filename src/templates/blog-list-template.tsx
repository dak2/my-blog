import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout";
import "../styles/blog-list-template.scss";

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

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(format: MARKDOWN, pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
