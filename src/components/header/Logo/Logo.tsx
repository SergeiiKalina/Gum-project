import React from "react"
import { NavLink } from "react-router-dom"
import "./logo.scss"
import { FaDumbbell } from "react-icons/fa"

export default function Logo(): React.JSX.Element {
    return (
        <section className="logo_wrapper">
            <NavLink to="gentraining" className="logo_link">
                <div>
                    <h1>Gym Hub</h1>
                </div>
            </NavLink>
        </section>
    )
}
