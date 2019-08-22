import React, { useState } from "react"
import { Button, Grid } from "@material-ui/core"
import { FaBars, FaRegChartBar, FaQuestion } from "react-icons/fa"
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
    <Grid
      container
      spacing={8}
      justify="center"
      alignItems="center"
      direction="row"
    >
      <Grid item xs={4}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
        >
          <FaRegChartBar className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>
      <Grid item xs={4}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
          >
          <FaQuestion className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>
      <Grid item xs={4}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
          >
          <FaBars className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>
    </Grid>
  )
}
