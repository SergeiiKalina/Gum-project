import style from './login.module.css'

function Logout() {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className={style.block}>
            <button className={style.button} onClick={logout}>
                Вийти з аккаунту
            </button>
        </div>
    )
}

export default Logout
