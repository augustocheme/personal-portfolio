/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ContentContainer from "./ContentContainer/ContentContainer"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        background: "#EEE",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFF",
          flexGrow: 1,
          borderRadius: "5px",
          display: `flex`,
        }}
      >
        <ContentContainer>
          <Header />
          {children}
          <Footer />
        </ContentContainer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
