import { auth, provider } from "../../layouts/config"
import { signInWithPopup, UserCredential } from "firebase/auth"
import React, { useEffect, useState } from "react"
import Logout from "../Logout/Logout"
import { useDispatch, useSelector } from "react-redux"
import { FcGoogle } from "react-icons/fc"
import {
    IInitialStateAuthorizationSlice,
    checkAuth,
    login,
    logout,
    toggleIsLoading,
} from "../../../store/authorizationSlice"
import UserService from "../../../services/UserService"
import { IUserAPI } from "../../../models/response/IUser"
import FormAuthorization from "./FormAuthorization"
import "./login.scss"
import { Button, CircularProgress } from "@mui/material"
import { useNavigate } from "react-router-dom"

export interface IUser {
    userName: string | null
    photo: string | null
}

interface IAuthSliceState {
    authSlice: IInitialStateAuthorizationSlice
}

function Login(): React.JSX.Element {
    const dispatch = useDispatch<any>()
    const [value, setValue] = useState<IUser>({
        userName: "",
        photo: "",
    })
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [listUsers, setListUsers] = useState<IUserAPI[]>()
    const [storageEmail, setStorageEmail] = useState<string | null>("")
    const [toggleInflameAuthorization, setToggleInflameAuthorization] =
        useState(false)
    const authSliceState = useSelector(
        (state: IAuthSliceState) => state.authSlice
    )
    const navigate = useNavigate()
    const { isLoading, isAuth } = authSliceState

    const handlerClick = () => {
        signInWithPopup(auth, provider).then((data: UserCredential) => {
            localStorage.setItem("email", data.user?.email || "")
            localStorage.setItem("userName", data.user?.displayName || "")
            localStorage.setItem("photo", data.user?.photoURL || "")
            window.location.reload()
        })
    }
    useEffect(() => {
        fetch("https://urchin-app-j6t9a.ondigitalocean.app/exercise")
            .then((res) => res.json())
            .then((res) => console.log(res))
        if (localStorage.getItem("token")) {
            setToggleInflameAuthorization(false)
            dispatch(checkAuth())
            navigate("/gentraining")
        } else {
            setToggleInflameAuthorization(true)
        }
    }, [dispatch, navigate])
    useEffect(() => {
        let userName: string | null = localStorage.getItem("userName")
        let photo: string | null = localStorage.getItem("photo")
        setStorageEmail(localStorage.getItem("email"))
        setValue({ userName, photo })
    }, [])

    const buttonLogin = async (email: string, password: string) => {
        await dispatch(toggleIsLoading(true))
        await dispatch(login({ email, password }))
        await setToggleInflameAuthorization(false)
        await navigate("/gentraining")
    }

    const buttonLogout = () => {
        dispatch(toggleIsLoading(true))
        dispatch(logout())
        setToggleInflameAuthorization(true)
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
        <section className="login_block">
            {isLoading ? (
                <CircularProgress
                    sx={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate( -50%, -50%)",
                    }}
                />
            ) : (
                <>
                    {listUsers &&
                        listUsers.map((user: IUserAPI) => (
                            <div key={user.email}>{user.email}</div>
                        ))}
                    {storageEmail ? (
                        ""
                    ) : (
                        <FormAuthorization
                            email={email}
                            password={password}
                            setPassword={setPassword}
                            buttonLogin={buttonLogin}
                            buttonLogout={buttonLogout}
                            getListUsers={getListUsers}
                            setEmail={setEmail}
                            toggleInflameAuthorization={
                                toggleInflameAuthorization
                            }
                        />
                    )}
                    {storageEmail && !isAuth ? (
                        <Logout value={value} />
                    ) : isAuth ? (
                        ""
                    ) : (
                        <Button variant="outlined" onClick={handlerClick}>
                            <FcGoogle style={{ marginRight: "5px" }} /> Війти за
                            допомогою Google
                        </Button>
                    )}
                </>
            )}
        </section>
    )
}

export default Login
