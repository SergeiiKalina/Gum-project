import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function EndTraining(): React.JSX.Element {
    const totalWeight = useSelector(
        (state: RootState) => state.trainingSlice.totalWeight
    )
    const navigate = useNavigate()

    return (
        <div
            style={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "20px 0 0 0",
                color: "white",
            }}
        >
            <h2 style={{ margin: "0 0 12px 0" }}>Congratulations </h2>
            <h2 style={{ margin: " 0 0 12px 0" }}>Training End</h2>
            <span style={{ margin: "0 auto 20px auto" }}>
                Your Total Weight {totalWeight}kg
            </span>
            <Button
                variant="contained"
                sx={{ width: "50%", margin: "0 auto" }}
                onClick={() => navigate("/main-page")}
            >
                Close Portal
            </Button>
        </div>
    )
}
