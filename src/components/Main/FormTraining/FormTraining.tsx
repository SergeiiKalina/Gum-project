import React from "react"
import { useDispatch } from "react-redux"
import { changeIsChecked, writeData } from "../../../store/filterTrainingSlice"
import "./formTraining.scss"
import { Button, IconButton, Paper, TextField } from "@mui/material"
import { PiSlidersHorizontalLight } from "react-icons/pi"
import SearchIcon from "@mui/icons-material/Search"
import { theme } from "../../Styled-components/Styled"
import SelectCategories from "./SelectCategories/SelectCategories"

export interface IState {
    filterTraining: {
        isChecked: string[]
        categories: string[]
    }
}

const FormTraining = React.memo(function FormTraining({
    setToggleMobileFilterForm,
}: {
    setToggleMobileFilterForm: (arg: (arg: boolean) => boolean) => void
}): React.JSX.Element {
    const dispatch = useDispatch()

    const onSubmit = (data: string[]) => {
        dispatch(writeData(Object.values(data)))
        dispatch(changeIsChecked(data))
    }

    return (
        <article className="form_training_wrapper">
            <SelectCategories onSubmit={onSubmit} />
            <section>
                <Paper
                    component="form"
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "400px",
                        minWidth: "250px",
                        border: "1px white solid",
                        borderRadius: "20px",
                        backgroundColor: "transparent",
                        [theme.breakpoints.down("xs")]: {
                            minWidth: "200px",
                        },
                    }}
                >
                    <TextField
                        placeholder="Search..."
                        variant="outlined"
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "& .MuiInputBase-input": {
                                color: "white",
                            },
                        }}
                    />
                    <IconButton
                        type="button"
                        sx={{
                            position: "absolute",
                            right: "10px",
                            color: "white",
                        }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Button
                    variant="outlined"
                    sx={{
                        display: "none",
                        fontSize: "35px",
                        borderRadius: "20px",
                        color: "white",
                        border: "1px solid white",
                        padding: "10px 0",
                        marginLeft: "10px",

                        "&:hover": {
                            border: "1px solid white",
                        },
                        [theme.breakpoints.down("md")]: {
                            display: "flex",
                        },
                    }}
                    onClick={() => {
                        setToggleMobileFilterForm((prev: boolean) => !prev)
                        document.body.style.overflow = "hidden"
                    }}
                >
                    <PiSlidersHorizontalLight />
                </Button>
            </section>
        </article>
    )
})
export default FormTraining
