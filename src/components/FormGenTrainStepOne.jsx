import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    writeFormData,
    writeSexTraining,
} from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"
import { useForm } from "react-hook-form"

export default function FormGenTrainStepOne() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        mode,
    } = useForm({ mode: "onBlur" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        navigate("/gentraining/step-2")
        dispatch(writeFormData(data))
        // generateTraining(data)
    }

    return (
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <section>
                <h2>First Step</h2>
                <input
                    style={errors.lastName && { outlineColor: "red" }}
                    type="text"
                    placeholder="First Name..."
                    name="firstName"
                    {...register("firstName", { required: "Enter your name" })}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <input
                    style={errors.lastName && { outlineColor: "red" }}
                    type="text"
                    placeholder="Last Name..."
                    name="lastName"
                    {...register("lastName", {
                        required: "Last Name is Error",
                    })}
                />

                <input
                    type="text"
                    placeholder="Email..."
                    name="email"
                    {...register("email")}
                />
                <input
                    type="number"
                    placeholder="Kg..."
                    name="weight"
                    {...register("weight")}
                />
                <select {...register("age")}>
                    <option value="Age">Age</option>
                    <option value="1">{`> 18`}</option>
                    <option value="1">18 - 24</option>
                    <option value="1.1">25 - 34</option>
                    <option value="1.2">35 - 44</option>
                    <option value="1.3">45 - 54</option>
                    <option value="1.4">{`55 <`}</option>
                </select>
                <article className={style.inlineRadio}>
                    <label
                        className={style.radio}
                        onClick={() => dispatch(writeSexTraining("male"))}
                    >
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            {...register("sex")}
                        />
                        Male
                    </label>

                    <label
                        className={style.radio}
                        onClick={() => dispatch(writeSexTraining("female"))}
                    >
                        <input
                            type="radio"
                            name="sex"
                            value="female"
                            {...register("sex")}
                        />
                        Female
                    </label>
                </article>

                <button type="submit">Second Step</button>
            </section>
        </form>
    )
}
