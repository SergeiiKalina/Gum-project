import React, { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import "./customTraining.scss"
import AddExercise from "../AddExcercise/AddExercise"
import { useDispatch, useSelector } from "react-redux"
import { writeCategories } from "../../../store/filterTrainingSlice"
import ExerciseItem from "../Exercise-Item/ExerciseItem"
import training, { ITraining } from "../../../data/data"
import { IFilterTrainingSlice } from "../Training/Training"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import ButtonStartTraining from "../Button-Start-Training/Button-Start-Training"

function CustomTraining(): React.JSX.Element {
    const [toggleAddExerciseMenu, setToggleAddExerciseMenu] = useState(false)

    const planTrainingArr: ITraining[] = useSelector(
        (state: ITrainingReducer) => state.training.arr
    )

    const dispatch = useDispatch()
    const categories = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.categories
    )

    useEffect(() => {
        createArrayCategories(training)
    }, [])

    function createArrayCategories(value: ITraining[]) {
        const set = new Set<string>()
        for (let object of value) {
            let category: string = object.category
            set.add(category)
        }

        dispatch(writeCategories(Array.from(set)))
    }

    return (
        <section className="custom_training_wrapper">
            <header>
                <h2>Custom Training</h2>
                <Box onClick={() => setToggleAddExerciseMenu((prev) => !prev)}>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="add"
                        sx={{
                            position: "static",
                            zIndex: "1",
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Box>
            </header>

            {planTrainingArr.length !== 0 ? (
                <ExerciseItem exercises={planTrainingArr} />
            ) : (
                <h2 className="custom_training_not_exercise">Not Exercise</h2>
            )}
            {planTrainingArr.length !== 0 && <ButtonStartTraining />}
            {toggleAddExerciseMenu && (
                <AddExercise
                    thisCategories={categories}
                    setShowDialog={setToggleAddExerciseMenu}
                />
            )}
        </section>
    )
}

export default CustomTraining
