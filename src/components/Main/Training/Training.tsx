import React, { Suspense, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import {
    IIsChecked,
    changeActiveId,
    changeIsChecked,
    fetchCategories,
    fetchFilter,
    fetchTraining,
    writeData,
} from "../../../store/filterTrainingSlice"
import FormTraining from "../FormTraining/FormTraining"
import NotTraining from "../../NotTraining"
import { IFilterTrainingSlice } from "../FormTraining/Pagination"
import "./training.scss"

const Pagination = React.lazy(() => import("../FormTraining/Pagination"))

function Training(): React.JSX.Element {
    const training = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.training
    )
    const { register, handleSubmit } = useForm({})
    const data = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.data
    )
    const arrTraining = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.arrTraining
    )
    const [arr, setArr] = useState(arrTraining.slice(0, 18))
    const [count, setCount] = useState(1)
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(fetchTraining())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchFilter(data))
    }, [data, dispatch])

    useEffect(() => {
        let notePage: number = 18
        let start: number = (count - 1) * notePage
        let end: number = start + notePage

        try {
            fetch("https://urchin-app-j6t9a.ondigitalocean.app/current-page", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ start, end, arrTraining }),
            })
                .then((res) => res.json())
                .then((res) => setArr(res))
        } catch (error) {
            console.log(error)
        }
    }, [count, arrTraining, training])

    const onSubmit = (data: IIsChecked) => {
        dispatch(writeData(Object.values(data)))
        dispatch(changeIsChecked(data))
    }

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
