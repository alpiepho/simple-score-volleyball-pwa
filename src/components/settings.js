import React, { useState } from "react"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import LandscapeWarning from "../components/landscapewarning"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"
import {
  engine_toggleOrder,
  engine_undo,
  engine_finishGame,
  engine_resetGame,
  engine_finishMatch,
  engine_resetMatch,
  //  engine_load,
  //  engine_save,
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
    minHeight: "50px",
  },
  seperator: {
    margin: "0px",
    marginTop: "10px",
    width: "100%",
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

const SettingsPage = props => {
  const classes = useStyles()

  const [displayColorPickerA, setDisplayColorPickerA] = useState(false)
  const [displayColorPickerB, setDisplayColorPickerB] = useState(false)
  const [displayColorPickerC, setDisplayColorPickerC] = useState(false)
  const [displayColorPickerD, setDisplayColorPickerD] = useState(false)

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
    props.setScore1(gameA)
    props.setScore2(gameB)
    props.setMatch1(matchA)
    props.setMatch2(matchB)
    props.setGameDone(gameDone)
    props.setMatchDone(matchDone)
  }

  const onUndoClick = () => {
    engine_undo()
    updateFromEngine()
    props.onHomeClick()
  }

  const onFinishGameClick = () => {
    engine_finishGame()
    updateFromEngine()
    props.onHomeClick()
  }

  const onResetGameClick = () => {
    engine_resetGame()
    updateFromEngine()
    props.onHomeClick()
  }

  const onFinishMatchClick = () => {
    engine_finishMatch()
    updateFromEngine()
    props.onHomeClick()
  }

  const onResetMatchClick = () => {
    engine_resetMatch()
    updateFromEngine()
    props.onHomeClick()
  }

  const onSwapClick = () => {
    let color = props.color1
    let backgroundColor = props.backgroundColor1
    let label = props.label1
    let possession = props.possession1
    let match = props.match1
    let score = props.score1

    props.setColor1(props.color2)
    props.setBackgroundColor1(props.backgroundColor2)
    props.setLabel1(props.label2)
    props.setPossession1(props.possession2)
    props.setMatch1(props.match2)
    props.setScore1(props.score2)

    props.setColor2(color)
    props.setBackgroundColor2(backgroundColor)
    props.setLabel2(label)
    props.setPossession2(possession)
    props.setMatch2(match)
    props.setScore2(score)

    engine_toggleOrder()
    props.onHomeClick()
  }

  const onDefaultsClick = event => {
    props.setColor1("white")
    props.setColor2("white")
    props.setBackgroundColor1("red")
    props.setBackgroundColor2("blue")
    props.setLabel1("US")
    props.setLabel2("THEM")
  }

  // PickerA - Color1
  const onPickerAClick = () => {
    setDisplayColorPickerA(!displayColorPickerA)
  }

  const onPickerAClose = () => {
    setDisplayColorPickerA(false)
  }

  const onPickerAChange = color => {
    props.setColor1(color.hex)
  }

  // PickerB - BackgroundColor1
  const onPickerBClick = () => {
    setDisplayColorPickerB(!displayColorPickerB)
  }

  const onPickerBClose = () => {
    setDisplayColorPickerB(false)
  }

  const onPickerBChange = color => {
    props.setBackgroundColor1(color.hex)
  }

  // PickerC - Color2
  const onPickerCClick = () => {
    setDisplayColorPickerC(!displayColorPickerC)
  }

  const onPickerCClose = () => {
    setDisplayColorPickerC(false)
  }

  const onPickerCChange = color => {
    props.setColor2(color.hex)
  }

  // PickerD - BackgroundColor2
  const onPickerDClick = () => {
    setDisplayColorPickerD(!displayColorPickerD)
  }

  const onPickerDClose = () => {
    setDisplayColorPickerD(false)
  }

  const onPickerDChange = color => {
    props.setBackgroundColor2(color.hex)
  }

  const onPhoneChange = event => {
    props.setPhone(event.target.value)
  }

  // const onPhonesChange = event => {
  //   setPhones(event.target.value)
  // }

  const onColorChange1 = event => {
    props.setColor1(event.target.value)
  }

  const onBackgroundColorChange1 = event => {
    props.setBackgroundColor1(event.target.value)
  }

  const onColorChange2 = event => {
    props.setColor2(event.target.value)
  }

  const onBackgroundColorChange2 = event => {
    props.setBackgroundColor2(event.target.value)
  }

  const onLabel1Change = event => {
    props.setLabel1(event.target.value)
  }

  const onLabel2Change = event => {
    props.setLabel2(event.target.value)
  }

  const onMatch1Change = event => {
    props.setMatch1(event.target.value)
  }

  const onMatch2Change = event => {
    props.setMatch2(event.target.value)
  }

  const onGame1Change = event => {
    props.setScore1(event.target.value)
  }

  const onGame2Change = event => {
    props.setScore2(event.target.value)
  }

  const onDoneClick = () => {
    props.onHomeClick()
  }

  return (
    <>
      {props.page === "settings" ? (
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
                  <Grid item className={classes.seperator}>
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
                        id="standard-helperText-Team1text"
                        label="Team 1 text"
                        value={props.color1}
                        className={classes.textField}
                        helperText="color name or CSS hex (ie. #000000)"
                        margin="normal"
                        onChange={onColorChange1}
                      />
                      <div className={classes.pickerSwatch}>
                        <div
                          className={classes.pickerColor}
                          style={{ backgroundColor: props.color1 }}
                          onClick={onPickerAClick}
                        />
                      </div>
                      {displayColorPickerA ? (
                        <div className={classes.pickerPopover}>
                          <div
                            className={classes.pickerCover}
                            onClick={onPickerAClose}
                          />
                          <SketchPicker
                            color={props.color1}
                            onChange={onPickerAChange}
                          />
                        </div>
                      ) : null}
                    </>
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <>
                      <TextField
                        id="standard-helperText-Team1background"
                        label="Team 1 background"
                        value={props.backgroundColor1}
                        className={classes.textField}
                        helperText="color name or CSS hex (ie. #000000)"
                        margin="normal"
                        onChange={onBackgroundColorChange1}
                      />
                      <div className={classes.pickerSwatch}>
                        <div
                          className={classes.pickerColor}
                          style={{ backgroundColor: props.backgroundColor1 }}
                          onClick={onPickerBClick}
                        />
                      </div>
                      {displayColorPickerB ? (
                        <div className={classes.pickerPopover}>
                          <div
                            className={classes.pickerCover}
                            onClick={onPickerBClose}
                          />
                          <SketchPicker
                            color={props.backgroundColor1}
                            onChange={onPickerBChange}
                          />
                        </div>
                      ) : null}
                    </>
                  </Grid>

                  {/* Team 2 Colors */}
                  <Grid item className={classes.textfield}>
                    <>
                      <TextField
                        id="standard-helperText-Team2text"
                        label="Team 2 text"
                        value={props.color2}
                        className={classes.textField}
                        helperText="color name or CSS hex (ie. #000000)"
                        margin="normal"
                        onChange={onColorChange2}
                      />
                      <div className={classes.pickerSwatch}>
                        <div
                          className={classes.pickerColor}
                          style={{ backgroundColor: props.color2 }}
                          onClick={onPickerCClick}
                        />
                      </div>
                      {displayColorPickerC ? (
                        <div className={classes.pickerPopover}>
                          <div
                            className={classes.pickerCover}
                            onClick={onPickerCClose}
                          />
                          <SketchPicker
                            color={props.color2}
                            onChange={onPickerCChange}
                          />
                        </div>
                      ) : null}
                    </>
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <>
                      <TextField
                        id="standard-helperText-Team2background"
                        label="Team 2 background"
                        value={props.backgroundColor2}
                        className={classes.textField}
                        helperText="color name or CSS hex (ie. #000000)"
                        margin="normal"
                        onChange={onBackgroundColorChange2}
                      />
                      <div className={classes.pickerSwatch}>
                        <div
                          className={classes.pickerColor}
                          style={{ backgroundColor: props.backgroundColor2 }}
                          onClick={onPickerDClick}
                        />
                      </div>
                      {displayColorPickerD ? (
                        <div className={classes.pickerPopover}>
                          <div
                            className={classes.pickerCover}
                            onClick={onPickerDClose}
                          />
                          <SketchPicker
                            color={props.backgroundColor2}
                            onChange={onPickerDChange}
                          />
                        </div>
                      ) : null}
                    </>
                  </Grid>

                  {/* Team Names */}
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Team1name"
                      label=""
                      value={props.label1}
                      className={classes.textField}
                      helperText="change team name 1"
                      margin="normal"
                      onChange={onLabel1Change}
                    />
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Team2name"
                      label=""
                      value={props.label2}
                      className={classes.textField}
                      helperText="change team name 2"
                      margin="normal"
                      onChange={onLabel2Change}
                    />
                  </Grid>

                  {/* Seperatator */}
                  <Grid item className={classes.seperator}>
                    <hr />
                  </Grid>

                  {/* Force Team Points */}
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Team1points"
                      label=""
                      value={props.score1}
                      className={classes.textField}
                      helperText="force points team 1"
                      margin="normal"
                      onChange={onGame1Change}
                    />
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Team2points"
                      label=""
                      value={props.score2}
                      className={classes.textField}
                      helperText="force points team 2"
                      margin="normal"
                      onChange={onGame2Change}
                    />
                  </Grid>

                  {/* Force Team Sets */}
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Team1sets"
                      label=""
                      value={props.match1}
                      className={classes.textField}
                      helperText="force sets team 1"
                      margin="normal"
                      onChange={onMatch1Change}
                    />
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Team2sets"
                      label=""
                      value={props.match2}
                      className={classes.textField}
                      helperText="force sets team 2"
                      margin="normal"
                      onChange={onMatch2Change}
                    />
                  </Grid>

                  {/* Seperatator */}
                  <Grid item className={classes.seperator}>
                    <hr />
                  </Grid>

                  {/* Phone Numbers for Texting */}
                  {/* <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText-PhoneNumbers"
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
                      id="standard-helperText-PhoneAllowed"
                      label=""
                      value={props.phone}
                      className={classes.textField}
                      helperText="phone allowed to send (ie. +18885550000)"
                      margin="normal"
                      onChange={onPhoneChange}
                    />
                  </Grid>
                  {/* Seperatator */}
                  <Grid item className={classes.seperator}>
                    <hr />
                  </Grid>
                </Grid>

                <Grid
                  className={classes.button}
                  container
                  spacing={8}
                  justify="space-around"
                  alignItems="center"
                  direction="row"
                >
                  <Grid item xs={12} className={classes.button}>
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
              {/* <LandscapeWarning /> */}
            </div>
          </>
        </Layout>
      ) : (
        ""
      )}
    </>
  )
}

export default SettingsPage
