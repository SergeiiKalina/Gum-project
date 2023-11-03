import React from "react"
import { NavLink } from "react-router-dom"
import "./logo.scss"
import { FaDumbbell } from "react-icons/fa"

export default function Logo(): React.JSX.Element {
    return (
        <div>
            <NavLink to="gentraining" className="logo_link">
                <div className="logo_dumbbell">
                    <FaDumbbell />
                </div>
                <div>
                    <h1>Your Training Every Day</h1>
                </div>
            </NavLink>
        </div>
    )
}
