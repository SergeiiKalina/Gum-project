import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, CircularProgress } from "@mui/material"
import { IAuthSliceState } from "../../header/Login/Login"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"
import Carousel from "../Carousel/Carousel"
import "./formGenTrainStep.scss"
import { RootState } from "../../../store"
import axios from "axios"
import { changeStepRegistration } from "../../../store/authorizationSlice"

export default function FormGenTrainStepOne(): React.JSX.Element {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    const isLoading = useSelector(
        (state: RootState) => state.authSlice.isLoading
    )

    useEffect(() => {
        const checkGoogleDataUser = async () => {
            if (localStorage.getItem("googleEmail")) {
                const url = `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem(
                    "googleUserId"
                )}.json?auth=${localStorage.getItem("googleToken")}`
                const response = await axios.get(url)

                if (response.data === null) {
                    await axios.post(url, {})
                }
                if (response.data.mainInfo) {
                    return
                } else {
                    console.log("call")
                    navigate("/registration")
                    dispatch(changeStepRegistration(1))
                }
            }
        }
        checkGoogleDataUser()
    }, [navigate, dispatch])

    return (
        <>
            {isLoading && (
                <CircularProgress
                    sx={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate( -50%, -50%)",
                        zIndex: "10",
                    }}
                />
            )}
            {!isLoading && (
                <>
                    <Carousel />
                    <article className="main_page_computer_page">
                        <Button
                            variant="contained"
                            className="place_training__button home"
                            onClick={() => navigate("/main-page/step-2/home")}
                        >
                            <span>Home Training</span>
                        </Button>
                        <Button
                            variant="contained"
                            className="place_training__button gym"
                            onClick={() => navigate("/main-page/step-2/gym")}
                        >
                            <span>Gym Training</span>
                        </Button>
                        <Button
                            variant="contained"
                            className="place_training__button customTraining"
                            onClick={() => {
                                navigate("/main-page/plan-training")
                                dispatch(writeCurrentTraining([]))
                            }}
                        >
                            <span>Custom Training</span>
                        </Button>
                        <Button
                            variant="contained"
                            className="place_training__button library"
                            onClick={() => navigate("/main-page/library")}
                        >
                            <span>Exercise Library</span>
                        </Button>
                    </article>
                </>
            )}
        </>
    )
}
