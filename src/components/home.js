import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeWarning from "../components/landscapewarning"
import TeamButton from "../components/teambutton"
import Controls from "../components/controls"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "95vh",
    marginTop: "2.5vh",
  },
}))

function getFromLS(key) {
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

function saveToLS(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem("simple-score-volleyball", value)
  }
}

const Home = () => {
  const classes = useStyles()
  const [horizontal, setHorizontal] = useState(false)

  const [color1, setColor1] = useState("white")
  const [backgroundColor1, setBackgroundColor1] = useState("red")
  const [label1, setLabel1] = useState("US")
  const [match1, setMatch1] = useState(0)
  const [score1, setScore1] = useState(0)

  const [color2, setColor2] = useState("white")
  const [backgroundColor2, setBackgroundColor2] = useState("blue")
  const [label2, setLabel2] = useState("THEM")
  const [match2, setMatch2] = useState(0)
  const [score2, setScore2] = useState(0)

  useEffect(() => {
    let settings = prepUnpackSettings()
    let newSettings = {}
    
    // entry return-from-settings
    // TODO: Gatsby documentation is weak, infers that
    // component at end of navigation should get state
    // from props.state or whatever tag used.  From google
    // search, need to use window.history.state to access
    // what was passed
    if (
      settings &&
      window &&
      window.history &&
      window.history.state &&
      window.history.state.settingschange
    ) {
      if (window.history.state.togglegoodguys) {
        [newSettings.label1,  newSettings.label2]  = prepToggleGoodGuys(settings)
      }
    }
    unpackSettings(settings, newSettings)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    packSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score1, score2, label1, label2])

  const prepPackSettings = () => {
    let settings = {}

    settings["horizontal"] = horizontal

    settings["color1"] = color1
    settings["backgroundColor1"] = backgroundColor1
    settings["label1"] = label1
    settings["match1"] = match1
    settings["score1"] = score1

    settings["color2"] = color2
    settings["backgroundColor2"] = backgroundColor2
    settings["label2"] = label2
    settings["match2"] = match2
    settings["score2"] = score2

    return settings
  }

  const packSettings = () => {
    let settings = prepPackSettings()
    //console.log(settings)
    settings = JSON.stringify(settings)
    saveToLS("allSettings", settings)
  }

  const prepUnpackSettings = () => {
    let settings = getFromLS("allSettings")
    if (settings) {
      settings = JSON.parse(settings)
    }
    return settings
  }

  const unpackSettings = (settings, newSettings) => {
    if (settings) {
      settings = { ...settings, ...newSettings }

      setHorizontal(settings.horizontal)

      setColor1(settings.color1)
      setBackgroundColor1(settings.backgroundColor1)
      setLabel1(settings.label1)
      setMatch1(settings.match1)
      setScore1(settings.score1)

      setColor2(settings.color2)
      setBackgroundColor2(settings.backgroundColor2)
      setLabel2(settings.label2)
      setMatch2(settings.match2)
      setScore2(settings.score2)
    }
  }

  const prepToggleGoodGuys = (settings) => {
    let newLabel1 = settings.label1
    let newLabel2 = settings.label2
    if (newLabel1 === "US") {
      newLabel1 = "GOOD GUYS"
      newLabel2 = "BAD GUYS"
    } else if (newLabel1 === "THEM") {
      newLabel2 = "GOOD GUYS"
      newLabel1 = "BAD GUYS"
    } else if (newLabel1 === "GOOD GUYS") {
      newLabel1 = "US"
      newLabel2 = "THEM"
    } else if (newLabel1 === "BAD GUYS") {
      newLabel2 = "US"
      newLabel1 = "THEM"
    }
    return [ newLabel1, newLabel2 ]
  }

  // const toggleGoodGuys = () => {
  //   let[newLabel1,  newLabel2]  = prepToggleGoodGuys()
  //   setLabel1(newLabel1)
  //   setLabel2(newLabel2)
  // }

  const toggleUsThem = () => {
    let color = color1
    let backgroundColor = backgroundColor1
    let label = label1
    let match = match1
    let score = score1

    setColor1(color2)
    setBackgroundColor1(backgroundColor2)
    setLabel1(label2)
    setMatch1(match2)
    setScore1(score2)

    setColor2(color)
    setBackgroundColor2(backgroundColor)
    setLabel2(label)
    setMatch2(match)
    setScore2(score)
  }

  const onTeam1Click = () => {
    setScore1(score1 + 1)
  }

  const onTeam2Click = () => {
    setScore2(score2 + 1)
  }

  const onScoresClick = () => {
    let settings = prepPackSettings()
    packSettings()
    // TODO: Gatsby documentation is weak, infers that
    // component at end of navigation should get state
    // from props.state or whatever tag used.  From google
    // search, need to use window.history.state to access
    // what was passed
    navigate("/scores/", { state: settings })
  }

  const onAboutClick = () => {
    packSettings()
    navigate("/")
  }

  const onSwapTeamsClick = () => {
    toggleUsThem()
    packSettings()
  }

  const onSettingsClick = () => {
    packSettings()
    navigate("/settings/")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <>
        <div className="home-vertical">
          <Grid
            className={classes.root}
            container
            spacing={0}
            justify="space-around"
            direction="column"
          >
            <TeamButton
              horizontal={horizontal}
              color={color1}
              backgroundColor={backgroundColor1}
              label={label1}
              score={score1}
              onButtonClick={onTeam1Click}
            />
            <Controls
              horizontal={horizontal}
              color="black"
              backgroundColor="gray"
              onScoresClick={onScoresClick}
              onAboutClick={onAboutClick}
              onSwapTeamsClick={onSwapTeamsClick}
              onSettingsClick={onSettingsClick}
            />
            <TeamButton
              horizontal={horizontal}
              color={color2}
              backgroundColor={backgroundColor2}
              label={label2}
              score={score2}
              onButtonClick={onTeam2Click}
            />
          </Grid>
        </div>
        <div className="home-horizontal">
          <LandscapeWarning />
        </div>
      </>
    </Layout>
  )
}

export default Home