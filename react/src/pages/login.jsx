import React from 'react'
import LOGO from '../../public/images/twitter-logo.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
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