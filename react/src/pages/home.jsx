import React, { useEffect, useState } from 'react'
import Feed from '../components/Feed'
import TweetBox from '../components/TweetBox'
import { useQuery } from '@apollo/client'
import { GET_ALL_QUOTES } from '../gql-operations/queries'

export default function Home() {
    const { loading, error, data } = useQuery(GET_ALL_QUOTES)
    const [quotes, setQuotes] = useState([])
    const token = localStorage.getItem('token')
    if (error) {
        console.log(error.message)
    }
    useEffect(() => {
        if (data) {
            setQuotes(data.quotes)
        }
    }, [data])
    console.log("data=", data)
    return (
        <>
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {token && <TweetBox />}
            {loading && <h3 className='message'>Loading...</h3>}
            {quotes.length != 0 ?
                quotes.map(quote => (
                    <Feed key={quote._id} quote={quote} />
                ))
                :
                <h3 className='message'>No Tweetes Available</h3>
            }
        </>
    )
}
