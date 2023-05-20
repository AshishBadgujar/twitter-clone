import React from 'react'

export default function Feed() {
    return (
        <div className="post">
            <div className="post__avatar">
                <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Somanath Goudar
                            <span className="post__headerSpecial">
                                @somanathg
                                <span className="material-icons post__badge"> verified</span>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
