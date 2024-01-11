import React, { useEffect, useState } from "react"
import Logo from "./Logo/Logo"
import "./header.scss"
import AccountIcon from "./Account-Icon/AccountIcon"
import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../../store/authorizationSlice"
import { useNavigate } from "react-router-dom"

interface IHederAuthState {
    authSlice: {
        isAuth: boolean
    }
}

function Header(): React.JSX.Element {
    const isAuth = useSelector(
        (state: IHederAuthState) => state.authSlice.isAuth
    )
    const [toggleMenuUser, setToggleMenuUser] = useState(false)

    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth())
        } else {
            navigate("/login")
        }
    }, [dispatch, isAuth])

    function handlerMenuUser(): void {
        setToggleMenuUser((prev) => !prev)
    }

    return (
        <header className="header">
            <Logo />
            <AccountIcon
                handlerMenuUser={handlerMenuUser}
                toggleMenuUser={toggleMenuUser}
            />
        </header>
    )
}
export default Header
