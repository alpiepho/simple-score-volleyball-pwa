var orderAB = true
var stack = [] // will always be orderAB === true; previous states
var possessionA = ">"
var possessionB = " "
var gameA = 0
var gameB = 0
var matchA = 0
var matchB = 0
var gameDone = false
var matchDone = false

var autoSideOut = true
var autoGameFinish = true
var autoMatchFinish = true
var autoGamePoints = 25
var autoLastGamePoints = 15
var autoMatchGames = 3

function engine_push() {
  let entry
  if (orderAB) {
    entry = [
      possessionA,
      possessionB,
      gameA,
      gameB,
      matchA,
      matchB,
      gameDone,
      matchDone,
      autoSideOut,
      autoGameFinish,
      autoMatchFinish,
      autoGamePoints,
      autoLastGamePoints,
      autoMatchGames,
    ]
  } else {
    entry = [
      possessionB,
      possessionA,
      gameB,
      gameA,
      matchB,
      matchA,
      gameDone,
      matchDone,
      autoSideOut,
      autoGameFinish,
      autoMatchFinish,
      autoGamePoints,
      autoLastGamePoints,
      autoMatchGames,
    ]
  }
  stack.push(entry)
}

function engine_check() {
  if (autoGameFinish) {
    if (matchA + matchB >= autoMatchGames - 1) {
      // Last Game
      if (gameA >= autoLastGamePoints || gameB >= autoLastGamePoints) {
        if (gameA - gameB >= 2) {
          engine_finishGame()
        }
        if (gameB - gameA >= 2) {
          engine_finishGame()
        }
      }
    } else {
      // First Games
      if (gameA >= autoGamePoints || gameB >= autoGamePoints) {
        if (gameA - gameB >= 2) {
          engine_finishGame()
        }
        if (gameB - gameA >= 2) {
          engine_finishGame()
        }
      }
    }
  }
  if (autoMatchFinish) {
    if (matchA >= autoMatchGames - 1) {
      engine_finishMatch()
      matchDone = true
    } else if (matchB >= autoMatchGames - 1) {
      engine_finishMatch()
      matchDone = true
    }
  }
}

const engine_possession = point => {
  if (autoSideOut) {
    if (point === 1 && possessionB === ">") {
      possessionA = ">"
      possessionB = " "
    } else if (point === 2 && possessionA === ">") {
      possessionA = " "
      possessionB = ">"
    }
  }
}

function engine_reset() {
  orderAB = true
  stack = [] // will always be orderAB === true
  possessionA = ">"
  possessionB = " "
  gameA = 0
  gameB = 0
  matchA = 0
  matchB = 0
  gameDone = false
  matchDone = false
  autoSideOut = true
  autoGameFinish = false
  autoMatchFinish = false
  autoGamePoints = 25
  autoLastGamePoints = 15
  autoMatchGames = 3
}

export function engine_setBase(
  given_possessionA,
  given_possessionB,
  given_gameA,
  given_gameB,
  given_matchA,
  given_matchB,
  given_gameDone,
  given_matchDone,
) {
  possessionA = given_possessionA
  possessionB = given_possessionB
  gameA = parseInt(given_gameA)
  gameB = parseInt(given_gameB)
  matchA = parseInt(given_matchA)
  matchB = parseInt(given_matchB)
  gameDone = given_gameDone
  matchDone = given_matchDone
}

export function engine_setAuto(
  given_autoSideOut,
  given_autoGameFinish,
  given_autoMatchFinish,
  given_autoGamePoints,
  given_autoLastGamePoints,
  given_autoMatchGames
) {
  // console.log("engine_setAuto")
  // console.log(given_autoSideOut)
  // console.log(given_autoGameFinish)
  // console.log(given_autoMatchFinish)
  // console.log(given_autoGamePoints)
  // console.log(given_autoLastGamePoints)
  // console.log(given_autoMatchGames)
  autoSideOut = given_autoSideOut
  autoGameFinish = given_autoGameFinish
  autoMatchFinish = given_autoMatchFinish
  autoGamePoints = parseInt(given_autoGamePoints)
  autoLastGamePoints = parseInt(given_autoLastGamePoints)
  autoMatchGames = parseInt(given_autoMatchGames)
}

export function engine_toggleOrder() {
  orderAB = !orderAB
}

export function engine_undo() {
  if (stack.length > 0) {
    if (orderAB) {
      [
        possessionA,
        possessionB,
        gameA,
        gameB,
        matchA,
        matchB,
        gameDone,
        matchDone,
        autoSideOut,
        autoGameFinish,
        autoMatchFinish,
        autoGamePoints,
        autoLastGamePoints,
        autoMatchGames,
      ] = stack.pop()
    } else {
      ;[
        possessionB,
        possessionA,
        gameB,
        gameA,
        matchB,
        matchA,
        gameDone,
        matchDone,
        autoSideOut,
        autoGameFinish,
        autoMatchFinish,
        autoGamePoints,
        autoLastGamePoints,
        autoMatchGames,
      ] = stack.pop()
    }
  }
}

export function engine_pointA() {
  if (!gameDone) {
    engine_push()
    engine_possession(1)
    if (orderAB) gameA += 1
    else gameB += 1
    engine_check()
  }
}

export function engine_pointB() {
  if (!gameDone) {
    engine_push()
    engine_possession(2)
    if (orderAB) gameB += 1
    else gameA += 1
    engine_check()
  }
}

export function engine_finishGame() {
  engine_push()
  gameDone = true
  if (gameA > gameB) {
    matchA += 1
  } else {
    matchB += 1
  }
}

export function engine_resetGame() {
  if (matchDone) return false
  engine_push()
  gameDone = false
  gameA = 0
  gameB = 0
  return true
}

export function engine_finishMatch() {
  console.log("engine_finishMatch")
  if (!matchDone) {
    engine_push()
    matchDone = true
  }
}

export function engine_resetMatch() {
  engine_reset()
}

export function engine_load(settings) {
  if (settings.length) {
    settings = JSON.parse(settings)
    orderAB = settings["orderAB"]
    possessionA = settings["possessionA"]
    possessionB = settings["possessionB"]
    gameA = settings["gameA"]
    gameB = settings["gameB"]
    matchA = settings["matchA"]
    matchB = settings["matchB"]
    gameDone = settings["gameDone"]
    matchDone = settings["matchDone"]
    autoSideOut = settings["autoSideOut"]
    autoGameFinish = settings["autoGameFinish"]
    autoMatchFinish = settings["autoMatchFinish"]
    autoGamePoints = settings["autoGamePoints"]
    autoLastGamePoints = settings["autoLastGamePoints"]
    autoMatchGames = settings["autoMatchGames"]
    stack = JSON.parse(settings["stack"])
  }
}

export function engine_save() {
  let settings = {}
  settings["orderAB"] = orderAB
  settings["possessionA"] = possessionA
  settings["possessionB"] = possessionB
  settings["gameA"] = gameA
  settings["gameB"] = gameB
  settings["matchA"] = matchA
  settings["matchB"] = matchB
  settings["gameDone"] = gameDone
  settings["matchDone"] = matchDone
  settings["autoSideOut"] = autoSideOut
  settings["autoGameFinish"] = autoGameFinish
  settings["autoMatchFinish"] = autoMatchFinish
  settings["autoGamePoints"] = autoGamePoints
  settings["autoLastGamePoints"] = autoLastGamePoints
  settings["autoMatchGames"] = autoMatchGames
  settings["stack"] = JSON.stringify(stack)
  return JSON.stringify(settings)
}

export function engine_get() {
  if (orderAB) {
    return [
      possessionA,
      possessionB,
      gameA,
      gameB,
      matchA,
      matchB,
      gameDone,
      matchDone,
      autoSideOut,
      autoGameFinish,
      autoMatchFinish,
      autoGamePoints,
      autoLastGamePoints,
      autoMatchGames,
    ]
  } else {
    return [
      possessionB,
      possessionA,
      gameB,
      gameA,
      matchB,
      matchA,
      gameDone,
      matchDone,
      autoSideOut,
      autoGameFinish,
      autoMatchFinish,
      autoGamePoints,
      autoLastGamePoints,
      autoMatchGames,
    ]
  }
}
