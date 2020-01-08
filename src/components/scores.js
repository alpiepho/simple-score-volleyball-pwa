import React, { useState, useEffect } from "react"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "./layout"
import SEO from "./seo"
import ControlButton from "./controlbutton"

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

const ScoresPage = props => {
  const classes = useStyles()

  const [disbleSend, setDisableSend] = useState(true)
  const [extra, setExtra] = useState("")

  useEffect(() => {
    if (props.userid !== undefined && props.userid !== "user") {
      setDisableSend(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userid])

  // useEffect(() => {
  //   if (props.phone !== undefined && props.phone !== "+18885550000") {
  //     setDisableSend(false)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.phone])

  const getMessage = () => {
//     let message = `\nSimple Score VB: from ${props.phone}
// Game: ${props.possession1}${props.label1} (${props.score1}) vs ${props.possession2}${props.label2} (${props.score2})
// Sets: ${props.label1} (${props.match1}) vs ${props.label2} (${props.match2})`
//     if (extra) message += "\n" + extra
//     return message
    return props.unpackSettings()
  }

  const getInnerMessage = () => {
    return ''
  }

  const onExtraChange = event => {
    setExtra(event.target.value)
  }

  const onCancelClick = () => {
    props.onHomeClick()
  }

  const onSendClick = () => {
    console.log(getMessage())

    fetch("/.netlify/functions/auth-send-gh", {
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

    props.onHomeClick()
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
            {props.possession1}
            {props.label1} : {props.score1}
          </h3>
        </Grid>
        <Grid item className={classes.score}>
          <h3>
            {props.possession2}
            {props.label2} : {props.score2}
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
            {props.label1} : {props.match1}
          </h3>
        </Grid>
        <Grid item className={classes.score}>
          <h3>
            {props.label2} : {props.match2}
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
        </Grid>{" "}
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
        </Grid>{" "}
      </div>
    )
  }

  return (
    <>
      {props.page === "scores" ? (
        <Layout>
          <SEO title="Scores" />
          <>
            {buildVertical()}
            {buildHorizontal()}
          </>
        </Layout>
      ) : (
        ""
      )}
    </>
  )
}

export default ScoresPage
