import React, { useState } from "react"
import {
    styledToggleButton,
    styledToggleButtonWrapper,
} from "../../FormGenerationTraining/styles/stylesFormGeneration"
import {
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup,
} from "@mui/material"

interface IToggleButtonBlock {
    buttonChecked: string
    setButtonChecked: (arg: string) => void
}

function ToggleButtonBlock({
    buttonChecked,
    setButtonChecked,
}: IToggleButtonBlock): React.JSX.Element {
    const handleButtonGroup = (
        event: React.MouseEvent<HTMLElement>,
        categories: string
    ) => {
        const target = event.target as HTMLInputElement

        if (buttonChecked === target.value) return
        setButtonChecked(categories)
    }

    return (
        <article className="start_training_tabs_button">
            <ToggleButtonGroup
                onChange={handleButtonGroup}
                exclusive
                value={buttonChecked}
                sx={styledToggleButtonWrapper}
            >
                <MuiToggleButton value={"info"} sx={styledToggleButton}>
                    description
                </MuiToggleButton>
                <MuiToggleButton value={"set"} sx={styledToggleButton}>
                    sets
                </MuiToggleButton>
            </ToggleButtonGroup>
        </article>
    )
}

export default ToggleButtonBlock
