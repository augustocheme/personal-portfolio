import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import twitter from "../../images/twitter.svg"

const Footer = ({ socialMedia }) => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `flex-end`,
        paddingBottom: `30px`,
      }}
    >
      <a href="" target="_blank">
        <img style={{ width: `20px` }} src={github} />
      </a>
      <a href="" target="_blank">
        <img style={{ width: `20px`, marginLeft: `20px` }} src={linkedin} />
      </a>
      <a href="" target="_blank">
        <img style={{ width: `20px`, marginLeft: `20px` }} src={twitter} />
      </a>
    </div>
  )
}

export default Footer
