import style from './menu.module.css'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <ul className={style.menu}>
                <li>
                    <NavLink
                        to="."
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none' }
                                : { color: 'red', textDecoration: 'underline' }
                        }
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
                    >
                       Генератор Тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="registrationfortraining"
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'black', textDecoration: 'none'}
                                : { color: 'red', textDecoration: 'underline' }
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
                                : { color: 'red', textDecoration: 'underline' }
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
                                          color: 'red',
                                          textDecoration: 'underline',
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
                                          color: 'red',
                                          textDecoration: 'underline',
                                      }
                            }
                        >
                            Вихід
                        </NavLink>
                    )}
                </li>
            </ul>
        </div>
    )
}
export default Menu
