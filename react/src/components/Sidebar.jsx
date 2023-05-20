import React from 'react'
import LOGO from '../../public/images/twitter-logo.png'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={LOGO} alt="Logo do Twitter" />
            </div>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'sidebarOption active' : 'sidebarOption')}>
                <span className="material-icons"> home </span>
                <h2>Home</h2>
            </NavLink>

            <div className="sidebarOption">
                <span className="material-icons"> search </span>
                <h2>Explore</h2>
            </div>

            <div className="sidebarOption">
                <span className="material-icons"> notifications_none </span>
                <h2>Notifications</h2>
            </div>

            <div className="sidebarOption">
                <span className="material-icons"> mail_outline </span>
                <h2>Messages</h2>
            </div>

            <div className="sidebarOption">
                <span className="material-icons"> bookmark_border </span>
                <h2>Bookmarks</h2>
            </div>

            <div className="sidebarOption">
                <span className="material-icons"> list_alt </span>
                <h2>Lists</h2>
            </div>

            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'sidebarOption active' : 'sidebarOption')}>
                <span className="material-icons"> perm_identity </span>
                <h2>Profile</h2>
            </NavLink>

            <div className="sidebarOption">
                <span className="material-icons"> more_horiz </span>
                <h2>More</h2>
            </div>
            <button className="sidebar__tweet">Logout</button>
        </div>
    )
}
