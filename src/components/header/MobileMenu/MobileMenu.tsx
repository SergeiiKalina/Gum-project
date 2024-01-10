import { JSX } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { IBurgerMenuProps } from "../BurgerMenu/BurgerMenu"
import "./mobileMenu.module.css"
import { MenuState } from "../Menu/Menu"

function MobileMenu({ showBurgerMenu }: IBurgerMenuProps): JSX.Element {
    const burgerMenu: boolean = useSelector(
        (state: MenuState) => state.showMenu.showMenu
    )

    return (
        <nav
            style={
                burgerMenu
                    ? {
                          position: "absolute",
                          top: 90,
                          right: 0,
                          display: "flex",
                          flexDirection: "column",
                          width: 250 + "px",
                          height: 500 + "px",
                          backgroundColor: "#598234",
                          zIndex: 5,
                          borderRadius: 30 + "px",
                      }
                    : {
                          display: "none",
                      }
            }
            className="mobile_menu_shadow"
        >
            <ul>
                <li>
                    <NavLink
                        to="."
                        style={({ isActive }) =>
                            isActive
                                ? { color: "black", textDecoration: "none" }
                                : {
                                      color: "white",
                                      textDecoration: "none",
                                  }
                        }
                        className="mobile_menu_linkActive"
                        onClick={() => showBurgerMenu}
                    >
                        Про мене
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="workout"
                        style={({ isActive }) =>
                            isActive
                                ? { color: "black", textDecoration: "none" }
                                : {
                                      color: "white",
                                      textDecoration: "none",
                                  }
                        }
                        onClick={() => showBurgerMenu}
                    >
                        Тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="gentraining"
                        style={({ isActive }) =>
                            isActive
                                ? { color: "black", textDecoration: "none" }
                                : {
                                      color: "white",
                                      textDecoration: "none",
                                  }
                        }
                        onClick={() => showBurgerMenu}
                    >
                        Генератор Тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="registrationfortraining"
                        style={({ isActive }) =>
                            isActive
                                ? { color: "black", textDecoration: "none" }
                                : {
                                      color: "white",
                                      textDecoration: "none",
                                  }
                        }
                        onClick={() => showBurgerMenu}
                    >
                        Запис на тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="contacts"
                        style={({ isActive }) =>
                            isActive
                                ? { color: "black", textDecoration: "none" }
                                : {
                                      color: "white",
                                      textDecoration: "none",
                                  }
                        }
                        onClick={() => showBurgerMenu}
                    >
                        Контакти
                    </NavLink>
                </li>
                <li>
                    {!localStorage.getItem("email") ? (
                        <NavLink
                            to="login"
                            style={({ isActive }) =>
                                isActive
                                    ? { color: "black", textDecoration: "none" }
                                    : {
                                          color: "white",
                                          textDecoration: "none",
                                      }
                            }
                            onClick={() => showBurgerMenu}
                        >
                            Авторизація
                        </NavLink>
                    ) : (
                        <NavLink
                            to="login"
                            style={({ isActive }) =>
                                isActive
                                    ? { color: "black", textDecoration: "none" }
                                    : {
                                          color: "white",
                                          textDecoration: "none",
                                      }
                            }
                            onClick={() => showBurgerMenu}
                        >
                            Вихід
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}
export default MobileMenu
