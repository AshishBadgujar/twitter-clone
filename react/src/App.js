import React from 'react'
import './style.css'
import Login from './pages/login'
import Home from './pages/home'
import Signup from './pages/signup'
import Profile from './pages/profile'
import Layout from './components/Layout'
import { useRoutes } from 'react-router-dom'
import OtherProfile from './pages/otherProfile'

export default function App() {
    let element = useRoutes([
        { path: "/", element: <Layout><Home /></Layout> },
        { path: "/profile", element: <Layout><Profile /> </Layout> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/profile/:userId", element: <Layout><OtherProfile /> </Layout> },
    ]);

    return (
        <>
            {element}
        </>
    )
}
