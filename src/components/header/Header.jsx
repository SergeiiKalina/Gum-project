import Logo from './Logo'
import Menu from './Menu'
import style from './header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <Logo />
            <Menu />
        </header>
    )
}
export default Header
