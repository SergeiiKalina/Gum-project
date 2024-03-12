import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handlerGoogleLogin } from "../../layouts/config"
import {
    IInitialStateAuthorizationSlice,
    login,
    toggleIsAuth,
    toggleIsLoading,
} from "../../../store/authorizationSlice"
import FormAuthorization from "./FormAuthorization"
import { CircularProgress } from "@mui/material"
import "./login.scss"
import axios from "axios"
import { API_URL } from "../../../http"

export interface IUser {
    userName: string | null
    photo: string | null
}
export interface IAuthSliceState {
    authSlice: IInitialStateAuthorizationSlice
}

function Login(): React.JSX.Element {
    const dispatch = useDispatch<any>()
    const [serverStatus, setServerStatus] = useState(true)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const authSliceState = useSelector(
        (state: IAuthSliceState) => state.authSlice
    )
    const { isLoading, isAuth } = authSliceState
    const navigate = useNavigate()

    useEffect(() => {
        const checkServer = async () => {
            try {
                const response = await axios.get(API_URL)

                if (response.status === 200) {
                    setServerStatus(false)
                } else {
                    setServerStatus(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
        checkServer()
    }, [dispatch])

    useEffect(() => {
        const checkAuthUser = () => {
            const serverEmail = localStorage.getItem("email")
            const fireBaseEmail = localStorage.getItem("googleEmail")
            if (serverEmail || fireBaseEmail) {
                console.log("call")
                navigate("/main-page")
            } else {
                return
            }
        }
        checkAuthUser()
    }, [navigate, isAuth])

    const buttonLoginServer = async (email: string, password: string) => {
        await dispatch(toggleIsLoading(true))
        await dispatch(login({ email, password }))
        await navigate("/main-page")
    }

    const loginWithGoogle = async () => {
        try {
            await handlerGoogleLogin()
            await dispatch(toggleIsAuth(true))
            await navigate("/main-page")
        } catch (error) {
            console.error("Error logging in with Google:", error)
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
                <FormAuthorization
                    email={email}
                    password={password}
                    setPassword={setPassword}
                    buttonLogin={buttonLoginServer}
                    setEmail={setEmail}
                    handlerGoogleLogin={loginWithGoogle}
                    serverStatus={serverStatus}
                />
            )}
        </section>
    )
}
export default Login
