import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import training, { ITraining } from "../../../data/data"
import { useSelector } from "react-redux"
import ExerciseItems from "../Exercise-Item/ExerciseItems"
import ButtonStartTraining from "../Button-Start-Training/Button-Start-Training"
import AddExercise from "../AddExcercise/AddExercise"
import { IFilterTrainingSlice } from "../Training/Training"
import { useDispatch } from "react-redux"
import { writeCategories } from "../../../store/filterTrainingSlice"
import "./trainingPlan.scss"
import { IFormData } from "../../../store/generatorTrainingReducer"

export interface ITrainingReducer {
    training: {
        arr: ITraining[]
        formData: IFormData
        startTrainingIndex: number
        placeTraining: string
        thisDragElement: ITraining | null
    }
}

function TrainingPlan() {
    const dispatch = useDispatch()
    const [toggleAddExerciseMenu, setToggleAddExerciseMenu] = useState(false)
    const planTrainingArr: ITraining[] = useSelector(
        (state: ITrainingReducer) => state.training.arr
    )
    const categories = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.categories
    )

    useEffect(() => {
        const categories = createArrayCategories(training)
        dispatch(writeCategories(categories))
    }, [dispatch])

    function createArrayCategories(value: ITraining[]) {
        const set = new Set<string>()
        for (let object of value) {
            let category: string = object.category
            set.add(category)
        }

        return Array.from(set)
    }
    return (
        <section className="custom_training_wrapper">
            <header>
                <h2>Training Plan</h2>
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
                <ExerciseItems exercises={planTrainingArr} />
            ) : (
                <h2 className="custom_training_not_exercise">Not Exercise</h2>
            )}
            {planTrainingArr.length !== 0 && <ButtonStartTraining />}

            <AddExercise
                thisCategories={categories}
                toggleAddExerciseMenu={toggleAddExerciseMenu}
                setShowDialog={setToggleAddExerciseMenu}
            />
        </section>
    )
}

export default TrainingPlan
