import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../../store/authorizationSlice"
import "./menuUser.scss"
import { useNavigate } from "react-router-dom"

interface IMenuUserProps {
    handlerMenuUser: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const MenuUser: FC<IMenuUserProps> = ({ handlerMenuUser }) => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    return (
        <section className="menu_user_wrapper">
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
                        onClick={(e) => {
                            handlerMenuUser(e)

                            dispatch(logout())
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
