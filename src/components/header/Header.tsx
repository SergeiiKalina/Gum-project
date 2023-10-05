import React from "react"
import Logo from "./Logo.tsx"
import "./header.scss"

function Header(): React.JSX.Element {
    return (
        <header className="header">
            <Logo />
        </header>
    )
}
export default Header
