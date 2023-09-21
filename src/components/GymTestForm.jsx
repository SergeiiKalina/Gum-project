import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { writeFormData } from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"

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
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <section>
                <h2>Weight ~ 1PM</h2>
                <div className={style.selectContainer}>
                    <label htmlFor="squatWeight">Squat Weight:</label>
                    <input
                        type="number"
                        id="squatWeight"
                        name="squatWeight"
                        {...register("squatWeight")}
                    />
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="benchPressWeight">
                        Bench Press Weight:
                    </label>
                    <input
                        type="number"
                        id="benchPressWeight"
                        name="benchPressWeight"
                        {...register("benchPressWeight")}
                    />
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="deadLiftWeight">Dead Lift Weight:</label>
                    <input
                        type="number"
                        id="deadLiftWeight"
                        name="deadLiftWeight"
                        {...register("deadLiftWeight")}
                    />
                </div>
                <h2 className={style.secondHeader}>Number Of Repetitions</h2>
                <div className={style.selectContainer}>
                    <label htmlFor="pullUp">Pull-up:</label>
                    <input
                        type="number"
                        id="pullUp"
                        name="pullUp"
                        {...register("pullUp")}
                    />
                </div>
                <div className={style.selectContainer}>
                    <label htmlFor="pushUpQuantity">Push-up:</label>
                    <input
                        type="number"
                        id="pushUpQuantity"
                        name="pushUpQuantity"
                        {...register("pushUpQuantity")}
                    />
                </div>
                <div className={style.selectContainer}>
                    <label htmlFor="sitUp">Sit-up:</label>
                    <input
                        type="number"
                        id="sitUp"
                        name="sitUp"
                        {...register("sitUp")}
                    />
                </div>
                <Button variant="contained" type="submit">
                    Availability Of Inventory
                </Button>
            </section>
        </form>
    )
}
