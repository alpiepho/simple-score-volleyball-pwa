import React from "react"
import { Link, navigate } from "gatsby"
import { handleLogin } from "./services/auth"

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/scores/`))
  render() {
    return (
      <>
        <h1>Log in</h1>
        <button onClick={this.handleSubmit}>log in</button>
        <hr/>
        <Link to="/home/">Home</Link>
      </>
    )
  }
}

export default Login