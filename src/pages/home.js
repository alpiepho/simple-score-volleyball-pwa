import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamButton from "../components/teambutton"
import Controls from "../components/controls"

import { initAuth } from "../scores/services/auth"
initAuth()

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}))

function getFromLS(key) {
  let ls = {}
  if (window.localStorage) {
    try {
      ls = window.localStorage.getItem("simple-score-volleyball")
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls
}

function saveToLS(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem("simple-score-volleyball", value)
  }
}

const IndexPage = () => {
  const classes = useStyles()
  const [horizontal, setHorizontal] = useState(false)

  const [color1, setColor1] = useState("white")
  const [backgroundColor1, setBackgroundColor1] = useState("red")
  const [label1, setLabel1] = useState("US")
  const [match1, setMatch1] = useState(0)
  const [score1, setScore1] = useState(0)

  const [color2, setColor2] = useState("white")
  const [backgroundColor2, setBackgroundColor2] = useState("blue")
  const [label2, setLabel2] = useState("THEM")
  const [match2, setMatch2] = useState(0)
  const [score2, setScore2] = useState(0)

  useEffect(() => {
    //unpackSettings()
  }, [])

  const packSettings = () => {
    let settings = {}

    settings["horizontal"] = horizontal

    settings["color1"] = color1
    settings["backgroundColor1"] = backgroundColor1
    settings["label1"] = label1
    settings["match1"] = match1
    settings["score1"] = score1

    settings["color2"] = color2
    settings["backgroundColor2"] = backgroundColor2
    settings["label2"] = label2
    settings["match2"] = match2
    settings["score2"] = score2

    saveToLS('allSettings', settings)
  }

  const unpackSettings = () => {
    let settings = getFromLS("allSettings")
    if (settings) {
      settings = JSON.parse(settings)

      setHorizontal(settings.horizontal)

      setColor1(settings.color1)
      setBackgroundColor1(settings.backgroundColor1)
      setLabel1(settings.label1)
      setMatch1(settings.match1)
      setScore1(settings.score1)

      setColor2(settings.color2)
      setBackgroundColor2(settings.backgroundColor2)
      setLabel2(settings.label2)
      setMatch2(settings.match2)
      setScore2(settings.score2)
    }
  }

  const toggleGoodGuys = () => {
    console.log(label1)
    if (label1 === "US") {
      setLabel1("GOOD GUYS")
      setLabel2("BAD GUYS")
    } else if (label1 === "THEM") {
      setLabel2("GOOD GUYS")
      setLabel1("BAD GUYS")
    } else if (label1 === "GOOD GUYS") {
      setLabel1("US")
      setLabel2("THEM")
    } else if (label1 === "BAD GUYS") {
      setLabel2("US")
      setLabel1("THEM")
    }
  }

  const toggleUsThem = () => {
    let color = color1
    let backgroundColor = backgroundColor1
    let label = label1
    let match = match1
    let score = score1

    setColor1(color2)
    setBackgroundColor1(backgroundColor2)
    setLabel1(label2)
    setMatch1(match2)
    setScore1(score2)

    setColor2(color)
    setBackgroundColor2(backgroundColor)
    setLabel2(label)
    setMatch2(match)
    setScore2(score)
  }

  const onTeam1Click = () => {
    setScore1(score1 + 1)
  }

  const onTeam2Click = () => {
    setScore2(score2 + 1)
  }

  const onAboutClick = () => {
    console.log("onAboutClick")
    packSettings()
    navigate("/")
  }

  const onScoresClick = () => {
    console.log("onScoresClick")
    //packSettings()
    //navigate('/scores/')
  }

  const onSettingsClick = () => {
    console.log("onSettingsClick")
    packSettings()
    navigate("/settings/")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Grid
        className={classes.root}
        container
        spacing={0}
        justify="space-around"
        direction="column"
      >
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
          onScoresClick={onScoresClick}
          onAboutClick={onAboutClick}
          onSettingsClick={onSettingsClick}
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
