import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import { initAuth } from "../scores/services/auth"
initAuth()

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
