import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import "./logo.scss"

export default function Logo(): React.JSX.Element {
    const email =
        localStorage.getItem("email") || localStorage.getItem("googleEmail")
    const location = useLocation()
    return (
        <section className="logo_wrapper">
            <NavLink
                to={
                    !email
                        ? "/"
                        : location.pathname === "/registration"
                        ? "registration"
                        : "main-page"
                }
                className="logo_link"
            >
                <div>
                    <h1>Gym Hub</h1>
                </div>
            </NavLink>
        </section>
    )
}
