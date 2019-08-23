import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import useLocalStorage from 'react-use-localstorage';

import Layout from "../components/layout"
import SEO from "../components/seo"
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
  const [allSettings, setAllSettings] = useLocalStorage('allSettings', '')

  useEffect(() => {
    uppackSettings()
  },[]);

  const packSettings = () => {
    let settings = {}
    settings['usThem'] = usThem
    settings['usThem'] = usThem
    settings['goodGuys'] = goodGuys
    settings['colorUs'] = colorUs
    settings['backgroundColorUs'] = backgroundColorUs
    settings['backgroundColorThem'] = backgroundColorThem
    settings['horizontal'] = horizontal
    settings['matchUs'] = matchUs
    settings['scoreUs'] = scoreUs
    settings['matchThem'] = matchThem
    settings['scoreThem'] = scoreThem
    settings = JSON.stringify(settings)
    setAllSettings(settings)
  }

  const uppackSettings = () => {
    let settings = allSettings
    if (settings.length) {
      settings = JSON.parse(settings)
      setUsThem(settings.usThem)
      setGoodGuys(settings.goodGuys)
      setColorUs(settings.colorUs)
      setBackgroundColorUs(settings.backgroundColorUs)
      setColorThem(settings.colorThem)
      setBackgroundColorThem(settings.backgroundColorThem)
      setHorizontal(settings.horizontal)
      setMatchUs(settings.matchUs)
      setScoreUs(settings.scoreUs)
      setMatchThem(settings.matchThem)
      setScoreThem(settings.scoreThem)
    }
  }

  const getTeamColor = (teamNumber) => {
    let value1 = colorUs
    let value2 = colorThem
  
    if (!usThem) {
      ;[value1, value2] = [value2, value1]
    }
    if (teamNumber === 1) return value1
    return value2
  }

  const getTeamBackgroundColor = (teamNumber) => {
    let value1 = backgroundColorUs
    let value2 = backgroundColorThem
  
    if (!usThem) {
      ;[value1, value2] = [value2, value1]
    }
    if (teamNumber === 1) return value1
    return value2
  }


  const getTeamLabel = (teamNumber) => {
    let value1 = "US"
    let value2 = "THEM"
    if (goodGuys) {
      value1 = "GOOD GUYS"
      value2 = "BAD GUYS"
    }
    if (!usThem) {
      ;[value1, value2] = [value2, value1]
    }
    if (teamNumber === 1) return value1
    return value2
  }

  const getTeamScore = (teamNumber) => {
    let value1 = scoreUs
    let value2 = scoreThem
  
    if (!usThem) {
      ;[value1, value2] = [value2, value1]
    }
    if (teamNumber === 1) return value1
    return value2
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

  const onAboutClick = () => {
    console.log("onAboutClick")
    packSettings()
    navigate('/about/')
  }

  const onScoresClick = () => {
    console.log("onScoresClick")
    packSettings()
    navigate('/scores/')
  }

  const onSettingsClick = () => {
    console.log("onSettingsClick")
    packSettings()
    navigate('/settings/')
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
          color={getTeamColor(1)}
          backgroundColor={getTeamBackgroundColor(1)}
          label={getTeamLabel(1)}
          score={getTeamScore(1)}
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
          color={getTeamColor(2)}
          backgroundColor={getTeamBackgroundColor(2)}
          label={getTeamLabel(2)}
          score={getTeamScore(2)}
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

