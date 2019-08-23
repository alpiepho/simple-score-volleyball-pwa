import React from "react"
import { navigate } from "gatsby"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
//import { getUser, isLoggedIn, logout } from "./services/auth"

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

const Main = () => {
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
      <SEO title="Scores" />
      <Grid
        className={classes.root}
        container
        spacing={0}
        justify="space-around"
        direction="column"
      >
        <Title label="Scores" />

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
