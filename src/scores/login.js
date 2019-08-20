import React from "react"
import { navigate } from "gatsby"
import { handleLogin } from "./services/auth"

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/scores/`))
  render() {
    return (
      <>
        <h1>Log in</h1>
        <button onClick={this.handleSubmit}>log in</button>
      </>
    )
  }
}

export default Login