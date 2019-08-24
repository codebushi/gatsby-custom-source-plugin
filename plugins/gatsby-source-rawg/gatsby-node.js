const fetch = require("node-fetch")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  try {
    // We can access options by passing it in as an argument to sourceNodes.
    const { apiKey } = options
    console.log(apiKey)

    const res = await fetch(`https://api.rawg.io/api/games`)
    const data = await res.json()
    data.results.forEach(game => {
      const node = {
        ...game,
        id: createNodeId(`RAWG-game-${game.id}`),
        internal: {
          type: "RAWGGame",
          contentDigest: createContentDigest(game),
        },
      }
      actions.createNode(node)
    })
  } catch (error) {
    console.log(error)
  }
}
