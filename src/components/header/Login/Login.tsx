import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handlerGoogleLogin } from "../../layouts/config"
import {
    IInitialStateAuthorizationSlice,
    changeStepRegistration,
    login,
    toggleIsLoading,
} from "../../../store/authorizationSlice"
import FormAuthorization from "./FormAuthorization"
import { CircularProgress } from "@mui/material"
import { RootState } from "../../../store"
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
    const [storageEmail] = useState<string | null>(
        localStorage.getItem("email")
    )
    const authSliceState = useSelector(
        (state: IAuthSliceState) => state.authSlice
    )
    const authUserData = useSelector(
        (state: RootState) => state.authSlice.authUser
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
        const checkDataUser = async () => {
            if (localStorage.getItem("email")) {
                navigate("/main-page")
                return
            }
            if (localStorage.getItem("googleEmail")) {
                const url = `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem(
                    "googleUserId"
                )}.json?auth=${localStorage.getItem("googleToken")}`
                const response = await axios.get(url)
                if (response.data === null) {
                    await axios.post(url, {})
                }
                if (response.data.mainInfo) {
                    navigate("/main-page")
                    return
                } else {
                    navigate("/registration")
                    dispatch(changeStepRegistration(1))
                }
            }
        }
        checkDataUser()
    }, [navigate, isAuth, authUserData, dispatch])

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
                    serverStatus={serverStatus}
                />
            )}
        </section>
    )
}
export default Login
