import React from "react"
import { BsPerson } from "react-icons/bs"
import { TbTriangleInverted } from "react-icons/tb"
import { AiOutlineSetting } from "react-icons/ai"
import "./footer.scss"
import { NavLink } from "react-router-dom"
export default function Footer(): React.JSX.Element {
    return (
        <div className="footerWrapper">
            <div className="footerItem">
                <NavLink to="workout">
                    <BsPerson className="footerIcon_icon" />
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="gentraining">
                    <TbTriangleInverted className="footerIcon_icon rotate" />
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="contacts">
                    <AiOutlineSetting className="footerIcon_icon" />
                </NavLink>
            </div>
        </div>
    )
}
