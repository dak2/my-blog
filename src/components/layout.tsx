import React from "react";
import Header from "../components/header";
import "typeface-kanit";
import "../styles/layout.scss";

export default function Layout({ children } : { children: any }) {
  return (
    <div className="commonContainer">
      <Header 
        headerText={"Kami Blog"}
      />
      <div>
        {children}
      </div>
    </div>
  )
}
