import React from "react"
import Logo from "./Logo/Logo"
import BackButton from "./BackButton/BackButton"
import "./header.scss"

function Header(): React.JSX.Element {
    return (
        <header className="header">
            <BackButton />
            <Logo />
        </header>
    )
}
export default Header
