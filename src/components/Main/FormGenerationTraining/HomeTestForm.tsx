import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    IFormData,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import "./formGenTrainStep.scss"
import {
    stylesButtonWrapper,
    stylesField,
    stylesFormButton,
    stylesInputLabelSelect,
    stylesSelect,
} from "./styles/stylesFormGeneration"

export default function HomeTestForm(): React.JSX.Element {
    const sex = useSelector(
        (state: ITrainingReducer) => state.training.sexTraining
    )

    const formData = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )
    const [sitUp, setSitUp] = useState("")
    const [squatQuantity, setSquatQuantity] = useState("")
    const [pushUpQuantity, setPushUpQuantity] = useState("")
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormData>({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-4/home")
    }

    const handleChangeSquatQuantity = (e: SelectChangeEvent<string>) => {
        setSquatQuantity(e.target.value)
    }
    const handleChangePushUpQuantity = (e: SelectChangeEvent<string>) => {
        setPushUpQuantity(e.target.value)
    }
    const handleChangeSitUp = (e: SelectChangeEvent<string>) => {
        setSitUp(e.target.value)
    }

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Number Of Repetitions</h2>
            <section>
                <FormControl fullWidth sx={stylesField}>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={stylesInputLabelSelect}
                    >
                        Squat Quantity
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={squatQuantity}
                        label="squatQuantity"
                        variant="outlined"
                        {...register("squatQuantity")}
                        sx={stylesSelect}
                        onChange={handleChangeSquatQuantity}
                    >
                        <MenuItem value={"1"}>
                            {sex === "male" ? "> 30" : "> 20"}
                        </MenuItem>
                        <MenuItem value={"2"}>
                            {sex === "male" ? "50 - 100" : "20 - 50"}
                        </MenuItem>
                        <MenuItem value={"3"}>
                            {sex === "male" ? `100 <` : "50 <"}
                        </MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={stylesField}>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={stylesInputLabelSelect}
                    >
                        Push-Up Quantity
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pushUpQuantity}
                        label="pushUpQuantity"
                        variant="outlined"
                        {...register("pushUpQuantity")}
                        sx={stylesSelect}
                        onChange={handleChangePushUpQuantity}
                    >
                        <MenuItem value={"1"}>
                            {sex === "male" ? "> 15" : "> 10"}
                        </MenuItem>
                        <MenuItem value={"2"}>
                            {sex === "male" ? "15 - 40" : "10 - 25"}
                        </MenuItem>
                        <MenuItem value={"3"}>
                            {sex === "male" ? `50 <` : "30 <"}
                        </MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={stylesField}>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={stylesInputLabelSelect}
                    >
                        Sit-Up Quantity
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sitUp}
                        label="sitUp"
                        variant="outlined"
                        {...register("sitUp")}
                        sx={stylesSelect}
                        onChange={handleChangeSitUp}
                    >
                        <MenuItem value={"1"}>
                            {sex === "male" ? "> 20" : "> 10"}
                        </MenuItem>
                        <MenuItem value={"2"}>
                            {sex === "male" ? "20 - 40" : "10 - 25"}
                        </MenuItem>
                        <MenuItem value={"3"}>
                            {sex === "male" ? `50 <` : "30 <"}
                        </MenuItem>
                    </Select>
                </FormControl>
            </section>
            <div style={stylesButtonWrapper}>
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Next Step
                </Button>
            </div>
        </form>
    )
}
