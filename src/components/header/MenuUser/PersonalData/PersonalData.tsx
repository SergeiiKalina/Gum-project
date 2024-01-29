import React, { useState, useEffect } from "react"
import "./personalData.scss"
import { IUserData, writeDataUser } from "../../../../store/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { GrFormCheckmark } from "react-icons/gr"
import { v4 as uuidv4 } from "uuid"
import { API_URL } from "../../../../http"
import axios from "axios"
import { IAuthSliceState } from "../../Login/Login"
import { useNavigate } from "react-router-dom"

export interface IUserSlice {
    usersSlice: {
        dataUser: IUserData
    }
}

const PersonalData: React.FC = () => {
    const userData = useSelector(
        (state: IUserSlice) => state.usersSlice.dataUser
    )

    const [cofSquat] = useState(
        (Number(userData.squat) / Number(userData.weight)) * 150
    )
    const [cofBenchPress] = useState(
        (Number(userData.benchPress) / Number(userData.weight) / 0.85) * 150
    )
    const [cofDeadLift] = useState(
        (Number(userData.deadLift) / Number(userData.weight) / 1.25) * 150
    )
    const [cofPullUp] = useState(
        (Number(userData.pullUp) / (userData.sex === "male" ? 15 : 10)) * 150
    )
    const [cofSitUp] = useState(
        (Number(userData.sitUp) / (userData.sex === "male" ? 50 : 35)) * 150
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

    return (
        <section className="wrapper_personal_data">
            <ul>
                <li>
                    Full name:{" "}
                    {userData?.firstName && userData?.lastName
                        ? userData?.firstName + " " + userData?.lastName
                        : ""}
                </li>
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
                <li>Sex: {userData?.sex ? userData.sex : "No data"}</li>

                <li>
                    Lifestyle:{" "}
                    {userData?.lifestyle ? userData.lifestyle : "No data"}
                </li>
                <li>
                    Weight:{" "}
                    {userData?.weight ? userData.weight + "kg" : "No data"}
                </li>
                <li>
                    Primary goal: {userData?.goal ? userData.goal : "No data"}
                </li>
                <li>
                    Health problems:{" "}
                    {userData?.problems ? (
                        <ol>
                            {userData.problems.map((el, i) => (
                                <li key={uuidv4()}>{i + 1 + ". " + el}</li>
                            ))}
                        </ol>
                    ) : (
                        "No data"
                    )}
                </li>
                <li>
                    Favorite place to workout:{" "}
                    {userData.placeToWorkout || "No data"}
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
                                    userData.squat
                                        ? cofSquat >= 150
                                            ? 150
                                            : cofSquat
                                        : 0
                                }px`,
                            }}
                        ></div>
                    </div>
                    <div>
                        {userData?.squat ? userData.squat + "kg" : "No data"}
                    </div>
                    <div className="personal_page_img_wrapper">
                        <img src="./images/mini/icon-squat.png" alt="squat" />
                    </div>
                </li>
                <li>
                    <div className="wrapper_progress">
                        <div
                            className="progress"
                            style={{
                                height: `${
                                    userData.benchPress
                                        ? cofBenchPress >= 150
                                            ? 150
                                            : cofBenchPress
                                        : 0
                                }px`,
                            }}
                        ></div>
                    </div>

                    {userData?.benchPress
                        ? userData.benchPress + "kg"
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
                                    userData.deadLift
                                        ? cofDeadLift >= 150
                                            ? 150
                                            : cofDeadLift
                                        : 0
                                }px`,
                            }}
                        ></div>
                    </div>

                    {userData?.deadLift ? userData.deadLift + "kg" : "No data"}
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
                                    userData.pullUp
                                        ? cofPullUp >= 150
                                            ? 150
                                            : cofPullUp
                                        : 0
                                }px`,
                            }}
                        ></div>
                    </div>
                    {userData?.pullUp ? userData.pullUp + " reps" : "No data"}
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
                                    userData.sitUp
                                        ? cofSitUp >= 150
                                            ? 150
                                            : cofSitUp
                                        : 0
                                }px`,
                            }}
                        ></div>
                    </div>
                    {userData?.sitUp ? userData.sitUp + " reps" : "No data"}
                    <div className="personal_page_img_wrapper">
                        <img src="./images/mini/sit-up-icon.png" alt="sit-up" />
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default PersonalData
