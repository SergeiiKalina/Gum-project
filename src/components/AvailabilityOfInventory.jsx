import style from "./formGenTrainStep.module.scss"
import training from "../data/data"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { writeFormData } from "../store/generatorTrainingReduser"
import { useNavigate } from "react-router-dom"
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material"

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
            <h2 style={{ margin: "30px 0 0 0" }}>Availability Of Inventory</h2>
            <section>
                <article className={style.blockInventory}>
                    <h3 className={style.header}>Choose Inventory</h3>
                    <FormGroup>
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={
                                <Checkbox
                                    sx={{ color: "white" }}
                                    defaultChecked
                                />
                            }
                            label="dumbbell"
                        />
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="kettlebell"
                        />
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="band"
                        />
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="mini-band"
                        />
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="bar"
                        />
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="TRX"
                        />
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                            {...register("inventory")}
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="fitball"
                        />
                    </FormGroup>
                </article>
            </section>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    position: "absolute",
                    bottom: "150px",
                }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "90%", margin: "0 auto" }}
                >
                    Next Step
                </Button>
            </div>
        </form>
    )
}
