import React, { useState, useEffect } from "react"
import { IUserData, writeDataUser } from "../../../../store/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { GrFormCheckmark } from "react-icons/gr"
import { v4 as uuidv4 } from "uuid"
import { API_URL } from "../../../../http"
import axios from "axios"
import { IAuthSliceState } from "../../Login/Login"
import { useNavigate } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import "./personalData.scss"

export interface IUserSlice {
    usersSlice: {
        dataUser: IUserData
    }
}

const PersonalData: React.FC = () => {
    const userData = useSelector(
        (state: IUserSlice) => state.usersSlice.dataUser
    )
    const [isLoading, setIsLoading] = useState(false)
    const [cofSquat] = useState(
        (Number(userData.mainInfo.squat) / Number(userData.mainInfo.weight)) *
            150
    )
    const [cofBenchPress] = useState(
        (Number(userData.mainInfo.benchPress) /
            Number(userData.mainInfo.weight) /
            0.85) *
            150
    )
    const [cofDeadLift] = useState(
        (Number(userData.mainInfo.deadLift) /
            Number(userData.mainInfo.weight) /
            1.25) *
            150
    )
    const [cofPullUp] = useState(
        (Number(userData.mainInfo.pullUp) /
            (userData.mainInfo.sex === "male" ? 15 : 10)) *
            150
    )
    const [cofSitUp] = useState(
        (Number(userData.mainInfo.sitUp) /
            (userData.mainInfo.sex === "male" ? 50 : 35)) *
            150
    )
    const dispatch = useDispatch()

    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )

    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email")
            const googleEmail = localStorage.getItem("googleEmail")
            try {
                if (email) {
                    const url = API_URL + "/user/email"

                    const userRes = await axios.post(url, { email })
                    const userData = userRes.data

                    setTimeout(() => setIsLoading(true), 500)
                    dispatch(writeDataUser(userData))
                    return
                }
                if (googleEmail) {
                    const url = `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem(
                        "googleUserId"
                    )}.json?auth=${localStorage.getItem("googleToken")}`
                    const userData = await axios.get(url)
                    dispatch(writeDataUser(userData.data))
                    setTimeout(() => setIsLoading(true), 500)
                    return
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [dispatch])

    return (
        <>
            {isLoading ? (
                <section className="wrapper_personal_data">
                    <ul>
                        <li>Name: {userData?.name ? userData?.name : ""}</li>
                        <li>
                            <span>
                                Email: {userData?.email ? userData.email : ""}
                                {userData?.IsActivated ? (
                                    <span className="active_email">
                                        <GrFormCheckmark />
                                    </span>
                                ) : (
                                    <span className="not_active_email">*</span>
                                )}
                            </span>
                        </li>
                        <li>
                            Sex:{" "}
                            {userData.mainInfo.sex
                                ? userData.mainInfo.sex
                                : "No data"}
                        </li>

                        <li>
                            Lifestyle:{" "}
                            {userData.mainInfo.lifestyle
                                ? userData.mainInfo.lifestyle
                                : "No data"}
                        </li>
                        <li>
                            Weight:{" "}
                            {userData.mainInfo.weight
                                ? userData.mainInfo.weight + "kg"
                                : "No data"}
                        </li>
                        <li>
                            Primary goal:{" "}
                            {userData.mainInfo.goal
                                ? userData.mainInfo.goal
                                : "No data"}
                        </li>
                        <li>
                            Health problems:{" "}
                            {userData.mainInfo.problems ? (
                                <ol>
                                    {userData.mainInfo.problems.map((el, i) => (
                                        <li key={uuidv4()}>
                                            {i + 1 + ". " + el}
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                "No data"
                            )}
                        </li>
                        <li>
                            Favorite place to workout:{" "}
                            {userData.mainInfo.placeToWorkout || "No data"}
                        </li>
                    </ul>
                    <h3>Exercise Results</h3>
                    <ul className="progress_field">
                        <li>
                            <div className="wrapper_progress">
                                <div
                                    className="progress"
                                    style={{
                                        height: `${
                                            userData.mainInfo.squat
                                                ? cofSquat >= 150
                                                    ? 150
                                                    : cofSquat
                                                : 0
                                        }px`,
                                    }}
                                ></div>
                            </div>
                            <div>
                                {userData.mainInfo.squat
                                    ? userData.mainInfo.squat + "kg"
                                    : "No data"}
                            </div>
                            <div className="personal_page_img_wrapper">
                                <img
                                    src="./images/mini/icon-squat.png"
                                    alt="squat"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="wrapper_progress">
                                <div
                                    className="progress"
                                    style={{
                                        height: `${
                                            userData.mainInfo.benchPress
                                                ? cofBenchPress >= 150
                                                    ? 150
                                                    : cofBenchPress
                                                : 0
                                        }px`,
                                    }}
                                ></div>
                            </div>

                            {userData.mainInfo.benchPress
                                ? userData.mainInfo.benchPress + "kg"
                                : "No data"}
                            <div className="personal_page_img_wrapper">
                                <img
                                    src="./images/mini/bench-press-icon.png"
                                    alt="bench-press"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="wrapper_progress">
                                <div
                                    className="progress"
                                    style={{
                                        height: `${
                                            userData.mainInfo.deadLift
                                                ? cofDeadLift >= 150
                                                    ? 150
                                                    : cofDeadLift
                                                : 0
                                        }px`,
                                    }}
                                ></div>
                            </div>

                            {userData.mainInfo.deadLift
                                ? userData.mainInfo.deadLift + "kg"
                                : "No data"}
                            <div className="personal_page_img_wrapper">
                                <img
                                    src="./images/mini/dead-lift-icon.png"
                                    alt="dead-lift"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="wrapper_progress">
                                <div
                                    className="progress"
                                    style={{
                                        height: `${
                                            userData.mainInfo.pullUp
                                                ? cofPullUp >= 150
                                                    ? 150
                                                    : cofPullUp
                                                : 0
                                        }px`,
                                    }}
                                ></div>
                            </div>
                            {userData.mainInfo.pullUp
                                ? userData.mainInfo.pullUp + " reps"
                                : "No data"}
                            <div className="personal_page_img_wrapper">
                                <img
                                    src="./images/mini/pull-up-icon.png"
                                    alt="pull-up"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="wrapper_progress">
                                <div
                                    className="progress"
                                    style={{
                                        height: `${
                                            userData.mainInfo.sitUp
                                                ? cofSitUp >= 150
                                                    ? 150
                                                    : cofSitUp
                                                : 0
                                        }px`,
                                    }}
                                ></div>
                            </div>
                            {userData.mainInfo.sitUp
                                ? userData.mainInfo.sitUp + " reps"
                                : "No data"}
                            <div className="personal_page_img_wrapper">
                                <img
                                    src="./images/mini/sit-up-icon.png"
                                    alt="sit-up"
                                />
                            </div>
                        </li>
                    </ul>
                </section>
            ) : (
                <CircularProgress
                    color="info"
                    sx={{
                        position: "absolute",
                        top: "calc(50% - 72px )",
                        left: "calc(50% - 20px )",
                    }}
                />
            )}
        </>
    )
}

export default PersonalData
