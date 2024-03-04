import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import "./formGenTrainStep.scss"
import { writeDataUser } from "../../../store/userSlice"
import axios from "axios"
import { API_URL } from "../../../http"
import { IAuthSliceState } from "../../header/Login/Login"
import "react-alice-carousel/lib/alice-carousel.css"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"
import Carousel from "../Carousel/Carousel"
import "swiper/css"
import Footer from "../../Footer/Footer"

import { getDatabase, ref, child, get, set } from "firebase/database"
import training from "../../../data/data"

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
    const func = async () => {
        const dbRef = getDatabase()

        await set(ref(dbRef, "exercise/"), training).then(() =>
            console.log("ok")
        )
    }

    const func2 = async () => {
        const dbRef = ref(getDatabase())

        await get(child(dbRef, "exercise/")).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val())
            }
        })
    }

    return (
        <>
            <Carousel />
            <article className="main_page_computer_page">
                <Button
                    variant="contained"
                    className="place_training__button home"
                    onClick={() => {
                        navigate("/main-page/step-2/home")
                        // func()
                    }}
                >
                    <span>Home Training</span>
                </Button>
                <Button
                    variant="contained"
                    className="place_training__button gym"
                    onClick={() => {
                        // func2()
                        navigate("/main-page/step-2/gym")
                    }}
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
    )
}
