import React, { useState } from "react"
import { Button, Grid } from "@material-ui/core"
import { FaGithub } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"
import ControlButton from "./controlbutton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "10vh",
  },
  button: {
    width: 100,
    marginLeft: 30,
    marginBottom: 20,
  },
  teamLabel: {},
  teamScore: {},
}))

export default function Controls(props) {
  const classes = useStyles()

  const onButtonClick = () => {
    console.log("onButtonClick")
    //props.onButtonClick()
  }

  return (
    <Grid container spacing={8} justify="center" alignItems="center" direction="row">
      <Grid item xs={4}>
        <ControlButton label="A" />
      </Grid>
      <Grid item xs={4}>
        <ControlButton label="?" />
      </Grid>
      <Grid item xs={4}>
        <ControlButton label="B" />
      </Grid>
    </Grid>
  )
}
