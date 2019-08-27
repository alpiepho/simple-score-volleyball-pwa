import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
//import { getUser, isLoggedIn, logout } from "./services/auth"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeWarning from "../components/landscapewarning"
import Title from "../components/title"
import ControlButton from "../components/controlbutton"
import { getFromLS } from "../components/utils"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  buttonRow: {
    width: "80vw",
    marginTop: 10,
    marginLeft: 10,
  },
}))

const Main = () => {
  const classes = useStyles()

  const [phone, setPhone] = useState("0000")
  const [label1, setLabel1] = useState("US")
  const [match1, setMatch1] = useState(0)
  const [score1, setScore1] = useState(0)
  const [label2, setLabel2] = useState("THEM")
  const [match2, setMatch2] = useState(0)
  const [score2, setScore2] = useState(0)

  const [disbleSend, setDisableSend] = useState(true)

  const unpackSettings = () => {
    let settings = getFromLS("allSettings")
    if (settings) {
      settings = JSON.parse(settings)

      setPhone(settings.phone)
      setLabel1(settings.label1)
      setMatch1(settings.match1)
      setScore1(settings.score1)

      setLabel2(settings.label2)
      setMatch2(settings.match2)
      setScore2(settings.score2)
    }
  }

  useEffect(() => {
    unpackSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phone !== undefined && phone !== "0000") {
      setDisableSend(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone])

  const getMessage = () => {
    let extra = ""
    let message = `\nSimple Score VB: from ${phone}
    Match: ${label1} (${match1}) vs ${label2} (${match2})
    Game : ${label1} (${score1}) vs ${label2} (${score2})`
    message += "\n" + extra
    return message
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
      body: getMessage(),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })

    navigate("/home/")
  }

  return (
    <Layout>
      <SEO title="Scores" />
      <>
        <div className="scores-vertical">
          <Grid
            className={classes.root}
            container
            spacing={0}
            justify="space-around"
            direction="column"
          >
            <Grid item className={classes.title}>
              <Title label="Scores" />
            </Grid>

            <Grid
              className={classes.root}
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
                  {label1} : {score1}
                </h3>
              </Grid>
              <Grid item className={classes.score}>
                <h3>
                  {label2} : {score2}
                </h3>
              </Grid>
            </Grid>

            <Grid
              className={classes.root}
              container
              spacing={0}
              justify="space-around"
              alignItems="center"
              direction="column"
            >
              <Grid item className={classes.subtitle}>
                <h2>Match</h2>
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

            <Grid
              className={classes.root}
              container
              spacing={0}
              justify="space-around"
              alignItems="center"
              direction="column"
            >
              <Typography>TODO: Add Text Area for Note</Typography>
            </Grid>

            <Grid
              className={classes.buttonRow}
              container
              spacing={8}
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
          </Grid>{" "}
        </div>
        <div className="scores-horizontal">
          <LandscapeWarning />
        </div>
      </>
    </Layout>
  )
}

export default Main

// import React from 'react'
// import { Link, navigate } from "gatsby"
// import { getUser, isLoggedIn, logout } from "./services/auth"

// class Main extends React.Component {
//   state = { loading: false, json: null }

//   handleClick = e => {
//     e.preventDefault()
//     const user = getUser()
//     this.setState({ loading: true })

//     fetch('/.netlify/functions/auth-send-sms', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + user.token.access_token,
//       },
//       body: this.getMessage()
//     })
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, json }))
//   }

//   render() {
//     const { loading, json } = this.state
//     const user = getUser()
//     return (
//       <>
//         <h1>Settings: (TODO)</h1>
//         <ul>
//           <li>API: {user.api && user.api.apiURL}</li>
//           <li>ID: {user.id}</li>
//         </ul>
//         <hr />

//         <Link to="/home/">Home</Link>
//         {` `}
//         {` `}
//         {isLoggedIn() ? (
//           <a
//             href="/"
//             onClick={event => {
//               event.preventDefault()
//               logout(() => navigate(`/scores/login`))
//             }}
//           >
//             Logout
//           </a>
//         ) : (
//           <Link to="/scores/login">Login</Link>
//         )}
//         <hr />

//         <button onClick={this.handleClick}>
//           {loading ? 'Loading...' : 'Send Text'}
//         </button>
//         <pre>{JSON.stringify(json, null, 2)}</pre>
//       </>
//     )
//   }
// }

// export default Main
