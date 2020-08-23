import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About({ data } : { data: any }) {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Kami Blog" />
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`