import React from "react"
import { navigate } from "gatsby"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { FaGithub } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: 40
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10
  }
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
          <Grid item className={classes.title} >
            <Title label="Simple Score - Volleyball" />
          </Grid>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            This is a simple PWA (progressive web application) that allows you
            to track the score of a volleyball match and optionally send the
            match results to a list of predefined phone numbers as a text.  
            <br/><br/>
            (NOTE: If you see the warning about no landscape mode, either rotate your phone,
            or narrow the browser window.)
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            To send texts, you must 1) contact admin with name, email, phone.
            And 2) set the last 4 digits of phone in the settings page.
            Once the admin adds you to the group, you can keep score and send
            results to the others in the group.
          </Typography>

          <Grid item className={classes.title} >
            <Title label="Install" />
          </Grid>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            As noted, this is PWA (progressive web application) that can be loaded
            like a stand-alone application on Chrome, IOS, or Android.  Think of a 
            PWA like a cross between a native application and a web page...that doesn't
            need to be downloaded from the App Store or Google Play.  Unfortunately,
            installation is not as consistent yet:
          </Typography>
 
          <Grid item className={classes.title} >
            <Title label="Install - Chrome" />
          </Grid>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            If you open this application in a Chrome browser, you can install
            this as a Chrome Applications.  Look for the ... in the upper right,
            then look for "Install Simple Score - Volleyball (PWA)"
          </Typography>

          <Grid item className={classes.title} >
            <Title label="Install - IOS" />
          </Grid>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            You can install this to the IOS desktop like a real application.
            To do so, you need to access this site from the Safari browser
            (PWA) installation is not supported by the Chrome browser for IOS yet.
            With this open in Safari, look for up-arrow along bottom, then
            scroll left-right for "Add to Home Screen"
          </Typography>

          <Grid item className={classes.title} >
            <Title label="Install - Android" />
          </Grid>
          <Typography
            className={classes.paragraph}
            variant="body1"
            gutterBottom
          >
            If you open this application in a Chrome browser, you can install
            this as a Chrome Applications.  Look for the ... in the upper right,
            then look for "Add to Home screen"
          </Typography>

          <Grid item className={classes.title} >
            <Title label="Source Code" />
          </Grid>
          <div
          >
            You can find the source for this on github   
    <a 
    href='https://github.com/alpiepho/simple-score-volleyball-pwa'
    target='_blank'
    rel="noopener noreferrer"
    aria-label="github"
  >
    <FaGithub size={32} aria-hidden="true" />
  </a>

            <br/><br/>
          </div>

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
