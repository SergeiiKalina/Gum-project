import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, toggleIsLoading } from "../../../store/authorizationSlice"
import "./menuUser.scss"
import axios from "axios"
import { API_URL } from "../../../http"
import { IUserData } from "../../../store/userSlice"
import { StyledTextField } from "../../Styled-components/Styled"
import { SubmitHandler, useForm } from "react-hook-form"
import CircularProgress from "@mui/material/CircularProgress"
import { Button } from "@mui/material"

interface IRewriteUserData {
    squat: number
    benchPress: number
    deadLift: number
    pullUp: number
    pushUpQuantity: number
    sitUp: number
    squatQuantity: number
}

const MenuUser: FC = () => {
    const [userData, setUserData] = useState<IUserData>()
    const [toggleRewriteData, setToggleRewriteData] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<IRewriteUserData>()
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    useEffect(() => {
        async function getUserData() {
            let email = localStorage.getItem("email")

            if (email !== null) {
                const userData = await axios.post(API_URL + "/user/get-user", {
                    email,
                })

                setTimeout(() => setUserData(userData.data), 500)
            }
        }
        getUserData()
    }, [])
    const onSubmit: SubmitHandler<IRewriteUserData> = async (data) => {
        try {
            await dispatch(toggleIsLoading(true))
            const email = await localStorage.getItem("email")
            if (email) {
                const user = await axios.patch(API_URL + "/user/update", {
                    ...data,
                    email,
                })

                await setUserData(user.data)
                await setToggleRewriteData(false)
            }
        } catch (error) {
            console.log(error)
        } finally {
            await dispatch(toggleIsLoading(false))
        }
    }

    return (
        <>
            <form
                className="menu_user_wrapper"
                id="userMenu"
                onSubmit={handleSubmit(onSubmit)}
            >
                {!userData?.squat ? (
                    <CircularProgress
                        color="info"
                        sx={{
                            position: "absolute",
                            top: "calc(50% - 72px )",
                            left: "calc(50% - 20px )",
                        }}
                    />
                ) : (
                    <ul>
                        <li>{localStorage.getItem("name")}</li>
                        <li className="date_registration">
                            Date Registration:
                            {userData?.registrationDate
                                ? " " +
                                  userData.registrationDate.substring(0, 10)
                                : ""}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="squat"
                                    label="Squat 1PR"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("squat")}
                                />
                            ) : (
                                <>
                                    1PR Squat:
                                    <span>{userData?.squat + "kg"}</span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="benchPress"
                                    label="Bench Press 1PR"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("benchPress")}
                                />
                            ) : (
                                <>
                                    1PR Bench Press:
                                    <span>{userData?.benchPress + "kg"}</span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="deadLift"
                                    label="Dead Lift 1PR"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("deadLift")}
                                />
                            ) : (
                                <>
                                    1PR Dead Lift:
                                    <span>{userData?.deadLift + "kg"}</span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="pullUps"
                                    label="Quantity Pull-ups Reps"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("pullUp")}
                                />
                            ) : (
                                <>
                                    Quantity Pull-ups:
                                    <span>{userData?.pullUp + "reps"}</span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="quantityPushUps"
                                    label="Quantity Push-ups Reps"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("pushUpQuantity")}
                                />
                            ) : (
                                <>
                                    Quantity Push-ups:
                                    <span>
                                        {userData?.pushUpQuantity + "reps"}
                                    </span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="quantitySitUp"
                                    label="Quantity Sit-ups Reps"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("sitUp")}
                                />
                            ) : (
                                <>
                                    Quantity Sit-ups:
                                    <span>{userData?.sitUp + "reps"}</span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData ? (
                                <StyledTextField
                                    id="quantitySquats"
                                    label="Quantity Air Squats Reps"
                                    variant="outlined"
                                    autoComplete="off"
                                    InputProps={{
                                        type: "number",
                                    }}
                                    {...register("squatQuantity")}
                                />
                            ) : (
                                <>
                                    Quantity Air Squats:
                                    <span>
                                        {userData?.squatQuantity + "reps"}
                                    </span>
                                </>
                            )}
                        </li>
                        <li>
                            {toggleRewriteData && (
                                <Button
                                    variant="contained"
                                    style={
                                        toggleRewriteData
                                            ? { marginTop: "30px" }
                                            : {}
                                    }
                                    type="submit"
                                >
                                    Send Data
                                </Button>
                            )}
                        </li>
                        <section className="menu_user_button_block">
                            {!toggleRewriteData && (
                                <>
                                    <Button
                                        variant="contained"
                                        type="button"
                                        onClick={() =>
                                            setToggleRewriteData(
                                                (prev) => !prev
                                            )
                                        }
                                    >
                                        Rewrite Training Data
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        type="button"
                                        onClick={async () => {
                                            await dispatch(logout())
                                            await navigate("/")
                                        }}
                                        sx={{ marginTop: "15px" }}
                                    >
                                        Sing out
                                    </Button>
                                </>
                            )}
                        </section>
                    </ul>
                )}
            </form>
        </>
    )
}
export default MenuUser
