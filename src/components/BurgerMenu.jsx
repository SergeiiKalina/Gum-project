import { NavLink } from 'react-router-dom'
import style from './burgerMenu.module.css'
import MobileMenu from './header/MobileMenu'

function BurgerMenu({ isHidden, showBurgerMenu }) {
    let viewportWidth = window.innerWidth
    function pageChange() {
        let currentUrl = window.location.href
        return currentUrl.replace('http://localhost:3000', '')
    }

    return (
        <div className={style.btnBurger}>
            <NavLink
                to={pageChange}
                onClick={showBurgerMenu}
                className={`${isHidden ? style.afterClick : ''}`}
            >
                <span />
            </NavLink>
            <MobileMenu isHidden={isHidden} showBurgerMenu={showBurgerMenu} />
        </div>
    )
}

export default BurgerMenu
