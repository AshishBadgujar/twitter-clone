import React from 'react'
import Feed from '../components/Feed'
import { useQuery } from '@apollo/client'
import { GET_MY_PROFILE, GET_USER_BY_ID } from '../gql-operations/queries'
import { useNavigate, useParams } from 'react-router-dom'

export default function OtherProfile() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const { data, loading, error } = useQuery(GET_USER_BY_ID, {
        variables: {
            userId
        }
    })
    if (!localStorage.getItem('token')) {
        navigate('/login')
        return <h3>Unothorized</h3>
    }
    if (error) console.log(error.message)
    if (loading) return <h3>loading...</h3>
    return (
        <>
            <div className="feed__header">
                <h2>Profile</h2>
            </div>

            <div className="profile-pic-box">
                <div className='profile-pic' >
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
                    {/* <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" /> */}
                </div>

                <h3>
                    <h3>{data.user.firstName} {data.user.lastName}</h3>
                    <span className="post__headerSpecial">
                        {data.user.email}
                        <span className="material-icons post__badge"> verified </span>
                    </span>
                </h3>

            </div>
            <div className="feed__header">
                <h4>Feeds</h4>
            </div>
            {data.user.quotes.length != 0 ?
                data.user.quotes.map((quote, index) => <Feed key={index} quote={quote} />)
                :
                <p>No feeds available</p>
            }

        </>
    )
}
