import React, { useState } from "react"
import { navigate } from "gatsby"
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  ClickAwayListener,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import TeamButton from "../components/teambutton"
import Controls from "../components/controls"
import ControlButton from "../components/controlbutton"

import { initAuth } from "../scores/services/auth"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}))

initAuth()

const SettingsPage = () => {
  const classes = useStyles()

  const onCancelClick = () => {
    console.log("ok")
    navigate("/")
  }

  const onSaveClick = () => {
    console.log("save")
    navigate("/")
  }

  return (
    <Layout>
      <SEO title="Settings" />
      <Grid
        className={classes.root}
        container
        spacing={0}
        justify="space-around"
        direction="column"
      >
        <Title label="Settings" />

        <Grid
          container
          spacing={8}
          justify="center"
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
    </Layout>
  )
}

export default SettingsPage
