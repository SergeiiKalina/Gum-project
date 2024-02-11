import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
} from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import {
    formTrainingSelect,
    formTrainingStyleForm,
} from "../../FormGenerationTraining/styles/stylesFormGeneration"
import { useSelector } from "react-redux"
import { IState } from "../FormTraining"

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

function SelectCategories({
    onSubmit,
}: {
    onSubmit: (array: string[]) => void
}) {
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
    return (
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
                        .map((el: string) => el[0].toUpperCase() + el.slice(1))
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
    )
}

export default SelectCategories
