import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeWarning from "../components/landscapewarning"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"
import {
  getFromLS,
  saveToLS,
} from "./utils"
import {
  engine_undo,
  engine_finishGame,
  engine_resetGame,
  engine_finishMatch,
  engine_resetMatch,
  engine_load,
  engine_save,
  engine_get
 } from "./engine"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  title: {
    width: "80vw",
  },
  button: {
    width: "80vw",
  },
  textfield: {
    width: 400,
  },
  buttonRow: {
    width: "80vw",
    marginTop: 10,
  },
}))

const SettingsPage = () => {
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

  const [gameDone, setGameDone] = useState(false)
  const [matchDone, setMatchDone] = useState(false)

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

    settings["gameDone"] = gameDone
    settings["matchDone"] = matchDone

    settings['engine'] = engine_save()
    //console.log('settings::pack')
    //console.log(settings)
    settings = JSON.stringify(settings)
    saveToLS("allSettings", settings)
  }

  const unpackSettings = () => {
    let settings = getFromLS("allSettings")
    if (settings) {
      settings = JSON.parse(settings)
      //console.log('settings::unpack')
      //console.log(settings)
      if (settings['engine']) {
        engine_load(settings['engine'])
      }

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
  }, [score1, score2, match1, match2, gameDone, matchDone, label1, label2])

  const updateFromEngine = () => {
    let gameA
    let gameB
    let matchA
    let matchB
    let gameDone
    let matchDone
    ;[gameA, gameB, matchA, matchB, gameDone, matchDone] = engine_get()

    //console.log('settings::updateFromEngine')
    //console.log([gameA, gameB, matchA, matchB, gameDone, matchDone])
    setScore1(gameA)
    setScore2(gameB)
    setMatch1(matchA)
    setMatch2(matchB)
    setGameDone(gameDone)
    setMatchDone(matchDone)
  }

  const toggleGoodGuys = () => {
    let newLabel1, newLabel2
    if (label1 === "US") {
      newLabel1 = "GOOD GUYS"
      newLabel2 = "BAD GUYS"
    } else if (label1 === "THEM") {
      newLabel2 = "GOOD GUYS"
      newLabel1 = "BAD GUYS"
    } else if (label1 === "GOOD GUYS") {
      newLabel1 = "US"
      newLabel2 = "THEM"
    } else if (label1 === "BAD GUYS") {
      newLabel2 = "US"
      newLabel1 = "THEM"
    }
    setLabel1(newLabel1)
    setLabel2(newLabel2)
  }

  const onUndoClick = () => {
    engine_undo()
    updateFromEngine()
    packSettings()
    navigate("/home/")
  }

  const onFinishGameClick = () => {
    engine_finishGame()
    updateFromEngine()
    packSettings()
    navigate("/home/")
  }

  const onResetGameClick = () => {
    engine_resetGame()
    updateFromEngine()
    packSettings()
    navigate("/home/")
  }

  const onFinishMatchClick = () => {
    engine_finishMatch()
    updateFromEngine()
    packSettings()
    navigate("/home/")
  }

  const onResetMatchClick = () => {
    engine_resetMatch()
    updateFromEngine()
    packSettings()
    navigate("/home/")
  }

  const onToggleHorizontalClick = () => {
    setHorizontal(!horizontal)
    packSettings()
    navigate("/home/")
  }

  const onToggleGoodGuysClick = () => {
    toggleGoodGuys()
    packSettings()
    navigate("/home/")
  }

  const onDefaultColorsClick = (event) => {
    setColor1("white")
    setColor2("white")
    setBackgroundColor1("red")
    setBackgroundColor2("blue")
  }

  const onColorChange1 = (event) => {
    setColor1(event.target.value)
  }

  const onBackgroundColorChange1 = (event) => {
    setBackgroundColor1(event.target.value)
  }

  const onColorChange2 = (event) => {
    setColor2(event.target.value)
  }

  const onBackgroundColorChange2 = (event) => {
    setBackgroundColor2(event.target.value)
  }


  const onCancelClick = () => {
    navigate("/home/")
  }

  const onSaveClick = () => {
    packSettings()
    navigate("/home/")

  }



  return (
    <Layout>
      <SEO title="Settings" />
      <>
        <div className="settings-vertical">
          <Grid
            className={classes.root}
            container
            spacing={0}
            justify="space-around"
            direction="column"
          >
            <Grid item className={classes.title}>
              <Title label="Settings" />
            </Grid>

            <Grid
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
            >
              <Grid item className={classes.button}>
                <ControlButton
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onUndoClick}
                >
                  Undo
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onFinishGameClick}
                >
                  Finish Game
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onResetGameClick}
                >
                  Reset Game
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onFinishMatchClick}
                >
                  Finish Match
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onResetMatchClick}
                >
                  Reset Match
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onToggleGoodGuysClick}
                >
                  Toggle "Good Guys"
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onToggleHorizontalClick}
                >
                  Toggle Horizontal
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <hr />
              </Grid>
               <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onDefaultColorsClick}
                >
                  Default Colors
                </ControlButton>
              </Grid>
           </Grid>

            <Grid
              container
              spacing={2}
              justify="space-around"
              alignItems="center"
            >
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 1 text"
                  value={color1}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={onColorChange1}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 1 background"
                  value={backgroundColor1}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={onBackgroundColorChange1}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 2 text"
                  value={color2}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={onColorChange2}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 2 background"
                  value={backgroundColor2}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={onBackgroundColorChange2}
                />
              </Grid>
            </Grid>

            <Grid
              className={classes.buttonRow}
              container
              spacing={8}
              justify="space-around"
              alignItems="center"
              direction="row"
            >
              <Grid item xs={4}>
                <ControlButton
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onCancelClick}
                >
                  Cancel
                </ControlButton>
              </Grid>
              <Grid item xs={4}>
                <ControlButton
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onSaveClick}
                >
                  Save
                </ControlButton>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="settings-horizontal">
          <LandscapeWarning />
        </div>
      </>
    </Layout>
  )
}

export default SettingsPage
