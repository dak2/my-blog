import React from "react";
import "typeface-kanit";
import "../styles/footer.scss";

type Props = {
  footerText: string,
}

class Footer extends React.Component<Props, {}> {
  render() {
    return (
      <div className="copyright">© {new Date().getFullYear()} {this.props.footerText}</div>
    );
  }
}

export default Footer;
