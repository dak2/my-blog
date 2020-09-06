import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header";
import Layout from "../components/layout";

// const topPageHeaderStyle = css({
//   fontSize: 60,
//   textAlign: 'center',
//   borderBottom: 'medium solid #000000',
// })

// const topPageContainerStyle = css({
//   textAlign: 'center',
//   fontFamily: "Kanit",
// })

// const pageListContainerStyle = css({
//   margin: 'auto',
//   textAlign: 'left',
//   width: '40%',
// })

// const pageTitleStyle = css({
//   fontSize: 27,
// })

// const linkStyle = css({
//   textDecoration: 'none',
//   color: 'rgb(3,111,185)',
//   fontWeight: 'bold',
// })

export default function Home({ data } : { data: any }) {
  return (
    <Layout>
      <div >
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node } : { node: any }) => (
          <div key={node.id} style={{marginBottom: '10%'}}>
            <Link
              to={node.fields.slug}
            >
              <div>
                {node.frontmatter.title}{" "}
              </div>
            </Link>
            <div>
            — {node.frontmatter.date}
            </div>
            <p>{node.excerpt}</p>
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
