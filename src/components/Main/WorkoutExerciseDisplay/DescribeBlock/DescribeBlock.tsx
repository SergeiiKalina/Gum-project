import React, { useState } from "react"
import { ITraining } from "../../../../data/data"
import { Box } from "@mui/system"
import { InputAdornment, OutlinedInput } from "@mui/material"
import { styleOutlinedInput } from "../../FormGenerationTraining/styles/stylesFormGeneration"
import { SubmitHandler, useForm } from "react-hook-form"
import { IInfoApproach } from "../WorkoutExerciseDisplay"

interface IDescribeBlock {
    buttonChecked: string
    exercise: ITraining
    setInfoApproach: (arg: IInfoApproach) => void
    titleExercise: string
}

function DescribeBlock({
    buttonChecked,
    exercise,
    setInfoApproach,
    titleExercise,
}: IDescribeBlock) {
    const { register, handleSubmit } = useForm()
    const onSubmit: SubmitHandler<IInfoApproach> = (data: IInfoApproach) => {
        setInfoApproach(data)
    }
    const [exerciseSetValue, serExerciseSetValue] = useState([""])

    return (
        <article className="start_training_blockApproach">
            {buttonChecked === "info" && (
                <ul className="start_training_info_block">
                    {exercise.describe?.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            )}
            {buttonChecked === "set" && (
                <form onChange={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",

                            flexDirection: "column",
                        }}
                    >
                        {exerciseSetValue.map((el, i) => (
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
                                {...register(`${titleExercise}[${i}]`)}
                            />
                        ))}
                    </Box>
                </form>
            )}
        </article>
    )
}

export default DescribeBlock
