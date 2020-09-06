import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import "../styles/blog-post.css";

export default function BlogPost({ data } : { data: any }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>Title : {post.frontmatter.title}</h2>
        <div >Date : {post.frontmatter.date}</div>
        <div className="pageContainer">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
        date
      }
    }
  }
`