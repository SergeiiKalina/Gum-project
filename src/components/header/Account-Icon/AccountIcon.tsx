import { FC } from "react"
import { BsPersonCircle } from "react-icons/bs"
import "./accountIcon.scss"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { IUserAPI } from "../../../models/response/IUser"
import MenuUser from "./MenuUser/MenuUser"

interface IAuthSlice {
    authSlice: {
        user: IUserAPI | undefined
        isAuth: boolean
    }
}

interface IAccountIconProps {
    handlerMenuUser: () => void
    toggleMenuUser: boolean
}

const AccountIcon: FC<IAccountIconProps> = ({
    handlerMenuUser,
    toggleMenuUser,
}) => {
    const isAuth = useSelector((state: IAuthSlice) => state.authSlice.isAuth)

    return (
        <section className="account_icon_wrapper">
            {isAuth ? (
                <span onClick={() => handlerMenuUser()}>
                    {localStorage.getItem("firstName") +
                        " " +
                        localStorage.getItem("lastName")}
                </span>
            ) : (
                <NavLink to="/login">Log in</NavLink>
            )}
            <div
                onClick={() => handlerMenuUser()}
                style={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: "22px",
                }}
            >
                <BsPersonCircle />
            </div>
            {toggleMenuUser && isAuth && (
                <MenuUser handlerMenuUser={handlerMenuUser} />
            )}
        </section>
    )
}

export default AccountIcon
