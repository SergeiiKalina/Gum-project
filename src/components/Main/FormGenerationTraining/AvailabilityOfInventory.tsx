import React, { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import training from "../../../data/data"
import {
    IFormData,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import {
    stylesButtonWrapper,
    stylesCheckBox,
    stylesFormButton,
    stylesFormControlLabel,
} from "./styles/stylesFormGeneration"
import "./formGenTrainStep.scss"
import { ITrainingReducer } from "../TrainingPlan/TrainingPlan"

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
    }, [])

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
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={
                                <Checkbox sx={stylesCheckBox} defaultChecked />
                            }
                            label="dumbbell"
                        />
                        <FormControlLabel
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={<Checkbox sx={stylesCheckBox} />}
                            label="kettlebell"
                        />
                        <FormControlLabel
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={<Checkbox sx={stylesCheckBox} />}
                            label="band"
                        />
                        <FormControlLabel
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={<Checkbox sx={stylesCheckBox} />}
                            label="mini-band"
                        />
                        <FormControlLabel
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={<Checkbox sx={stylesCheckBox} />}
                            label="bar"
                        />
                        <FormControlLabel
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={<Checkbox sx={stylesCheckBox} />}
                            label="TRX"
                        />
                        <FormControlLabel
                            sx={stylesFormControlLabel}
                            {...register("mainInfo.inventory")}
                            control={<Checkbox sx={stylesCheckBox} />}
                            label="fitball"
                        />
                    </FormGroup>
                </article>
            </section>
            <div style={stylesButtonWrapper}>
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Next Step
                </Button>
            </div>
        </form>
    )
}
