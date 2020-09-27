import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout";
import "../styles/blogPost.scss";
import "prismjs/themes/prism-tomorrow.css"

export default function BlogPost({ data, pageContext } : any) {
  const post = data.markdownRemark
  return (
    <Layout>
      <title>{post.frontmatter.title}</title>
      <div className="pageContainer">
        <div className="pageTitle">{post.frontmatter.title}</div>
        <div className="pageCreatedAt">
          <FontAwesomeIcon icon={faClock} />
          <span>
            {post.frontmatter.date}
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`