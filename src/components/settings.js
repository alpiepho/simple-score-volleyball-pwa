import React from "react"
import { navigate } from "gatsby"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}))

const SettingsPage = () => {
  const classes = useStyles()

  const onCancelClick = () => {
    navigate("/home/")
  }

  const onSaveClick = () => {
    console.log("save")
    navigate("/home/")
  }

  return (
    <Layout>
      <SEO title="Settings" />
      <Grid
        className={classes.root}
        container
        spacing={0}
        justify="space-around"
        direction="column"
      >
        <Title label="Settings" />

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
              onButtonClick={onSaveClick}
            >
              Save
            </ControlButton>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default SettingsPage
