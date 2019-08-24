// const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  /*
  try {
    // Fetch the data
    const res = await fetch(`https://api.rawg.io/api/games`)

    // Transform the data into json
    const data = await res.json()

    // Map over the results array, calling action.createNode on each item in the array
    data.results.forEach(game => {
      const node = {
        ...game, // We copy all of the properties from the game object
        id: createNodeId(`RAWG-game-${game.id}`), // Needs to be unique
        internal: {
          type: "RAWGGame",
          contentDigest: createContentDigest(game), // We pass in the entire game object to make sure it's unique
        },
      }

      // Create the actual data node
      actions.createNode(node)
    })
  } catch (error) {
    console.log(error)
  }
  */

  const newNode = {
    title: "Test Node!",
    description: "This is a test node with static data",
    id: createNodeId("TestNode-testid"), // required by Gatsby
    internal: {
      type: "TestNode", // required by Gatsby
      contentDigest: createContentDigest("testnode"), // required by Gatsby, must be unique
    },
  }
  actions.createNode(newNode)
}
