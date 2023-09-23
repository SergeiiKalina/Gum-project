import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    writeFormData,
    writeSexTraining,
} from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"
import { lime, purple } from "@mui/material/colors"
import { useForm } from "react-hook-form"
import {
    Button,
    createTheme,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    makeStyles,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    ThemeProvider,
} from "@mui/material"

import styled from "@emotion/styled"

const theme = createTheme({
    palette: {
        primary: lime,
        secondary: purple,
    },
})

const StyledTextField = styled(TextField)({
    width: "60%",
    margin: "20px auto 0 auto",
    border: "none",
    [theme.breakpoints.down("md")]: {
        width: "100%",
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
    const {
        register,
        handleSubmit,

        formState: { errors },
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
            <h2>First Step</h2>
            <StyledTextField
                id="firstName"
                label="First Name"
                variant="outlined"
                name="firstName"
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
                name="lastName"
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
                name="email"
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
                name="weight"
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
                        width: "100%",
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
                >
                    <MenuItem value={1}>{`> 18`}</MenuItem>
                    <MenuItem value={1}>18 - 24</MenuItem>
                    <MenuItem value={1.1}>25 - 34</MenuItem>
                    <MenuItem value={1.2}>35 - 44</MenuItem>
                    <MenuItem value={1.3}>45 - 54</MenuItem>
                    <MenuItem value={1.4}>{`55 <`}</MenuItem>
                </Select>
            </FormControl>

            <article className={style.inlineRadio}>
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
                        width: "30%",
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "20px auto 0 auto",
                        [theme.breakpoints.down("md")]: {
                            width: "80%",
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

            <Button
                variant="contained"
                type="submit"
                sx={{
                    margin: "20px auto 0 auto",
                }}
            >
                Next Step
            </Button>
        </form>
    )
}
