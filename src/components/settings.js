import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeWarning from "../components/landscapewarning"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"
import { getFromLS, saveToLS } from "./utils"
import {
  engine_toggleOrder,
  engine_undo,
  engine_finishGame,
  engine_resetGame,
  engine_finishMatch,
  engine_resetMatch,
  engine_load,
  engine_save,
  engine_get,
} from "./engine"

import { SketchPicker } from "react-color"

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

  pickerColor: {
    width: "36px",
    height: "14px",
    borderRadius: "2px",
    background: `rgba(1, 1, 1, 1)`,
  },
  pickerSwatch: {
    transform: "translateY(32px);",
    padding: "5px",
    background: "#ddd",
    borderRadius: "4px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
    display: "inline-block",
    cursor: "pointer",
  },
  pickerPopover: {
    position: "absolute",
    zIndex: "2",
  },
  pickerCover: {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  },
}))

const SettingsPage = () => {
  const classes = useStyles()

  const [phone, setPhone] = useState("+18885550000")
  const [phones, setPhones] = useState("")

  const [color1, setColor1] = useState("white")
  const [backgroundColor1, setBackgroundColor1] = useState("red")
  const [label1, setLabel1] = useState("US")
  const [possession1, setPossession1] = useState(" ")
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

  const [displayColorPickerA, setDisplayColorPickerA] = useState(false)
  const [displayColorPickerB, setDisplayColorPickerB] = useState(false)
  const [displayColorPickerC, setDisplayColorPickerC] = useState(false)
  const [displayColorPickerD, setDisplayColorPickerD] = useState(false)

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
      if (settings["engine"]) {
        engine_load(settings["engine"])
      }

      if (settings.phone && settings.phone.length === "+18885550000".length) {
        setPhone(settings.phone)
      }

      if (settings.phones && settings.phones.length >= "8885550000".length) {
        setPhones(settings.phones)
      }

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
  }, [
    phone,
    phones,
    score1,
    score2,
    match1,
    match2,
    gameDone,
    matchDone,
    label1,
    label2,
    color1,
    color2,
    backgroundColor1,
    backgroundColor2,
  ])

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

  const onUndoClick = () => {
    engine_undo()
    updateFromEngine()
    navigate("/home/")
  }

  const onFinishGameClick = () => {
    engine_finishGame()
    updateFromEngine()
    navigate("/home/")
  }

  const onResetGameClick = () => {
    engine_resetGame()
    updateFromEngine()
    navigate("/home/")
  }

  const onFinishMatchClick = () => {
    engine_finishMatch()
    updateFromEngine()
    navigate("/home/")
  }

  const onResetMatchClick = () => {
    engine_resetMatch()
    updateFromEngine()
    navigate("/home/")
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
    navigate("/home/")
  }

  const onDefaultsClick = event => {
    setColor1("white")
    setColor2("white")
    setBackgroundColor1("red")
    setBackgroundColor2("blue")
    setLabel1("US")
    setLabel2("THEM")
  }



  // PickerA - Color1
  const onPickerAClick = () => {
    setDisplayColorPickerA(!displayColorPickerA)
  }

  const onPickerAClose = () => {
    setDisplayColorPickerA(false)
  }

  const onPickerAChange = color => {
    setColor1(color.hex)
  }

  // PickerB - BackgroundColor1
  const onPickerBClick = () => {
    setDisplayColorPickerB(!displayColorPickerB)
  }

  const onPickerBClose = () => {
    setDisplayColorPickerB(false)
  }

  const onPickerBChange = color => {
    setBackgroundColor1(color.hex)
  }


  // PickerC - Color2
  const onPickerCClick = () => {
    setDisplayColorPickerC(!displayColorPickerC)
  }

  const onPickerCClose = () => {
    setDisplayColorPickerC(false)
  }

  const onPickerCChange = color => {
    setColor2(color.hex)
  }

  // PickerD - BackgroundColor2
  const onPickerDClick = () => {
    setDisplayColorPickerD(!displayColorPickerD)
  }

  const onPickerDClose = () => {
    setDisplayColorPickerD(false)
  }

  const onPickerDChange = color => {
    setBackgroundColor2(color.hex)
  }



  const onPhoneChange = event => {
    setPhone(event.target.value)
  }

  const onPhonesChange = event => {
    setPhones(event.target.value)
  }

  const onColorChange1 = event => {
    setColor1(event.target.value)
  }

  const onBackgroundColorChange1 = event => {
    setBackgroundColor1(event.target.value)
  }

  const onColorChange2 = event => {
    setColor2(event.target.value)
  }

  const onBackgroundColorChange2 = event => {
    setBackgroundColor2(event.target.value)
  }

  const onLabel1Change = event => {
    setLabel1(event.target.value)
  }

  const onLabel2Change = event => {
    setLabel2(event.target.value)
  }

  const onMatch1Change = event => {
    setMatch1(event.target.value)
  }

  const onMatch2Change = event => {
    setMatch2(event.target.value)
  }

  const onGame1Change = event => {
    setScore1(event.target.value)
  }

  const onGame2Change = event => {
    setScore2(event.target.value)
  }

  const onDoneClick = () => {
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
                  New Game
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
                  New Match
                </ControlButton>
              </Grid>

              {/* Seperatator */}
              <Grid item className={classes.button}>
                <hr />
              </Grid>

              {/* Swap Teams */}
              <Grid item xs={8} className={classes.button}>
                <ControlButton
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onSwapClick}
                >
                  Swap Teams
                </ControlButton>
              </Grid>

              {/* Default Colors */}
              <Grid item xs={8} className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onDefaultsClick}
                >
                  Default Colors/Labels
                </ControlButton>
              </Grid>
            </Grid>

            {/* Team 1 Colors */}
            <Grid
              container
              spacing={2}
              justify="space-around"
              alignItems="center"
            >
              <Grid item className={classes.textfield}>
                <>
                  <TextField
                    id="standard-helperText"
                    label="Team 1 text"
                    value={color1}
                    className={classes.textField}
                    helperText="color name or CSS hex (ie. #000000)"
                    margin="normal"
                    onChange={onColorChange1}
                  />
                  <div className={classes.pickerSwatch}>
                    <div
                      className={classes.pickerColor}
                      style={{backgroundColor: color1}}
                      onClick={onPickerAClick}
                    />
                  </div>
                  {displayColorPickerA ? (
                    <div className={classes.pickerPopover}>
                      <div
                        className={classes.pickerCover}
                        onClick={onPickerAClose}
                      />
                      <SketchPicker color={color1} onChange={onPickerAChange} />
                    </div>
                  ) : null}
                </>
              </Grid>
              <Grid item className={classes.textfield}>
                <>
                  <TextField
                    id="standard-helperText"
                    label="Team 1 background"
                    value={backgroundColor1}
                    className={classes.textField}
                    helperText="color name or CSS hex (ie. #000000)"
                    margin="normal"
                    onChange={onBackgroundColorChange1}
                  />
                  <div className={classes.pickerSwatch}>
                    <div
                      className={classes.pickerColor}
                      style={{ backgroundColor: backgroundColor1 }}
                      onClick={onPickerBClick}
                    />
                  </div>
                  {displayColorPickerB ? (
                    <div className={classes.pickerPopover}>
                      <div
                        className={classes.pickerCover}
                        onClick={onPickerBClose}
                      />
                      <SketchPicker color={backgroundColor1} onChange={onPickerBChange} />
                    </div>
                  ) : null}
                </>
              </Grid>

              {/* Team 2 Colors */}
              <Grid item className={classes.textfield}>
                <>
                  <TextField
                    id="standard-helperText"
                    label="Team 2 text"
                    value={color2}
                    className={classes.textField}
                    helperText="color name or CSS hex (ie. #000000)"
                    margin="normal"
                    onChange={onColorChange2}
                  />
                  <div className={classes.pickerSwatch}>
                    <div
                      className={classes.pickerColor}
                      style={{ backgroundColor: color2 }}
                      onClick={onPickerCClick}
                    />
                  </div>
                  {displayColorPickerC ? (
                    <div className={classes.pickerPopover}>
                      <div
                        className={classes.pickerCover}
                        onClick={onPickerCClose}
                      />
                      <SketchPicker color={color2} onChange={onPickerCChange} />
                    </div>
                  ) : null}
                </>
              </Grid>
              <Grid item className={classes.textfield}>
                <>
                  <TextField
                    id="standard-helperText"
                    label="Team 2 background"
                    value={backgroundColor2}
                    className={classes.textField}
                    helperText="color name or CSS hex (ie. #000000)"
                    margin="normal"
                    onChange={onBackgroundColorChange2}
                  />
                  <div className={classes.pickerSwatch}>
                    <div
                      className={classes.pickerColor}
                      style={{ backgroundColor: backgroundColor2 }}
                      onClick={onPickerDClick}
                      />
                  </div>
                  {displayColorPickerD ? (
                    <div className={classes.pickerPopover}>
                      <div
                        className={classes.pickerCover}
                        onClick={onPickerDClose}
                      />
                      <SketchPicker color={backgroundColor2} onChange={onPickerDChange} />
                    </div>
                  ) : null}
                </>
              </Grid>

              {/* Team Names */}
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={label1}
                  className={classes.textField}
                  helperText="change team name 1"
                  margin="normal"
                  onChange={onLabel1Change}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={label2}
                  className={classes.textField}
                  helperText="change team name 2"
                  margin="normal"
                  onChange={onLabel2Change}
                />
              </Grid>

              {/* Force Team Points */}
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={score1}
                  className={classes.textField}
                  helperText="force points team 1"
                  margin="normal"
                  onChange={onGame1Change}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={score2}
                  className={classes.textField}
                  helperText="force points team 2"
                  margin="normal"
                  onChange={onGame2Change}
                />
              </Grid>

              {/* Force Team Sets */}
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={match1}
                  className={classes.textField}
                  helperText="force sets team 1"
                  margin="normal"
                  onChange={onMatch1Change}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={match2}
                  className={classes.textField}
                  helperText="force sets team 2"
                  margin="normal"
                  onChange={onMatch2Change}
                />
              </Grid>

              {/* Phone Numbers for Texting */}
              {/* <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  multiline
                  rowsMax="4"
                  value={phones}
                  className={classes.textField}
                  helperText="send to (ie. +18885550000,+18885550000)"
                  margin="normal"
                  onChange={onPhonesChange}
                />
              </Grid> */}

              {/* Authorized Phone Number */}
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label=""
                  value={phone}
                  className={classes.textField}
                  helperText="phone allowed to send (ie. +18885550000)"
                  margin="normal"
                  onChange={onPhoneChange}
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
              <Grid item xs={12}>
                <ControlButton
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onDoneClick}
                >
                  Done
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
