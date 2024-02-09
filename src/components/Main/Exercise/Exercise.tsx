import React from "react"
import { useSelector } from "react-redux"
import YouTube from "react-youtube"
import { IGeneratorTrainingSliceData } from "../../../store/generatorTrainingReducer"

const opts = {
    height: "200px",
    width: "100%",
    playerVars: {
        autoplay: 1,
        loop: 1,
    },
}
export interface ITrainingSlice {
    training: IGeneratorTrainingSliceData
}

function Exercise() {
    const videoId = useSelector(
        (state: ITrainingSlice) => state.training.currentExerciseId
    )
    console.log(videoId)
    return (
        <section>
            <YouTube videoId={videoId} opts={opts} />
        </section>
    )
}

export default Exercise
