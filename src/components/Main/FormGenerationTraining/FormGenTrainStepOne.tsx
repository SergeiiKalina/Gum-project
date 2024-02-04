import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import "./formGenTrainStep.scss"
import { writeDataUser } from "../../../store/userSlice"
import axios from "axios"
import { API_URL } from "../../../http"
import { IAuthSliceState } from "../../header/Login/Login"
import { RxHome } from "react-icons/rx"
import { FaDumbbell } from "react-icons/fa"

export default function FormGenTrainStepOne(): React.JSX.Element {
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email")
            if (email) {
                const url = API_URL + "/user/email"
                try {
                    const userRes = await axios.post(url, { email })
                    const userData = userRes.data

                    dispatch(writeDataUser(userData))
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchData()
    }, [dispatch])

    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])

    return (
        <section className="place_training_wrapper">
            <h2>Generator Training</h2>
            <article>
                <Button
                    variant="contained"
                    className="place_training__button"
                    onClick={() => navigate("/gentraining/step-2/home")}
                >
                    <RxHome className="place_training__button_img" />
                    <span>Home Training</span>
                </Button>
                <Button
                    variant="contained"
                    className="place_training__button"
                    onClick={() => navigate("/gentraining/step-2/gym")}
                >
                    <FaDumbbell className="place_training__button_img" />
                    <span>Gym Training</span>
                </Button>
            </article>
        </section>
    )
}
