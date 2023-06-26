import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx'
import BurgerMenu from '../BurgerMenu'
import style from './menu.module.css'

function Menu() {
    const [isHidden, setIsHidden] = useState(false)
    const [arrowLeftHidden, setArrowLeftHidden] = useState(false)
    const [arrowRightHidden, setArrowRightHidden] = useState(false)
    const elementRef = useRef(null)
    const blockRef = useRef(null)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            setIsHidden(false)
        }
        if (window.innerWidth > 1250) {
            setArrowRightHidden(false)
            setArrowLeftHidden(false)
        }
    })

    useEffect(() => {
        const checkWidth = () => {
            if (blockRef.current) {
                const width = blockRef.current.offsetWidth
                if (width < 1080) {
                    setArrowRightHidden(true)
                }
                if (width > 1080) {
                    setArrowRightHidden(false)
                }
            }
        }

        checkWidth()

        const handleResize = () => {
            checkWidth()
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function showBurgerMenu() {
        if (isHidden === false) {
            setIsHidden(true)
        }
        if (isHidden) {
            setIsHidden(false)
        }
    }

    function scrollRight() {
        blockRef.current.scrollLeft += blockRef.current.clientWidth / 4
        if (blockRef.current.scrollLeft > 100) {
            setArrowLeftHidden(true)
        }
    }
    function scrollLeft() {
        blockRef.current.scrollLeft -= blockRef.current.clientWidth / 4
        if (blockRef.current.scrollLeft < 10) {
            setArrowLeftHidden(false)
        }
    }

    return (
        <>
            <BurgerMenu isHidden={isHidden} showBurgerMenu={showBurgerMenu} />
            {arrowLeftHidden && (
                <RxCaretLeft
                    style={{
                        fontSize: '50px',
                        marginTop: '50px',
                    }}
                    onClick={scrollLeft}
                    className={style.arrow}
                />
            )}
            <div className={style.block} ref={blockRef}>
                <ul className={style.menu} ref={elementRef}>
                    <li style={{ minWidth: '88px' }}>
                        <NavLink
                            to="."
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: 'black',
                                          textDecoration: 'none',
                                      }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
                                      }
                            }
                        >
                            Про мене
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="workout"
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: 'black',
                                          textDecoration: 'none',
                                      }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
                                      }
                            }
                        >
                            Тренування
                        </NavLink>
                    </li>
                    <li style={{ minWidth: '207px' }}>
                        <NavLink
                            to="gentraining"
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: 'black',
                                          textDecoration: 'none',
                                      }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
                                      }
                            }
                        >
                            Генератор Тренування
                        </NavLink>
                    </li>
                    <li style={{ minWidth: '194px' }}>
                        <NavLink
                            to="registrationfortraining"
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: 'black',
                                          textDecoration: 'none',
                                      }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
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
                                    ? {
                                          color: 'black',
                                          textDecoration: 'none',
                                      }
                                    : {
                                          color: 'red',
                                          textDecoration: 'underline',
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
                                        ? {
                                              color: 'black',
                                              textDecoration: 'none',
                                          }
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
                                        ? {
                                              color: 'black',
                                              textDecoration: 'none',
                                          }
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

            {arrowRightHidden && (
                <RxCaretRight
                    style={{
                        fontSize: '50px',
                        marginTop: '50px',
                    }}
                    onClick={scrollRight}
                    className={style.arrow}
                />
            )}
        </>
    )
}
export default Menu
