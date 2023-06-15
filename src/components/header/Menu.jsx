import { NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import style from './menu.module.css'
import { useState } from 'react'

function Menu() {
    const [isHidden, setIsHidden] = useState(false)

    function showBurgerMenu() {
        if (isHidden == false) {
            setIsHidden(true)
        }
        if (isHidden) {
            setIsHidden(false)
        }
    }
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <ul
                className={
                    isHidden ? `${style.menu} ${style.afterClick}` : style.menu
                }
            >
                <li className={style.btn}>
                    <NavLink to="." onClick={showBurgerMenu}>
                        <span />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="."
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : { color: 'red', textDecoration: 'underline' }
                        }
                        className={style.notMobile}
                    >
                        Про мене
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="about"
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : { color: 'red', textDecoration: 'underline' }
                        }
                        className={style.notMobile}
                    >
                        Тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="gentraining"
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : { color: 'red', textDecoration: 'underline' }
                        }
                        className={style.notMobile}
                    >
                        Генератор Тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="registrationfortraining"
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : { color: 'red', textDecoration: 'underline' }
                        }
                        className={style.notMobile}
                    >
                        Запис на тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="contacts"
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : { color: 'red', textDecoration: 'underline' }
                        }
                        className={style.notMobile}
                    >
                        Контакти
                    </NavLink>
                </li>
                <li>
                    {!localStorage.getItem('email') ? (
                        <NavLink
                            to="login"
                            style={({ isActive }) =>
                                isActive
                                    ? { color: 'black', textDecoration: 'none' }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
                                      }
                            }
                            className={style.notMobile}
                        >
                            Авторизація
                        </NavLink>
                    ) : (
                        <NavLink
                            to="login"
                            style={({ isActive }) =>
                                isActive
                                    ? { color: 'black', textDecoration: 'none' }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
                                      }
                            }
                            className={style.notMobile}
                        >
                            Вихід
                        </NavLink>
                    )}
                </li>
            </ul>
            <MobileMenu isHidden={isHidden} />
        </div>
    )
}
export default Menu
