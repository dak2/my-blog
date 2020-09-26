import React, { Component } from "react"
import { Link } from "gatsby"

type Props = {
  blogListPagenate?: any,
  blogPostPagenate?: any,
}

class Navigation extends Component<Props, {}> {
  render() {
    const { currentPage, numPages } = this.props.blogListPagenate
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const blogListPagenation = (
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link to={`/${i === 0 ? '' : i + 1}`}>
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    )

    return (
      blogListPagenation
    )
  }

}

export default Navigation;