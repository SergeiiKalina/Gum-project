import styled from "@emotion/styled"
import { Box } from "@mui/system"
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress"
import React, { useEffect, useState } from "react"
import { Theme } from "@mui/material"

interface ProgressBarProps {
    theme: Theme
    completedSteps: number
    totalSteps: number
}

const BorderLinearProgress = styled(LinearProgress)(
    ({ theme }: { theme: Theme }) => ({
        height: 5,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
                theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor:
                theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
        },
    })
)

function ProgressBar({ theme, totalSteps, completedSteps }: ProgressBarProps) {
    const [stateProgressBar, setStateProgressBar] = useState<number>(1)
    useEffect(() => {
        setStateProgressBar(() => (completedSteps / totalSteps) * 100)
    }, [completedSteps, totalSteps])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress
                variant="determinate"
                value={stateProgressBar}
                theme={theme}
            />
        </Box>
    )
}

export default ProgressBar
