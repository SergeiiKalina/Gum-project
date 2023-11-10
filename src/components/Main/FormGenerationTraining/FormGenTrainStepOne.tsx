import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    IFormData,
    writeFormData,
    writeSexTraining,
} from "../../../store/generatorTrainingReducer"
import "./formGenTrainStep.scss"
import { lime, purple } from "@mui/material/colors"
import { SubmitHandler, useForm } from "react-hook-form"
import {
    Button,
    createTheme,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material"

import styled from "@emotion/styled"
import React, { useState } from "react"

const theme = createTheme({
    palette: {
        primary: lime,
        secondary: purple,
    },
    breakpoints: {
        values: {
            xs: 400,
            sm: 560,
            md: 767,
            lg: 1248,
            xl: 1536,
        },
    },
})

const StyledTextField = styled(TextField)({
    width: "60%",
    margin: "20px auto 0 auto",
    border: "none",
    [theme.breakpoints.down("md")]: {
        width: "70%",
    },
    "& .MuiOutlinedInput-root": {
        "&:hover .MuiInputBase-input ": {
            borderBottom: "1px solid #42a5f5",
        },
        "&.Mui-focused": {},
        "& .MuiInputBase-input": {
            color: "white",
            borderBottom: "1px solid #fefefe",
        },
    },
    "& .MuiInputLabel-root": {
        color: "white",
    },
    "&:hover .MuiInputLabel-root": {
        color: "#42a5f5",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
})

export default function FormGenTrainStepOne() {
    const [age, setAge] = useState<string>("")

    const handleChangeAge = (event: SelectChangeEvent<string>) => {
        let value: string = event.target.value
        setAge(value)
    }

    const { register, handleSubmit } = useForm<IFormData>({ mode: "onBlur" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        navigate("/gentraining/step-2")
        dispatch(writeFormData(data))
        // generateTraining(data)
    }

    return (
        <form
            className="form_gen_train_step_wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>First Step</h2>

            <StyledTextField
                id="firstName"
                label="First Name"
                variant="outlined"
                type="text"
                autoComplete="given-name"
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
                {...register("weight", {
                    required: "First Name is Error",
                })}
                InputProps={{
                    type: "number",
                }}
            />

            <FormControl
                fullWidth
                sx={{
                    width: "60%",
                    margin: "20px auto 0 auto",
                    [theme.breakpoints.down("md")]: {
                        width: "70%",
                    },
                }}
            >
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "white", border: "none" }}
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
                    sx={{
                        boxShadow: "none",
                        color: "white",
                        ".MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderBottom: "1px solid #fefefe",
                            borderRadius: "0px",
                        },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                                borderBottom: "1px solid #42a5f5",
                            },
                        ".MuiSvgIcon-root": {
                            color: "white",
                        },
                    }}
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
                    sx={{ margin: "20px auto 0 auto", color: "white" }}
                >
                    Gender
                </FormLabel>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                        width: "15%",
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "20px auto 0 auto",

                        [theme.breakpoints.down("xl")]: {
                            width: "20%",
                        },
                        [theme.breakpoints.down("lg")]: {
                            width: "30%",
                        },
                        [theme.breakpoints.down("md")]: {
                            width: "40%",
                        },
                        [theme.breakpoints.down("sm")]: {
                            width: "50%",
                        },
                        [theme.breakpoints.down("xs")]: {
                            width: "60%",
                        },
                    }}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio sx={{ color: "white" }} />}
                        label="Female"
                        sx={{ color: "white" }}
                        {...register("sex")}
                        onClick={() => dispatch(writeSexTraining("female"))}
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio sx={{ color: "white" }} />}
                        label="Male"
                        sx={{ color: "white" }}
                        {...register("sex")}
                        onClick={() => dispatch(writeSexTraining("male"))}
                    />
                </RadioGroup>
            </article>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    margin: "auto auto 20% auto",
                }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "40%", margin: "0 auto" }}
                >
                    Next Step
                </Button>
            </div>
        </form>
    )
}
