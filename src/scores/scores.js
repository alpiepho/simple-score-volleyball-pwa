import React from "react"
//import { Router } from "@reach/router" // comes with gatsby v2
//import Layout from "../components/layout"
import Main from "./main" // NOT SHOWN
//import PrivateRoute from "./components/PrivateRoute"
//import Login from "./login"

// remember everything in /scores/* is dynamic now!
const App = () => {
  return (
    <Main />
    // <Layout>
    //   <Router>
    //     <PublicRoute path="/scores">
    //       <PrivateRoute path="/" component={Main} />
    //       <Login path="/login" />
    //     </PublicRoute>
    //   </Router>
    // </Layout>
  )
}
//function PublicRoute(props) {
//  return <div>{props.children}</div>
//}

export default App
