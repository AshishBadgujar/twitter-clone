import mongoose from 'mongoose'
import { users, quotes } from './fakedb.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js'

const User = mongoose.model("User")
const Quote = mongoose.model('Quote')

const resolvers = {
    Query: {
        users: async () => await User.find(),
        quotes: async () => await Quote.find().populate("by", "_id firstName"),
        user: async (_, { _id }) => await User.findById(_id),
        iquotes: async (_, { by }) => await Quote.find({ by })
    },
    User: {
        quotes: async (user) => await Quote.find({ by: user._id })
    },
    Mutation: {
        createUser: async (_, { userNew }) => {
            const user = await User.findOne({ email: userNew.email })
            if (user) {
                throw new Error("User already exist")
            }
            const hashed = await bcrypt.hash(userNew.password, 10)
            const newUser = new User({
                ...userNew,
                password: hashed
            })
            return await newUser.save()
        },
        loginUser: async (_, { userLogin }) => {
            const user = await User.findOne({ email: userLogin.email })
            if (!user) {
                throw new Error("User doesn't exist")
            }
            const doMatch = await bcrypt.compare(userLogin.password, user.password)
            if (!doMatch) {
                throw new Error("wrong password")
            }
            const token = jwt.sign({ userId: user._id }, JWT_SECRET)
            return { token }
        },
        //parent,args,context
        createQuote: async (_, { name }, { userId }) => {
            if (!userId) throw Error("you must be logged in")
            const newQuote = new Quote({
                by: userId,
                name
            })
            await newQuote.save()
            return "Quote saved successfully"
        },
        updateQuote: async (_, { _id, name }, { userId }) => {
            if (!userId) throw Error("you must be logged in")

            const quote = await Quote.findById(_id)
            if (quote.by != userId) throw Error("you are not authorized to modify")

            const updated = await Quote.findByIdAndUpdate(_id, { $set: { name } }, { new: true })
            return updated
        },
        deleteQuote: async (_, { _id }, { userId }) => {
            if (!userId) throw Error("you must be logged in")
            await Quote.findByIdAndDelete(_id)
            return "Quote deleted"
        }
    }
}
export default resolvers