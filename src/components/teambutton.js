import React from "react"
import { Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "40vh",
  },
  paper: {
    height: 140,
    width: 100,
  },
  button: {
    width: "100%",
    height: "40vh",
    borderRadius: 20,
    color: props => props.color,
    backgroundColor: props => props.backgroundColor,
    '&:hover, &$focusVisible': {
      color: props => props.color,
      backgroundColor: props => props.backgroundColor,
    }
  },
  teamLabel: {
    marginTop: 20,
    fontSize: 24
  },
  teamScore: {
    fontSize: 100,
    marginBottom: 20,
    transform: props => { return(props.horizontal ? "rotate(-90deg)" : "") }
  },
}))

export default function TeamButton(props) {
  const classes = useStyles(props)

  const onButtonClick = () => {
    console.log("onButtonClick")
    props.onButtonClick()
  }

  return (
    <Grid container spacing={3} justify="space-around" direction="row">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item  xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={onButtonClick}
            >
              <Grid
                container
                spacing={2}
                justify="space-around"
                direction="column"
              >
                <Grid item className={classes.teamLabel}>
                  {props.label}
                </Grid>
                <Grid item className={classes.teamScore}>
                  {props.score}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
