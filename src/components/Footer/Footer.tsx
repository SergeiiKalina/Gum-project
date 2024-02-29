import React from "react"
import { NavLink } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs"
import { GiCardRandom } from "react-icons/gi"
import { CiSettings } from "react-icons/ci"
import "./footer.scss"

function Footer(): React.JSX.Element {
    return (
        <footer className="footer_wrapper">
            <menu className="footer_menu">
                <NavLink
                    to="/personal-data"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <BsPersonCircle />
                </NavLink>
                <NavLink to="/main-page">
                    <GiCardRandom />
                </NavLink>
                <NavLink to="/setup">
                    <CiSettings />
                </NavLink>
            </menu>
        </footer>
    )
}

export default Footer
