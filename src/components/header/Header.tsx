import React from "react"
import Logo from "./Logo/Logo"
import "./header.scss"
import BackButton from "./BackButton/BackButton"

function Header(): React.JSX.Element {
    return (
        <header className="header">
            <BackButton />
            <Logo />
        </header>
    )
}
export default Header
