import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "@mui/material/Pagination"
import {
    IInitialState,
    fetchCategories,
    fetchFilter,
    fetchTraining,
} from "../../../store/filterTrainingSlice"
import FormTraining from "../FormTraining/FormTraining"
import NotTraining from "./NotTraining"
import { API_URL } from "../../../http"
import { v4 as uuidv4 } from "uuid"
import { paginationStyle } from "../FormGenerationTraining/styles/stylesFormGeneration"
import "./training.scss"
import { IAuthSliceState } from "../../header/Login/Login"
import { useNavigate } from "react-router-dom"

export interface IFilterTrainingSlice {
    filterTraining: IInitialState
}

function Training(): React.JSX.Element {
    const training = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.training
    )

    const data = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.data
    )
    const arrTraining = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.arrTraining
    )
    const [countPage, setCountPage] = useState<number>(0)

    const [arr, setArr] = useState(arrTraining.slice(0, 18))
    const [count, setCount] = useState(1)
    const dispatch = useDispatch<any>()
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )

    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])
    useEffect(() => {
        dispatch(fetchTraining())
    }, [dispatch])
    useEffect(() => {
        setCountPage(Math.ceil(arrTraining.length / 18))
    }, [arrTraining])
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
            fetch(API_URL + "/exercise/current-page", {
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

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCount(value)
    }

    return (
        <section className="training_section">
            <article className="training_article">
                <FormTraining />
                <div className="training_block_training">
                    {arr.length ? (
                        arr
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((tr) => {
                                const { img, title } = tr
                                return (
                                    <div
                                        key={uuidv4()}
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
            <article className="pagination_block">
                <Pagination
                    count={countPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                    sx={paginationStyle}
                />
            </article>
        </section>
    )
}
export default Training
