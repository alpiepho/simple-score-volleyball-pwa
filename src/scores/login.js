import React from "react"
import { navigate } from "gatsby"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"

import { handleLogin } from "./services/auth"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}))

const Login = () => {
  const classes = useStyles()

  const onCancelClick = () => {
    navigate("/home/")
  }

  const onLoginClick = () => {
    console.log("save")
    handleLogin(user => navigate(`/scores/`))
  }

  return (
    <Layout>
      <SEO title="Login" />
      <Grid
        className={classes.root}
        container
        spacing={0}
        justify="space-around"
        direction="column"
      >
        <Title label="Login" />

        <Typography className={classes.paragraph} variant="body1" gutterBottom>
          In order to send texts, you will need to login.  We are currently
          using a web hosting service called Netlify and their autorization
          service 'Indentify'.
        </Typography>
        <Typography className={classes.paragraph} variant="body1" gutterBottom>
          You should be able to signup for a new account, by entering an email
          and password.  Netlify will send a confirmation email before you
          can login.
        </Typography>
        <Typography className={classes.paragraph} variant="body1" gutterBottom>
          NOTE: You don't have to sign up, but that is the only way you can
          send texts with onging scores.
        </Typography>

        <Grid
          container
          spacing={8}
          justify="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={4}>
            <ControlButton
              color="black"
              backgroundColor="gray"
              onButtonClick={onCancelClick}
            >
              Cancel
            </ControlButton>
          </Grid>
          <Grid item xs={4}>
            <ControlButton
              color="black"
              backgroundColor="gray"
              onButtonClick={onLoginClick}
            >
              Login
            </ControlButton>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Login
