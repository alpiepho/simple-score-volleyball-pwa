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
  engine_finishGame,
  engine_finishMatch,
  engine_undo,
  engine_resetGame,
  engine_resetMatch,
  engine_toggleOrder,
  engine_setBase,
  engine_setAuto,
} from "./engine"

const uuidv4 = require("uuid/v4")

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

  const [userid, setUserid] = useState("user")

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

  const [gameGuid, setGameGuid] = useState(uuidv4())
  const [gameStartTs, setGameStartTs] = useState(Date.now())
  const [gameModifiedTs, setGameModifiedTs] = useState(Date.now())
  const [matchGuid, setMatchGuid] = useState(uuidv4())
  const [matchStartTs, setMatchStartTs] = useState(Date.now())
  const [matchModifiedTs, setMatchModifiedTs] = useState(Date.now())

  const [autoSideOut, setAutoSideOut] = useState(true)

  const [autoGameFinish, setAutoGameFinish] = useState(true)
  const [autoMatchFinish, setAutoMatchFinish] = useState(true)
  const [autoGamePoints, setAutoGamePoints] = useState(25)
  const [autoLastGamePoints, setAutoLastGamePoints] = useState(15)
  const [autoMatchGames, setAutoMatchGames] = useState(3)

  const [autoPostMatchStart, setAutoPostMatchStart] = useState(true)
  const [autoPostGamePoint, setAutoPostGamePoint] = useState(false) // TODO: too much data?
  const [autoPostGameFinish, setAutoPostGameFinish] = useState(true)
  const [autoPostMatchCount, setAutoPostMatchCount] = useState(true)
  const [autoPostMatchFinish, setAutoPostMatchFinish] = useState(true)

  const packSettings = () => {
    let settings = {}

    settings["userid"] = userid
    //settings["phone"] = phone
    //settings["phones"] = phones

    settings["color1"] = color1
    settings["backgroundColor1"] = backgroundColor1
    settings["label1"] = label1

    settings["color2"] = color2
    settings["backgroundColor2"] = backgroundColor2
    settings["label2"] = label2

    settings["gameGuid"] = gameGuid
    settings["gameStartTs"] = gameStartTs
    settings["gameModifiedTs"] = gameModifiedTs
    settings["matchGuid"] = matchGuid
    settings["matchStartTs"] = matchStartTs
    settings["matchModifiedTs"] = matchModifiedTs

    settings["autoPostMatchStart"] = autoPostMatchStart
    settings["autoPostGamePoint"] = autoPostGamePoint
    settings["autoPostGameFinish"] = autoPostGameFinish
    settings["autoPostMatchCount"] = autoPostMatchCount
    settings["autoPostMatchFinish"] = autoPostMatchFinish

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

      setUserid(settings.userid)

      setColor1(settings.color1)
      setBackgroundColor1(settings.backgroundColor1)
      setLabel1(settings.label1)

      setColor2(settings.color2)
      setBackgroundColor2(settings.backgroundColor2)
      setLabel2(settings.label2)

      setGameGuid(settings.gameGuid)
      setGameStartTs(settings.gameStartTs)
      setGameModifiedTs(settings.gameModifiedTs)
      setMatchGuid(settings.matchGuid)
      setMatchStartTs(settings.matchStartTs)
      setMatchModifiedTs(settings.matchModifiedTs)

      setAutoPostMatchStart(settings.autoPostMatchStart)
      setAutoPostGamePoint(settings.autoPostGamePoint)
      setAutoPostGameFinish(settings.autoPostGameFinish)
      setAutoPostMatchCount(settings.autoPostMatchCount)
      setAutoPostMatchFinish(settings.autoPostMatchFinish)
    }
    return settings
  }

  useEffect(() => {
    unpackSettings()
    updateFromEngine()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    packSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score1, score2])

  const updateFromEngine = () => {
    let possessionA
    let possessionB
    let gameA
    let gameB
    let matchA
    let matchB
    let gameDone
    let matchDone
    let local_autoSideOut
    let local_autoGameFinish
    let local_autoMatchFinish
    let local_autoGamePoints
    let local_autoLastGamePoints
    let local_autoMatchGames
    [
      possessionA,
      possessionB,
      gameA, 
      gameB, 
      matchA, 
      matchB, 
      gameDone, 
      matchDone,
      local_autoSideOut,
      local_autoGameFinish,
      local_autoMatchFinish,
      local_autoGamePoints,
      local_autoLastGamePoints,
      local_autoMatchGames
    ] = engine_get()

    console.log([
      possessionA,
      possessionB,
      gameA, 
      gameB, 
      matchA, 
      matchB, 
      gameDone, 
      matchDone,
      local_autoSideOut,
      local_autoGameFinish,
      local_autoMatchFinish,
      local_autoGamePoints,
      local_autoLastGamePoints,
      local_autoMatchGames
    ])
    setPossession1(possessionA)
    setPossession2(possessionB)
    setScore1(gameA)
    setScore2(gameB)
    setMatch1(matchA)
    setMatch2(matchB)
    setGameDone(gameDone)
    setMatchDone(matchDone)

    setAutoSideOut(local_autoSideOut)
    setAutoGameFinish(local_autoGameFinish)
    setAutoMatchFinish(local_autoMatchFinish)
    setAutoGamePoints(local_autoGamePoints)
    setAutoLastGamePoints(local_autoLastGamePoints)
    setAutoMatchGames(local_autoMatchGames)
  }

  const onTeam1Click = event => {
    engine_pointA()
    updateFromEngine()
    setGameModifiedTs(Date.now())
  }

  const onTeam2Click = () => {
    engine_pointB()
    updateFromEngine()
    setGameModifiedTs(Date.now())
  }

  const onAboutClick = () => {
    packSettings()
    setPage("about")
  }

  const onScoresClick = () => {
    packSettings()
    setPage("scores")
  }

  const onSwapPossesionClick = () => {
    var local_possession1 = possession2
    var local_possession2 = possession1
    engine_setBase(
      local_possession1,
      local_possession2,
      score1,
      score2,
      match1,
      match2,
      gameDone,
      matchDone
    )
    updateFromEngine()
    packSettings()
  }

  const onSettingsClick = () => {
    packSettings()
    setPage("settings")
  }

  const onHomeClick = () => {
    // engine_setBase(
    //   possession1,
    //   possession2,
    //   score1,
    //   score2,
    //   match1,
    //   match2,
    //   gameDone,
    //   matchDone
    // )
    engine_setAuto(
      autoSideOut,
      autoGameFinish,
      autoMatchFinish,
      autoGamePoints,
      autoLastGamePoints,
      autoMatchGames
    )
    packSettings() // from possible changes by about/settings etc.
    setPage("home")
  }

  const onUndoClick = () => {
    engine_undo()
    updateFromEngine()
    setGameModifiedTs(Date.now())
    setMatchModifiedTs(Date.now())
    onHomeClick()
  }

  const onFinishGameClick = () => {
    engine_finishGame()
    updateFromEngine()
    setGameModifiedTs(Date.now())
    setMatchModifiedTs(Date.now())
    onHomeClick()
  }

  const onResetGameClick = () => {
    engine_resetGame()
    updateFromEngine()
    setGameGuid(uuidv4())
    setGameStartTs(Date.now())
    setGameModifiedTs(Date.now())
    onHomeClick()
  }

  const onFinishMatchClick = () => {
    engine_finishMatch()
    updateFromEngine()
    setMatchModifiedTs(Date.now())
    onHomeClick()
  }

  const onResetMatchClick = () => {
    engine_resetMatch()
    engine_setAuto(
      autoSideOut,
      autoGameFinish,
      autoMatchFinish,
      autoGamePoints,
      autoLastGamePoints,
      autoMatchGames
    )
    updateFromEngine()
    setGameDone(false)
    setMatchDone(false)
    setMatchGuid(uuidv4())
    setMatchStartTs(Date.now())
    setMatchModifiedTs(Date.now())
    onHomeClick()
  }

  const onSwapClick = () => {
    let color = color1
    let backgroundColor = backgroundColor1
    let label = label1
    let possession = possession1
    let match = match1
    let score = score1

    setColor1(color2)
    setBackgroundColor1(backgroundColor2)
    setLabel1(label2)
    setPossession1(possession2)
    setMatch1(match2)
    setScore1(score2)

    setColor2(color)
    setBackgroundColor2(backgroundColor)
    setLabel2(label)
    setPossession2(possession)
    setMatch2(match)
    setScore2(score)

    engine_toggleOrder()
    onHomeClick()
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
          onUndoClick={onUndoClick}
          onFinishGameClick={onFinishGameClick}
          onResetGameClick={onResetGameClick}
          onFinishMatchClick={onFinishMatchClick}
          onResetMatchClick={onResetMatchClick}
          onSwapClick={onSwapClick}
          userid={userid}
          setUserid={setUserid}
          //phone={phone}
          //setPhone={setPhone}
          //phones={phones}
          //setPhones={setPhones}
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
          gameGuid={gameGuid}
          setGameGuid={setGameGuid}
          gameStartTs={gameStartTs}
          setGameStartTs={setGameStartTs}
          gameModifiedTs={gameModifiedTs}
          setGameModifiedTs={setGameModifiedTs}
          matchGuid={matchGuid}
          setMatchGuid={setMatchGuid}
          matchStartTs={matchStartTs}
          setMatchStartTs={setMatchStartTs}
          matchModifiedTs={matchModifiedTs}
          setMatchModifiedTs={setMatchModifiedTs}
          autoSideOut={autoSideOut}
          setAutoSideOut={setAutoSideOut}
          autoGameFinish={autoGameFinish}
          setAutoGameFinish={setAutoGameFinish}
          autoMatchFinish={autoMatchFinish}
          setAutoMatchFinish={setAutoMatchFinish}
          autoGamePoints={autoGamePoints}
          setAutoGamePoints={setAutoGamePoints}
          autoLastGamePoints={autoLastGamePoints}
          setAutoLastGamePoints={setAutoLastGamePoints}
          autoMatchGames={autoMatchGames}
          setAutoMatchGames={setAutoMatchGames}
          autoPostMatchStart={autoPostMatchStart}
          setAutoPostMatchStart={setAutoPostMatchStart}
          autoPostGamePoint={autoPostGamePoint}
          setAutoPostGamePoint={setAutoPostGamePoint}
          autoPostGameFinish={autoPostGameFinish}
          setAutoPostGameFinish={setAutoPostGameFinish}
          autoPostMatchCount={autoPostMatchCount}
          setAutoPostMatchCount={setAutoPostMatchCount}
          autoPostMatchFinish={autoPostMatchFinish}
          setAutoPostMatchFinish={setAutoPostMatchFinish}
        />
      ) : (
        ""
      )}
      {page === "scores" ? (
        <Scores
          page={page}
          onHomeClick={onHomeClick}
          userid={userid}
          //phone={phone}
          //phones={phones}
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
          unpackSettings={unpackSettings}
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
