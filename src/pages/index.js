import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Grid, Paper, TextField, Typography, ClickAwayListener } from "@material-ui/core"
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
  const [usThem, setUsThem] = useState(true)
  const [goodGuys, setGoodGuys] = useState(false)
  const [colorUs, setColorUs] = useState("white")
  const [backgroundColorUs, setBackgroundColorUs] = useState("red")
  const [colorThem, setColorThem] = useState("white")
  const [backgroundColorThem, setBackgroundColorThem] = useState("blue")
  const [horizontal, setHorizontal] = useState(false)
  const [matchUs, setMatchUs] = useState(0)
  const [scoreUs, setScoreUs] = useState(0)
  const [matchThem, setMatchThem] = useState(0)
  const [scoreThem, setScoreThem] = useState(0)
  // score

  let label1 = "US"
  let label2 = "THEM"
  if (goodGuys) {
    label1 = "GOOD GUYS"
    label2 = "BAD GUYS"
  }
  let color1 = colorUs
  let backgroundColor1 = backgroundColorUs
  let color2 = colorThem
  let backgroundColor2 = backgroundColorThem

  let match1 = matchUs
  let match2 = matchThem
  let score1 = scoreUs
  let score2 = scoreThem

  if (!usThem) {
    ;[label1, label2] = [label2, label1]
    ;[color1, color2] = [color2, color1]
    ;[backgroundColor1, backgroundColor2] = [backgroundColor2, backgroundColor1]
    ;[match1, match2] = [match2, match1]
    ;[score1, score2] = [score2, score1]
  }

  const onTeam1Click = () => {
    console.log("onButtonClick1")
    if (usThem) {
      setScoreUs(scoreUs + 1)
    }
    else {
      setScoreThem(scoreThem + 1)
    }

  }

  const onTeam2Click = () => {
    console.log("onButtonClick1")
    if (usThem) {
      setScoreThem(scoreThem + 1)
    }
    else {
      setScoreUs(scoreUs + 1)
    }
  }


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
        <TeamButton
          horizontal={horizontal}
          color={color1}
          backgroundColor={backgroundColor1}
          label={label1}
          score={score1}
          onButtonClick={onTeam1Click}
        />
        <Controls
          horizontal={horizontal}
          color="black"
          backgroundColor="gray"
        />
        <TeamButton
          horizontal={horizontal}
          color={color2}
          backgroundColor={backgroundColor2}
          label={label2}
          score={score2}
          onButtonClick={onTeam2Click}
        />
      </Grid>
    </Layout>
  )
}

export default IndexPage


// TODO 
// - double click 
// - no rotate 
// - scoring engine
// - local storage
// - about page 
// - settings page 
// - scores page  

