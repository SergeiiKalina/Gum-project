import React, { useState } from "react"
import {
    Button,
    Slider,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material"
import { IRegisterForm } from "./Registration"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {
    changeStepRegistration,
    writeRegistrationData,
} from "../../../store/authorizationSlice"
import { IStateAuth } from "./RegistrationStepOne"
import { useSelector } from "react-redux"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { theme } from "../../Styled-components/Styled"
import { Box } from "@mui/system"

const marks = [
    {
        value: 40,
        label: "40kg",
    },
    {
        value: 60,
        label: "60kg",
    },
    {
        value: 80,
        label: "80kg",
    },
    {
        value: 100,
        label: "100kg",
    },
    {
        value: 120,
        label: "120kg",
    },
    {
        value: 140,
        label: "140kg",
    },
    {
        value: 160,
        label: "160kg",
    },
]

function RegistrationStepTwo() {
    const { handleSubmit } = useForm<IRegisterForm>({})
    const dispatch = useDispatch()
    const [sex, setSex] = useState<string>("")
    const [weight, setWeight] = useState<number | number[]>(40)
    const [dateOfBirth, setDateOfBirth] = useState<number>(0)
    const handleSex = (event: React.MouseEvent<HTMLElement>, sex: string) => {
        if (sex !== null) {
            setSex(sex)
        }
    }
    const registrationData = useSelector(
        (state: IStateAuth) => state.authSlice.registrationData
    )

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        if (typeof weight === "number") {
            dispatch(
                writeRegistrationData({
                    ...registrationData,
                    ...data,
                    mainInfo: {
                        sex,
                        age: dateOfBirth,
                        weight,
                    },
                })
            )
        }

        dispatch(changeStepRegistration(2))
    }

    const handelWeight = (
        event: Event,
        value: number | number[],
        activeThumb: number
    ) => {
        setWeight(value)
    }
    return (
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration Form</h2>

            <div
                className="registration_input_block"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: "white",
                            },
                            "& .MuiButtonBase-root": {
                                color: "white",
                            },
                            "& .MuiInputBase-input": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        label="Date of Birth"
                        onChange={(newValue) => {
                            if (newValue !== null) {
                                const today: Date = new Date()

                                const diffMs = Number(today) - Number(newValue)

                                const age = Math.floor(
                                    diffMs / (1000 * 60 * 60 * 24 * 365.25)
                                )

                                setDateOfBirth(age)
                            }
                        }}
                    />
                </LocalizationProvider>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        Weight
                    </Typography>
                    <Slider
                        min={40}
                        max={160}
                        step={0.5}
                        value={weight}
                        valueLabelDisplay="on"
                        marks={marks}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={handelWeight}
                    />
                </Box>
            </div>
            <div className="registration_input_block"></div>
            <div className="registration_input_block">
                <Box sx={{ marginTop: "20px" }}>
                    <Typography
                        sx={{ color: "white" }}
                        variant="subtitle1"
                        align="center"
                    >
                        Sex
                    </Typography>
                    <ToggleButtonGroup
                        color="info"
                        exclusive
                        value={sex}
                        aria-label="sex"
                        defaultValue="male"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "20px",
                        }}
                        onChange={handleSex}
                    >
                        <ToggleButton
                            value="male"
                            sx={{
                                width: "80px",
                                height: "80px",
                                backgroundColor: "#1976d2",
                                color: "white",
                            }}
                            size="large"
                        >
                            <BsGenderMale />
                        </ToggleButton>
                        <ToggleButton
                            value="female"
                            sx={{
                                width: "80px",
                                height: "80px",
                                backgroundColor: "#1976d2",
                                color: "white",
                            }}
                        >
                            <BsGenderFemale />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
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

export default RegistrationStepTwo
