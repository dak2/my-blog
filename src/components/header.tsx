import React from "react"
import "typeface-kanit"
import { Link } from "gatsby";
import { css, StyleAttribute } from "glamor"

type Props = {
  headerText: string,
  styleAttribute?: StyleAttribute,
}

class Header extends React.Component<Props, {}> {
  render() {
    return (
      <Link
        to="/"
      >
        <h1 {...this.props.styleAttribute}>{this.props.headerText}</h1>
      </Link>
    );
  }
}

export default Header;
