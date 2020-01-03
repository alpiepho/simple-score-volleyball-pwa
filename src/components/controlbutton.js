import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    width: props => {
      return props.width ? props.width : "100%"
    },
    minHeight: props => {
      return props.minHeight ? props.minHeight : "inherit"
    },
    height: props => {
      return props.horizontal ? "16vh" : "8vh"
    },
    marginLeft: props => {
      return props.horizontal ? "-22px" : "0px"
    },

    borderRadius: 20,
    color: props => props.color,
    backgroundColor: props => props.backgroundColor,
    "&:hover, &:focus": {
      color: props => props.color,
      backgroundColor: props => props.backgroundColor,
    },
    transform: props => {
      return props.rotate ? "rotate(-90deg)" : ""
    },
  },
}))

export default function ControlButton(props) {
  const classes = useStyles(props)

  const onButtonClick = () => {
    props.onButtonClick()
  }

  return (
    <Button
      aria-label="control button"
      disabled={props.disabled}
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={onButtonClick}
    >
      {props.children}
    </Button>
  )
}
