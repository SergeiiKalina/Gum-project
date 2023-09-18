import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { writeFormData } from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"

export default function HomeTestForm() {
    const sex = useSelector((state) => state.training.sexTraining)
    const formData = useSelector((state) => state.training.formData)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        mode,
    } = useForm({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-4/home")
    }

    return (
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h2>Number Of Repetitions</h2>
            <section>
                <div className={style.selectContainer}>
                    <label htmlFor="squatQuantity">Squat Quantity:</label>
                    <select
                        id="squatQuantity"
                        name="squatQuantity"
                        {...register("squatQuantity")}
                    >
                        <option value="1">
                            {sex === "male" ? "> 30" : "> 20"}
                        </option>
                        <option value="2">
                            {sex === "male" ? "50 - 100" : "20 - 50"}
                        </option>
                        <option value="3">
                            {sex === "male" ? `100 <` : "50 <"}
                        </option>
                    </select>
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="pushUpQuantity">Push-Up Quantity:</label>
                    <select
                        id="pushUpQuantity"
                        name="pushUpQuantity"
                        {...register("pushUpQuantity")}
                    >
                        <option value="1">
                            {sex === "male" ? "> 15" : "> 10"}
                        </option>
                        <option value="2">
                            {sex === "male" ? "15 - 40" : "10 - 25"}
                        </option>
                        <option value="3">
                            {sex === "male" ? `50 <` : "30 <"}
                        </option>
                    </select>
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="sitUp">Sit-Up Quantity:</label>
                    <select id="sitUp" name="sitUp" {...register("sitUp")}>
                        <option value="1">
                            {sex === "male" ? "> 20" : "> 10"}
                        </option>
                        <option value="2">
                            {sex === "male" ? "20 - 40" : "10 - 25"}
                        </option>
                        <option value="3">
                            {sex === "male" ? `50 <` : "30 <"}
                        </option>
                    </select>
                </div>
                <button type="submit">Availability Of Inventory</button>
            </section>
        </form>
    )
}
