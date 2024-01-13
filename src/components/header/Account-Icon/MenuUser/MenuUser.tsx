import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../../../store/authorizationSlice"
import "./menuUser.scss"

interface IMenuUserProps {
    handlerMenuUser: () => void
}

const MenuUser: FC<IMenuUserProps> = ({ handlerMenuUser }) => {
    const dispatch = useDispatch<any>()

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

                <li className="button_wrapper">
                    <button
                        onClick={() => {
                            handlerMenuUser()

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
