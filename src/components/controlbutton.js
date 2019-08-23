import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "8vh",
    color: props => props.color,
    backgroundColor: props => props.backgroundColor,
    '&:hover, &$focusVisible': {
      color: props => props.color,
      backgroundColor: props => props.backgroundColor,
    },
    transform: props => { return(props.horizontal ? "rotate(-90deg)" : "") }
  },
}))

export default function ControlButton(props) {
  const classes = useStyles(props)

  const onButtonClick = () => {
    props.onButtonClick()
  }

  return (
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={onButtonClick}
      >
         {props.children}
      </Button>
  )
}
