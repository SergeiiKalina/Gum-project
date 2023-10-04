import {
    Button,
    createTheme,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"
import { lime, purple } from "@mui/material/colors"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { writeFormData } from "../store/generatorTrainingReduser"
import style from "./formGenTrainStep.module.scss"

const theme = createTheme({
    palette: {
        primary: lime,
        secondary: purple,
    },
})

export default function HomeTestForm() {
    const sex = useSelector((state) => state.training.sexTraining)

    const formData = useSelector((state) => state.training.formData)
    const [sitUp, setSitUp] = useState("")
    const [squatQuantity, setSquatQuantity] = useState("")
    const [pushUpQuantity, setPushUpQuantity] = useState("")
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({ mode: "onBlur" })
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(writeFormData({ ...formData, ...data }))
        navigate("/gentraining/step-4/home")
    }

    const handleChangeSquatQuantity = (e) => {
        setSquatQuantity(e.target.value)
    }
    const handleChangePushUpQuantity = (e) => {
        setPushUpQuantity(e.target.value)
    }
    const handleChangeSitUp = (e) => {
        setSitUp(e.target.value)
    }

    return (
        <form className={style.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h2>Number Of Repetitions</h2>
            <section>
                <div className={style.selectContainer}>
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
                            Squat Quantity
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={squatQuantity}
                            label="squatQuantity"
                            variant="outlined"
                            {...register("squatQuantity")}
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
                </div>

                <div className={style.selectContainer}>
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
                            Push-Up Quantity
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={pushUpQuantity}
                            label="pushUpQuantity"
                            variant="outlined"
                            {...register("pushUpQuantity")}
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
                </div>

                <div className={style.selectContainer}>
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
                            Sit-Up Quantity
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sitUp}
                            label="sitUp"
                            variant="outlined"
                            {...register("sitUp")}
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
                </div>
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
                    sx={{ width: "40%", margin: "0 auto" }}
                >
                    Next Step
                </Button>
            </div>
        </form>
    )
}
