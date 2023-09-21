import { Button } from "@mui/material"
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

    return (
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h2>Second Step</h2>
            <section>
                <h2>Place Of Training</h2>
                <article className={style.inlineRadio}>
                    <label className={style.radio}>
                        <input
                            onClick={() => dispatch(writePlaceTraining("home"))}
                            type="radio"
                            name="placeOfTraining"
                            value="home"
                            {...register("placeOfTraining")}
                        />
                        Home
                    </label>

                    <label className={style.radio}>
                        <input
                            onClick={() => dispatch(writePlaceTraining("gym"))}
                            type="radio"
                            name="placeOfTraining"
                            value="gym"
                            {...register("placeOfTraining")}
                        />
                        Gym
                    </label>
                </article>
                <Button variant="contained" type="submit">
                    Next Step
                </Button>
            </section>
        </form>
    )
}
