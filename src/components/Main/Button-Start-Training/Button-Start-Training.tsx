import React from "react"
import { Button } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { setIndexStartTraining } from "../../../store/generatorTrainingReducer"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

function ButtonStartTraining(): React.JSX.Element {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function showStartTraining(index: number) {
        dispatch(setIndexStartTraining(index))
        navigate("/start_training")
    }
    return (
        <div className="finish_training_block_start_button">
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
