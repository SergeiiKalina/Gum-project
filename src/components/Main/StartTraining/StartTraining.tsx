import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import EndTraining from "../EndTraining/EndTraining"
import { ITrainingReducer } from "../FinishedTraining/FinishedTraining"
import { ITraining } from "../../../data/data"
import { Box, OutlinedInput, InputAdornment } from "@mui/material"
import "./startTraining.scss"
import { styleOutlinedInput } from "../FormGenerationTraining/styles/stylesFormGeneration"

interface IInfoApproach {
    [key: string]: string[]
}

export default function StartTraining(): React.JSX.Element {
    const index = useSelector(
        (state: ITrainingReducer) => state.training.startTrainingIndex
    )

    const value = useSelector((state: ITrainingReducer) => state.training.arr)

    const [numExercise, setNumExercise] = useState<number>(1)
    const [showEndButton, setShowEndButton] = useState<boolean>(false)
    const [exercise, setExercise] = useState<ITraining>(
        value[index][numExercise]
    )
    const [titleExercise, setTitleExercise] = useState<string>(
        generateProcessedTitle(value[index][1].title)
    )
    const [showEndTraining, setShowEndTraining] = useState<boolean>(false)
    const [showTimer, setShowTimer] = useState<boolean>(false)
    const [workTime, setWorkTime] = useState<number>(0)
    const { register, handleSubmit } = useForm()
    const [infoApproach, setInfoApproach] = useState<IInfoApproach>({})
    const [buttonValue, setButtonValue] = useState<string>("Go")
    const [totalWeight, setTotalWeight] = useState<number>(0)

    function generateProcessedTitle(title: string) {
        const newTitle = title.replaceAll(" ", "")
        let str = ""
        for (let i = 0; i < newTitle.length; i++) {
            if (i === 0) {
                str += newTitle[i].toLowerCase()
            } else {
                str += newTitle[i]
            }
        }
        return str
    }

    useEffect(() => {
        let newTitle = exercise.title.replaceAll(" ", "")
        let str = ""
        for (let i = 0; i < newTitle.length; i++) {
            if (i === 0) {
                str += newTitle[i].toLowerCase()
            } else {
                str += newTitle[i]
            }
        }
        setTitleExercise(str)
    }, [exercise])

    function calculateWeight(infoApproach: IInfoApproach) {
        let sum = 0

        for (let key in infoApproach) {
            let exercise: string[] = infoApproach[key]
            for (let i = 0; i < exercise.length; i++) {
                sum += Number(infoApproach[key][i])
            }
        }
        setTotalWeight(sum)
        setShowEndTraining(true)
    }

    function onTimer(e: React.MouseEvent<HTMLButtonElement>) {
        let value: string = e.currentTarget.value
        console.log(value)
        if (value === "Go") {
            setButtonValue("Work \n")
            setWorkTime(60)
        }
        if (value === "Rest \n") {
            setButtonValue("Rest \n")
            setWorkTime(90)
        }
        setShowTimer(true)
    }
    function increment() {
        if (value[index].length - 2 === numExercise) {
            setShowEndButton(true)
        }
        if (value[index].length - 1 === numExercise) {
            return
        } else {
            setShowTimer(false)
            setNumExercise((prev) => prev + 1)
            setButtonValue("Go")
        }
    }
    function decrement() {
        if (numExercise === 1) {
            return
        } else {
            setShowTimer(false)
            setNumExercise((prev) => prev - 1)
            setButtonValue("Go")
        }
    }

    useEffect(() => {
        setExercise(value[index][numExercise])
    }, [numExercise, value, index])

    useEffect(() => {
        if (workTime === 0 && buttonValue === "Work \n") {
            setShowTimer(false)
            setButtonValue("Rest \n")
        }
        if (workTime === 0 && buttonValue === "Rest \n") {
            setShowTimer(false)
            setButtonValue("Go")
        }
    }, [workTime, buttonValue])

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined
        if (showTimer && workTime > 0) {
            interval = setInterval(() => {
                setWorkTime((prev) => prev - 1)
            }, 1000)
        } else if (workTime === 0) {
            clearInterval(interval)
            setShowTimer(false)
        }
        return () => {
            clearInterval(interval)
        }
    }, [showTimer, workTime])

    const onSubmit: SubmitHandler<IInfoApproach> = (data: IInfoApproach) => {
        setInfoApproach(data)
    }

    const closeModal = () => {
        setShowEndTraining(false)
    }

    return (
        <>
            {showEndTraining ? (
                <EndTraining
                    totalWeight={totalWeight}
                    closeModal={closeModal}
                />
            ) : (
                <section className="start_training_section">
                    <article className="start_training_infoBlock">
                        <iframe
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                            src={
                                "https://www.youtube.com/embed/" +
                                exercise.youtubeLink.replace(
                                    "https://www.youtube.com/watch?v=",
                                    ""
                                ) +
                                "?si=cCEVsIa6vxWWgrNf"
                            }
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </article>

                    <article className="start_training_blockApproach">
                        <output>{`${numExercise}/${
                            value[index].length - 1
                        }`}</output>
                        <div className="start_training_title">
                            {exercise.title}
                        </div>
                        <form onChange={handleSubmit(onSubmit)}>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",

                                    flexDirection: "column",
                                }}
                            >
                                <OutlinedInput
                                    sx={styleOutlinedInput}
                                    type="number"
                                    id="outlined-adornment-weight"
                                    placeholder="First approach"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            kg
                                        </InputAdornment>
                                    }
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight",
                                    }}
                                    {...register(`${titleExercise}[${0}]`)}
                                />
                                <OutlinedInput
                                    sx={styleOutlinedInput}
                                    type="number"
                                    id="outlined-adornment-weight"
                                    placeholder="Second approach"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            kg
                                        </InputAdornment>
                                    }
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight",
                                    }}
                                    {...register(`${titleExercise}[${1}]`)}
                                />
                                <OutlinedInput
                                    sx={styleOutlinedInput}
                                    type="number"
                                    id="outlined-adornment-weight"
                                    placeholder="Third approach"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            kg
                                        </InputAdornment>
                                    }
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight",
                                    }}
                                    {...register(`${titleExercise}[${2}]`)}
                                />
                                <OutlinedInput
                                    sx={styleOutlinedInput}
                                    type="number"
                                    id="outlined-adornment-weight"
                                    placeholder="Fourth approach"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            kg
                                        </InputAdornment>
                                    }
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight",
                                    }}
                                    {...register(`${titleExercise}[${3}]`)}
                                />
                            </Box>
                        </form>
                    </article>
                    <article className="start_training_blockButton">
                        <button
                            className="start_training_buttonDirection"
                            onClick={decrement}
                        >
                            Prev
                        </button>
                        {showTimer ? (
                            <button
                                className="start_training_buttonGo"
                                onClick={(e) => onTimer(e)}
                                value={buttonValue}
                            >
                                {buttonValue}
                                {workTime}
                            </button>
                        ) : (
                            <button
                                className="start_training_buttonGo"
                                onClick={(e) => onTimer(e)}
                                value={buttonValue}
                            >
                                {buttonValue}
                            </button>
                        )}
                        {showEndButton ? (
                            <button
                                className="start_training_buttonDirection"
                                onClick={() => calculateWeight(infoApproach)}
                            >
                                End
                            </button>
                        ) : (
                            <button
                                className="start_training_buttonDirection"
                                onClick={increment}
                            >
                                Next
                            </button>
                        )}
                    </article>
                </section>
            )}
        </>
    )
}
