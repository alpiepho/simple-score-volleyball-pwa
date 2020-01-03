export function getFromLS(key) {
  let ls = {}
  if (window.localStorage) {
    try {
      ls = window.localStorage.getItem("simple-score-volleyball")
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls
}

export function saveToLS(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem("simple-score-volleyball", value)
  }
}
