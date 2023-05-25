import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_TWEET } from '../gql-operations/mutations'

export default function TweetBox() {
    const [createQuote, { data, loading, error }] = useMutation(CREATE_TWEET, {
        refetchQueries: [
            'getAllQuotes',
            'getMyProfile'
        ]
    })
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        createQuote({
            variables: {
                text,
            }
        })
        setText('')
    }
    if (loading) return <h4>loading...</h4>
    if (error) console.log(error.message)
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetbox__input">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
                    {/* <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" /> */}
                    <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="What's happening?" rows="9"></textarea>
                </div>
                <button className="tweetBox__tweetButton" onClick={handleSubmit} disabled={text.trim().length == 0}>Tweet</button>
            </form>
        </div>
    )
}
