import styled from "@emotion/styled"
import { Button, createTheme, TextField } from "@mui/material"
import { lime, purple } from "@mui/material/colors"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { writeFormData } from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"

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

export default function GymTestForm() {
    const formData = useSelector((state) => state.training.formData)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-4/gym")
    }
    return (
        <form
            className={style.wrapper}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <section>
                <h2>Weight ~ 1PM</h2>
                <div className={style.selectContainer}>
                    <StyledTextField
                        id="squatWeight"
                        name="squatWeight"
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

                <div className={style.selectContainer}>
                    <StyledTextField
                        id="benchPressWeight"
                        name="benchPressWeight"
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

                <div className={style.selectContainer}>
                    <StyledTextField
                        id="deadLiftWeight"
                        name="deadLiftWeight"
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
                <h2 className={style.secondHeader}>Number Of Repetitions</h2>
                <div className={style.selectContainer}>
                    <StyledTextField
                        id="pullUp"
                        name="pullUp"
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

                <div className={style.selectContainer}>
                    <StyledTextField
                        id="sitUp"
                        name="sitUp"
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
                <Button
                    sx={{
                        margin: "50px auto 0 auto",
                    }}
                    variant="contained"
                    type="submit"
                >
                    Next Step
                </Button>
            </section>
        </form>
    )
}
