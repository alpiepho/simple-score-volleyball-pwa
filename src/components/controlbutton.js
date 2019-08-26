import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "8vh",
    borderRadius: 20,
    color: props => props.color,
    backgroundColor: props => props.backgroundColor,
    '&:hover, &:focus': {
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
        aria-label="control button"
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={onButtonClick}
      >
         {props.children}
      </Button>
  )
}
