import training from "../../../data/data"
import React, { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import {
    IFormData,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import { useNavigate } from "react-router-dom"
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import "./formGenTrainStep.scss"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"

export default function AvailabilityOfInventory(): React.JSX.Element {
    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormData>({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-5/home")
    }

    useEffect(() => {
        let set = new Set()
        training.forEach((element) => {
            element.inventory.forEach((el) => set.add(el))
        })
    }, [training])

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 style={{ margin: "30px 0 0 0" }}>Availability Of Inventory</h2>
            <section>
                <article className="form_gen_train_step_blockInventory">
                    <h3 className="form_gen_train_step_header">
                        Choose Inventory
                    </h3>
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
