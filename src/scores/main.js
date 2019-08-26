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

const Main = props => {
  const classes = useStyles()

  const [label1, setLabel1] = useState("US")
  const [match1, setMatch1] = useState(0)
  const [score1, setScore1] = useState(0)
  const [label2, setLabel2] = useState("THEM")
  const [match2, setMatch2] = useState(0)
  const [score2, setScore2] = useState(0)

  useEffect(() => {
    // TODO: Gatsby documentation is weak, infers that
    // component at end of navigation should get state
    // from props.state or whatever tag used.  From google
    // search, need to use window.history.state to access
    // what was passed
    if (
      window &&
      window.history &&
      window.history.state &&
      window.history.state.label1
    ) {
      console.log(window.history.state)
      let settings = window.history.state
      setLabel1(settings.label1)
      setMatch1(settings.match1)
      setScore1(settings.score1)
      setLabel2(settings.label2)
      setMatch2(settings.match2)
      setScore2(settings.score2)   
    }
  }, [])

  const onCancelClick = () => {
    navigate("/home/")
  }

  const onSaveClick = () => {
    console.log("save")
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
                <h3>{label1} : {score1}</h3>
              </Grid>
              <Grid item className={classes.score}>
                <h3>{label2} : {score2}</h3>
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
                <h3>{label1} : {match1}</h3>
              </Grid>
              <Grid item className={classes.score}>
                <h3>{label2} : {match2}</h3>
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
              <Typography>
TODO: Add Text Area for Note
              </Typography>
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
                  color="black"
                  backgroundColor="gray"
                  onButtonClick={onSaveClick}
                >
                  Save
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

//   getMessage = () => {
//     let us_them_order = true;
//     let match_us = 2;
//     let match_them = 1;
//     let game_us = 3;
//     let game_them = 4;
//     let extra = 'Great serve by K!\n...ran 6 points.'

//     let message;

//     if (us_them_order) {
//       message = `\nSimple Score VB:
//       Match: Us (${match_us}) vs Them (${match_them})
//       Game : Us (${game_us}) vs Them (${game_them})`
//     }
//     else {
//       message = `\nSimple Score VB:
//       Match: Them (${match_them}) vs Us (${match_us})
//       Game : Them (${game_them}) vs Us (${game_us})`
//     }
//     message += '\n' + extra;
//     return message;
//   }

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
