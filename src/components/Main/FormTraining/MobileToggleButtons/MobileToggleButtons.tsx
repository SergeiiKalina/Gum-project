import React from "react"
import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { IState } from "../FormTraining"
import {
    changeIsChecked,
    writeSearchData,
} from "../../../../store/filterTrainingSlice"
import {
    styledToggleButton,
    styledToggleButtonWrapper,
} from "../../FormGenerationTraining/styles/stylesFormGeneration"
import MobileMenuFroExerciseWrapper from "../../MobileMenuFroExerciseWrapper/MobileMenuFroExerciseWrapper"

function MobileToggleButtons({
    toggleClass,
    setToggleMobileFilterForm,
}: {
    toggleClass: boolean
    setToggleMobileFilterForm: (arg: boolean) => void
}) {
    const dispatch = useDispatch<any>()
    const categories = useSelector(
        (state: IState) => state.filterTraining.categories
    )
    const isChecked = useSelector(
        (state: IState) => state.filterTraining.isChecked
    )

    const handleButtonGroup = (
        event: React.MouseEvent<HTMLElement>,
        categories: string[]
    ) => {
        dispatch(writeSearchData(""))
        dispatch(changeIsChecked(categories))
    }
    return (
        <MobileMenuFroExerciseWrapper
            toggleClass={toggleClass}
            setToggleMobileFilterForm={setToggleMobileFilterForm}
        >
            <ToggleButtonGroup
                onChange={handleButtonGroup}
                value={isChecked}
                sx={styledToggleButtonWrapper}
            >
                {categories
                    .slice()
                    .sort((a, b) => a.localeCompare(b))
                    .map((category) => (
                        <ToggleButton
                            key={uuidv4()}
                            value={category}
                            sx={styledToggleButton}
                        >
                            {category}
                        </ToggleButton>
                    ))}
            </ToggleButtonGroup>
        </MobileMenuFroExerciseWrapper>
    )
}

export default MobileToggleButtons
