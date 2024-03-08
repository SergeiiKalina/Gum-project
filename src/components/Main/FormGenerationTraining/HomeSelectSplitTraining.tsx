import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    writeCurrentTraining,
    writeFormData,
} from "../../../store/generatorTrainingReducer"
import { Button } from "@mui/material"
import {
    stylesButtonWrapper,
    stylesFormButton,
} from "./styles/stylesFormGeneration"
import { API_URL } from "../../../http"
import axios from "axios"
import { generateTraining } from "./Function-Generat-Random-Training/Function-Generate-Random-Training"
import "./formGenTrainStep.scss"

export default function HomeSelectSplitTraining(): React.JSX.Element {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const startGenerationTraining = async (focus: string) => {
        let email = localStorage.getItem("email")
        const googleEmail = localStorage.getItem("googleEmail")
        if (email) {
            const userData = await axios.post(API_URL + "/user/get-user", {
                email,
            })

            await dispatch(
                writeFormData({
                    ...userData.data,
                    mainInfo: {
                        ...userData.data.mainInfo,
                        focus,
                        placeToWorkout: "gym",
                    },
                })
            )
            await dispatch(
                writeCurrentTraining(
                    generateTraining({
                        ...userData.data,
                        mainInfo: {
                            ...userData.data.mainInfo,
                            focus,
                            placeToWorkout: "gym",
                        },
                    })!
                )
            )
            await navigate("/main-page/plan-training")
            return
        }
        if (googleEmail) {
            const url = `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem(
                "googleUserId"
            )}.json?auth=${localStorage.getItem("googleToken")}`
            const response = await axios.get(url)
            const userData = response.data

            await dispatch(
                writeFormData({
                    ...userData,
                    mainInfo: {
                        ...userData.mainInfo,
                        focus,
                        placeToWorkout: "gym",
                    },
                })
            )
            await dispatch(
                writeCurrentTraining(
                    generateTraining({
                        ...userData,
                        mainInfo: {
                            ...userData.mainInfo,
                            focus,
                            placeToWorkout: "gym",
                        },
                    })!
                )
            )
            await navigate("/main-page/plan-training")
            return
        }
    }

    return (
        <section className="form_gen_train_step_wrapper">
            <h2>Select Training</h2>

            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    className="background_image_full_body"
                    onClick={() => startGenerationTraining("fullBody")}
                >
                    <span className="header_button_generation_training">
                        Full Body
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    className="background_image_upper_body"
                    onClick={() => startGenerationTraining("upperBody")}
                >
                    <span className="header_button_generation_training">
                        Upper Body
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("lowerBody")}
                    className="background_image_lower_body"
                >
                    <span className="header_button_generation_training">
                        Lower Body
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("legs")}
                    className="background_image_legs"
                >
                    <span className="header_button_generation_training">
                        Legs
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("back")}
                    className="background_image_back"
                >
                    <span className="header_button_generation_training">
                        Back
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("chest")}
                    className="background_image_chest"
                >
                    <span className="header_button_generation_training">
                        Chest
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("shoulders")}
                    className="background_image_shoulder"
                >
                    <span className="header_button_generation_training">
                        Shoulders
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("hand")}
                    className="background_image_hand"
                >
                    <span className="header_button_generation_training">
                        Hand
                    </span>
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("press")}
                    className="background_image_press"
                >
                    <span className="header_button_generation_training">
                        Press
                    </span>
                </Button>
            </div>
        </section>
    )
}
