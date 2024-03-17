import React, { useEffect, useState } from "react"
import { ITraining } from "../../../../data/data"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store"
import "./footerPanel.scss"
import { Button } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

interface IFooterPanelProps {
    props: {
        numExercise: number
        calculateWeight: (prop: number) => void

        setNumExercise: (arg: number) => void
    }
}

function FooterPanel({ props }: IFooterPanelProps) {
    const { numExercise, calculateWeight, setNumExercise } = props
    const [showTimer, setShowTimer] = useState<boolean>(false)
    const [workTime, setWorkTime] = useState<number>(0)
    const currentTraining: ITraining[] = useSelector(
        (state: RootState) => state.training.arr
    )
    function onTimer() {
        setWorkTime(90)
        setShowTimer(true)
    }

    function increment() {
        if (currentTraining.length === numExercise + 1) {
            return
        } else {
            const index = numExercise + 1
            setShowTimer(false)
            setNumExercise(index)
        }
    }

    function decrement() {
        if (numExercise === 0) {
            return
        } else {
            const index = numExercise - 1
            setShowTimer(false)
            setNumExercise(index)
        }
    }

    useEffect(() => {
        if (workTime === 0) {
            setShowTimer(false)
        }
    }, [workTime])

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

    return (
        <article className="workout_display_footer_wrapper">
            <div className="workout_display_footer_button_block">
                <Button
                    variant="text"
                    onClick={decrement}
                    sx={{
                        transform: "scale(1.4)",
                        "&:hover": {
                            background: "none",
                        },
                    }}
                >
                    <ChevronLeftIcon />
                </Button>

                <Button variant="outlined" onClick={() => onTimer()}>
                    Rest{showTimer && ": " + workTime}
                </Button>
                {currentTraining.length === numExercise + 1 ? (
                    <Button
                        variant="text"
                        sx={{
                            "&:hover": {
                                background: "none",
                            },
                        }}
                        onClick={() => calculateWeight(0)}
                    >
                        End
                    </Button>
                ) : (
                    <Button
                        variant="text"
                        sx={{
                            transform: "scale(1.4)",
                            "&:hover": {
                                background: "none",
                            },
                        }}
                        onClick={increment}
                    >
                        <ChevronRightIcon />
                    </Button>
                )}
            </div>
        </article>
    )
}

export default FooterPanel
