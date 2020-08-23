import React from "react"
import "typeface-kanit"
import { css, StyleAttribute } from "glamor"

type Props = {
  headerText: string,
  styleAttribute?: StyleAttribute,
}

const headerTextStyle = css({
  fontFamily: "Kanit",
})

class Header extends React.Component<Props, {}> {
  render() {
    return (
      <h1 {...css(headerTextStyle, this.props.styleAttribute)}>{this.props.headerText}</h1>
    );
  }
}

export default Header;
