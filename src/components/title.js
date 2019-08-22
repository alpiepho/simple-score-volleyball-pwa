import React, { useState } from "react"
import { Button, Grid, Paper } from "@material-ui/core"
import { FaGithub } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"
import ControlButton from "./controlbutton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "10vh",
  },
}))

export default function Title(props) {
  const classes = useStyles()

  return (
    <Grid container spacing={3} justify="space-around" direction="row">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        <h2 className={classes.title}>{props.label}</h2>
        </Grid>
      </Grid>
    </Grid>
  )
}
