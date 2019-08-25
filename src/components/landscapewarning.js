import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
  },
  title: {
    width: "80vw",
  },
  button: {
    width: "80vw",
  },
  textfield: {
    width: 400,
  },
  buttonRow: {
    width: "80vw",
    marginTop: 10,
  },
}))

const LandscapeWarning = () => {
  const classes = useStyles()

  return (
    <Grid
    className={classes.root}
    container
    spacing={0}
    justify="space-around"
    direction="column"
  >
    <Typography
      className={classes.paragraph}
      variant="body1"
      gutterBottom
    >
      Automatic formating for horizontal or landscape mode is not
      available. A workaround is to lock the screen rotation on your
      phone and use the settings for horizontal mode. Then all the text
      will be rotated 90 degrees.
    </Typography>
  </Grid>
)
}

export default LandscapeWarning
