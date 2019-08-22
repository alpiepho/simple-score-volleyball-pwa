import React, { useState } from "react"
import { Button, Grid } from "@material-ui/core"
import { FaGithub } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "8vh"
  },
}))

export default function ControlButton(props) {
  const classes = useStyles()

  const onButtonClick = () => {
    console.log("onButtonClick")
    //props.onButtonClick()
  }

  return (
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={onButtonClick}
      >
         {props.label}
      </Button>
  )
}
