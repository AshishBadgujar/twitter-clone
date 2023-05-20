import React from 'react'
import Feed from '../components/Feed'

export default function Profile() {
    return (
        <>
            <div className="feed__header">
                <h2>Profile</h2>
            </div>
            <div className="profile-pic-box">
                <div className='profile-pic' >
                    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
                </div>

                <h3>
                    <h3>Somanath Goudar</h3>
                    <span className="post__headerSpecial">
                        @somanathg
                        <span className="material-icons post__badge"> verified </span>
                    </span>
                </h3>

            </div>
            <div className="feed__header">
                <h4>Feeds</h4>
            </div>
            <Feed />
        </>
    )
}
