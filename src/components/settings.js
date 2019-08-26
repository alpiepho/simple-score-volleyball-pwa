import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeWarning from "../components/landscapewarning"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"

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

  const [color1, setColor1] = useState("white")
  const [backgroundColor1, setBackgroundColor1] = useState("red")
  const [color2, setColor2] = useState("white")
  const [backgroundColor2, setBackgroundColor2] = useState("blue")

  useEffect(() => {
    // TODO: Gatsby documentation is weak, infers that
    // component at end of navigation should get state
    // from props.state or whatever tag used.  From google
    // search, need to use window.history.state to access
    // what was passed
    if (
      window &&
      window.history &&
      window.history.state &&
      window.history.state.color1
    ) {
      console.log('window.history.state')
      console.log(window.history.state)
      let settings = window.history.state
      setColor1(settings.color1)
      setBackgroundColor1(settings.backgroundColor1)
      setColor2(settings.color2)
      setBackgroundColor2(settings.backgroundColor2)
      }
  }, [])

  const homeWithSettings = (what, payload) => {
    console.log(what)
    let settings = { settingschange: true }
    settings[what] = true
    settings = { ...settings, ...payload }
    // TODO: Gatsby documentation is weak, infers that
    // component at end of navigation should get state
    // from props.state or whatever tag used.  From google
    // search, need to use window.history.state to access
    // what was passed
    navigate("/home/", { state: settings })
  }

  const onUndoClick = () => {
    homeWithSettings('undo')
  }

  const onFinishGameClick = () => {
    homeWithSettings('finishgame')
  }

  const onResetGameClick = () => {
    homeWithSettings('resetgame')
  }

  const onFinishMatchClick = () => {
    homeWithSettings('finishmatch')
  }

  const onResetMatchClick = () => {
    homeWithSettings('resetmatch')
  }

  const onToggleHorizontalClick = () => {
    homeWithSettings('togglehorizontal')
  }

  const onToggleGoodGuysClick = () => {
    homeWithSettings('togglegoodguys')
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
    console.log(event.target.value)
    setBackgroundColor2(event.target.value)
  }

  const onDefaultColorsClick = (event) => {
    setColor1("white")
    setColor2("white")
    setBackgroundColor1("red")
    setBackgroundColor2("blue")
  }

  const onCancelClick = () => {
    console.log("cancel")
    navigate("/home/")
  }

  const onSaveClick = () => {
    let payload = {}
    payload['color1'] = color1
    payload['backgroundColor1'] = backgroundColor1
    payload['color2'] = color2
    payload['backgroundColor2'] = backgroundColor2
    homeWithSettings('changecolors', payload)
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
