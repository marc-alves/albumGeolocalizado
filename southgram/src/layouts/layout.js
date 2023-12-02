import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/layout.css";
import "../styles/styles.css";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}