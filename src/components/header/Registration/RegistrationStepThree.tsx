import { Button, Slider, Typography } from "@mui/material"
import { theme } from "../../Styled-components/Styled"
import { Box } from "@mui/system"
import { IRegisterForm } from "./Registration"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { writeRegistrationData } from "../../../store/authorizationSlice"
import { useSelector } from "react-redux"
import { IStateAuth } from "./RegistrationStepOne"
import { useState } from "react"

const marksWeight = [
    {
        value: 0,
        label: "0kg",
    },
    {
        value: 100,
        label: "100kg",
    },
    {
        value: 200,
        label: "200kg",
    },
    {
        value: 300,
        label: "300kg",
    },
    {
        value: 400,
        label: "400kg",
    },
    {
        value: 500,
        label: "500kg",
    },
]

const marksReps = [
    {
        value: 0,
        label: "0rep",
    },
    {
        value: 10,
        label: "10reps",
    },
    {
        value: 20,
        label: "20reps",
    },
    {
        value: 30,
        label: "30reps",
    },
    {
        value: 40,
        label: "40reps",
    },
    {
        value: 50,
        label: "50reps",
    },
    {
        value: 60,
        label: "60reps",
    },
    {
        value: 70,
        label: "70reps",
    },
    {
        value: 80,
        label: "80reps",
    },
    {
        value: 90,
        label: "90reps",
    },
    {
        value: 100,
        label: "100reps+",
    },
]

function RegistrationStepThree({
    setStep,
}: {
    setStep: (num: number) => void
}) {
    const dispatch = useDispatch()
    const { handleSubmit } = useForm<IRegisterForm>({})
    const registrationData = useSelector(
        (state: IStateAuth) => state.authSlice.registrationData
    )
    const [squatWeight, setSquatWeight] = useState<number>(0)
    const [benchPressWeight, setBenchPressWeight] = useState<number>(0)
    const [deadLiftWeight, setDeadLiftWeight] = useState<number>(0)
    const [pullUpsReps, setPullUpsReps] = useState<number>(0)
    const [pushUpReps, setPushUpReps] = useState<number>(0)
    const [sitUpReps, setSitUpReps] = useState<number>(0)
    const [airSquatReps, setAirSquatReps] = useState<number>(0)

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        dispatch(
            writeRegistrationData({
                ...registrationData,
                benchPress: benchPressWeight,
                deadLift: deadLiftWeight,
                pullUp: pullUpsReps,
                sitUp: sitUpReps,
                squat: squatWeight,
                pushUpQuantity: pushUpReps,
                squatQuantity: airSquatReps,
            })
        )
        setStep(3)
    }

    return (
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration Form</h2>

            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Weight Squat
                    </Typography>
                    <Slider
                        min={0}
                        max={500}
                        step={1}
                        value={squatWeight}
                        valueLabelDisplay="on"
                        marks={marksWeight}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setSquatWeight(value)
                            }
                        }}
                    />
                </Box>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Weight Bench Press
                    </Typography>
                    <Slider
                        min={0}
                        max={500}
                        step={1}
                        value={benchPressWeight}
                        valueLabelDisplay="on"
                        marks={marksWeight}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setBenchPressWeight(value)
                            }
                        }}
                    />
                </Box>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Weight Dead Lift
                    </Typography>
                    <Slider
                        min={0}
                        max={500}
                        step={1}
                        value={deadLiftWeight}
                        valueLabelDisplay="on"
                        marks={marksWeight}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setDeadLiftWeight(value)
                            }
                        }}
                    />
                </Box>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Pull-Ups Reps
                    </Typography>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={pullUpsReps}
                        valueLabelDisplay="on"
                        marks={marksReps}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setPullUpsReps(value)
                            }
                        }}
                    />
                </Box>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Air Squat Reps
                    </Typography>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={airSquatReps}
                        valueLabelDisplay="on"
                        marks={marksReps}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setAirSquatReps(value)
                            }
                        }}
                    />
                </Box>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Push-Ups Reps
                    </Typography>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={pushUpReps}
                        valueLabelDisplay="on"
                        marks={marksReps}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setPushUpReps(value)
                            }
                        }}
                    />
                </Box>
            </div>
            <div className="registration_input_block">
                <Box sx={{ margin: "50px 10px 0 10px" }}>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                        1RM Sit-Up Reps
                    </Typography>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={sitUpReps}
                        valueLabelDisplay="on"
                        marks={marksReps}
                        sx={{
                            "--Slider-trackSize": "12px",
                            "--Slider-markSize": "8px",
                            "--Slider-thumbSize": "25px",
                            "--Slider-thumbWidth": "25px",
                            "--Slider-valueLabelArrowSize": "10px",
                        }}
                        onChange={(
                            event: Event,
                            value: number | number[],
                            activeThumb: number
                        ) => {
                            if (typeof value === "number") {
                                setSitUpReps(value)
                            }
                        }}
                    />
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

export default RegistrationStepThree
