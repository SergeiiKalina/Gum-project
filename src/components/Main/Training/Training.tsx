import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "@mui/material/Pagination"
import {
    IInitialState,
    changeCurrentPage,
    fetchCategories,
    fetchFilter,
} from "../../../store/filterTrainingSlice"
import FormTraining from "../FormTraining/FormTraining"
import NotTraining from "./NotTraining"
import { API_URL } from "../../../http"
import { v4 as uuidv4 } from "uuid"
import { paginationStyle } from "../FormGenerationTraining/styles/stylesFormGeneration"
import "./training.scss"
import { IAuthSliceState } from "../../header/Login/Login"
import { useNavigate } from "react-router-dom"
import { ITraining } from "../../../data/data"
import { writeCurrentVideoId } from "../../../store/generatorTrainingReducer"
import MobileToggleButtons from "../FormTraining/MobileToggleButtons/MobileToggleButtons"

export interface IFilterTrainingSlice {
    filterTraining: IInitialState
}

function Training(): React.JSX.Element {
    const navigate = useNavigate()
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )
    const [toggleMobileFilterForm, setToggleMobileFilterForm] =
        useState<boolean>(false)
    const isCheckedCategories = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.isChecked
    )
    const currentPage = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.currentPage
    )
    const searchData = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.searchData
    )
    const allFilteredExercises = useSelector(
        (state: IFilterTrainingSlice) =>
            state.filterTraining.allFilteredExercises
    )

    const [countPage, setCountPage] = useState<number>(0)

    const [currentPageExercises, setCurrentPageExercises] = useState(
        allFilteredExercises.slice(0, 18)
    )

    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])
    useEffect(() => {
        setCountPage(Math.ceil(allFilteredExercises.length / 18))
    }, [allFilteredExercises])
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    useEffect(() => {
        if (searchData === "") {
            dispatch(fetchFilter(isCheckedCategories))
        }
    }, [isCheckedCategories, dispatch, searchData])

    useEffect(() => {
        let notePage: number = 18
        let start: number = (currentPage - 1) * notePage
        let end: number = start + notePage

        try {
            fetch(API_URL + "/exercise/current-page", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    start,
                    end,
                    categories: isCheckedCategories,
                    searchData,
                }),
            })
                .then((res) => res.json())
                .then((res) => setCurrentPageExercises(res))
        } catch (error) {
            console.log(error)
        }
    }, [currentPage, isCheckedCategories, searchData])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changeCurrentPage(value))
    }
    const handleNavigate = (element: ITraining) => {
        dispatch(writeCurrentVideoId(element))
        navigate("/exercise")
    }

    return (
        <section className="training_section">
            <article className="training_article">
                <FormTraining
                    setToggleMobileFilterForm={setToggleMobileFilterForm}
                />
                <div className="training_block_training">
                    {currentPageExercises.length ? (
                        currentPageExercises
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((tr) => {
                                const { img, title } = tr
                                return (
                                    <div
                                        key={uuidv4()}
                                        className="training_training_item"
                                        onClick={() => handleNavigate(tr)}
                                    >
                                        <img src={img} alt="img" />
                                        <h6>{title}</h6>
                                    </div>
                                )
                            })
                    ) : (
                        <NotTraining />
                    )}
                </div>
            </article>
            <article className="pagination_block">
                {currentPageExercises.length !== 0 ? (
                    <Pagination
                        count={countPage}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                        sx={paginationStyle}
                    />
                ) : null}
            </article>
            <MobileToggleButtons
                toggleClass={toggleMobileFilterForm}
                setToggleMobileFilterForm={setToggleMobileFilterForm}
            />
        </section>
    )
}
export default Training
