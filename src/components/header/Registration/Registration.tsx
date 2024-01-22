import { useState } from "react"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import "./registration.scss"
import { StyledTextField, theme } from "../../Styled-components/Styled"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import {
    registration,
    toggleIsLoading,
} from "../../../store/authorizationSlice"
import { IUserAPI } from "../../../models/response/IUser"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IStateAuth {
    authSlice: {
        user: IUserAPI
        isAuth: boolean
        isLoading: boolean
        error: string
    }
}

interface IRegisterForm {
    email: string
    password: string
    firstName: string
    lastName: string
}

const Registration = () => {
    const { register, handleSubmit } = useForm<IRegisterForm>({})
    const navigate = useNavigate()
    const [lastNameValidationState, setLastNameValidationState] = useState<{
        state: boolean
        message: string
    }>({ state: false, message: "" })
    const [firstNameValidationState, setFirstNameValidationState] = useState<{
        state: boolean
        message: string
    }>({ state: false, message: "" })
    const [passwordError, setPasswordError] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    const emailServerError = useSelector(
        (state: IStateAuth) => state.authSlice.error
    )

    const isLoading = useSelector(
        (state: IStateAuth) => state.authSlice.isLoading
    )
    const dispatch = useDispatch<any>()

    function passValidation(pass: string) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
        if (!regex.test(pass)) {
            setPasswordError(
                "The password must contain at least 5 characters, an uppercase and lowercase letter and a number."
            )
            return false
        }
        setPasswordError("")
        return true
    }

    function emailValidation(email: string) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        email = email.trim()

        if (!regex.test(email)) {
            setEmailError("Enter the correct email address.")
            return false
        }
        setEmailError("")
        return true
    }
    const lastNameValidation = (name: string) => {
        if (name.length < 3) {
            setLastNameValidationState({
                ...lastNameValidationState,
                message: "Last name is too short",
                state: true,
            })
            return
        }
        setLastNameValidationState({
            ...lastNameValidationState,
            message: "",
            state: true,
        })
    }
    const firstNameValidation = (name: string) => {
        if (name.length < 3) {
            setFirstNameValidationState({
                ...firstNameValidationState,
                message: "First name is too short",
                state: true,
            })
            return
        }
        setFirstNameValidationState({
            ...firstNameValidationState,
            message: "",
            state: true,
        })
    }

    const buttonRegistration = async (
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ) => {
        if (!emailValidation(email) || !passValidation(password)) {
            return
        }
        await dispatch(toggleIsLoading(true))
        await dispatch(registration({ email, password, firstName, lastName }))
        await navigate("/gentraining")
    }

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        buttonRegistration(
            data.email,
            data.password,
            data.firstName,
            data.lastName
        )
    }

    return (
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
            {isLoading ? (
                <p className="registration_loader"> Loading...</p>
            ) : (
                <>
                    <h2>Registration Form</h2>
                    <div className="registration_input_block">
                        <StyledTextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            autoComplete="off"
                            InputProps={{
                                type: "text",
                            }}
                            {...register("firstName")}
                            className="registration_input"
                            onBlur={(e) => firstNameValidation(e.target.value)}
                        ></StyledTextField>
                        <PersonOutlineOutlinedIcon className="registration_input_icon" />
                        {firstNameValidationState.state && (
                            <span>{firstNameValidationState.message}</span>
                        )}
                    </div>
                    <div className="registration_input_block">
                        <StyledTextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            autoComplete="off"
                            InputProps={{
                                type: "text",
                            }}
                            {...register("lastName", { required: true })}
                            onBlur={(e) => lastNameValidation(e.target.value)}
                            className="registration_input"
                        ></StyledTextField>
                        <PersonOutlineOutlinedIcon className="registration_input_icon" />
                        {lastNameValidationState.state && (
                            <span>{lastNameValidationState.message}</span>
                        )}
                    </div>
                    <div className="registration_input_block">
                        <StyledTextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            autoComplete="off"
                            InputProps={{
                                type: "text",
                            }}
                            {...register("email", {
                                required: true,
                            })}
                            onBlur={(e) => emailValidation(e.target.value)}
                            className="registration_input"
                        ></StyledTextField>
                        <AlternateEmailOutlinedIcon className="registration_input_icon" />
                        {emailError && <span>{emailError}</span>}
                        {emailServerError && <span>{emailServerError}</span>}
                    </div>
                    <div className="registration_input_block">
                        <StyledTextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            autoComplete="off"
                            InputProps={{
                                type: "password",
                            }}
                            {...register("password", {
                                required: true,
                            })}
                            onBlur={(e) => passValidation(e.target.value)}
                            className="registration_input"
                        ></StyledTextField>
                        <LockOutlinedIcon className="registration_input_icon" />
                        {passwordError && <span>{passwordError}</span>}
                    </div>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            width: "40%",
                            margin: "80px auto 0 auto",
                            [theme.breakpoints.down("sm")]: {
                                width: "70%",
                            },
                        }}
                    >
                        Registration
                    </Button>
                </>
            )}
        </form>
    )
}

export default Registration
