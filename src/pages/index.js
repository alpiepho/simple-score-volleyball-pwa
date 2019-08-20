import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnyCounter from "../components/anycounter"

import { initAuth } from '../app/services/auth'
initAuth()

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AnyCounter />
    <Link to="/app/">
      <b>Go to App (with Netlify Identity)</b>
    </Link>{" "}
  </Layout>
)

export default IndexPage
