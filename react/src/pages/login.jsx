import React from 'react'
import LOGO from '../../public/images/twitter-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../gql-operations/mutations'

export default function Login() {
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
        onCompleted(data) {
            localStorage.setItem('token', data.user.token)
            navigate('/')
        }
    })
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            loginUser({
                variables: {
                    userSignin: values
                }
            })
            console.log(values)
        }
    })
    if (loading) return <h2>Loading...</h2>

    return (
        <div className="container">
            <header className="container">
                <div className="logo">
                    <img id="login-logo" src={LOGO} alt="Logo do Twitter" />
                </div>
            </header>

            <main className="container">
                <h1>Log in to Twitter</h1>
                <div className="container">
                    <div style={{ textAlign: "center" }}>
                        {error && <p style={{ color: "red" }}>{error.message}</p>}
                        {data && data.user && <p style={{ color: "green" }}>{data.user.firstName} is signed up</p>}
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="inputs">
                            <label className="usuario" htmlFor="usuario" >Email</label><br />
                            <input type="text" id="usuario"
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        <div className="inputs">
                            <label className="senha" htmlFor="senha">Password</label><br />
                            <input type="password" id="senha"
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>
                        <br />
                        <button className="button" type="submit">Login</button>
                    </form>
                    <div className="links container">
                        <a >Don't have an account?</a>
                        <span className="ponto"></span>
                        <Link to="/signup">Signup</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}