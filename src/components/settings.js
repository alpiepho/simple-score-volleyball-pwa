import React from "react"
import { navigate } from "gatsby"
import { Grid, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
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

  const onCancelClick = () => {
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
                  onButtonClick={onCancelClick}
                >
                  Undo
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onCancelClick}
                >
                  Finish Game
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onCancelClick}
                >
                  Reset Game
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onCancelClick}
                >
                  Reset Match
                </ControlButton>
              </Grid>
              <Grid item className={classes.button}>
                <ControlButton
                  className={classes.button}
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onCancelClick}
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
              justify="space-between"
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
          <Grid
            className={classes.root}
            container
            spacing={0}
            justify="space-around"
            direction="column"
          >
            <Typography
              className={classes.paragraph}
              variant="body1"
              gutterBottom
            >
              Automatic formating for horizontal or landscape mode is not
              available. A workaround is to lock the screen rotation on your
              phone and use the settings for horizontal mode. Then all the text
              will be rotated 90 degrees.
            </Typography>
          </Grid>
        </div>
      </>
    </Layout>
  )
}

export default SettingsPage
