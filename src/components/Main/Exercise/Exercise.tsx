import React from "react"
import { useSelector } from "react-redux"
import YouTube from "react-youtube"
import { Button } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import "./exercise.scss"
import { RootState } from "../../../store"

const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
        autoplay: 1,
        loop: 1,
    },
}

function Exercise() {
    const navigate = useNavigate()
    const exercise = useSelector(
        (state: RootState) => state.training.currentExercise
    )
    return (
        <section className="exercise_container">
            <article className="exercise_youtube_wrapper">
                <YouTube
                    videoId={exercise.youtubeLink
                        .replace("https://www.youtube.com/watch?v=", "")
                        .replace("https://www.youtube.com/shorts/", "")}
                    opts={opts}
                />
            </article>
            <span className="border_logic_block"></span>
            <article className="exercise_describe_block">
                <ul>
                    {exercise.describe?.map((el) => (
                        <li key={uuidv4()}>{el}</li>
                    ))}
                </ul>
            </article>
            <article className="exercise_button_block">
                <Button
                    variant="outlined"
                    className="start_training_button"
                    onClick={() => navigate(-1)}
                >
                    <PlayArrowIcon
                        sx={{ margin: " 0 5px 0 0", rotate: "180deg" }}
                    />
                    Back
                </Button>
            </article>
        </section>
    )
}

export default Exercise
