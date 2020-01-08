import React, { useState } from "react"
import { Checkbox, Grid, FormControlLabel, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import LandscapeWarning from "../components/landscapewarning"
import Title from "../components/title"
import SubTitle from "../components/subtitle"
import ControlButton from "../components/controlbutton"

import { SketchPicker } from "react-color"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  title: {
    width: "80vw",
  },
  subtitle: {
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

  const onUseridChange = event => {
    props.setUserid(event.target.value)
  }

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

  // const onGame1Change = event => {
  //   props.setScore1(event.target.value)
  // }

  // const onGame2Change = event => {
  //   props.setScore2(event.target.value)
  // }

  const onAutoSideOutChange = event => {
    props.setAutoSideOut(event.target.checked)
  }

  const onAutoGameFinishChange = event => {
    props.setAutoGameFinish(event.target.checked)
  }

  const onAutoMatchFinishChange = event => {
    props.setAutoMatchFinish(event.target.checked)
  }

  const onAutoPostMatchStartChange = event => {
    props.setAutoPostMatchStart(event.target.checked)
  }

  const onAutoPostGamePointChange = event => {
    props.setAutoPostGamePoint(event.target.checked)
  }

  const onAutoPostGameFinishChange = event => {
    props.setAutoPostGameFinish(event.target.checked)
  }

  const onAutoPostMatchCountChange = event => {
    props.setAutoPostMatchCount(event.target.checked)
  }

  const onAutoPostMatchFinishChange = event => {
    props.setAutoPostMatchFinish(event.target.checked)
  }

  const onAutoGamePointsChange = event => {
    props.setAutoGamePoints(event.target.value)
  }

  const onAutoLastGamePointsChange = event => {
    props.setAutoLastGamePoints(event.target.value)
  }

  const onAutoMatchGamesChange = event => {
    props.setAutoMatchGames(event.target.value)
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

                {/* Seperatator */}
                <Grid item className={classes.seperator}>
                  <hr />
                </Grid>
                <Grid item className={classes.subtitle}>
                  <SubTitle label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quick adjust" />
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
                      onButtonClick={props.onUndoClick}
                    >
                      Undo
                    </ControlButton>
                  </Grid>
                  <Grid item className={classes.button}>
                    <ControlButton
                      className={classes.button}
                      color="black"
                      backgroundColor="gray"
                      onButtonClick={props.onFinishGameClick}
                    >
                      Finish Game
                    </ControlButton>
                  </Grid>
                  <Grid item className={classes.button}>
                    <ControlButton
                      className={classes.button}
                      color="black"
                      backgroundColor="gray"
                      onButtonClick={props.onResetGameClick}
                    >
                      New Game
                    </ControlButton>
                  </Grid>
                  <Grid item className={classes.button}>
                    <ControlButton
                      className={classes.button}
                      color="black"
                      backgroundColor="gray"
                      onButtonClick={props.onFinishMatchClick}
                    >
                      Finish Match
                    </ControlButton>
                  </Grid>
                  <Grid item className={classes.button}>
                    <ControlButton
                      className={classes.button}
                      color="black"
                      backgroundColor="gray"
                      onButtonClick={props.onResetMatchClick}
                    >
                      New Match
                    </ControlButton>
                  </Grid>

                  {/* Seperatator */}
                  <Grid item className={classes.seperator}>
                    <hr />
                  </Grid>
                  <Grid item className={classes.subtitle}>
                    <SubTitle label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;team adjust" />
                  </Grid>

                  {/* Swap Teams */}
                  <Grid item xs={8} className={classes.button}>
                    <ControlButton
                      color="black"
                      backgroundColor="gray"
                      onButtonClick={props.onSwapClick}
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
                  <Grid item className={classes.subtitle}>
                    <SubTitle label="score adjust" />
                  </Grid>

                  {/* Force Team Points */}
                  {/* <Grid item className={classes.textfield}>
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
                  </Grid> */}

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
                  <Grid item className={classes.subtitle}>
                    <SubTitle label="updating" />
                  </Grid>

                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoSideOut}
                        onChange={onAutoSideOutChange}
                        color="primary"
                      />
                    }
                    label="Auto Side-Out"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoGameFinish}
                        onChange={onAutoGameFinishChange}
                        color="primary"
                      />
                    }
                    label="Auto Game Finish"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoMatchFinish}
                        onChange={onAutoMatchFinishChange}
                        color="primary"
                      />
                    }
                    label="Auto Match Finish"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoPostMatchStart}
                        onChange={onAutoPostMatchStartChange}
                        color="primary"
                      />
                    }
                    label="Auto Post Match Start"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoPostGamePoint}
                        onChange={onAutoPostGamePointChange}
                        color="primary"
                      />
                    }
                    label="Auto Post Game Point"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoPostGameFinish}
                        onChange={onAutoPostGameFinishChange}
                        color="primary"
                      />
                    }
                    label="Auto Post Game Finish"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoPostMatchCount}
                        onChange={onAutoPostMatchCountChange}
                        color="primary"
                      />
                    }
                    label="Auto Post Match Count"
                  />
                  </Grid>
                  <Grid item className={classes.textfield}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.autoPostMatchFinish}
                        onChange={onAutoPostMatchFinishChange}
                        color="primary"
                      />
                    }
                    label="Auto Post Match Finish"
                  />
                  </Grid>

                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-AutoGamePoints"
                      label=""
                      value={props.autoGamePoints}
                      className={classes.textField}
                      helperText="points to win game"
                      margin="normal"
                      onChange={onAutoGamePointsChange}
                    />
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-AutoLastGamePoints"
                      label=""
                      value={props.autoLastGamePoints}
                      className={classes.textField}
                      helperText="points to win last game"
                      margin="normal"
                      onChange={onAutoLastGamePointsChange}
                    />
                  </Grid>
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-AutoMatchGames"
                      label=""
                      value={props.autoMatchGames}
                      className={classes.textField}
                      helperText="games to win match"
                      margin="normal"
                      onChange={onAutoMatchGamesChange}
                    />
                  </Grid>

                  {/* Seperatator */}
                  <Grid item className={classes.seperator}>
                    <hr />
                  </Grid>
                  <Grid item className={classes.subtitle}>
                    <SubTitle label="user info" />
                  </Grid>

                  {/* Authorized Userid */}
                  <Grid item className={classes.textfield}>
                    <TextField
                      id="standard-helperText-Userid"
                      label=""
                      value={props.userid}
                      className={classes.textField}
                      helperText="assigned user id"
                      margin="normal"
                      onChange={onUseridChange}
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
                      onButtonClick={props.onHomeClick}
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
