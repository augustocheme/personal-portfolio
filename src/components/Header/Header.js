import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        paddingTop: `30px`,
      }}
    >
      <span style={{ fontSize: `20px`, fontWeight: `300` }}>Logo</span>
      <div>
        <Link
          activeStyle={{ borderBottom: `2px solid #000` }}
          style={{
            fontSize: `20px`,
            fontWeight: `300`,
            color: `#000`,
            textDecoration: `none`,
            marginRight: `30px`,
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          activeStyle={{ borderBottom: `2px solid #000` }}
          style={{
            fontSize: `20px`,
            fontWeight: `300`,
            color: `#000`,
            textDecoration: `none`,
            marginRight: `30px`,
          }}
          to="/work"
        >
          Work
        </Link>
        <Link
          activeStyle={{ borderBottom: `2px solid #000` }}
          style={{
            fontSize: `20px`,
            fontWeight: `300`,
            color: `#000`,
            textDecoration: `none`,
            marginRight: `30px`,
          }}
          to="/about"
        >
          About
        </Link>
        <Link
          activeStyle={{ borderBottom: `2px solid #000` }}
          style={{
            fontSize: `20px`,
            fontWeight: `300`,
            color: `#000`,
            textDecoration: `none`,
          }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
