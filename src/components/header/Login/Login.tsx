import { auth, provider } from "../../layouts/config.ts"
import { signInWithPopup, UserCredential } from "firebase/auth"
import React, { useEffect, useState } from "react"
import Logout from "../Logout/Logout.tsx"
import "./login.scss"
import { useDispatch, useSelector } from "react-redux"
import {
    IInitialStateAuthorizationSlice,
    checkAuth,
    login,
    logout,
    registration,
    toggleIsLoading,
} from "../../../store/authorizationSlice.ts"
import UserService from "../../../services/UserService.ts"
import { IUserAPI } from "../../../models/response/IUser.ts"

interface LoginProps {
    toggleUser: (status: boolean) => void
}

export interface IUser {
    userName: string | null
    photo: string | null
}

interface IAuthSliceState {
    authSlice: IInitialStateAuthorizationSlice
}

function Login({ toggleUser }: LoginProps): React.JSX.Element {
    const dispatch = useDispatch<any>()
    const [value, setValue] = useState<IUser>({
        userName: "",
        photo: "",
    })
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [listUsers, setListUsers] = useState<IUserAPI[]>()
    const [storageEmail, setStorageEmail] = useState<string | null>("")
    const authSliceState = useSelector(
        (state: IAuthSliceState) => state.authSlice
    )
    const { isLoading, isAuth, user } = authSliceState

    const handlerClick = () => {
        signInWithPopup(auth, provider).then((data: UserCredential) => {
            localStorage.setItem("email", data.user?.email || "")
            localStorage.setItem("userName", data.user?.displayName || "")
            localStorage.setItem("photo", data.user?.photoURL || "")

            toggleUser(false)
        })
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth())
        }
    }, [dispatch])
    useEffect(() => {
        let userName: string | null = localStorage.getItem("userName")
        let photo: string | null = localStorage.getItem("photo")
        setStorageEmail(localStorage.getItem("email"))
        setValue({ userName, photo })
    }, [])

    const buttonLogin = (email: string, password: string) => {
        dispatch(toggleIsLoading(true))
        dispatch(login({ email, password }))
    }
    const buttonRegistration = (email: string, password: string) => {
        dispatch(toggleIsLoading(true))
        dispatch(registration({ email, password }))
    }
    const buttonLogout = () => {
        dispatch(toggleIsLoading(true))
        dispatch(logout())
    }

    const getListUsers = async () => {
        try {
            const response = await UserService.fetchUsers()!
            setListUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login_block">
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div>
                    <h2>
                        {isAuth
                            ? `User authorization ${user?.email}`
                            : "User NOT authorization"}
                    </h2>
                    {listUsers &&
                        listUsers.map((user: IUserAPI) => (
                            <div key={user.email}>{user.email}</div>
                        ))}
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={() => buttonLogin(email, password)}>
                        Login
                    </button>
                    <button onClick={() => buttonLogout()}>Logout</button>
                    <button onClick={() => buttonRegistration(email, password)}>
                        Registration
                    </button>
                    <button onClick={() => getListUsers()}>
                        Get List Users
                    </button>
                    {storageEmail ? (
                        <Logout value={value} />
                    ) : (
                        <button className="login_button" onClick={handlerClick}>
                            Війти за допомогою Google
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Login
