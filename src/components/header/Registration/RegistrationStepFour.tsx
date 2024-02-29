import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from "@mui/material"
import { theme } from "../../Styled-components/Styled"
import {
    registration,
    toggleIsLoading,
    writeRegistrationData,
} from "../../../store/authorizationSlice"
import { SubmitHandler, useForm } from "react-hook-form"
import { IRegisterForm } from "./Registration"
import { useSelector } from "react-redux"
import { IStateAuth } from "./RegistrationStepOne"
import { useDispatch } from "react-redux"
import {
    stylesFieldRegistrationForm,
    stylesInputLabelSelect,
    stylesSelect,
} from "../../Main/FormGenerationTraining/styles/stylesFormGeneration"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../../../http"
import axios from "axios"

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

function RegistrationStepFour({ setStep }: { setStep: (num: number) => void }) {
    const dispatch = useDispatch<any>()
    const { register, handleSubmit } = useForm<IRegisterForm>({})
    const [problems, setProblems] = useState<string[]>([])
    const [lifestyle, setLifestyle] = useState("")
    const [goal, setGoal] = useState("")
    const registrationData = useSelector(
        (state: IStateAuth) => state.authSlice.registrationData
    )
    const navigate = useNavigate()
    const handleLifeStyle = (e: SelectChangeEvent<string>) => {
        setLifestyle(e.target.value)
    }
    const handleGoal = (e: SelectChangeEvent<string>) => {
        setGoal(e.target.value)
    }
    const handleChangeProblemsSelect = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event
        setProblems(typeof value === "string" ? value.split(",") : value)
    }

    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
        await dispatch(toggleIsLoading(true))
        await dispatch(writeRegistrationData({ ...registrationData, ...data }))
        await dispatch(registration({ ...registrationData, ...data }))

        const { password, ...dataWithoutPassword } = await registrationData
        await axios.patch(API_URL + "/user/update", {
            ...dataWithoutPassword,
            ...data,
        })
        await dispatch(toggleIsLoading(false))
        await navigate("/main-page")
    }

    return (
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration Form</h2>
            <div
                className="registration_input_block"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <FormControl fullWidth sx={stylesFieldRegistrationForm}>
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
            <div
                className="registration_input_block"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <FormControl fullWidth sx={stylesFieldRegistrationForm}>
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
            <div
                className="registration_input_block"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <FormControl sx={stylesFieldRegistrationForm}>
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
                        value={problems}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                        sx={stylesSelect}
                        {...register("problems")}
                        onChange={handleChangeProblemsSelect}
                    >
                        {multiSelect.map((el) => (
                            <MenuItem key={el} value={el}>
                                {el.charAt(0).toUpperCase() + el.slice(1)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <Button
                variant="contained"
                type="submit"
                sx={{
                    width: "30%",
                    margin: "60px auto 0 auto",
                    [theme.breakpoints.down("sm")]: {
                        width: "70%",
                    },
                }}
            >
                Next
            </Button>
        </form>
    )
}

export default RegistrationStepFour
