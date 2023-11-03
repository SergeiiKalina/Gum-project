import React, { JSX } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import MobileMenu from "../MobileMenu/MobileMenu.tsx"
import { MenuState } from "../Menu/Menu.tsx"
import "./burgerMenu.module.css"

export interface IBurgerMenu {
    showBurgerMenu: (status: boolean) => void
}

function BurgerMenu({ showBurgerMenu }: IBurgerMenu): JSX.Element {
    function pageChange(): string {
        let currentUrl = window.location.href
        return currentUrl.replace("http://localhost:3000", "")
    }
    const burgerMenu = useSelector(
        (state: MenuState) => state.showMenu.showMenu
    )

    return (
        <div className="burger_menu_btnBurger">
            <NavLink
                to={pageChange()}
                onClick={() => showBurgerMenu}
                className={`${burgerMenu ? "burger_menu_afterClick" : ""}`}
            >
                <span />
            </NavLink>
            <MobileMenu showBurgerMenu={showBurgerMenu} />
        </div>
    )
}

export default BurgerMenu
