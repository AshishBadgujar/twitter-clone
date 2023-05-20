import React from 'react'
import Sidebar from './Sidebar'
import Widgets from './Widgets'

export default function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="feed">
                {children}
            </div>
            <Widgets />
        </>
    )
}
