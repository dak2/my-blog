import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "typeface-kanit";
import "../styles/layout.scss";

export default function Layout({ children } : { children: any }) {
  const blogTitle = "Kami Blog";
  return (
    <div className="commonContainer">
      <Header 
        headerText={blogTitle}
      />
      <div>
        {children}
      </div>
      <Footer
        footerText={blogTitle}
      />
    </div>
  )
}
