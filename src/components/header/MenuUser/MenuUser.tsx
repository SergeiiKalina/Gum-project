import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../../store/authorizationSlice"
import "./menuUser.scss"

const MenuUser: FC = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    return (
        <section className="menu_user_wrapper" id="userMenu">
            <ul>
                <li>
                    <span>
                        {localStorage.getItem("firstName") +
                            " " +
                            localStorage.getItem("lastName")}
                    </span>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => navigate("personal-data")}
                    >
                        Personal data
                    </button>
                </li>
                <li className="button_wrapper">
                    <button
                        onClick={async () => {
                            await dispatch(logout())
                            await navigate("/")
                        }}
                    >
                        Sing out
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default MenuUser
