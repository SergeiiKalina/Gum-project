import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ITraining } from "../../../data/data"
import { createTheme } from "@mui/material"
import YouTube from "react-youtube"
import ProgressBar from "./ProgressBar/ProgressBar"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { writeTotalWeight } from "../../../store/trainingSlice"
import { RootState } from "../../../store"
import FooterPanel from "./FooterPanel/FooterPanel"
import ToggleButtonBlock from "./ToggleButtonBlock/ToggleButtonBlock"
import DescribeBlock from "./DescribeBlock/DescribeBlock"
import "./workoutExerciseDisplay.scss"

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
})

const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
        autoplay: 1,
        loop: 1,
    },
}

export function generateProcessedTitle(title: string) {
    const newTitle = title.split("-").join("").replaceAll(" ", "")
    return title[0].toLowerCase() + newTitle.slice(1, newTitle.length)
}

export default function WorkoutExerciseDisplay(): React.JSX.Element {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const index = useSelector(
        (state: RootState) => state.training.startTrainingIndex
    )
    const currentTraining: ITraining[] = useSelector(
        (state: RootState) => state.training.arr
    )
    const [buttonChecked, setButtonChecked] = useState<string>("set")
    const [numExercise, setNumExercise] = useState<number>(0)
    const [exercise, setExercise] = useState<ITraining>(
        currentTraining[numExercise]
    )
    const [titleExercise, setTitleExercise] = useState<string>(
        generateProcessedTitle(currentTraining[0].title)
    )

    useEffect(() => {
        setTitleExercise(generateProcessedTitle(exercise.title))
    }, [exercise])

    async function calculateWeight(infoApproach: number) {
        let sum = 0
        // for (let key in infoApproach) {
        //     let exercise: string[] = await infoApproach[key]
        //     for (let i = 0; i < exercise.length; i++) {
        //         sum += await Number(infoApproach[key][i])
        //     }
        // }

        await dispatch(writeTotalWeight(sum))
        await navigate("/end_training")
    }

    useEffect(() => {
        setExercise(currentTraining[numExercise])
    }, [numExercise, currentTraining, index])

    return (
        <section className="start_training_section">
            <article className="start_training_wrapper_progress_bar">
                <div className="start_training_title">{exercise.title}</div>
                <output>{`${numExercise + 1}/${
                    currentTraining.length
                }`}</output>
                <ProgressBar
                    theme={theme}
                    totalSteps={currentTraining.length}
                    completedSteps={numExercise + 1}
                />
            </article>

            <article className="start_training_infoBlock">
                <YouTube
                    videoId={exercise.youtubeLink
                        .replace("https://www.youtube.com/watch?v=", "")
                        .replace("https://www.youtube.com/shorts/", "")}
                    opts={opts}
                />
            </article>
            <span className="border_logic_block"></span>
            <ToggleButtonBlock
                buttonChecked={buttonChecked}
                setButtonChecked={setButtonChecked}
            />
            <DescribeBlock
                buttonChecked={buttonChecked}
                exercise={exercise}
                titleExercise={titleExercise}
                numExercise={numExercise}
            />
            <FooterPanel
                props={{
                    numExercise,
                    calculateWeight,
                    setNumExercise,
                }}
            />
        </section>
    )
}
