
[![Netlify Status](https://api.netlify.com/api/v1/badges/6513a439-e820-4405-954f-8f442c0a29c1/deploy-status)](https://app.netlify.com/sites/admiring-bhabha-8dfc0c/deploys)

![GitHub Actions status | alpiepho/simple-score-volleyball-pwa](https://github.com/alpiepho/simple-score-volleyball-pwa/workflows/Node%20CI/badge.svg)



## Simple Score Volleyball PWA

:construction: WORK IN PROGRESS 

This is hosted on Netlify [here](https://admiring-bhabha-8dfc0c.netlify.com/)

This is also hosted in GH-Pages [here](https://alpiepho.github.io/simple-score-volleyball-pwa/).  NOTE: Send button will not work from GH-Pages.


This was copied from [any-counter](https://github.com/alpiepho/any-counter) and is still
a work-in-progress.

![simple-score-volleyball-pwa](./simple_score_volleyball_pwa.png)


This is a PWA application that allows easy score keeping of a volleyball match
with an additional button to send text messages of the ongoing match results to a 
preconfigured list of phone numbers.

The PWA version was written with React/Gatsby on the front end, hosted on Netlify,
and use a Netlify Function (basically an AWS Lamda function) to interface with Twillio
to send texts.

Eventually, this might be ported to an Expo application so it can run natively on IOS
and Android.

:warning: This is currently in Alpha, so only a limited number of people can actually 
send texts.

### Lighthouse

We have fireworks!!!

![lighthouse](./lighthouse.png)


### TODO

- change sms/text mechanism to send to Github instead to keep score history 
  and easier for others to follow
- disable sms in lambda
- disable settings for text numbers
- (re)build data from lambda
- option for auto side-out
- option for auto game finish
- option for auto game points
- option for auto match finish
- option for auto match count
- option for auto post match start (after names/colors changed?)
- option for auto post game point
- option for auto post game finish
- option for auto post match count
- option for auto post match finish

### BUGS

- many buttons not aligned properly


## Development Notes

Keeping these around for my own reference.

### Rough Diagram - Main

```
/
Horizontal:
-----------------------  -----  -----------------------
|                     |  | A |  |                     |
|         Us          |  -----  |        Them         |
|                     |         |                     |
|                     |  -----  |                     |
|         3           |  | ? |  |         4           |
|                     |  -----  |                     |
|                     |         |                     |
|                     |  -----  |                     |
|                     |  | B |  |                     |
-----------------------  -----  -----------------------
Vertical (default):
----------------------- 
|                     | 
|         Us          |
|                     | 
|                     | 
|         3           |
|                     |
|                     | 
|                     |
|                     |
----------------------- 
-----    -----    -----
| A |    | ? |    | B |
-----    -----    -----
----------------------- 
|                     | 
|        Them         |
|                     | 
|                     | 
|         4           |
|                     |
|                     | 
|                     |
|                     |
----------------------- 
NOTES:
- "3", "4" will be in larger font
- "A"  will be Summation Symbol to show modal with current
       score and option to text
- "?"  button to open About/Instructions Modal
- "B"  will be Hamburger menu Symbol to show modal for 
       settings

```

### Rough Diagram - Current Scores Modal
```
/scores
Vertical:
----------------------- 
|                     | 
|  Match:             |
|    Us  0, Them  1   | 
|  Game:              | 
|    Us  3, Them  4   |
|  Status:            |
|    PLAYING          | 
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
| -----         ----- |
| | A |         | B | |
| -----         ----- |
|                     | 
|                     |
|                     |
|                     | 
|                     |
|                     |
----------------------- 
NOTES:
- "A" quit, return to main
- "B" send current score to SMS/Text list
- "Status" will be 'PENDING', 'PLAYING', 'DONE-TIE', 'DONE-US', 'DONE-THEM'
```

### Rough Diagram - About/Instructions Modal
```
/about
Vertical:
----------------------- 
|  Simple Score -     | 
|     Volleyball      |
|                     | 
| - Use settings      | 
|      to reset match |
|  - Tap Us or Them   |
|      to add point   | 
|  - Double Tap to    |
|      remove point   |
|  - Use <Summation>  |
|      to see score   |
|  - Use <Summation>  |
|      send to text   |
|  - Use <Settings>   |
|      to configure#  | 
|                     |
|                     | 
|                     | 
| -----         ----- |
| | A |         | B | |
| -----         ----- |
|                     |
|                     |
----------------------- 
NOTES:
- "A" quit, return to main
```

## Rough Diagram - Settings Modal
```
/settings
Vertical:
----------------------- 
|  Settings:          | 
|                     |
|  - reset match      | 
|  - reset game       | 
|  - swap Us/Them     |
|  - rotate main      |
|  - set your #...    | 
|  - Login/Logout     |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     | 
|                     |
|                     | 
|                     | 
|                     |
|                     |
| -----         ----- |
| | A |         | B | |
| -----         ----- |
----------------------- 
```


### Warning about adding Login Indentify

It tooks like you can test the login feature from a local run (ie. localhost:8000).  The Netlify
login page will even ask the URL for the site.  The problem is that any confirmation email links
take you to the hosted site.  In my case, I didn't have the login code deployed yet, so my user
could never confirm their email.

### Notes on using Sending Texts

The applications sends score updates by:
- client side applications posts payload to Netlify Function(lambda)
- lamda get Twilio eonfigurations from .env on server (or local when testing)
- lambda cycles thru list of active numbers to send to, issues twilio sms calls to each with
  message from client side.
- TODO: do we need to wait for all texts to be sent?

:warning:  Since we are using the free tier of Twilio, there are some limitations.
- each send-to number must be pre-verified
- this means, adding via Twilio portal,
- owner will get verification code,
- code must be entered in portal,
- I think there is a 60s timeout, so person needs to be local

I think we can avoid the verification if we upgrade plans.


### Work Around for About page, first load

There is a bug wher the first load of a page is missing styles (presumably from styled comonents
and Material UI).  As a work around I needed CSS that would not conflict with the styled component
generated CSS.

To do this I added a <div> with className of "about-component" around the React components.  Then in
the global CSS (in this case it is layout.css) I added the follow:

```
.about-component h2 {
  margin-top: 5vh;
}
.about-component p {
  margin-top: 8vh;
  margin-bottom: 8vh;
}
.about-component button {
  border-radius: 20px;
  color: black;
  background-color: gray;
  height: 8vh;
}```

This mimicks the styled CSS, but because it is declared as 'class' then 'html element' it will not 
carry over to other pages.

