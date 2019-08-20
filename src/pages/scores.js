import Scores from '../scores/scores'

export default Scores

// `src/scores` is not "special", it is re-exported by `src/pages/scores.js`
// and contains all the clientside dynamic App pages that we dont want to be statically generated.
// `src/pages/scores.js` skips the static generation process because of `gatsby-plugin-create-client-paths`
// configured in `gatsby-config.js`
