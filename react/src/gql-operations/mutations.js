import { gql } from "@apollo/client"

export const SIGNUP_USER = gql`
mutation signupUser($userNew:UserInput!){
    user:createUser(userNew:$userNew){ 
      firstName
    }
  }
`
export const LOGIN_USER = gql`
mutation signinUser($userSignin:loginInput!){
  user:loginUser(userLogin:$userSignin){ 
    token
  }
}
`

export const CREATE_TWEET = gql`
mutation createQuote($text:String!){
  quote:createQuote(name:$text)
}
`