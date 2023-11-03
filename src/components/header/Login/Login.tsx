import { auth, provider } from "../../layouts/config.ts"
import { signInWithPopup, UserCredential } from "firebase/auth"
import React, { useEffect, useState } from "react"
import Logout from "../Logout/Logout.tsx"
import "./login.css"

interface LoginProps {
    funkUser: (status: boolean) => void
}

function Login({ funkUser }: LoginProps): React.JSX.Element {
    const [value, setValue] = useState<string | null>("")
    const handlerClick = () => {
        signInWithPopup(auth, provider).then((data: UserCredential) => {
            setValue(data.user?.email || "")
            localStorage.setItem("email", data.user?.email || "")
            funkUser(false)
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
    }, [])

    return (
        <div className="login_block">
            {value ? (
                <Logout />
            ) : (
                <button className="login_button" onClick={handlerClick}>
                    Війти за допомогою Google
                </button>
            )}
        </div>
    )
}

export default Login
