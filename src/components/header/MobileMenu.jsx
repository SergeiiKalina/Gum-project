import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './mobileMenu.module.css'

function MobileMenu({ isHidden }) {
    return (
        <nav
            style={
                isHidden
                    ? {
                          position: 'absolute',
                          top: 90,
                          right: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          width: 250 + 'px',
                          height: 500 + 'px',
                          backgroundColor: '#598234',
                          zIndex: 5,
                          borderRadius: 30 + 'px',
                      }
                    : {
                          display: 'none',
                      }
            }
            className={style.shodow}
        >
            <ul>
                <li>
                    <NavLink
                        to="."
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : {
                                      color: 'white',
                                      textDecoration: 'none',
                                  }
                        }
                        className={style.linkActive}
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
                                : {
                                      color: 'white',
                                      textDecoration: 'none',
                                  }
                        }
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
                                : {
                                      color: 'white',
                                      textDecoration: 'none',
                                  }
                        }
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
                                : {
                                      color: 'white',
                                      textDecoration: 'none',
                                  }
                        }
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
                                : {
                                      color: 'white',
                                      textDecoration: 'none',
                                  }
                        }
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
                                          color: 'white',
                                          textDecoration: 'none',
                                      }
                            }
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
                                          color: 'white',
                                          textDecoration: 'none',
                                      }
                            }
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
