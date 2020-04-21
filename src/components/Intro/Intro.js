import React from "react"
import Separator from "../Separator/Separator"
import ProjectCard from "../Projects/ProjectCard"

const Intro = () => {
  return (
    <div
      style={{
        flexGrow: `1`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
      }}
    >
      <h1 style={{ fontSize: `70px`, marginTop: `0px`, marginBottom: `24px` }}>
        Hello.
      </h1>
      <strong style={{ fontSize: `30px` }}>
        My name is Augusto and I’m a front end developer.
      </strong>
      <p
        style={{
          fontSize: `24px`,
          fontWeight: `300`,
          marginBottom: `0px`,
        }}
      >
        I am currently working at{" "}
        <a
          href="https://beyoung.com.br"
          target="_blank"
          style={{
            borderBottom: `1px dotted #000`,
            textDecoration: `none`,
            color: `#000`,
          }}
        >
          <b>BEYOUNG</b>
        </a>
        , a Brazilian beauty products e-commerce.
      </p>
      <Separator />
      <ProjectCard />
    </div>
  )
}

export default Intro
