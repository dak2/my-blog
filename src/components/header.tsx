import React from "react"
import "typeface-kanit"
import { Link } from "gatsby";
import { css, StyleAttribute } from "glamor"

type Props = {
  headerText: string,
  styleAttribute?: StyleAttribute,
}

const headerTextStyle = css({
  fontFamily: "Kanit",
})

const linkStyle = css({
  textDecoration: 'none',
  color: '#000000',
})

class Header extends React.Component<Props, {}> {
  render() {
    return (
      <Link
        to="/"
        {...linkStyle}
      >
        <h1 {...css(headerTextStyle, this.props.styleAttribute)}>{this.props.headerText}</h1>
      </Link>
    );
  }
}

export default Header;
