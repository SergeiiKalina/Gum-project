import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"
import training, { ITraining } from "../../../data/data"
import { Button } from "@mui/material"
import MobileMenuFroExerciseWrapper from "../MobileMenuFroExerciseWrapper/MobileMenuFroExerciseWrapper"
import SelectCategories from "../FormTraining/SelectCategories/SelectCategories"
import { changeIsChecked } from "../../../store/filterTrainingSlice"
import { IState } from "../FormTraining/FormTraining"
import SearchExerciseField from "../FormTraining/SearchExerciseField/SearchExerciseField"
import { v4 as uuidv4 } from "uuid"
import { IFilterTrainingSlice } from "../Training/Training"
import ExerciseCard from "./ExerciseCard/ExerciseCard"
import "./addExercise.scss"

interface IAddExercise {
    thisCategories: string[]
    setShowDialog: (boolean: boolean) => void
    toggleAddExerciseMenu: boolean
}
export interface IExerciseData {
    training: {
        arr: ITraining[]
        arrowLeftHidden: boolean
        arrowRightHidden: boolean
    }
}

export default function AddExercise({
    setShowDialog,
    toggleAddExerciseMenu,
}: IAddExercise): React.JSX.Element {
    const dispatch = useDispatch()
    const isChecked = useSelector(
        (state: IState) => state.filterTraining.isChecked
    )
    const searchData = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.searchData
    )

    const [listCurrentPageExercise, setListCurrentPageExercise] = useState<
        ITraining[]
    >([])
    const [currentExercises, setCurrentExercises] = useState<ITraining[]>([])
    const [countPage, setCountPage] = useState(0)

    const onSubmit = (event: string[]) => {
        dispatch(changeIsChecked(event))
    }

    const increment = () => {
        let length = currentExercises.length / 12
        if (countPage > length - 1) {
            return
        }
        setCountPage((prev) => prev + 1)
    }
    const decrement = () => {
        if (countPage === 0) {
            return
        }
        setCountPage((prev) => prev - 1)
    }

    useEffect(() => {
        if (isChecked.length === 0 && !searchData) {
            setCurrentExercises([])
            return
        }
        if (isChecked.length !== 0) {
            setCountPage(0)

            setCurrentExercises(
                training.filter((item) => isChecked.includes(item.category))
            )
            return
        }
    }, [searchData, isChecked])

    useEffect(() => {
        if (searchData) {
            setCountPage(0)
            dispatch(changeIsChecked([]))
            setCurrentExercises(
                training.filter((el) =>
                    el.title.toLowerCase().includes(searchData.toLowerCase())
                )
            )
            return
        }
        if (isChecked.length === 0 && !searchData) {
            setCurrentExercises([])
            return
        }
    }, [searchData])

    useEffect(() => {
        let notePage = 12
        let start = countPage * notePage
        let end = start + notePage
        setListCurrentPageExercise(currentExercises.slice(start, end))
    }, [searchData, countPage, currentExercises])

    return (
        <MobileMenuFroExerciseWrapper
            setToggleMobileFilterForm={setShowDialog}
            toggleClass={toggleAddExerciseMenu}
        >
            <menu className="add_exercise_menu">
                <SelectCategories onSubmit={onSubmit} />
                <SearchExerciseField />
            </menu>
            <ul className="add_exercise_custom_training_list">
                {listCurrentPageExercise.map((el) => (
                    <ExerciseCard key={uuidv4()} exercise={el} />
                ))}
            </ul>
            <article className="add_exercise_articlePagination">
                <Button variant="contained" onClick={decrement}>
                    Previous
                </Button>
                <Button variant="contained" onClick={increment}>
                    Next
                </Button>
            </article>

            <Button
                variant="contained"
                className="add_exercise_close_button"
                type="button"
                onClick={() => setShowDialog(false)}
                sx={{
                    width: "150px",
                    display: "flex",
                    cursor: "pointer",
                    borderRadius: "20px",
                    margin: "12px auto 0 auto",
                }}
            >
                Close
            </Button>
        </MobileMenuFroExerciseWrapper>
    )
}
