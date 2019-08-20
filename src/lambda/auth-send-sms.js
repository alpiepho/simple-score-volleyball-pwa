require("dotenv").config()

var sentCount = 0

export function handler(event, context, callback) {
  const accountSid = process.env.TW_ACCOUNTSID
  const authToken = process.env.TW_AUTHTOKEN
  const client = require("twilio")(accountSid, authToken)

  if (context.clientContext) {
    let numbers = process.env.TW_TO_LIST.split(" ")
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
        msg: `auth-send_sms(${sentCount++}) : ${Math.round(Math.random() * 10)}`,
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
