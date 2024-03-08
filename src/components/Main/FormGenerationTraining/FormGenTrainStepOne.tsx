import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import { writeDataUser } from "../../../store/userSlice"
import axios from "axios"
import { API_URL } from "../../../http"
import { IAuthSliceState } from "../../header/Login/Login"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"
import Carousel from "../Carousel/Carousel"
import "./formGenTrainStep.scss"
import { RootState } from "../../../store"
import {
    changeStepRegistration,
    checkUserInfo,
} from "../../../store/authorizationSlice"

export default function FormGenTrainStepOne(): React.JSX.Element {
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    const authUserData = useSelector(
        (state: RootState) => state.authSlice.authUser
    )

    useEffect(() => {
        const checkDataUser = async () => {
            await dispatch(checkUserInfo())
            if (authUserData.mainInfo) {
                return
            } else {
                dispatch(changeStepRegistration(1))
                navigate("/registration")
            }
        }
        checkDataUser()
    }, [dispatch, navigate, authUserData])

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email")
            const googleEmail = localStorage.getItem("googleEmail")
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
            if (googleEmail) {
                const url = `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem(
                    "googleUserId"
                )}.json?auth=${localStorage.getItem("googleToken")}`
                try {
                    const response = await axios.get(url)

                    dispatch(writeDataUser(response.data))
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
    )
}
