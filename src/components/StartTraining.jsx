import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './startTraining.module.scss'

export default function StartTraining() {
    const index = useSelector((state) => state.training.startTrainingIndex)
    const value = useSelector((state) => state.training.arr)
    const [numExercise, setNumExercise] = useState(1)
    const [exercise, setExercise] = useState(value[index][numExercise])
    const [showTimer, setShowTimer] = useState(false)
    const [workTime, setWorkTime] = useState(60)
    let timerInterval
    console.log('render')

    function onTimer() {
        setShowTimer(true)
    }
    useEffect(() => {
        setExercise(value[index][numExercise])
    }, [numExercise, value, index])

    useEffect(() => {
        if (workTime <= 0) {
            clearInterval(timerInterval)
            setShowTimer(false)
        }
    }, [workTime])

    useEffect(() => {
        if (showTimer) {
            timerInterval = setInterval(() => {
                setWorkTime((prev) => prev - 1)
            }, 1000)
        } else if (!showTimer) {
            clearInterval(timerInterval)
            return
        }
    }, [showTimer, workTime])
    return (
        <section className={style.section}>
            <article className={style.infoBlock}>
                <img src={exercise.img} />

                <div>{exercise.title}</div>
            </article>
            <article className={style.blockButton}>
                <button className={style.buttonDirection}>Prev</button>
                {showTimer ? (
                    <div> {workTime} </div>
                ) : (
                    <button className={style.buttonGo} onClick={onTimer}>
                        Go
                    </button>
                )}
                <button className={style.buttonDirection}>Next</button>
            </article>
        </section>
    )
}
