import React from "react"
import { useDispatch } from "react-redux"
import { changeIsChecked } from "../../../store/filterTrainingSlice"
import "./formTraining.scss"
import { Button } from "@mui/material"
import { PiSlidersHorizontalLight } from "react-icons/pi"

import { theme } from "../../Styled-components/Styled"
import SelectCategories from "./SelectCategories/SelectCategories"
import SearchExerciseField from "./SearchExerciseField/SearchExerciseField"

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
    const dispatch = useDispatch<any>()

    const onSubmit = (data: string[]) => {
        dispatch(changeIsChecked(data))
    }

    return (
        <article className="form_training_wrapper">
            <SelectCategories onSubmit={onSubmit} />
            <section>
                <SearchExerciseField />
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
