import React, { FC } from "react"
import { BsPersonCircle } from "react-icons/bs"
import "./accountIcon.scss"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { IUserAPI } from "../../../../models/response/IUser"
import MenuUser from "../MenuUser"
interface IAuthSlice {
    authSlice: { user: IUserAPI | undefined; isAuth: boolean }
}
interface IAccountIconProps {
    toggleMenuUser: boolean
}
const AccountIcon: FC<IAccountIconProps> = ({ toggleMenuUser }) => {
    const isAuth = useSelector((state: IAuthSlice) => state.authSlice.isAuth)
    return (
        <section className="account_icon_wrapper">
            {isAuth ? (
                <span id="nameUser">
                    {localStorage.getItem("firstName") +
                        " " +
                        localStorage.getItem("lastName")}
                </span>
            ) : (
                <NavLink to="/">Log in</NavLink>
            )}
            <div
                id="userIconWrapper"
                style={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: "22px",
                }}
            >
                <BsPersonCircle id="userIcon" />
            </div>
            {toggleMenuUser && isAuth && <MenuUser />}
        </section>
    )
}
export default AccountIcon
