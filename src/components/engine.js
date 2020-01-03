//const GAME_MAX = 25
var orderAB = true
var stack = [] // will always be orderAB === true; previous states
var gameA = 0
var gameB = 0
var matchA = 0
var matchB = 0
var gameDone = false
var matchDone = false

function engine_push() {
  let entry
  if (orderAB) {
    entry = [gameA, gameB, matchA, matchB, gameDone, matchDone]
  } else {
    entry = [gameB, gameA, matchB, matchA, gameDone, matchDone]
  }
  stack.push(entry)
}

function engine_check() {
  // TODO: should this be automatic? would need to set thresholds
  // if (gameA >= GAME_MAX || gameB >= GAME_MAX) {
  //     if ((gameA - gameB) >= 2) {
  //         gameDone = true
  //         matchA += 1
  //     }
  //     if ((gameB - gameA) >= 2) {
  //         gameDone = true
  //         matchB += 1
  //     }
  // }
}

function engine_reset() {
  orderAB = true
  stack = [] // will always be orderAB === true
  gameA = 0
  gameB = 0
  matchA = 0
  matchB = 0
  gameDone = false
  matchDone = false
}

export function engine_toggleOrder() {
  orderAB = !orderAB
}

export function engine_undo() {
  if (stack.length > 0) {
    if (orderAB) {
      ;[gameA, gameB, matchA, matchB, gameDone, matchDone] = stack.pop()
    } else {
      ;[gameB, gameA, matchB, matchA, gameDone, matchDone] = stack.pop()
    }
  }
}

export function engine_pointA() {
  if (!gameDone) {
    engine_push()
    if (orderAB) gameA += 1
    else gameB += 1
    engine_check()
  }
}

export function engine_pointB() {
  if (!gameDone) {
    engine_push()
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
  engine_push()
  gameDone = false
  gameA = 0
  gameB = 0
}

export function engine_finishMatch() {
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
    gameA = settings["gameA"]
    gameB = settings["gameB"]
    matchA = settings["matchA"]
    matchB = settings["matchB"]
    gameDone = settings["gameDone"]
    matchDone = settings["matchDone"]
    stack = JSON.parse(settings["stack"])
  }
}

export function engine_save() {
  let settings = {}
  settings["orderAB"] = orderAB
  settings["gameA"] = gameA
  settings["gameB"] = gameB
  settings["matchA"] = matchA
  settings["matchB"] = matchB
  settings["gameDone"] = gameDone
  settings["matchDone"] = matchDone
  settings["stack"] = JSON.stringify(stack)
  return JSON.stringify(settings)
}

export function engine_get() {
  if (orderAB) {
    return [gameA, gameB, matchA, matchB, gameDone, matchDone]
  } else {
    return [gameB, gameA, matchB, matchA, gameDone, matchDone]
  }
}
