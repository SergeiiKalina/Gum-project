import React, { useEffect, useState } from "react"
import Logo from "./Logo/Logo"
import "./header.scss"
import AccountIcon from "./MenuUser/Account-Icon/AccountIcon"

function Header(): React.JSX.Element {
    const [toggleMenuUser, setToggleMenuUser] = useState(false)

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

    return (
        <header className="header">
            <Logo />
            <AccountIcon toggleMenuUser={toggleMenuUser} />
        </header>
    )
}
export default Header
