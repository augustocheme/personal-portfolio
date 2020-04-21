import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro/Intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Augusto Cheme" />
    <Intro />
  </Layout>
)

export default IndexPage
