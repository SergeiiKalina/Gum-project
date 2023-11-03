import React, { Suspense, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import {
    IIsChecked,
    changeActiveId,
    changeIsChecked,
    writeArrTraining,
    writeCategories,
    writeData,
} from "../../../store/filterTrainingSlice.ts"
import FormTraining from "../FormTraining/FormTraining.tsx"
import training from "../../../data/data.ts"
import NotTraining from "../../NotTraining.tsx"

import "./training.scss"
import { IFilterTrainingSlice } from "../FormTraining/Pagination.tsx"

const Pagination = React.lazy(() => import("../FormTraining/Pagination.tsx"))

function Training(): React.JSX.Element {
    const dispatch = useDispatch()
    const data = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.data
    )
    const { register, handleSubmit } = useForm({})
    const arrTraining = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.arrTraining
    )
    const [arr, setArr] = useState(arrTraining.slice(0, 18))
    const [count, setCount] = useState(1)

    const onSubmit = (data: IIsChecked) => {
        dispatch(writeData(Object.values(data)))
        dispatch(changeIsChecked(data))
    }
    useEffect(() => {
        dispatch(
            writeArrTraining(
                training.filter((item) => data.includes(item.category))
            )
        )
    }, [data])

    useEffect(() => {
        let set: Set<string> = new Set()
        for (let el of training) {
            set.add(el.category)
        }
        dispatch(writeCategories(Array.from(set)))
    }, [])

    const paginationList = (
        e:
            | React.MouseEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>,
        countItems?: number
    ): void => {
        if (e.currentTarget.name === "left") {
            if (count === 1) {
                setCount(1)
                dispatch(changeActiveId(count))
            } else {
                setCount((prev) => prev - 1)

                dispatch(changeActiveId(count - 1))
            }
        }
        if (e.currentTarget.name === "right") {
            if (count === countItems) {
                setCount(countItems)

                dispatch(changeActiveId(count))
            } else {
                setCount((prev) => prev + 1)

                dispatch(changeActiveId(count + 1))
            }
        }
        if (e.currentTarget.value) {
            setCount(Number(e.currentTarget.id))
            if (e.currentTarget.id) {
                dispatch(changeActiveId(Number(e.currentTarget.id)))
            }
        }
    }
    useEffect(() => {
        let notePage = 18
        let start = (count - 1) * notePage
        let end = start + notePage
        setArr(arrTraining.slice(start, end))
    }, [count, arrTraining])

    return (
        <section className="training_section">
            <article className="training_article">
                <FormTraining
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                />
                <div className="training_block_training">
                    {arr.length ? (
                        arr.map((tr) => {
                            const { id, img, title } = tr
                            return (
                                <div
                                    key={id}
                                    className="training_training_item"
                                >
                                    <img src={img} alt="img" />
                                    <p>{title}</p>
                                </div>
                            )
                        })
                    ) : (
                        <NotTraining />
                    )}
                </div>
            </article>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Pagination paginationList={paginationList} />
            </Suspense>
        </section>
    )
}
export default Training
