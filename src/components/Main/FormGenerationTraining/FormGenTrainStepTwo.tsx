import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import {
    Button,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material"
import {
    IFormData,
    writeFormData,
    writePlaceTraining,
} from "../../../store/generatorTrainingReducer"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import {
    styledRadioGroup,
    stylesButtonWrapper,
    stylesFormButton,
    stylesFormLabelRadioGroup,
    stylesLabelRadio,
    stylesRadio,
} from "./styles/stylesFormGeneration"
import { IUserSlice } from "../../header/MenuUser/PersonalData/PersonalData"
import "./formGenTrainStep.scss"

export default function FormGenTrainStepTwo(): React.JSX.Element {
    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )
    const userData = useSelector(
        (state: IUserSlice) => state.usersSlice.dataUser
    )
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormData>({
        mode: "onBlur",
    })
    const dispatch = useDispatch()

    const [radioPlaceValue, setRadioPlaceValue] = useState<string>(
        userData.placeToWorkout || "gym"
    )
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        console.log({ ...formData, ...data })
        dispatch(writeFormData({ ...formData, ...data }))
        if (data.placeToWorkout === "home") {
            navigate("/gentraining/step-3/home")
        } else {
            navigate("/gentraining/step-3/gym")
        }
    }

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Generator Form</h2>
            <h2>Second Step</h2>

            <article className="form_gen_train_step_inlineRadio">
                <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={stylesFormLabelRadioGroup}
                >
                    Place Of Training
                </FormLabel>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={radioPlaceValue}
                    onChange={(e) => setRadioPlaceValue(e.target.value)}
                    sx={styledRadioGroup}
                >
                    <FormControlLabel
                        control={<Radio sx={stylesRadio} />}
                        sx={stylesLabelRadio}
                        onClick={() => dispatch(writePlaceTraining("home"))}
                        value="home"
                        label="Home"
                        {...register("placeToWorkout")}
                    />
                    <FormControlLabel
                        control={<Radio sx={stylesRadio} />}
                        sx={stylesLabelRadio}
                        onClick={() => dispatch(writePlaceTraining("gym"))}
                        value="gym"
                        label="Gym"
                        {...register("placeToWorkout")}
                    />
                </RadioGroup>
            </article>
            <div style={stylesButtonWrapper}>
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Next Step
                </Button>
            </div>
        </form>
    )
}
