import React from 'react'
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "./services/auth"

class Main extends React.Component {
  state = { loading: false, json: null }
  handleClick = e => {
    e.preventDefault()
    const user = getUser()
    this.setState({ loading: true })
    fetch('/.netlify/functions/auth-hello', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token.access_token,
      },
    })
      .then(response => response.json())
      .then(json => this.setState({ loading: false, json }))
  }

  render() {
    const { loading, json } = this.state
    const user = getUser()
    return (
      <>
        <h1>Settings: (TODO)</h1>
        <ul>
          <li>API: {user.api && user.api.apiURL}</li>
          <li>ID: {user.id}</li>
        </ul>
        <hr />

        <Link to="/">Home</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/scores/login`))
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/scores/login">Login</Link>
        )}
        <hr />


        <button onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Call Lambda Function'}
        </button>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </>
    )
  }
}

export default Main
