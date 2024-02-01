import React, { ChangeEvent } from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"
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

interface IAddExercise {
    thisCategories: string[]
    setShowDialog: (boolean: boolean) => void
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
    setShowDialog,
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
    const [arrTr, setArrTr] = useState<ITraining[]>([])
    const [currentCategories, setCurrentCategories] = useState<ITraining[]>([])
    const [count, setCount] = useState(0)

    const handleChange = (event: SelectChangeEvent) => {
        let category = event.target.value
        setSearchInfo({ ...searchInfo, categories: category })
    }

    const changeForm = (txt: string) => {
        setSearchInfo({
            ...searchInfo,
            text: txt,
            categories: "",
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
        if (searchInfo.categories) {
            setCount(0)
            setCurrentCategories(
                training.filter((el) => el.category === searchInfo.categories)
            )
        }
    }, [searchInfo])

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
        console.log(clonedValue)
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

    return (
        <section className="add_exercise_container">
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
                            <MenuItem value="none">
                                <em>None</em>
                            </MenuItem>
                            {thisCategories.map((category) => (
                                <MenuItem value={category} key={uuidv4()}>
                                    {category[0].toUpperCase() +
                                        category.replace(category[0], "")}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <section className="add_exercise_search_block">
                        <TextField
                            type="text"
                            placeholder="Name exercise..."
                            variant="standard"
                            sx={{
                                "& .MuiInputBase-root": {
                                    margin: "0",
                                },
                                "& input": {
                                    padding: "10px 0 2px 0",
                                },
                                "& label": {
                                    display: "none",
                                },
                            }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setSearchText(e.target.value)
                            }
                        />
                        <Button
                            variant="contained"
                            sx={{ minWidth: "25px" }}
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
                            <div
                                style={{ cursor: "pointer" }}
                                className="add_icon_wrapper"
                                id={el.id.toString()}
                                onClick={(e) => addExercise(el.id)}
                            >
                                <AddIcon />
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
                    onClick={() => setShowDialog(false)}
                >
                    Close
                </Button>
            </article>
        </section>
    )
}
