import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeWarning from "../components/landscapewarning"
import TeamButton from "../components/teambutton"
import Controls from "../components/controls"
import { getFromLS, saveToLS } from "./utils"
import {
  engine_toggleOrder,
  engine_pointA,
  engine_pointB,
  engine_load,
  engine_save,
  engine_get,
} from "./engine"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "95vh",
    marginTop: "2.5vh",
  },
}))

const Home = () => {
  const classes = useStyles()
  const [phone, setPhone] = useState("0000")
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

  const [gameDone, setGameDone] = useState(false)
  const [matchDone, setMatchDone] = useState(false)

  const packSettings = () => {
    let settings = {}

    settings["phone"] = phone
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

    settings["gameDone"] = gameDone
    settings["matchDone"] = matchDone

    settings["engine"] = engine_save()
    //console.log('home::pack')
    //console.log(settings)
    settings = JSON.stringify(settings)
    saveToLS("allSettings", settings)
  }

  const unpackSettings = () => {
    let settings = getFromLS("allSettings")
    if (settings) {
      settings = JSON.parse(settings)
      //console.log('home::unpack')
      //console.log(settings)
        if (settings["engine"]) {
        engine_load(settings["engine"])
      }

      setPhone(settings.phone)
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

      setGameDone(settings.gameDone)
      setMatchDone(settings.matchDone)
    }
  }

  useEffect(() => {
    unpackSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    packSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score1, score2, label1, label2])

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

    engine_toggleOrder()
  }

  const updateFromEngine = () => {
    let gameA
    let gameB
    let matchA
    let matchB
    let gameDone
    let matchDone
    ;[gameA, gameB, matchA, matchB, gameDone, matchDone] = engine_get()

    //console.log([gameA, gameB, matchA, matchB, gameDone, matchDone])
    setScore1(gameA)
    setScore2(gameB)
    setMatch1(matchA)
    setMatch2(matchB)
    setGameDone(gameDone)
    setMatchDone(matchDone)
  }

  const onTeam1Click = () => {
    engine_pointA()
    updateFromEngine()
  }

  const onTeam2Click = () => {
    engine_pointB()
    updateFromEngine()
  }

  const onScoresClick = () => {
    packSettings()
    navigate("/scores/")
  }

  const onAboutClick = () => {
    packSettings()
    navigate("/about/")
  }

  const onSwapTeamsClick = () => {
    toggleUsThem()
    packSettings()
  }

  const onSettingsClick = () => {
    packSettings()
    navigate("/settings/")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <>
        <div className="home-vertical">
          <Grid
            className={classes.root}
            container
            spacing={0}
            justify="space-around"
            direction="column"
          >
            <TeamButton
              disabled={gameDone || matchDone}
              winner=""
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
              onSwapTeamsClick={onSwapTeamsClick}
              onSettingsClick={onSettingsClick}
            />
            <TeamButton
              disabled={gameDone || matchDone}
              winner=""
              horizontal={horizontal}
              color={color2}
              backgroundColor={backgroundColor2}
              label={label2}
              score={score2}
              onButtonClick={onTeam2Click}
            />
          </Grid>
        </div>
        <div className="home-horizontal">
          <LandscapeWarning />
        </div>
      </>
    </Layout>
  )
}

export default Home
