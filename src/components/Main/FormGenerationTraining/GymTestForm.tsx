import React from "react"
import styled from "@emotion/styled"
import { Button, createTheme, TextField } from "@mui/material"
import { lime, purple } from "@mui/material/colors"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    IFormData,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import "./formGenTrainStep.scss"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"

const theme = createTheme({
    palette: {
        primary: lime,
        secondary: purple,
    },
})

const StyledTextField = styled(TextField)({
    width: "60%",
    margin: "20px auto 0 auto",
    border: "none",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    "& .MuiOutlinedInput-root": {
        "&:hover .MuiInputBase-input ": {
            borderBottom: "1px solid #42a5f5",
        },
        "&.Mui-focused": {},
        "& .MuiInputBase-input": {
            color: "white",
            borderBottom: "1px solid #fefefe",
        },
    },
    "& .MuiInputLabel-root": {
        color: "white",
    },
    "&:hover .MuiInputLabel-root": {
        color: "#42a5f5",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
})

export default function GymTestForm(): React.JSX.Element {
    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormData>({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-4/gym")
    }
    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <section>
                <h2>Weight ~ 1PM</h2>
                <div className="form_gen_train_step_selectContainer">
                    <StyledTextField
                        id="squatWeight"
                        label="Squat Weight"
                        variant="outlined"
                        autoComplete="given-name"
                        {...register("squatWeight", {
                            required: "squatWeight is Error",
                        })}
                        InputProps={{
                            type: "number",
                            autoComplete: "off",
                        }}
                    />
                </div>

                <div className="form_gen_train_step_selectContainer">
                    <StyledTextField
                        id="benchPressWeight"
                        label="Bench Press Weight"
                        variant="outlined"
                        autoComplete="given-name"
                        {...register("benchPressWeight", {
                            required: "benchPressWeight is Error",
                        })}
                        InputProps={{
                            type: "number",
                            autoComplete: "off",
                        }}
                    />
                </div>

                <div className="form_gen_train_step_selectContainer">
                    <StyledTextField
                        id="deadLiftWeight"
                        label="Dead Lift Weight"
                        variant="outlined"
                        autoComplete="given-name"
                        {...register("deadLiftWeight", {
                            required: "deadLiftWeight is Error",
                        })}
                        InputProps={{
                            type: "number",
                            autoComplete: "off",
                        }}
                    />
                </div>
                <h2 className="form_gen_train_step_secondHeader">
                    Number Of Repetitions
                </h2>
                <div className="form_gen_train_step_selectContainer">
                    <StyledTextField
                        id="pullUp"
                        label="Pull-up"
                        variant="outlined"
                        autoComplete="given-name"
                        {...register("pullUp", {
                            required: "pullUp is Error",
                        })}
                        InputProps={{
                            type: "number",
                            autoComplete: "off",
                        }}
                    />
                </div>

                <div className="form_gen_train_step_selectContainer">
                    <StyledTextField
                        id="sitUp"
                        label="Sit-up"
                        variant="outlined"
                        autoComplete="given-name"
                        {...register("sitUp", {
                            required: "sitUp is Error",
                        })}
                        InputProps={{
                            type: "number",
                            autoComplete: "off",
                        }}
                    />
                </div>
            </section>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    paddingTop: "20px",
                    margin: "auto auto 200px auto",
                }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "40%", margin: "0 auto" }}
                >
                    Next Step
                </Button>
            </div>
        </form>
    )
}
