import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnyCounter from "../components/anycounter"

import { initAuth } from '../scores/services/auth'
initAuth()

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/scores/">
      <b>Go to Scores (with Netlify Identity)</b>
    </Link>{" "}
    <AnyCounter />
  </Layout>
)

export default IndexPage
