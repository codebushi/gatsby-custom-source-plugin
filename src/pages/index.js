import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// The GraphQL data is passed into the component via props.data
const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      {props.data.allRawgGame.edges.map(({ node }) => {
        return (
          <div key={node.id} style={{ marginBottom: 20 }}>
            <p>{node.name}</p>
            <p>
              <img src={node.background_image} alt={node.name} />
            </p>
          </div>
        )
      })}
    </Layout>
  )
}

// We use the GraphiQL query here
export const query = graphql`
  query MyQuery {
    allRawgGame {
      edges {
        node {
          id
          name
          background_image
        }
      }
    }
  }
`

export default IndexPage
