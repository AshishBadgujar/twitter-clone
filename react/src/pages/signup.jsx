import React from 'react'
import LOGO from '../../public/images/twitter-logo.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

export default function Signup() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
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
                <h1>Signup to Twitter</h1>
                <div className="container">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="inputs">
                            <label className="usuario" htmlFor="fname">First Name</label><br />
                            <input type="text" id="fname"
                                name="firstName"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                        </div>
                        <div className="inputs">
                            <label className="usuario" htmlFor="lname">Last Name</label><br />
                            <input type="text" id="lname"
                                name="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}

                            />
                        </div>
                        <div className="inputs">
                            <label className="usuario" htmlFor="email">Email</label><br />
                            <input type="text" id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}

                            />
                        </div>
                        <div className="inputs">
                            <label className="senha" htmlFor="password">Password</label><br />
                            <input type="password" id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}

                            />
                        </div>
                        <br />
                        <button className="button" type="submit">Signup</button>
                    </form>
                    <div className="links container">
                        <a >Already have an account?</a>
                        <span className="ponto"></span>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
