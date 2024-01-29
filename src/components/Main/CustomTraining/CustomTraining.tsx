import React from "react"
import { Box } from "@mui/system"
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import "./customTraining.scss"

function CustomTraining(): React.JSX.Element {
    return (
        <section className="custom_training_wrapper">
            <header>
                <h2>Custom Training</h2>
                <Box>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="add"
                        sx={{
                            position: "static",
                            zIndex: "1",
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Box>
            </header>
            <ul className="custom_training_list"></ul>
        </section>
    )
}

export default CustomTraining
