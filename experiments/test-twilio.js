require('dotenv').config()

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = process.env.TW_ACCOUNTSID;
const authToken = process.env.TW_AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);

let us_them_order = true;
let match_us = 2;
let match_them = 1;
let game_us = 3;
let game_them = 4;
let extra = 'Great serve by K!\n...ran 6 points.'

let message;

if (us_them_order) {
  message = `\nSimple Score VB:
  Match: Us (${match_us}) vs Them (${match_them})
  Game : Us (${game_us}) vs Them (${game_them})`
}
else {
  message = `\nSimple Score VB:
  Match: Them (${match_them}) vs Us (${match_us})
  Game : Them (${game_them}) vs Us (${game_us})`
}
message += '\n' + extra;


let numbers = process.env.TW_TO_LIST.split(' ');
numbers.map((number, index) => {
  client.messages
  .create({
     body: message,
     from: process.env.TW_FROM,
     to: number
   })
  .then(message => console.log(`${index}: ${message.sid}`))
  .catch(err => console.log(err));
});

  