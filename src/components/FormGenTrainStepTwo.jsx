import {
    Button,
    createTheme,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material"
import { lime, purple } from "@mui/material/colors"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    writeFormData,
    writePlaceTraining,
} from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"

export default function FormGenTrainStepTwo() {
    const formData = useSelector((state) => state.training.formData)

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit = (data) => {
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
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h2>Second Step</h2>
            <section>
                <article className={style.inlineRadio}>
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
                            name="placeOfTraining"
                            value="home"
                            label="Home"
                            {...register("placeOfTraining")}
                        />
                        <FormControlLabel
                            control={<Radio sx={{ color: "white" }} />}
                            sx={{ color: "white" }}
                            onClick={() => dispatch(writePlaceTraining("gym"))}
                            name="placeOfTraining"
                            value="gym"
                            label="Gym"
                            {...register("placeOfTraining")}
                        />
                    </RadioGroup>
                </article>

                <Button variant="contained" type="submit">
                    Next Step
                </Button>
            </section>
        </form>
    )
}
