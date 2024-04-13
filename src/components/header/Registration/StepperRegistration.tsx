import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { theme } from "../../Styled-components/Styled"

const steps = [
    "Fill out the registration fields",
    "Continue doing this",
    "Select indicators",
    "Goal and additional information",
]

export default function StepperRegistration({ step }: { step: number }) {
    return (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            sx={{
                                "& .MuiStepLabel-labelContainer .Mui-active": {
                                    color: "white",
                                    [theme.breakpoints.down("sm")]: {
                                        display: "none",
                                    },
                                },
                                "& .MuiStepLabel-label": {
                                    color: "white",
                                    [theme.breakpoints.down("sm")]: {
                                        display: "none",
                                    },
                                },
                                "& .css-1hv8oq8-MuiStepLabel-label": {
                                    color: "white",
                                    [theme.breakpoints.down("sm")]: {
                                        display: "none",
                                    },
                                },
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}
