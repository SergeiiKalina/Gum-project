import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { writeArr } from "../../../store/generatorTrainingReducer"
import training, { ITraining } from "../../../data/data"
import "./addExercise.scss"

interface IAddExercise {
    thisCategories: string[]
    currentArrIndex: number
}
export interface IExerciseData {
    training: {
        arr: ITraining[]
        arrowLeftHidden: boolean
        arrowRightHidden: boolean
    }
}

interface IRadioData {
    categories: string | boolean
    text: string
}

export default function AddExercise({
    thisCategories,
    currentArrIndex,
}: IAddExercise): React.JSX.Element {
    const dispatch = useDispatch()

    const planTrainingArr: ITraining[] = useSelector(
        (state: IExerciseData) => state.training.arr
    )

    const [radio, setRadio] = useState<IRadioData>({
        categories: thisCategories[0],
        text: "",
    })
    const [arrTr, setArrTr] = useState<ITraining[] | []>([])
    const [currentCategories, setCurrentCategories] = useState<
        ITraining[] | []
    >([])

    const [count, setCount] = useState(0)
    const changeRadio = (data: string) => {
        setRadio({ ...radio, categories: data })
    }
    const changeForm = (txt: string) => {
        setRadio({ ...radio, text: txt, categories: false })
    }
    const increment = () => {
        let length = currentCategories.length / 10
        if (count > length - 1) {
            return
        }
        setCount((prev) => prev + 1)
    }
    const decrement = () => {
        if (count === 0) {
            return
        }
        setCount((prev) => prev - 1)
    }

    useEffect(() => {
        if (radio.text) {
            setCount(0)
            setCurrentCategories(
                training.filter((el) =>
                    el.title.toLowerCase().includes(radio.text.toLowerCase())
                )
            )
        }
        if (radio.categories) {
            setCount(0)
            setCurrentCategories(
                training.filter((el) => el.category === radio.categories)
            )
        }
    }, [radio])
    useEffect(() => {
        let notePage = 10
        let start = count * notePage
        let end = start + notePage
        setArrTr(currentCategories.slice(start, end))
    }, [count, currentCategories])

    function addExercise(e: React.MouseEvent<HTMLDivElement>) {
        let target = e.target as HTMLDivElement
        let id: string = target.id
        let element: ITraining[] = training.filter((el) => el.id == Number(id))
        const clonedValue: ITraining[] | any = structuredClone(planTrainingArr)
        let elementId: number = element[0].id
        let currentArrayTraining: ITraining[] | any =
            clonedValue[currentArrIndex]
        console.log(currentArrayTraining)
        let check: boolean = currentArrayTraining.some(
            (el: ITraining) => el.id === elementId
        )
        if (check) {
            alert("This exercise already exists.")
            return
        } else {
            clonedValue[currentArrIndex].push(element[0])
            if (clonedValue[currentArrIndex].length === 13) {
                alert("Max exercise 11")
                return
            }
            dispatch(writeArr(clonedValue))
            alert("You add exercise")
        }
    }
    return (
        <div className="add_exercise_container">
            <menu>
                <form>
                    <ol>
                        {thisCategories.map((el, i) => (
                            <li key={i}>
                                <label>
                                    {el}
                                    <input
                                        type="radio"
                                        name="categories"
                                        value={el}
                                        checked={radio.categories === el}
                                        onChange={() => changeRadio(el)}
                                    />
                                </label>
                            </li>
                        ))}
                    </ol>
                    <label className="add_exercise_label">
                        <input
                            type="text"
                            placeholder="exercise"
                            onChange={(e) => changeForm(e.target.value)}
                        />
                    </label>
                </form>
            </menu>
            <section className="add_exercise_block">
                {arrTr.map((el) => {
                    return (
                        <div
                            id={el.id.toString()}
                            key={el.id}
                            onClick={(e) => addExercise(e)}
                        >
                            {el.title}
                        </div>
                    )
                })}
            </section>
            <article className="add_exercise_articlePagination">
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </article>
        </div>
    )
}
