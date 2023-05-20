import React from 'react'
import Feed from '../components/Feed'
import TweetBox from '../components/TweetBox'

export default function Main() {
    return (
        <>
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Feed />
            <Feed />
            <Feed />
        </>
    )
}
