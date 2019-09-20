import React from "react"
import { Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    width: props => {
      return props.horizontal ? "40vw" : "80vw"
    },
    height: props => {
      return props.horizontal ? "80vh" : "40vh"
    },
    borderRadius: 20,
    color: props => props.color,
    backgroundColor: props => props.backgroundColor,
    "&:hover, &:focus": {
      color: props => props.color,
      backgroundColor: props => props.backgroundColor,
    },
  },
  label: {
    backgroundColor: "transparent",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
    marginTop: 20,
    fontSize: 24,
  },
  teamLabel: {
    marginTop: 20,
    fontSize: 24,
  },
  teamScore: {
    fontSize: 100,
    marginBottom: 20,
    // transform: props => {
    //   return props.horizontal ? "rotate(-90deg)" : ""
    // },
  },
}))

export default function TeamButton(props) {
  const classes = useStyles(props)

  const onButtonClick = () => {
    props.onButtonClick()
  }

  const onInnerButtonClick = () => {
    props.onInnerButtonClick()
  }

  return (
    <Button
      aria-label="team button"
      disabled={props.disabled}
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={onButtonClick}
    >
      <Grid container spacing={2} justify="space-around" direction="column">
        <Grid item className={classes.teamLabel}>
          <Button
            aria-label="team label"
            disabled={props.disabled}
            className={classes.label}
            variant="contained"
            onClick={onInnerButtonClick}
          >
            {props.winner ? props.winner : props.label}
          </Button>
        </Grid>
        <Grid item className={classes.teamScore}>
          {props.score}
        </Grid>
      </Grid>
    </Button>
  )
}
