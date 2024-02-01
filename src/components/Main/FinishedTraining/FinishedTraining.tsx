import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Box } from "@mui/system"
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { IFormData } from "../../../store/generatorTrainingReducer"
import AddExercise from "../AddExcercise/AddExercise"
import { ITraining } from "../../../data/data"
import ExerciseItem from "../Exercise-Item/ExerciseItem"
import "./finishedTraining.scss"
import ButtonStartTraining from "../Button-Start-Training/Button-Start-Training"

export interface ITrainingReducer {
    training: {
        arr: ITraining[]

        formData: IFormData

        startTrainingIndex: number
        placeTraining: string
        thisDragElement: ITraining | null
    }
}

function FinishedTraining(): React.JSX.Element {
    const value: ITraining[] = useSelector(
        (state: ITrainingReducer) => state.training.arr
    )
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const [thisCategories] = useState<string[]>(createArrayCategories())

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

                    {value && <ExerciseItem exercises={value} />}
                    {!value ? (
                        <section className="finish_training_containerTodo">
                            <div>NO have Exercise</div>
                        </section>
                    ) : null}

                    <ButtonStartTraining />
                </article>
            </section>
        </>
    )
}

export default FinishedTraining
