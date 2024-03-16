import React from "react"
import { ITraining } from "../../../../data/data"
import { IInfoApproach } from "../WorkoutExerciseDisplay"

interface IFooterPanelProps {
    props: {
        showTimer: boolean
        decrement: () => void | undefined
        onTimer: (e: React.MouseEvent<HTMLButtonElement>) => void
        buttonValue: string
        workTime: number
        currentTraining: ITraining[]
        numExercise: number
        calculateWeight: (prop: IInfoApproach) => void
        infoApproach: IInfoApproach
        increment: () => void | undefined
    }
}

function FooterPanel({ props }: IFooterPanelProps) {
    const {
        decrement,
        showTimer,
        onTimer,
        buttonValue,
        workTime,
        currentTraining,
        numExercise,
        calculateWeight,
        infoApproach,
        increment,
    } = props
    return (
        <article className="start_training_blockButton">
            <div className="start_training_blockButton_container">
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
                {currentTraining.length === numExercise + 1 ? (
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
            </div>
        </article>
    )
}

export default FooterPanel
