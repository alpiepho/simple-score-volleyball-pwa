import React, { useState, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Settings from "../components/settings"
import Scores from "../components/scores"

import TeamButton from "../components/teambutton"
import Controls from "../components/controls"
import { getFromLS, saveToLS } from "./utils"
import {
  engine_pointA,
  engine_pointB,
  engine_load,
  engine_save,
  engine_get,
} from "./engine"

const useStyles = makeStyles(theme => ({
  rootVertical: {
    flexGrow: 1,
    height: "95vh",
    marginTop: "2.5vh",
  },
  rootHorizontal: {
    flexGrow: 1,
    height: "95vh",
    width: "95vw",
    marginTop: "2.5vh",
  },
}))

const Home = () => {
  const classes = useStyles()

  const [page, setPage] = useState("home")

  const [phone, setPhone] = useState("+18885550000")
  const [phones, setPhones] = useState("")

  const [color1, setColor1] = useState("white")
  const [backgroundColor1, setBackgroundColor1] = useState("red")
  const [label1, setLabel1] = useState("US")
  const [possession1, setPossession1] = useState(">")
  const [match1, setMatch1] = useState(0)
  const [score1, setScore1] = useState(0)

  const [color2, setColor2] = useState("white")
  const [backgroundColor2, setBackgroundColor2] = useState("blue")
  const [label2, setLabel2] = useState("THEM")
  const [possession2, setPossession2] = useState(" ")
  const [match2, setMatch2] = useState(0)
  const [score2, setScore2] = useState(0)

  const [gameDone, setGameDone] = useState(false)
  const [matchDone, setMatchDone] = useState(false)

  const packSettings = () => {
    let settings = {}

    settings["phone"] = phone
    settings["phones"] = phones

    settings["color1"] = color1
    settings["backgroundColor1"] = backgroundColor1
    settings["label1"] = label1
    settings["possession1"] = possession1
    settings["match1"] = match1
    settings["score1"] = score1

    settings["color2"] = color2
    settings["backgroundColor2"] = backgroundColor2
    settings["label2"] = label2
    settings["possession2"] = possession2
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
      setPhones(settings.phones)

      setColor1(settings.color1)
      setBackgroundColor1(settings.backgroundColor1)
      setLabel1(settings.label1)
      if (settings.possession1) {
        setPossession1(settings.possession1)
      }
      setMatch1(settings.match1)
      setScore1(settings.score1)

      setColor2(settings.color2)
      setBackgroundColor2(settings.backgroundColor2)
      setLabel2(settings.label2)
      if (settings.possession2) {
        setPossession2(settings.possession2)
      }
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
  }, [score1, score2, label1, label2, possession1, possession2])

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

  const onTeam1Click = event => {
    engine_pointA()
    updateFromEngine()
  }

  const onTeam2Click = () => {
    engine_pointB()
    updateFromEngine()
  }

  const onAboutClick = () => {
    packSettings()
    setPage("about")
  }

  const onHomeClick = () => {
    packSettings() // from possible changes by about/settings etc.
    setPage("home")
  }

  const onScoresClick = () => {
    packSettings()
    setPage("scores")
  }

  const onSwapPossesionClick = () => {
    //toggleUsThem()

    if (possession1 === " ") {
      setPossession1(">")
      setPossession2(" ")
    } else {
      setPossession1(" ")
      setPossession2(">")
    }
    packSettings()
  }

  const onSettingsClick = () => {
    packSettings()
    setPage("settings")
  }

  const buildButton1 = horizontal => {
    return (
      <TeamButton
        horizontal={horizontal}
        disabled={gameDone || matchDone}
        winner=""
        color={color1}
        backgroundColor={backgroundColor1}
        label={possession1 + label1}
        score={score1}
        onButtonClick={onTeam1Click}
      />
    )
  }

  const buildControls = horizontal => {
    return (
      <Controls
        horizontal={horizontal}
        color="black"
        backgroundColor="gray"
        onScoresClick={onScoresClick}
        onAboutClick={onAboutClick}
        onSwapPossesionClick={onSwapPossesionClick}
        onSettingsClick={onSettingsClick}
      />
    )
  }

  const buildButton2 = horizontal => {
    return (
      <TeamButton
        horizontal={horizontal}
        disabled={gameDone || matchDone}
        winner=""
        color={color2}
        backgroundColor={backgroundColor2}
        label={possession2 + label2}
        score={score2}
        onButtonClick={onTeam2Click}
      />
    )
  }

  return (
    <>
      <About page={page} onHomeClick={onHomeClick} />
      {page === "settings" ? (
        <Settings
          page={page}
          onHomeClick={onHomeClick}
          phone={phone}
          setPhone={setPhone}
          phones={phones}
          setPhones={setPhones}
          color1={color1}
          setColor1={setColor1}
          backgroundColor1={backgroundColor1}
          setBackgroundColor1={setBackgroundColor1}
          label1={label1}
          setLabel1={setLabel1}
          possession1={possession1}
          setPossession1={setPossession1}
          match1={match1}
          setMatch1={setMatch1}
          score1={score1}
          setScore1={setScore1}
          color2={color2}
          setColor2={setColor2}
          backgroundColor2={backgroundColor2}
          setBackgroundColor2={setBackgroundColor2}
          label2={label2}
          setLabel2={setLabel2}
          possession2={possession2}
          setPossession2={setPossession2}
          match2={match2}
          setMatch2={setMatch2}
          score2={score2}
          setScore2={setScore2}
          gameDone={gameDone}
          setGameDone={setGameDone}
          matchDone={matchDone}
          setMatchDone={setMatchDone}
        />
      ) : (
        ""
      )}
      {page === "scores" ? (
        <Scores
          page={page}
          onHomeClick={onHomeClick}
          phone={phone}
          phones={phones}
          color1={color1}
          backgroundColor1={backgroundColor1}
          label1={label1}
          possession1={possession1}
          match1={match1}
          score1={score1}
          color2={color2}
          backgroundColor2={backgroundColor2}
          label2={label2}
          possession2={possession2}
          match2={match2}
          score2={score2}
          gameDone={gameDone}
          matchDone={matchDone}
        />
      ) : (
        ""
      )}
      {page === "home" ? (
        <Layout>
          <SEO title="Home" />
          <>
            <div className="home-vertical">
              <Grid
                className={classes.rootVertical}
                container
                spacing={0}
                justify="space-around"
                direction="column"
              >
                {buildButton1(false)}
                {buildControls(false)}
                {buildButton2(false)}
              </Grid>
            </div>
            <div className="home-horizontal">
              <Grid
                className={classes.rootHorizontal}
                container
                spacing={0}
                justify="space-around"
                direction="column"
              >
                <Grid item>
                  <Grid
                    container
                    spacing={0}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid item xs={5}>
                      {buildButton1(true)}
                    </Grid>
                    <Grid item xs={2}>
                      {buildControls(true)}
                    </Grid>
                    <Grid item xs={5}>
                      {buildButton2(true)}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </>
        </Layout>
      ) : (
        ""
      )}
    </>
  )
}

export default Home
