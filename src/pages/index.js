import * as React from "react"

import Layout from "@components/layout"
import Seo from "@components/seo"
import MainVisual from "@components/page/home/mainVisual"
import Intro from "@components/page/home/intro"
import Download from "../components/page/home/download"
import Articles from "../components/page/home/articles"

const IndexPage = () => (
  <Layout>
    <MainVisual />
    <Intro />
    <Download />
    <Articles />
    <Download />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
