import React from "react"
import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    IFormData,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import { StyledTextField } from "../../Styled-components/Styled"
import {
    stylesButtonWrapper,
    stylesFormButton,
} from "./styles/stylesFormGeneration"
import "./formGenTrainStep.scss"
import { IUserData } from "../../../store/userSlice"
import { IUserSlice } from "../../header/MenuUser/PersonalData/PersonalData"

export default function GymTestForm(): React.JSX.Element {
    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )
    const userData = useSelector(
        (state: IUserSlice) => state.usersSlice.dataUser
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
                <StyledTextField
                    id="squatWeight"
                    label="Squat Weight"
                    variant="outlined"
                    autoComplete="given-name"
                    defaultValue={userData.squat || ""}
                    {...register("squat", {
                        required: "squatWeight is Error",
                    })}
                    InputProps={{
                        type: "number",
                        autoComplete: "off",
                    }}
                />
                <StyledTextField
                    id="benchPressWeight"
                    label="Bench Press Weight"
                    variant="outlined"
                    autoComplete="given-name"
                    defaultValue={userData.benchPress || ""}
                    {...register("benchPress", {
                        required: "benchPressWeight is Error",
                    })}
                    InputProps={{
                        type: "number",
                        autoComplete: "off",
                    }}
                />
                <StyledTextField
                    id="deadLiftWeight"
                    label="Dead Lift Weight"
                    variant="outlined"
                    autoComplete="given-name"
                    defaultValue={userData.deadLift || ""}
                    {...register("deadLift", {
                        required: "deadLiftWeight is Error",
                    })}
                    InputProps={{
                        type: "number",
                        autoComplete: "off",
                    }}
                />
                <h2 className="form_gen_train_step_secondHeader">
                    Number Of Repetitions
                </h2>
                <StyledTextField
                    id="pullUp"
                    label="Pull-up"
                    variant="outlined"
                    autoComplete="given-name"
                    defaultValue={userData.pullUp || ""}
                    {...register("pullUp", {
                        required: "pullUp is Error",
                    })}
                    InputProps={{
                        type: "number",
                        autoComplete: "off",
                    }}
                />
                <StyledTextField
                    id="sitUp"
                    label="Sit-up"
                    variant="outlined"
                    autoComplete="given-name"
                    defaultValue={userData.sitUp || ""}
                    {...register("sitUp", {
                        required: "sitUp is Error",
                    })}
                    InputProps={{
                        type: "number",
                        autoComplete: "off",
                    }}
                />
            </section>
            <div style={stylesButtonWrapper}>
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Next Step
                </Button>
            </div>
        </form>
    )
}
