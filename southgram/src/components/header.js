import * as React from "react"
import { Link } from "gatsby"

export const Header = () => {
  return (
    <div className="header">
      <div className="container h-100">
        <div className="d-flex align-items-center justify-content-center h-100">
          <img 
            className="header-image"
            src="https://png.pngtree.com/png-vector/20220822/ourmid/pngtree-south-america-sketch-map-hand-drawn-illustration-vector-png-image_14383152.png" />
          <Link to="/" className="header-title">SouthGram</Link>
        </div>
      </div>
    </div>
  )
}