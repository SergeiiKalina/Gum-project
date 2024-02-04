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

        if (email !== null) {
            const userData = await axios.post(API_URL + "/user/get-user", {
                email,
            })

            await dispatch(
                writeFormData({
                    ...userData.data,
                    focus,
                    placeToWorkout: "home",
                })
            )
            await dispatch(
                writeCurrentTraining(
                    generateTraining({
                        ...userData.data,
                        focus,
                        placeToWorkout: "home",
                    })!
                )
            )
            await navigate("/finished-training")
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
                    onClick={() => startGenerationTraining("fullBody")}
                >
                    Full Body
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("UpperBody")}
                >
                    Upper Body
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("lowerBody")}
                >
                    Lower Body
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("legs")}
                >
                    Legs
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("back")}
                >
                    Back
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("chest")}
                >
                    Chest
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("shoulders")}
                >
                    Shoulders
                </Button>
            </div>
            <div style={stylesButtonWrapper}>
                <Button
                    variant="contained"
                    type="submit"
                    sx={stylesFormButton}
                    onClick={() => startGenerationTraining("hand")}
                >
                    Hand
                </Button>
            </div>
            <div
                style={stylesButtonWrapper}
                onClick={() => startGenerationTraining("press")}
            >
                <Button variant="contained" type="submit" sx={stylesFormButton}>
                    Press
                </Button>
            </div>
        </section>
    )
}
