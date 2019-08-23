import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
