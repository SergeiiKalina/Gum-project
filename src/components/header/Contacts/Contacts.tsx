import React, { useEffect } from "react"
import {
    FaInstagram,
    FaFacebook,
    FaGithub,
    FaTelegram,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import "./contacts.scss"
import { useSelector } from "react-redux"
import { IAuthSliceState } from "../Login/Login"

function Contacts(): React.JSX.Element {
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )

    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])
    return (
        <div className="contacts_block">
            <NavLink to="https://instagram.com/serjik_92?igshid=MzNlNGNkZWQ4Mg==">
                <FaInstagram />
            </NavLink>
            <NavLink to="https://www.facebook.com/sergii.kalyna.1">
                <FaFacebook />
            </NavLink>
            <NavLink to="https://github.com/SergeiiKalina">
                <FaGithub />
            </NavLink>
            <NavLink to="https://t.me/Set_serg">
                <FaTelegram />
            </NavLink>
            <NavLink to="https://twitter.com/sergeiikalina?t=rIlIWGxlGpXsLRe3XXWihA&s=09">
                <FaTwitter />
            </NavLink>
            <NavLink to="https://wa.me/qr/VGG3H63T3LVJO1">
                <FaWhatsapp />
            </NavLink>
        </div>
    )
}
export default Contacts
