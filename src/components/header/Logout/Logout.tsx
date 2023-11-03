import React, { JSX } from "react"
import "./../Login/login.css"

function Logout(): JSX.Element {
    const logout = (): void => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="login_block">
            <button className="login_button" onClick={logout}>
                Вийти з аккаунту
            </button>
        </div>
    )
}

export default Logout
