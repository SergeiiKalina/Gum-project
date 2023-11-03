import {
    Button,
    createTheme,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material"
import { lime, purple } from "@mui/material/colors"
import { SubmitHandler, useForm, FieldValues } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    IFormData,
    writeFormData,
    writePlaceTraining,
} from "../../../store/generatorTrainingReducer"
import "./formGenTrainStep.scss"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import React from "react"

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
    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: purple,
        },
    })

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Second Step</h2>
            <section>
                <article className="form_gen_train_step_inlineRadio">
                    <FormLabel
                        id="demo-row-radio-buttons-group-label"
                        sx={{ margin: "20px auto 0 auto", color: "white" }}
                    >
                        Place Of Training
                    </FormLabel>

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                            width: "30%",
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "20px auto 0 auto",
                            [theme.breakpoints.down("md")]: {
                                width: "80%",
                            },
                        }}
                    >
                        <FormControlLabel
                            control={<Radio sx={{ color: "white" }} />}
                            sx={{ color: "white" }}
                            onClick={() => dispatch(writePlaceTraining("home"))}
                            value="home"
                            label="Home"
                            {...register("placeOfTraining")}
                        />
                        <FormControlLabel
                            control={<Radio sx={{ color: "white" }} />}
                            sx={{ color: "white" }}
                            onClick={() => dispatch(writePlaceTraining("gym"))}
                            value="gym"
                            label="Gym"
                            {...register("placeOfTraining")}
                        />
                    </RadioGroup>
                </article>
            </section>
            <div
                style={{
                    width: "100%",
                    display: "flex",
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
