import Logo from "./Logo.tsx"
import Menu from "./Menu"
import style from "./header.module.css"

function Header() {
    return (
        <header className={style.header}>
            <Logo />
        </header>
    )
}
export default Header
