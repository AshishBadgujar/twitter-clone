import express from 'express';
import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './schema.js'
import { JWT_SECRET, MONGO_URL } from './config.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

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
    typeDefs, resolvers
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start({ context });

app.use(
    '/graphql',
    expressMiddleware(server),
);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});




