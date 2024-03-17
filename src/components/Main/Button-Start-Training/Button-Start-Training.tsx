import React, { useEffect } from "react"
import { Button } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import {
    setIndexStartTraining,
    writeAllExerciseSetsInfo,
} from "../../../store/generatorTrainingReducer"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ITraining } from "../../../data/data"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { generateProcessedTitle } from "../WorkoutExerciseDisplay/WorkoutExerciseDisplay"

function ButtonStartTraining(): React.JSX.Element {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const planTrainingArr: ITraining[] = useSelector(
        (state: RootState) => state.training.arr
    )

    const generationObjSetInfo = (planTrainingArr: ITraining[]) => {
        return planTrainingArr.map((el) => {
            let key = generateProcessedTitle(el.title)
            return { name: key, reps: [""], weight: [""] }
        })
    }

    useEffect(() => {
        dispatch(
            writeAllExerciseSetsInfo(generationObjSetInfo(planTrainingArr))
        )
    }, [dispatch, planTrainingArr])

    function showStartTraining(index: number) {
        dispatch(setIndexStartTraining(index))
        navigate("/start_training")
    }
    return (
        <div className="start_training_button_wrapper">
            <Button
                variant="outlined"
                onClick={() => showStartTraining(0)}
                className="start_training_button"
            >
                Let's Go Training
                <PlayArrowIcon sx={{ margin: " 0 0 0 5px" }} />
            </Button>
        </div>
    )
}

export default ButtonStartTraining
