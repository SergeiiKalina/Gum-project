import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import style from './startTraining.module.scss'

export default function StartTraining() {
    const index = useSelector((state) => state.training.startTrainingIndex)
    const value = useSelector((state) => state.training.arr)
    const [numExercise, setNumExercise] = useState(1)
    const [exercise, setExercise] = useState(value[index][numExercise])
    const [showTimer, setShowTimer] = useState(false)
    const [workTime, setWorkTime] = useState(60)
    const { register, handleSubmit } = useForm()
    const [infoApproach, setInfoApproach] = useState({})
    console.log(infoApproach)

    function onTimer() {
        setShowTimer(true)
    }
    function increment() {
        if (value[index].length - 1 === numExercise) {
            return
        } else {
            setShowTimer(false)
            setWorkTime(60)
            setNumExercise((prev) => prev + 1)
        }
    }
    function decrement() {
        if (numExercise === 1) {
            return
        } else {
            setShowTimer(false)
            setWorkTime(60)
            setNumExercise((prev) => prev - 1)
        }
    }

    useEffect(() => {
        setExercise(value[index][numExercise])
    }, [numExercise, value, index])

    useEffect(() => {
        if (workTime === 0) {
            setShowTimer(false)
            setWorkTime(60)
        }
    }, [workTime])

    useEffect(() => {
        let interval
        if (showTimer && workTime > 0) {
            interval = setInterval(() => {
                setWorkTime((prev) => prev - 1)
            }, 1000)
        } else if (workTime === 0) {
            clearInterval(interval)
            setShowTimer(false)
            setWorkTime(60)
        }
        return () => {
            clearInterval(interval)
        }
    }, [showTimer, workTime])

    function onSubmit(data) {
        setInfoApproach(data)
    }
    return (
        <section className={style.section}>
            <article className={style.infoBlock}>
                <img src={exercise.img} />
                <output>{`${numExercise}/${value[index].length - 1}`}</output>
                <div>{exercise.title}</div>
            </article>

            <article className={style.blockApproach}>
                <form onChange={handleSubmit(onSubmit)}>
                    <label>
                        First approach
                        <input type="text" {...register('firstApproach')} />
                    </label>
                    <label>
                        Second approach
                        <input type="text" {...register('secondApproach')} />
                    </label>
                    <label>
                        Third approach
                        <input type="text" {...register('thirdApproach')} />
                    </label>
                    <label>
                        Fourth approach
                        <input type="text" {...register('fourthApproach')} />
                    </label>
                </form>
            </article>
            <article className={style.blockButton}>
                <button className={style.buttonDirection} onClick={decrement}>
                    Prev
                </button>
                {showTimer ? (
                    <button className={style.buttonGo} onClick={onTimer}>
                        {workTime}
                    </button>
                ) : (
                    <button className={style.buttonGo} onClick={onTimer}>
                        Go
                    </button>
                )}
                <button className={style.buttonDirection} onClick={increment}>
                    Next
                </button>
            </article>
        </section>
    )
}
