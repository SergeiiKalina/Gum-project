import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { writeArr } from '../store/generatorTreiningReduser'
import training from './../data/data'
import style from './addExcercise.module.scss'

export default function AddExcercise({ thisCatigories, currentArrIndex }) {
    const dispatch = useDispatch()
    const planTrainingArr = useSelector((state) => state.training.arr)
    const [radio, setRadio] = useState({
        catigories: thisCatigories[0],
        text: '',
    })
    const [arrTr, setArrTr] = useState([])
    const [currentCategories, setCurentCategories] = useState([])
    const [count, setCount] = useState(0)
    const changeRadio = (data) => {
        setRadio({ ...radio, catigories: data })
    }
    const changeForm = (txt) => {
        setRadio({ ...radio, text: txt, catigories: false })
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
            setCurentCategories(
                training.filter((el) =>
                    el.title.toLowerCase().includes(radio.text.toLowerCase())
                )
            )
        }
        if (radio.catigories) {
            setCount(0)
            setCurentCategories(
                training.filter((el) => el.category === radio.catigories)
            )
        }
    }, [radio])
    useEffect(() => {
        let notePage = 10
        let start = count * notePage
        let end = start + notePage
        setArrTr(currentCategories.slice(start, end))
    }, [count, currentCategories])

    function addExcercise(e) {
        let element = training.filter((el) => el.id == Number(e.target.id))
        const clonedValue = JSON.parse(JSON.stringify(planTrainingArr))

        if (
            clonedValue[currentArrIndex].some((el) => el.id === element[0].id)
        ) {
            alert('This exercise already exists.')
            return
        } else {
            clonedValue[currentArrIndex].push(element[0])
            if (clonedValue[currentArrIndex].length === 13) {
                alert('Max exercise 11')
                return
            }
            dispatch(writeArr(clonedValue))
            alert('You add exercise')
        }
    }
    return (
        <div className={style.container}>
            <menu>
                <form>
                    <ol>
                        {thisCatigories.map((el, i) => (
                            <li key={i}>
                                <label>
                                    {el}
                                    <input
                                        type="radio"
                                        name="catigories"
                                        value={el}
                                        checked={radio.catigories === el}
                                        onChange={() => changeRadio(el)}
                                    />
                                </label>
                            </li>
                        ))}
                        <li>
                            <label>
                                <input
                                    type="text"
                                    placeholder="excersice"
                                    onChange={(e) => changeForm(e.target.value)}
                                />
                            </label>
                        </li>
                    </ol>
                </form>
            </menu>
            <section className={style.excerciseBloc}>
                {arrTr.map((el) => {
                    return (
                        <div
                            id={el.id}
                            key={el.id}
                            onClick={(e) => addExcercise(e)}
                        >
                            {el.title}
                        </div>
                    )
                })}
            </section>
            <article className={style.articlePagination}>
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </article>
        </div>
    )
}
