import React, { ChangeEvent } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    writeCurrentTraining,
    writeCurrentVideoId,
} from "../../../store/generatorTrainingReducer"
import training, { ITraining } from "../../../data/data"
import "./addExercise.scss"
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Button,
    TextField,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import { v4 as uuidv4 } from "uuid"
import MobileMenuFroExerciseWrapper from "../MobileMenuFroExerciseWrapper/MobileMenuFroExerciseWrapper"
import SelectCategories from "../FormTraining/SelectCategories/SelectCategories"
import { changeIsChecked } from "../../../store/filterTrainingSlice"
import { IState } from "../FormTraining/FormTraining"
import SearchExerciseField from "../FormTraining/SearchExerciseField/SearchExerciseField"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { useNavigate } from "react-router-dom"

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

interface ISearchInfo {
    categories: string[]
    text: string
}

export default function AddExercise({
    thisCategories,
    setShowDialog,
    toggleAddExerciseMenu,
}: IAddExercise): React.JSX.Element {
    const dispatch = useDispatch()
    const isChecked = useSelector(
        (state: IState) => state.filterTraining.isChecked
    )
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState<string>("")
    const [searchInfo, setSearchInfo] = useState<ISearchInfo>({
        categories: thisCategories,
        text: "",
    })
    const planTrainingArr: ITraining[] = useSelector(
        (state: IExerciseData) => state.training.arr
    )
    const [arrTr, setArrTr] = useState<ITraining[]>([])
    const [currentCategories, setCurrentCategories] = useState<ITraining[]>([])
    const [count, setCount] = useState(0)

    const onSubmit = (event: string[]) => {
        dispatch(changeIsChecked(event))
    }

    const changeForm = (txt: string) => {
        setSearchInfo({
            ...searchInfo,
            text: txt,
            categories: [],
        })
    }
    const increment = () => {
        let length = currentCategories.length / 12
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
        if (searchInfo.text) {
            setCount(0)
            setCurrentCategories(
                training.filter((el) =>
                    el.title
                        .toLowerCase()
                        .includes(searchInfo.text.toLowerCase())
                )
            )
        }
        if (isChecked.length === 0) {
            setCurrentCategories([])
        }
        if (isChecked.length !== 0) {
            setCount(0)
            setCurrentCategories(
                training.filter((item) => isChecked.includes(item.category))
            )
        }
    }, [searchInfo, isChecked])

    useEffect(() => {
        if (planTrainingArr.length >= 7) {
            const wrapper = document.querySelector(
                ".custom_training_wrapper"
            ) as HTMLElement
            if (wrapper) {
                wrapper.style.paddingBottom = "50px"
            }
        }
    }, [])

    useEffect(() => {
        let notePage = 12
        let start = count * notePage
        let end = start + notePage
        setArrTr(currentCategories.slice(start, end))
    }, [count, currentCategories])

    function addExercise(id: number) {
        let element: ITraining = training.filter(
            (el) => Number(el.id) === Number(id)
        )[0]

        let elementId: number = element.id
        const clonedValue: ITraining[] = structuredClone(planTrainingArr)
        let check: boolean = clonedValue.some(
            (el: ITraining) => el.id === elementId
        )

        if (check) {
            alert("This exercise already exists.")
            return
        } else {
            clonedValue.push(element)
            if (clonedValue.length === 13) {
                alert("Max exercise 12")
                return
            }
            dispatch(writeCurrentTraining(clonedValue))
            alert("You add exercise")
        }
    }

    const handleNavigate = (element: ITraining) => {
        dispatch(writeCurrentVideoId(element))
        navigate("/exercise")
    }

    return (
        <MobileMenuFroExerciseWrapper
            setToggleMobileFilterForm={setShowDialog}
            toggleClass={toggleAddExerciseMenu}
        >
            <menu className="add_exercise_menu">
                <form className="add_exercise_form">
                    <SelectCategories onSubmit={onSubmit} />
                    <SearchExerciseField />
                </form>
            </menu>
            <section className="add_exercise_block">
                <ul className="add_exercise_custom_training_list">
                    {arrTr.map((el) => {
                        return (
                            <li key={uuidv4()}>
                                <section className="add_exercise_item_block">
                                    <article className="add_exercise_item_block_left_part">
                                        <img
                                            src={el.img}
                                            className="add_exercise_item_block_img"
                                            alt={el.title}
                                        />
                                        <div className="add_exercise_item_block_left_part_info">
                                            <span className="add_exercise_item_block_left_part_title">
                                                {el.title}
                                            </span>
                                            <div className="add_exercise_item_block_chips">
                                                <span className="add_exercise_item_chips">
                                                    {el.category}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="add_exercise_item_block_right_part">
                                        <button
                                            type="button"
                                            onTouchStart={() =>
                                                addExercise(el.id)
                                            }
                                            onClick={() => addExercise(el.id)}
                                        >
                                            <AddIcon />
                                        </button>
                                    </article>
                                </section>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <article className="add_exercise_articlePagination">
                <Button variant="contained" onClick={decrement}>
                    Previous
                </Button>
                <Button variant="contained" onClick={increment}>
                    Next
                </Button>
            </article>
            <article className="add_exercise_close_button_wrapper">
                <Button
                    variant="contained"
                    className="add_exercise_close_button"
                    type="button"
                    onClick={() => setShowDialog(false)}
                >
                    Close
                </Button>
            </article>
        </MobileMenuFroExerciseWrapper>
    )
}
