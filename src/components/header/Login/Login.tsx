import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { auth, provider } from "../../layouts/config"
import { signInWithPopup, UserCredential } from "firebase/auth"
import {
    IInitialStateAuthorizationSlice,
    login,
    toggleIsLoading,
} from "../../../store/authorizationSlice"
import FormAuthorization from "./FormAuthorization"
import "./login.scss"
import { CircularProgress } from "@mui/material"
export interface IUser {
    userName: string | null
    photo: string | null
}
export interface IAuthSliceState {
    authSlice: IInitialStateAuthorizationSlice
}
function Login(): React.JSX.Element {
    const dispatch = useDispatch<any>()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [storageEmail] = useState<string | null>(
        localStorage.getItem("email")
    )
    const authSliceState = useSelector(
        (state: IAuthSliceState) => state.authSlice
    )
    const { isLoading, isAuth } = authSliceState
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("email")) {
            if (isAuth) {
                navigate("/gentraining")
            }
        }
    }, [navigate, isAuth])
    const handlerGoogleLogin = () => {
        signInWithPopup(auth, provider).then((data: UserCredential) => {
            localStorage.setItem("email", data.user?.email || "")
            localStorage.setItem("userName", data.user?.displayName || "")
            localStorage.setItem("photo", data.user?.photoURL || "")
            window.location.reload()
        })
    }
    const buttonLogin = async (email: string, password: string) => {
        await dispatch(toggleIsLoading(true))
        await dispatch(login({ email, password }))
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
            ) : storageEmail ? null : (
                <FormAuthorization
                    email={email}
                    password={password}
                    setPassword={setPassword}
                    buttonLogin={buttonLogin}
                    setEmail={setEmail}
                    handlerGoogleLogin={handlerGoogleLogin}
                />
            )}
        </section>
    )
}
export default Login
