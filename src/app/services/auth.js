import netlifyIdentity from "netlify-identity-widget"

export const isBrowser = () => typeof window !== "undefined"
export const initAuth = () => {
  if (isBrowser()) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    console.log('11111')
    netlifyIdentity.init()
  }
}
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("netlifyUser")
    ? JSON.parse(window.localStorage.getItem("netlifyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("netlifyUser", JSON.stringify(user))

export const handleLogin = callback => {
  if (isLoggedIn()) {
    console.log('22222')
    callback(getUser())
  } else {
    console.log('33333')
    netlifyIdentity.open()
    console.log('44444')
    netlifyIdentity.on("login", user => {
      console.log('55555')
      setUser(user)
      callback(user)
    })
  }
}

export const isLoggedIn = () => {
  console.log("aaaa")
  console.log(isBrowser())
  if (!isBrowser()) return false
  const user = netlifyIdentity.currentUser()
  console.log(user)
  return !!user
}

export const logout = callback => {
  netlifyIdentity.logout()
  netlifyIdentity.on("logout", () => {
    setUser({})
    callback()
  })
}