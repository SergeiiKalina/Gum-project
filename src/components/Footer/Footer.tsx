import React from "react"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { BsPersonCircle } from "react-icons/bs"
import { FaDumbbell } from "react-icons/fa6"
import { GiCardRandom } from "react-icons/gi"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { CiSettings } from "react-icons/ci"
import { writeCurrentTraining } from "../../store/generatorTrainingReducer"
import "./footer.scss"

function Footer(): React.JSX.Element {
    const dispatch = useDispatch()
    return (
        <footer className="footer_wrapper">
            <menu className="footer_menu">
                <NavLink to="/personal-data">
                    <BsPersonCircle />
                </NavLink>
                <NavLink to="/gentraining">
                    <GiCardRandom />
                </NavLink>
                <NavLink
                    to="/plan-training"
                    onClick={() => dispatch(writeCurrentTraining([]))}
                >
                    <MdOutlineDashboardCustomize />
                </NavLink>

                <NavLink to="/workout">
                    <FaDumbbell />
                </NavLink>
                <NavLink to="/setup">
                    <CiSettings />
                </NavLink>
            </menu>
        </footer>
    )
}

export default Footer
