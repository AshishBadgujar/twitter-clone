import React from 'react'
import './style.css'
import Login from './pages/login'
import Main from './pages/Main'
import Signup from './pages/signup'
import Profile from './pages/profile'
import Layout from './components/Layout'
import { useRoutes } from 'react-router-dom'

export default function App() {
    let element = useRoutes([
        { path: "/", element: <Layout><Main /></Layout> },
        { path: "/profile", element: <Layout><Profile /> </Layout> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
    ]);

    return (
        <>
            {element}
        </>
    )
}
