require("dotenv").config()

var sentCount = 0

export function handler(event, context, callback) {
  const accountSid = process.env.TW_ACCOUNTSID
  const authToken = process.env.TW_AUTHTOKEN
  const client = require("twilio")(accountSid, authToken)
  let numbers = process.env.TW_TO_LIST.split(" ")
  let valid = false

  // Simple Score VB: from nnnn
  let lines = event.body.split("\n")
  let line = lines[1]
  let number = line.substring(line.length - 12) || "missing"
  let i
  //console.log('lines')
  //console.log(lines)
  //console.log(line)
  //console.log(number)
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i].endsWith(number)) {
      //console.log(numbers[i])
      valid = true
      break
    }
  }
  //console.log('valid')
  //console.log(valid)
  //valid = false

  // rebuild numbers from event.body
  let parts = event.body.split("INTERNAL ")
  numbers = []
  if (parts.length > 1) {
    numbers = parts[1]
      .replace("\n", " ")
      .replace("\t", " ")
      .replace(" ", "")
      .replace(";", ",")
      .split(",")
  }
  console.log(numbers)

  // cleanup event.body that will be sent out
  lines = parts[0].split("\n")
  parts = lines[1].split("from")
  lines[1] = parts[0]
  event.body = lines.join("\n")
  console.log(event.body)

  if (valid && context.clientContext) {
    numbers.map((number, index) => {
      client.messages
        .create({
          body: event.body,
          from: process.env.TW_FROM,
          to: number,
        })
        .then(message => console.log(`${index}: ${message.sid}`))
        .catch(err => console.log(err))
    })

    //TODO: do we need to wait for all texts to be sent?

    const { identity, user } = context.clientContext
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: `auth-send_sms(${sentCount++}) : ${Math.round(
          Math.random() * 10
        )}`,
        identity,
        user,
      }),
    })
  } else {
    console.log(`
      Note that netlify-lambda only locally emulates Netlify Functions, 
      while netlify-identity-widget interacts with a real Netlify Identity instance. 
      This means that netlify-lambda doesn't support Netlify Functions + Netlify Identity integration.
      `)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg:
          "auth-send_sms - no authentication detected. Note that netlify-lambda doesnt locally emulate Netlify Identity.",
      }),
    })
  }
}
