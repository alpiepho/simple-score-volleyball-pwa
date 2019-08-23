import React from "react"
import { Grid } from "@material-ui/core"
import { FaArrowsAltV, FaBars, FaRegChartBar, FaQuestion } from "react-icons/fa"
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

  return (
    <Grid
      container
      spacing={3}
      justify="spaces-around"
      alignItems="center"
      direction="row"
    >
      <Grid item xs={3}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
          onButtonClick={props.onScoresClick}
        >
          <FaRegChartBar className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>
      <Grid item xs={3}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
          onButtonClick={props.onAboutClick}
          >
          <FaQuestion className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>

      <Grid item xs={3}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
          onButtonClick={props.onSwapTeamsClick}
          >
          <FaArrowsAltV className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>
      <Grid item xs={3}>
        <ControlButton
          horizontal={props.horizontal}
          color={props.color}
          backgroundColor={props.backgroundColor}
          onButtonClick={props.onSettingsClick}
          >
          <FaBars className={classes.icon} size={24} aria-hidden="true" />
        </ControlButton>
      </Grid>
    </Grid>
  )
}
