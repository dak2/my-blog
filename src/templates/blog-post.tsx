import React from "react"
import { graphql } from "gatsby"
import { css } from "glamor"
import Header from "../components/header";

const topPageContainerStyle = css({
  textAlign: 'center',
  fontFamily: "Kanit",
})

const topPageHeaderStyle = css({
  fontSize: 60,
  textAlign: 'center',
  borderBottom: 'medium solid #000000',
})

const pageContentsContainerStyle = css({
  margin: 'auto',
  width: '40%',
  textAlign: 'left',
  fontSize: 20,
})

export default function BlogPost({ data } : { data: any }) {
  const post = data.markdownRemark
  return (
    <div {...topPageContainerStyle}>
      <Header
        headerText={"Kami Blog"}
        styleAttribute={topPageHeaderStyle}
      />
      <div {...topPageContainerStyle}>
        <h1>Title : {post.frontmatter.title}</h1>
        <div >Date : {post.frontmatter.date}</div>
        <div {...pageContentsContainerStyle}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
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