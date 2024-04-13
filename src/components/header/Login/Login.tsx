import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    handlerGoogleLogin,
    singInUserWithFireBase,
} from "../../layouts/config"
import {
    IInitialStateAuthorizationSlice,
    changeStepRegistration,
    toggleIsAuth,
    toggleIsLoading,
} from "../../../store/authorizationSlice"
import FormAuthorization from "./FormAuthorization"
import { CircularProgress } from "@mui/material"
import "./login.scss"
import { writeDataUser } from "../../../store/userSlice"

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

    const authSliceState = useSelector(
        (state: IAuthSliceState) => state.authSlice
    )
    const { isLoading, isAuth, authUser } = authSliceState
    const navigate = useNavigate()

    useEffect(() => {
        if (!authUser.mainInfo) {
            dispatch(changeStepRegistration(1))
            navigate("/registration")
        }
        if (isAuth) {
            navigate("/main-page")
        }
    }, [navigate, isAuth, authUser, dispatch])

    const buttonLoginServer = async (email: string, password: string) => {
        try {
            await dispatch(toggleIsLoading(true))
            await singInUserWithFireBase(email, password)
        } catch (error) {
            console.log(error)
        } finally {
            await dispatch(toggleIsAuth(true))
            await dispatch(toggleIsLoading(false))
            await navigate("/main-page")
        }
    }

    const loginWithGoogle = async () => {
        try {
            const user = await handlerGoogleLogin()
            if (!user.mainInfo) {
                dispatch(writeDataUser(user))
                dispatch(changeStepRegistration(1))
                navigate("/registration")
            } else {
                await dispatch(toggleIsAuth(true))
                await navigate("/main-page")
            }
        } catch (error) {
            console.error("Error logging in with Google:", error)
            localStorage.clear()
            await navigate("/")
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
                />
            )}
        </section>
    )
}
export default Login
