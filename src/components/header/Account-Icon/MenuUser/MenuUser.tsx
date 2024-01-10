import { FC } from "react"
import { Link } from "react-router-dom"
import "./menuUser.scss"
import { useDispatch } from "react-redux"
import { logout } from "../../../../store/authorizationSlice"

interface IMenuUserProps {
    handlerMenuUser: () => void
}

const MenuUser: FC<IMenuUserProps> = ({ handlerMenuUser }) => {
    const dispatch = useDispatch<any>()

    return (
        <section className="menu_user_wrapper">
            <ul>
                <li>
                    <Link to="#">Account</Link>
                </li>

                <li>
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
