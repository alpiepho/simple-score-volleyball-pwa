import React from "react"
import { navigate } from "gatsby"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "80vh",
  },
}))

const About = () => {
  const classes = useStyles()

  const onOkClick = () => {
    navigate("/home/")
  }

  return (
    <Layout>
      <SEO title="About" />
      <div className="about-component">
        <Grid
          className={classes.root}
          container
          spacing={0}
          justify="space-around"
          direction="column"
        >
          <Title label="Simple Score - Volleyball" />
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            This is a simple PWA (progressive web application) that allows you
            to track the score of a volleyball match and optionally send the
            match results to a list of predefined phone numbers as a text.
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            To send texts, you must first have a login created from your email,
            attempt to login, then verify your email. Once logged in, you will
            be able to send results. (currently, the text list is set by the
            admin.)
          </Typography>
          <ControlButton
            color="black"
            backgroundColor="gray"
            onButtonClick={onOkClick}
          >
            Ok
          </ControlButton>
        </Grid>
      </div>
    </Layout>
  )
}

export default About
