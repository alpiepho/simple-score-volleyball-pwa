import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
//import { getUser, isLoggedIn, logout } from "./services/auth"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Title from "../components/title"
import ControlButton from "../components/controlbutton"
import { getFromLS } from "../components/utils"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  scoreSet: {
    marginTop: 20,
  },
  score: {
    marginTop: -10,
  },
  buttonRow: {
    width: "80vw",
    marginTop: 10,
    marginLeft: 10,
  },
}))

const Main = () => {
  const classes = useStyles()

  const [phone, setPhone]   = useState("+18885550000")
  const [phones, setPhones] = useState("")
  const [label1, setLabel1] = useState("US")
  const [possession1, setPossession1] = useState(" ")
  const [match1, setMatch1] = useState(0)
  const [score1, setScore1] = useState(0)
  const [label2, setLabel2] = useState("THEM")
  const [possession2, setPossession2] = useState(" ")
  const [match2, setMatch2] = useState(0)
  const [score2, setScore2] = useState(0)

  const [disbleSend, setDisableSend] = useState(true)
  const [extra, setExtra] = useState("")

  const unpackSettings = () => {
    let settings = getFromLS("allSettings")
    if (settings) {
      settings = JSON.parse(settings)

      setPhone(settings.phone)
      setPhones(settings.phones)

      setLabel1(settings.label1)
      setPossession1(settings.possession1)
      setMatch1(settings.match1)
      setScore1(settings.score1)

      setLabel2(settings.label2)
      setPossession2(settings.possession2)
      setMatch2(settings.match2)
      setScore2(settings.score2)
    }
  }

  useEffect(() => {
    unpackSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phone !== undefined && phone !== "+18885550000") {
      setDisableSend(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone])

  const getMessage = () => {
    let message = `\nSimple Score VB: from ${phone}
Game: ${possession1}${label1} (${score1}) vs ${possession2}${label2} (${score2})
Sets: ${label1} (${match1}) vs ${label2} (${match2})`
    if (extra) message += "\n" + extra
    return message
  }

  const getInnerMessage = () => {
    return `\nINTERNAL ${phones}`
  }

  const onExtraChange = event => {
    setExtra(event.target.value)
  }

  const onCancelClick = () => {
    navigate("/home/")
  }

  //Authorization: "Bearer " + user.token.access_token,

  const onSendClick = () => {
    console.log(getMessage())

    fetch("/.netlify/functions/auth-send-sms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: getMessage() + getInnerMessage(),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })

    navigate("/home/")
  }

  const buildGame = () => {
    return (
      <Grid
        className={classes.scoreSet}
        container
        spacing={0}
        justify="space-around"
        alignItems="center"
        direction="column"
      >
        <Grid item className={classes.subtitle}>
          <h2>Game</h2>
        </Grid>
        <Grid item className={classes.score}>
          <h3>
          {possession1}{label1} : {score1}
          </h3>
        </Grid>
        <Grid item className={classes.score}>
          <h3>
          {possession2}{label2} : {score2}
          </h3>
        </Grid>
      </Grid>
    )
  }

  const buildSets = () => {
    return (
      <Grid
        className={classes.scoreSet}
        container
        spacing={0}
        justify="space-around"
        alignItems="center"
        direction="column"
      >
        <Grid item className={classes.subtitle}>
          <h2>Sets</h2>
        </Grid>
        <Grid item className={classes.score}>
          <h3>
            {label1} : {match1}
          </h3>
        </Grid>
        <Grid item className={classes.score}>
          <h3>
            {label2} : {match2}
          </h3>
        </Grid>
      </Grid>
    )
  }

  const buildExtra = () => {
    return (
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax="4"
        label="Extra Note"
        value={extra}
        className={classes.textField}
        margin="normal"
        onChange={onExtraChange}
      />
    )
  }

  const buildButtonsVertical = () => {
    return (
      <Grid
        className={classes.buttonRow}
        container
        spacing={0}
        justify="space-around"
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
            disabled={disbleSend}
            color="black"
            backgroundColor="gray"
            onButtonClick={onSendClick}
          >
            Send
          </ControlButton>
        </Grid>
      </Grid>
    )
  }

  const buildButtonsHorizontal = () => {
    return (
      <Grid
        className={classes.buttonRow}
        container
        spacing={6}
        justify="space-around"
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
            disabled={disbleSend}
            color="black"
            backgroundColor="gray"
            onButtonClick={onSendClick}
          >
            Send
          </ControlButton>
        </Grid>
      </Grid>
    )
  }

  const buildVertical = () => {
    return (
      <div className="scores-vertical">
        <Grid
          className={classes.root}
          container
          spacing={0}
          justify="space-around"
          direction="column"
        >
          {/* <Grid item className={classes.title}>
              <Title label="Scores" />
            </Grid> */}

          {buildGame()}
          {buildSets()}
          {buildExtra()}
          {buildButtonsVertical()}
        </Grid>
        {" "}
      </div>
    )
  }

  const buildHorizontal = () => {
    return (
      <div className="scores-horizontal">
        <Grid
          className={classes.root}
          container
          spacing={0}
          justify="space-around"
          direction="column"
        >
          {/* <Grid item className={classes.title}>
              <Title label="Scores" />
            </Grid> */}

          <Grid
            className={classes.buttonRow}
            container
            spacing={0}
            justify="space-around"
            alignItems="center"
            direction="row"
          >
            <Grid item>{buildGame()}</Grid>
            <Grid item>{buildSets()}</Grid>
          </Grid>
          {buildExtra()}
          {buildButtonsHorizontal()}
        </Grid>
        {" "}
      </div>
    )
  }

  return (
    <Layout>
      <SEO title="Scores" />
      <>
        {buildVertical()}
        {buildHorizontal()}
      </>
    </Layout>
  )
}

export default Main
