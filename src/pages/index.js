import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import TeamButton from "../components/teambutton"
import Controls from "../components/controls"

import { initAuth } from "../scores/services/auth"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}))

initAuth()

const IndexPage = () => {
  const classes = useStyles()
  const [goodGuys, setGoodGuys] = useState(false)

  let label1 = "US"
  let label2 = "THEM"
  if (goodGuys) {
    label1 = "GOOD GUYS"
    label2 = "BAD GUYS"  
  }
  let score1 = 23
  let score2= 5

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Link to="/scores/">
        <b>Go to Scores</b>
      </Link>{" "} */}
      <Grid
        className={classes.root}
        container
        spacing={0}
        justify="space-around"
        direction="column"
      >
          {/* <Title label="Simple Score - Volleyball"/> */}
          <TeamButton label={label1} score={score1} />
          <Controls />
          <TeamButton label={label2} score={score2} />
      </Grid>
    </Layout>
  )
}

export default IndexPage
