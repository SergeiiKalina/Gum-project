import React, { JSX, useEffect } from "react"
import "./../Login/login.scss"

function Logout({ value }): JSX.Element {
    const logout = (): void => {
        localStorage.clear()
        window.location.reload()
    }

    useEffect(() => {}, [value])
    return (
        <div className="login_block">
            <div className="photo_login_block">
                <img src={value.photo} alt="user" />
            </div>
            <h2>{value.userName}</h2>
            <button className="login_button" onClick={logout}>
                Вийти з аккаунту
            </button>
        </div>
    )
}

export default Logout
