import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/system"
import { Button, Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import {
    writeArr,
    setIndexStartTraining,
    IFormData,
} from "../../../store/generatorTrainingReducer"
import AddExercise from "../AddExcercise/AddExercise"
import MenuExercise from "../MenuExercise/MenuExercise"
import { ITraining } from "../../../data/data"
import "./finishedTraining.scss"

export interface ITrainingReducer {
    training: {
        arr: ITraining[]
        bul: boolean
        bulTextArea: boolean
        formData: IFormData
        step: number
        textPlan: string
        startTrainingIndex: number
        placeTraining: string
        sexTraining: string
    }
}

function FinishedTraining(): React.JSX.Element {
    const value: ITraining[] = useSelector(
        (state: ITrainingReducer) => state.training.arr
    )

    const [showDialog, setShowDialog] = useState<boolean>(false)
    const [thisCategories] = useState<string[]>(createArrayCategories())
    const [thisDragElement, setThisDragElement] = useState<ITraining | null>(
        null
    )
    const [currentTarget, setCurrentTarget] = useState<HTMLLIElement | null>(
        null
    )
    const [showMenuExercise, setShowMenuExercise] = useState<string>("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function showStartTraining(index: number) {
        dispatch(setIndexStartTraining(index))
        navigate("/start_training")
    }

    function createArrayCategories(): string[] {
        const set = new Set<string>()
        for (let object of value) {
            let category: string = object.category
            set.add(category)
        }
        return Array.from(set)
    }

    function toggleDialog() {
        setShowDialog((prev) => !prev)
    }

    const dragStart = (
        e: React.DragEvent<HTMLLIElement>,
        currentElementIndex: number
    ) => {
        setCurrentTarget(e.currentTarget)
        let currentValueArray: ITraining[] = value
        setThisDragElement(currentValueArray[currentElementIndex])
    }

    const drag = (e: React.DragEvent<HTMLLIElement>) => {
        const target = e.currentTarget.style

        target.opacity = "1"
        target.transition = "all 1s ease"
    }

    const dragEnter = (e: React.DragEvent<HTMLLIElement>) => {
        const target = e.currentTarget.style
        target.paddingTop = "0"
    }

    const dragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault()

        if (currentTarget === e.currentTarget) {
            return
        }

        const target = e.currentTarget.style

        target.transition = "all 0.5s ease"
        target.paddingTop = "60px"
    }

    const dragLeave = (e: React.DragEvent<HTMLLIElement>) => {
        const target = e.currentTarget.style

        target.paddingTop = "0"
        target.transition = "all 1s ease"
    }

    const dragDrop = (
        e: React.DragEvent<HTMLLIElement>,
        currentElementIndex: number
    ) => {
        e.preventDefault()
        const target = e.currentTarget.style

        target.paddingTop = "0"
        target.transition = "padding-top 0.3s ease, transform 0.3s ease"
        let clonedValue = structuredClone(value)

        clonedValue = clonedValue.filter(
            (el: ITraining) => el.id !== thisDragElement!.id
        )
        clonedValue.splice(currentElementIndex, 0, thisDragElement!)
        dispatch(writeArr(clonedValue))
        let animationFrameId: number
        let paddingValue = 60

        const animateDrop = () => {
            paddingValue -= 5
            if (paddingValue <= 0) {
                paddingValue = 0
                target.transition = "all 0.3s ease"
                cancelAnimationFrame(animationFrameId)
            } else {
                animationFrameId = requestAnimationFrame(animateDrop)
            }
            target.paddingTop = `${paddingValue}px`
        }

        animationFrameId = requestAnimationFrame(animateDrop)
    }

    const dragEnd = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault()
        const target = e.currentTarget.style

        target.transform = "scale(1)"
        target.paddingTop = "0"
        target.transition = "all 1s ease"
    }

    return (
        <>
            <section className="finish_training_container">
                <article className="finish_training_article finish_training_open">
                    <section className="finish_training_header">
                        <h2>Random Training</h2>
                        <div className="finish_training_titleButton">
                            {!!value ? (
                                <Box>
                                    <Fab
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        sx={{
                                            position: "static",
                                            zIndex: "1",
                                        }}
                                    >
                                        <AddIcon
                                            onClick={() => {
                                                toggleDialog()
                                            }}
                                        />
                                    </Fab>
                                </Box>
                            ) : null}
                            {showDialog ? (
                                <AddExercise
                                    thisCategories={thisCategories}
                                    setShowDialog={setShowDialog}
                                />
                            ) : null}
                        </div>
                    </section>
                    <ul className="finish_training_list">
                        {value.map((element: ITraining, i: number) => {
                            if (
                                element.id === 0 ||
                                element.id === 10 ||
                                element.id === 20
                            ) {
                                return null
                            }
                            return (
                                <li
                                    className="finish_training_containerTodo"
                                    draggable
                                    key={element.id}
                                    id={element.id.toString()}
                                    onDragStart={(e) => dragStart(e, i)}
                                    onDragEnter={(e) => dragEnter(e)}
                                    onDragOver={(e) => dragOver(e)}
                                    onDragLeave={(e) => dragLeave(e)}
                                    onDrop={(e) => dragDrop(e, i)}
                                    onDragEnd={(e) => dragEnd(e)}
                                    onDrag={(e) => drag(e)}
                                >
                                    <div className="todo_finish_training">
                                        <div
                                            id={element.id.toString()}
                                            title={element.title}
                                        >
                                            {element.title}

                                            <div className="finish_training_blockStartExercise">
                                                <aside className="finish_training_aside">
                                                    Start the exercise
                                                </aside>
                                                {Number(showMenuExercise) ===
                                                element.id ? (
                                                    <MenuExercise
                                                        showMenuExercise={
                                                            showMenuExercise
                                                        }
                                                        setShowMenuExercise={
                                                            setShowMenuExercise
                                                        }
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                        {!value ? (
                            <li className="finish_training_containerTodo">
                                <div>NO have Exercise</div>
                            </li>
                        ) : null}
                    </ul>
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
                </article>
            </section>
        </>
    )
}

export default FinishedTraining
