import gql from 'graphql-tag'

const typeDefs = gql`
    type Query{
        users:[User]
        quotes:[QuoteWithName]
        user(_id:ID!):User
        iquotes(by:ID!):[Quote]
        myprofile:User
    }
    type QuoteWithName{
        _id:ID
        name:String
        by:IdName
    }
    type IdName{
        _id:String
        firstName:String
        email:String
    }
    type User{
        _id:ID
        firstName:String
        lastName:String
        email:String
        quotes:[Quote]
    }
    type Quote{
        _id:ID
        name:String
        by:ID
    }
    type Token{
        token:String
    }
    type Mutation{
        createUser(userNew:UserInput!):User
        loginUser(userLogin:loginInput!):Token
        createQuote(name:String!):String
        updateQuote(_id:ID!,name:String!):Quote
        deleteQuote(_id:ID!):String
    }
    input UserInput{
        firstName:String!
        lastName:String!
        email:String!
        password:String!
    }
    input loginInput{
        email:String!
        password:String!
    }
`
export default typeDefs