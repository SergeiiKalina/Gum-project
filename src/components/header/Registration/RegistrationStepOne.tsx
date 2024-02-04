import { StyledTextField, theme } from "../../Styled-components/Styled"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { IRegisterForm } from "./Registration"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@mui/material"

import { useDispatch } from "react-redux"
import {
    IRegistrationData,
    writeRegistrationData,
} from "../../../store/authorizationSlice"
import { IUserAPI } from "../../../models/response/IUser"
import { useSelector } from "react-redux"

export interface IStateAuth {
    authSlice: {
        user: IUserAPI
        isAuth: boolean
        isLoading: boolean
        error: string
        registrationData: IRegistrationData
    }
}

function RegistrationStepOne({ setStep }: { setStep: (num: number) => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterForm>({})

    const emailServerError = useSelector(
        (state: IStateAuth) => state.authSlice.error
    )

    const dispatch = useDispatch<any>()
    function passValidation(pass: string) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
        if (!regex.test(pass)) {
            return "The password must contain at least 5 characters, an uppercase and lowercase letter and a number."
        }

        return true
    }

    function emailValidation(email: string) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        email = email.trim()
        if (!regex.test(email)) {
            return "Email not correct"
        }
        return true
    }
    const nameValidation = (name: string) => {
        if (name.trim().length < 3) {
            return "Field Name is too short"
        }
        return true
    }

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        dispatch(writeRegistrationData(data))
        setStep(1)
    }
    return (
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration Form</h2>
            <div>
                <div className="registration_input_block">
                    <StyledTextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        autoComplete="off"
                        InputProps={{
                            type: "text",
                        }}
                        {...register("name", {
                            validate: nameValidation,
                        })}
                        className="registration_input"
                    ></StyledTextField>
                    <PersonOutlineOutlinedIcon className="registration_input_icon" />
                    {errors.name && <span>{errors.name.message}</span>}
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
                            validate: emailValidation,
                        })}
                        className="registration_input"
                    ></StyledTextField>
                    <AlternateEmailOutlinedIcon className="registration_input_icon" />
                    {errors.email && <span>{errors.email.message}</span>}
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
                            validate: passValidation,
                        })}
                        className="registration_input"
                    ></StyledTextField>
                    <LockOutlinedIcon className="registration_input_icon" />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
            </div>
            <Button
                variant="contained"
                type="submit"
                sx={{
                    width: "30%",
                    margin: "60px auto 0 auto",
                    [theme.breakpoints.down("sm")]: {
                        width: "70%",
                    },
                }}
            >
                Next
            </Button>
        </form>
    )
}

export default RegistrationStepOne
