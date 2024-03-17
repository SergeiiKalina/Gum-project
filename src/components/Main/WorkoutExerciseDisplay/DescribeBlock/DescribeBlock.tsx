import React from "react"
import { ITraining } from "../../../../data/data"
import { Box } from "@mui/system"
import { Button, InputAdornment, OutlinedInput } from "@mui/material"
import { styleOutlinedInput } from "../../FormGenerationTraining/styles/stylesFormGeneration"
import { SubmitHandler, useForm } from "react-hook-form"

import { v4 as uuidv4 } from "uuid"
import "./describeBlock.scss"
import { IInfoSet } from "../interfaces/workoutExerciseDisplayInterfaces"
import { useDispatch } from "react-redux"
import { RootState } from "../../../../store"
import { useSelector } from "react-redux"
import {
    IAllExerciseSetsInfo,
    writeAllExerciseSetsInfo,
} from "../../../../store/generatorTrainingReducer"

interface IDescribeBlock {
    buttonChecked: string
    exercise: ITraining
    titleExercise: string
    numExercise: number
}

function DescribeBlock({
    buttonChecked,
    exercise,
    titleExercise,
    numExercise,
}: IDescribeBlock) {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const allExerciseSetsInfo: IAllExerciseSetsInfo[] = useSelector(
        (state: RootState) => state.training.allExerciseSetsInfo
    )
    const onSubmit: SubmitHandler<IInfoSet> = (data: IInfoSet) => {
        let keyExercise: string[] = Object.keys(data)
        let newObjExercise: IAllExerciseSetsInfo = {
            ...data[keyExercise[numExercise]],
            name: keyExercise[numExercise],
        }
        const newArray = allExerciseSetsInfo.map((item, index) =>
            index === numExercise ? newObjExercise : item
        )
        dispatch(writeAllExerciseSetsInfo(newArray))
    }

    const addSetForExercise = (key: string, index: number) => {
        let newField = {
            ...allExerciseSetsInfo[index],
            name: key,
            reps: [...allExerciseSetsInfo[index].reps, ""],
            weight: [...allExerciseSetsInfo[index].weight, ""],
        }
        const newArray = allExerciseSetsInfo.map((item, index) =>
            index === numExercise ? newField : item
        )
        dispatch(writeAllExerciseSetsInfo(newArray))
    }
    console.log(allExerciseSetsInfo)
    return (
        <article className="describe_exercise">
            {buttonChecked === "info" && (
                <ul className="describe_exercise_list">
                    {exercise.describe?.map((el, index) => (
                        <li key={index} className="describe_exercise_list_item">
                            {el}
                        </li>
                    ))}
                </ul>
            )}
            {buttonChecked === "set" && (
                <form
                    onChange={handleSubmit(onSubmit)}
                    className="describe_block_sets_form"
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            marginTop: "12px",
                            flexDirection: "column",
                        }}
                    >
                        {allExerciseSetsInfo[numExercise].weight.map(
                            (el, i) => (
                                <div
                                    className="describe_block_set_item"
                                    key={uuidv4()}
                                >
                                    <span>{`${i + 1}.`}</span>
                                    <OutlinedInput
                                        sx={styleOutlinedInput}
                                        type="number"
                                        id="outlined-adornment-weight"
                                        value={
                                            allExerciseSetsInfo[numExercise]
                                                .weight[i]
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                kg
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            "aria-label": "weight",
                                        }}
                                        {...register(
                                            `${allExerciseSetsInfo[numExercise].name}.weight[${i}]`
                                        )}
                                    />
                                    <OutlinedInput
                                        key={uuidv4()}
                                        sx={styleOutlinedInput}
                                        type="number"
                                        value={
                                            allExerciseSetsInfo[numExercise]
                                                .reps[i]
                                        }
                                        id="outlined-adornment-reps"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                Reps
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-reps-helper-text"
                                        inputProps={{
                                            "aria-label": "reps",
                                        }}
                                        {...register(
                                            `${allExerciseSetsInfo[numExercise].name}.reps[${i}]`
                                        )}
                                    />
                                </div>
                            )
                        )}
                        <Button
                            variant="text"
                            sx={{ marginTop: "10px" }}
                            onClick={() =>
                                addSetForExercise(
                                    allExerciseSetsInfo[numExercise].name,
                                    numExercise
                                )
                            }
                        >
                            Add Set
                        </Button>
                    </Box>
                </form>
            )}
        </article>
    )
}

export default DescribeBlock
