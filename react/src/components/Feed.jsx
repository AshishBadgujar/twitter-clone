import React from 'react'
import { Link } from 'react-router-dom'

export default function Feed({ quote }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
                {/* <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" /> */}
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        {quote.by &&
                            <Link to={`/profile/${quote.by._id}`}>
                                <h3 style={{ color: "#333" }}>
                                    {quote.by.firstName}
                                    <span className="post__headerSpecial">
                                        @{quote.by.email?.split('@')[0]}
                                        <span className="material-icons post__badge"> verified</span>
                                    </span>
                                </h3>
                            </Link>
                        }
                    </div>
                    <div className="post__headerDescription">
                        <p>{quote.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
