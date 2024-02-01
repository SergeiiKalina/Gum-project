import React from "react"
import { useDispatch, useSelector } from "react-redux"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import { changeIsChecked, writeData } from "../../../store/filterTrainingSlice"
import "./formTraining.scss"
import {
    formTrainingSelect,
    formTrainingStyleForm,
} from "../FormGenerationTraining/styles/stylesFormGeneration"

export interface IState {
    filterTraining: {
        isChecked: string[]
        categories: string[]
    }
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const FormTraining = React.memo(function FormTraining(): React.JSX.Element {
    const dispatch = useDispatch()
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event

        onSubmit(typeof value === "string" ? value.split(",") : value)
    }
    const isChecked = useSelector(
        (state: IState) => state.filterTraining.isChecked
    )

    const categories = useSelector(
        (state: IState) => state.filterTraining.categories
    )

    const onSubmit = (data: string[]) => {
        dispatch(writeData(Object.values(data)))

        dispatch(changeIsChecked(data))
    }
    return (
        <article className="form_training_wrapper">
            <FormControl sx={formTrainingStyleForm}>
                <InputLabel id="demo-multiple-checkbox-label">
                    Categories
                </InputLabel>
                <Select
                    sx={formTrainingSelect}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={isChecked}
                    onChange={handleChange}
                    input={<OutlinedInput label="Categories" />}
                    renderValue={(selected) =>
                        selected
                            .map(
                                (el: string) =>
                                    el[0].toUpperCase() + el.slice(1)
                            )
                            .join(", ")
                    }
                    MenuProps={MenuProps}
                >
                    {categories
                        .slice()
                        .sort((a, b) => a.localeCompare(b))
                        .map((category) => (
                            <MenuItem key={category} value={category}>
                                <Checkbox
                                    checked={isChecked.indexOf(category) > -1}
                                />
                                <ListItemText
                                    primary={
                                        category[0].toUpperCase() +
                                        category.slice(1)
                                    }
                                />
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </article>
    )
})
export default FormTraining
