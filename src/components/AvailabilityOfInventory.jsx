import style from "./formGenTrainStep.module.scss"
import training from "../data/data"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { writeFormData } from "../store/generatorTrainingReduser"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

export default function AvailabilityOfInventory() {
    const formData = useSelector((state) => state.training.formData)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-5/home")
    }
    console.log(formData)
    useEffect(() => {
        let set = new Set()
        training.forEach((element) => {
            element.inventory.forEach((el) => set.add(el))
        })
    }, [training])

    return (
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h2>Availability Of Inventory</h2>
            <section>
                <article className={style.blockInventory}>
                    <h3 className={style.header}>Choose Inventory</h3>
                    <label>
                        <input
                            type="checkbox"
                            value="dumbbell"
                            {...register("inventory")}
                        />
                        Dumbbell
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="kettlebell"
                            {...register("inventory")}
                        />
                        Kettlebell
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="band"
                            {...register("inventory")}
                        />
                        Band
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="mini-band"
                            {...register("inventory")}
                        />
                        Mini-Band
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="bar"
                            {...register("inventory")}
                        />
                        Bar or Bodybar
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="TRX"
                            {...register("inventory")}
                        />
                        TRX
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="fitball"
                            {...register("inventory")}
                        />
                        Fitball
                    </label>
                </article>
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </section>
        </form>
    )
}
