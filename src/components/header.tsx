import React from "react"
import "typeface-kanit"
import { Link } from "gatsby";
import "../styles/header.scss";

type Props = {
  headerText: string,
}

class Header extends React.Component<Props, {}> {
  render() {
    return (
      <Link
        to="/"
      >
        <h1>{this.props.headerText}</h1>
      </Link>
    );
  }
}

export default Header;
