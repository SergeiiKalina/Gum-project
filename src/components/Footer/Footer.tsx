import React from "react"
import { NavLink } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs"
import { FaDumbbell } from "react-icons/fa6"
import { FaHistory } from "react-icons/fa"
import { GiCardRandom } from "react-icons/gi"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import "./footer.scss"

function Footer(): React.JSX.Element {
    return (
        <footer className="footer_wrapper">
            <menu>
                <NavLink to="/personal-data">
                    <BsPersonCircle />
                </NavLink>
                <NavLink to="/gentraining">
                    <GiCardRandom />
                </NavLink>
                <NavLink to="/">
                    <MdOutlineDashboardCustomize />
                </NavLink>
                <NavLink to="/contact">
                    <FaHistory />
                </NavLink>
                <NavLink to="/workout">
                    <FaDumbbell />
                </NavLink>
            </menu>
        </footer>
    )
}

export default Footer
