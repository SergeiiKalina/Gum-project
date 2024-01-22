import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { writeArr } from "../../../store/generatorTrainingReducer"
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
import {
    IShowDialog,
    initialStateShowDialog,
} from "../FinishedTraining/FinishedTraining"

interface IAddExercise {
    thisCategories: string[]
    currentArrIndex: number
    setShowDialog: (obj: IShowDialog) => void
    showClass: string
}
export interface IExerciseData {
    training: {
        arr: ITraining[]
        arrowLeftHidden: boolean
        arrowRightHidden: boolean
    }
}

interface ISearchInfo {
    categories: string
    text: string
}

export default function AddExercise({
    thisCategories,
    currentArrIndex,
    setShowDialog,
    showClass,
}: IAddExercise): React.JSX.Element {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState<string>("")
    const [searchInfo, setSearchInfo] = useState<ISearchInfo>({
        categories: thisCategories[0],
        text: "",
    })
    const planTrainingArr: ITraining[] = useSelector(
        (state: IExerciseData) => state.training.arr
    )
    const [arrTr, setArrTr] = useState<ITraining[] | []>([])
    const [currentCategories, setCurrentCategories] = useState<
        ITraining[] | []
    >([])
    const [count, setCount] = useState(0)

    const handleChange = (event: SelectChangeEvent) => {
        setSearchInfo({ ...searchInfo, categories: event.target.value })
    }

    const changeForm = (txt: string) => {
        setSearchInfo({ ...searchInfo, text: txt, categories: "" })
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
        if (searchInfo.categories) {
            setCount(0)
            setCurrentCategories(
                training.filter((el) => el.category === searchInfo.categories)
            )
        }
    }, [searchInfo])

    useEffect(() => {
        let notePage = 12
        let start = count * notePage
        let end = start + notePage
        setArrTr(currentCategories.slice(start, end))
    }, [count, currentCategories])

    function addExercise(e: React.MouseEvent<SVGSVGElement>) {
        let target = e.target as HTMLDivElement
        let id: string = target.id
        let element: ITraining[] = training.filter(
            (el) => Number(el.id) === Number(id)
        )
        const clonedValue: ITraining[] | any = structuredClone(planTrainingArr)
        let elementId: number = element[0].id
        let currentArrayTraining: ITraining[] | any =
            clonedValue[currentArrIndex]
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
        <section className={`add_exercise_container ${showClass}`}>
            <menu>
                <form>
                    <FormControl
                        variant="standard"
                        sx={{ m: "1", width: "250px", marginLeft: "5px" }}
                    >
                        <InputLabel id="demo-select-small-label">
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={searchInfo.categories}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {thisCategories.map((category) => (
                                <MenuItem value={category}>
                                    {category[0].toUpperCase() +
                                        category.replace(category[0], "")}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <section className="add_exercise_search_block">
                        <TextField
                            type="text"
                            label="Exercise"
                            variant="standard"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            sx={{ width: "75px", padding: "12px 0" }}
                            onClick={() => changeForm(searchText)}
                        >
                            <SearchIcon />
                        </Button>
                    </section>
                </form>
            </menu>
            <section className="add_exercise_block">
                {arrTr.map((el) => {
                    return (
                        <article key={el.id}>
                            <span className="add_exercise_block_name">
                                {el.title}
                            </span>
                            <div>
                                <AddIcon
                                    style={{ cursor: "pointer" }}
                                    id={el.id.toString()}
                                    onClick={(e) => addExercise(e)}
                                />
                            </div>
                        </article>
                    )
                })}
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
                    onClick={() => setShowDialog(initialStateShowDialog)}
                >
                    Close
                </Button>
            </article>
        </section>
    )
}
