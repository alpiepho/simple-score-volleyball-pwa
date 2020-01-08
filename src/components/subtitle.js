import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "6vh",
    flexBasis: "90%"
  },
}))

export default function SubTitle(props) {
  const classes = useStyles()

  return (
    <Grid container spacing={3} justify="space-around" direction="row">
      <Grid item xs={12}>
        <Grid container  spacing={2}>
          <h3 className={classes.title}>{props.label}</h3>
        </Grid>
      </Grid>
    </Grid>
  )
}
