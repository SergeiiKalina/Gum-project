import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { SubmitHandler, useForm } from "react-hook-form"
import {
    IFormData,
    writeFormData,
    writeSexTraining,
} from "../../../store/generatorTrainingReducer"
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
} from "@mui/material"
import { StyledTextField } from "../../Styled-components/Styled"
import {
    styledRadioGroup,
    stylesButtonWrapper,
    stylesField,
    stylesFormButton,
    stylesFormLabelRadioGroup,
    stylesInputLabelSelect,
    stylesLabelRadio,
    stylesRadio,
    stylesSelect,
} from "./styles/stylesFormGeneration"
import "./formGenTrainStep.scss"
import { IUserSlice } from "../../header/MenuUser/PersonalData/PersonalData"
import { writeDataUser } from "../../../store/userSlice"
import axios from "axios"
import { API_URL } from "../../../http"
import { IAuthSliceState } from "../../header/Login/Login"

export default function FormGenTrainStepOne(): React.JSX.Element {
    const userData = useSelector(
        (state: IUserSlice) => state.usersSlice.dataUser
    )
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )
    const { register, handleSubmit } = useForm<IFormData>({
        mode: "onBlur",
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [age, setAge] = useState<string>("")
    const [radioSexValue, setRadioSexValue] = useState(userData.sex || "female")
    const handleChangeAge = (event: SelectChangeEvent<string>) => {
        let value: string = event.target.value
        setAge(value)
    }

    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        navigate("/gentraining/step-2")
        dispatch(writeFormData(data))
    }

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email")
            if (email) {
                const url = API_URL + "/user/email"
                try {
                    const userRes = await axios.post(url, { email })
                    const userData = userRes.data

                    dispatch(writeDataUser(userData))
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchData()
    }, [dispatch])

    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Generator Form</h2>
            <h2>First Step</h2>
            <StyledTextField
                id="firstName"
                label="First Name"
                variant="outlined"
                type="text"
                autoComplete="given-name"
                defaultValue={
                    localStorage.getItem("firstName")
                        ? localStorage.getItem("firstName")
                        : ""
                }
                {...register("firstName", {
                    required: "First Name is Error",
                })}
                InputProps={{
                    type: "text",
                }}
            />

            <StyledTextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                autoComplete="family-name"
                defaultValue={
                    localStorage.getItem("lastName")
                        ? localStorage.getItem("lastName")
                        : ""
                }
                {...register("lastName", {
                    required: "Last Name is Error",
                })}
                InputProps={{
                    type: "text",
                }}
            />

            <StyledTextField
                id="email"
                label="Email"
                variant="outlined"
                autoComplete="email"
                defaultValue={
                    localStorage.getItem("email")
                        ? localStorage.getItem("email")
                        : ""
                }
                {...register("email")}
                InputProps={{
                    type: "email",
                }}
            />
            <StyledTextField
                id="input-with-sx"
                label="Weight"
                variant="outlined"
                type="number"
                defaultValue={userData.weight || ""}
                {...register("weight", {
                    required: "Weight is required",
                })}
                InputProps={{
                    type: "text",
                }}
                sx={stylesField}
            />

            <FormControl fullWidth sx={stylesField}>
                <InputLabel
                    id="demo-simple-select-label"
                    sx={stylesInputLabelSelect}
                >
                    Age
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    variant="outlined"
                    {...register("age")}
                    sx={stylesSelect}
                    onChange={handleChangeAge}
                >
                    <MenuItem value={1}>{`> 18`}</MenuItem>
                    <MenuItem value={1}>18 - 24</MenuItem>
                    <MenuItem value={1.1}>25 - 34</MenuItem>
                    <MenuItem value={1.2}>35 - 44</MenuItem>
                    <MenuItem value={1.3}>45 - 54</MenuItem>
                    <MenuItem value={1.4}>{`55 <`}</MenuItem>
                </Select>
            </FormControl>

            <article className="form_gen_train_step_inlineRadio">
                <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={stylesFormLabelRadioGroup}
                >
                    Gender
                </FormLabel>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={styledRadioGroup}
                    value={radioSexValue}
                    onChange={(event) => {
                        setRadioSexValue(event.target.value)
                        dispatch(writeSexTraining(event.target.value))
                    }}
                >
                    <FormControlLabel
                        value="female"
                        control={
                            <Radio sx={stylesRadio} {...register("sex")} />
                        }
                        label="Female"
                        sx={stylesLabelRadio}
                    />
                    <FormControlLabel
                        value="male"
                        control={
                            <Radio sx={stylesRadio} {...register("sex")} />
                        }
                        label="Male"
                        sx={stylesLabelRadio}
                    />
                </RadioGroup>
            </article>

            <div style={stylesButtonWrapper}>
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Next Step
                </Button>
            </div>
        </form>
    )
}
