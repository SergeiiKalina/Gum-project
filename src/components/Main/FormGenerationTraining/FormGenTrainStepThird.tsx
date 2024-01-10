import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from "@mui/material"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    IFormData,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import "./formGenTrainStep.scss"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import {
    stylesButtonWrapper,
    stylesField,
    stylesFormButton,
    stylesInputLabelSelect,
    stylesSelect,
} from "./styles/stylesFormGeneration"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const multiSelect = ["back", "elbows", "shoulders", "knees", "hip joint"]

export default function FormGenTrainStepThird(): React.JSX.Element {
    const [personName, setPersonName] = useState<string[]>([])
    const [lifestyle, setLifestyle] = useState("")
    const [goal, setGoal] = useState("")
    const [focus, setFocus] = useState("")
    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormData>({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/finished-training")
    }

    const handleLifeStyle = (e: SelectChangeEvent<string>) => {
        setLifestyle(e.target.value)
    }
    const handleGoal = (e: SelectChangeEvent<string>) => {
        setGoal(e.target.value)
    }
    const handleFocus = (e: SelectChangeEvent<string>) => {
        setFocus(e.target.value)
    }

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event
        setPersonName(typeof value === "string" ? value.split(",") : value)
    }

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Third Step</h2>
            <section>
                <div className="form_gen_train_step_selectBlock">
                    <FormControl fullWidth sx={stylesField}>
                        <InputLabel id="lifestyle" sx={stylesInputLabelSelect}>
                            Select your lifestyle
                        </InputLabel>
                        <Select
                            labelId="lifestyle"
                            id="lifestyle"
                            label="Lifestyle"
                            variant="outlined"
                            value={lifestyle}
                            {...register("lifestyle")}
                            sx={stylesSelect}
                            onChange={handleLifeStyle}
                        >
                            <MenuItem value="passive">Passive</MenuItem>
                            <MenuItem value="moderate">Moderate</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="form_gen_train_step_selectBlock">
                    <FormControl fullWidth sx={stylesField}>
                        <InputLabel id="goal" sx={stylesInputLabelSelect}>
                            Select your goal
                        </InputLabel>
                        <Select
                            labelId="goal"
                            id="goal"
                            label="Goal"
                            variant="outlined"
                            value={goal}
                            {...register("goal")}
                            sx={stylesSelect}
                            onChange={handleGoal}
                        >
                            <MenuItem value="weightMaintenance">
                                Weight Maintenance
                            </MenuItem>
                            <MenuItem value="weightGain">Weight Gain</MenuItem>
                            <MenuItem value="weightLoss">Weight Loss</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="form_gen_train_step_selectBlock">
                    <FormControl sx={stylesField}>
                        <InputLabel
                            id="demo-multiple-name-label"
                            sx={stylesInputLabelSelect}
                        >
                            Select your problems
                        </InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={personName}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                            sx={stylesSelect}
                            {...register("problems")}
                            onChange={handleChange}
                        >
                            {multiSelect.map((el) => (
                                <MenuItem key={el} value={el}>
                                    {el.charAt(0).toUpperCase() + el.slice(1)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="form_gen_train_step_selectBlock">
                    <FormControl fullWidth sx={stylesField}>
                        <InputLabel id="focus" sx={stylesInputLabelSelect}>
                            Training Focus
                        </InputLabel>
                        <Select
                            labelId="focus"
                            id="focus"
                            label="Focus"
                            variant="outlined"
                            value={focus}
                            {...register("focus")}
                            sx={stylesSelect}
                            onChange={handleFocus}
                        >
                            <MenuItem value="fullBody">Full Body</MenuItem>
                            <MenuItem value="upperBody">Upper Body</MenuItem>
                            <MenuItem value="lowerBody">Lower Body</MenuItem>
                            <MenuItem value="legs">Legs</MenuItem>
                            <MenuItem value="back">Back</MenuItem>
                            <MenuItem value="chest">Chest</MenuItem>
                            <MenuItem value="shoulders">Shoulders</MenuItem>
                            <MenuItem value="hand">Hand</MenuItem>
                            <MenuItem value="press">Press</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </section>
            <div style={stylesButtonWrapper}>
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Next Step
                </Button>
            </div>
        </form>
    )
}
