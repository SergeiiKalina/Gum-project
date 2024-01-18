import React, { useEffect, useRef, useState } from "react"
import Logo from "./Logo/Logo"
import "./header.scss"
import AccountIcon from "./MenuUser/Account-Icon/AccountIcon"
import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../../store/authorizationSlice"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../../http"
import axios from "axios"
import { writeDataUser } from "../../store/userSlice"

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
        const handleDocumentClick = (event: Event) => {
            const targetNode = event.target as Node

            if (targetNode instanceof Element) {
                if (
                    targetNode.id === "nameUser" ||
                    targetNode.id === "userIcon" ||
                    targetNode.id === "userIconWrapper"
                ) {
                    setToggleMenuUser((prev) => !prev)
                    return
                } else if (targetNode.id === "userMenu") {
                    return
                } else {
                    setToggleMenuUser(false)
                    return
                }
            }
        }

        document.addEventListener("click", handleDocumentClick)

        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email")
            if (email) {
                const url = API_URL + "/user/email"
                try {
                    const userRes = await axios.post(url, { email })
                    const userData = userRes.data

                    dispatch(writeDataUser(userData))
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchData()
    }, [dispatch])

    return (
        <header className="header">
            <Logo />
            <AccountIcon toggleMenuUser={toggleMenuUser} />
        </header>
    )
}
export default Header
