import React from "react"
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

  const homeWithSettings = (what) => {
    console.log(what)
    let settings = { settingschange: true }
    settings[what] = true
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

  const onToggleGoodGuysClick = () => {
    homeWithSettings('togglegoodguys')
  }

  const onCancelClick = () => {
    console.log("cancel")
    navigate("/home/")
  }

  const onSaveClick = () => {
    console.log("save")
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
                <hr />
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
                  defaultValue={"black"}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={null}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 1 background"
                  defaultValue={"red"}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={null}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 2 text"
                  defaultValue={"black"}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={null}
                />
              </Grid>
              <Grid item className={classes.textfield}>
                <TextField
                  id="standard-helperText"
                  label="Team 2 background"
                  defaultValue={"red"}
                  className={classes.textField}
                  helperText="color name or CSS hex (ie. #000, #000000)"
                  margin="normal"
                  onChange={null}
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
