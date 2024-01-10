import React from "react"
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
import "./formGenTrainStep.scss"

export default function FormGenTrainStepTwo(): React.JSX.Element {
    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormData>({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        dispatch(writeFormData({ ...formData, ...data }))
        if (data.placeOfTraining === "home") {
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
                    sx={styledRadioGroup}
                >
                    <FormControlLabel
                        control={<Radio sx={stylesRadio} />}
                        sx={stylesLabelRadio}
                        onClick={() => dispatch(writePlaceTraining("home"))}
                        value="home"
                        label="Home"
                        {...register("placeOfTraining")}
                    />
                    <FormControlLabel
                        control={<Radio sx={stylesRadio} />}
                        sx={stylesLabelRadio}
                        onClick={() => dispatch(writePlaceTraining("gym"))}
                        value="gym"
                        label="Gym"
                        {...register("placeOfTraining")}
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
