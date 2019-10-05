import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.endpoint
const accessToken = process.env.accessToken

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${accessToken}`
  }
})

export default client
