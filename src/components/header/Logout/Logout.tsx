import "./../Login/login.scss"
import { IUser } from "../Login/Login"
import { Button } from "@mui/material"

interface LogoutProps {
    value: IUser
}

function Logout({ value }: LogoutProps): JSX.Element {
    const logout = (): void => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="login_block">
            <div className="photo_login_block">
                {value && value.photo !== null && (
                    <img src={value.photo} alt="user" />
                )}
            </div>
            <Button variant="outlined" onClick={logout}>
                Вийти з аккаунту
            </Button>
        </div>
    )
}

export default Logout
