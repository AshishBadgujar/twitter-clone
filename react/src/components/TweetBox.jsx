import React, { useState } from 'react'

export default function TweetBox() {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetbox__input">
                    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
                    <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="What's happening?" rows="9"></textarea>
                </div>
                <button className="tweetBox__tweetButton" onClick={handleSubmit} disabled={text.trim().length == 0}>Tweet</button>
            </form>
        </div>
    )
}
