import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default () => {
  const content = { message: "", login: true }
  const user = getUser()
  if (isLoggedIn()) {
    content.message = `Hello, ${user.user_metadata &&
      user.user_metadata.full_name}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
        backgroundColor: "aliceblue",
      }}
    >
      <span>{content.message}</span>

      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/scores/">Scores</Link>
        {` `}
        <Link to="/scores/profile">Profile</Link>
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
      </nav>
    </div>
  )
}