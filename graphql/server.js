import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import typeDefs from './schema.js'
import { JWT_SECRET, MONGO_URL } from './config.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {
    console.log("connected...")
})
mongoose.connection.on("error", (err) => {
    console.log("error connecting", err)
})

import './models/User.js'
import './models/Quote.js'
import resolvers from './resolvers.js'

//middleware
const context = (({ req }) => {
    const { authorization } = req.headers
    if (authorization) {
        const { userId } = jwt.verify(authorization, JWT_SECRET)
        return { userId }
    }
})


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
})