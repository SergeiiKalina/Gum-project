import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    logout,
    rewriteAuthUser,
    toggleIsLoading,
} from "../../../store/authorizationSlice"

import axios from "axios"
import { StyledTextField } from "../../Styled-components/Styled"
import { SubmitHandler, useForm } from "react-hook-form"
import CircularProgress from "@mui/material/CircularProgress"
import { Button } from "@mui/material"
import "./menuUser.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"

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
    const userData = useSelector((state: RootState) => state.authSlice.authUser)
    const [toggleRewriteData, setToggleRewriteData] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<IRewriteUserData>()
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const isLoading = useSelector(
        (state: RootState) => state.authSlice.isLoading
    )
    useEffect(() => {
        dispatch(toggleIsLoading(true))
        setTimeout(() => dispatch(toggleIsLoading(false)), 500)
    }, [dispatch])
    const onSubmit: SubmitHandler<IRewriteUserData> = async (data) => {
        try {
            await dispatch(toggleIsLoading(true))
            const googleEmail = localStorage.getItem("googleEmail")

            if (googleEmail) {
                const url = `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem(
                    "googleUserId"
                )}.json?auth=${localStorage.getItem("googleToken")}`

                const response = await axios.patch(url, {
                    ...userData,
                    mainInfo: {
                        ...userData?.mainInfo,
                        ...data,
                    },
                })
                dispatch(rewriteAuthUser(response.data))
            }
        } catch (error) {
            console.log(error)
            localStorage.clear()
        } finally {
            await dispatch(toggleIsLoading(false))
            await setToggleRewriteData(false)
        }
    }

    return (
        <form
            className="menu_user_wrapper"
            id="userMenu"
            onSubmit={handleSubmit(onSubmit)}
        >
            {isLoading && (
                <CircularProgress
                    color="info"
                    sx={{
                        position: "absolute",
                        top: "calc(50% - 72px )",
                        left: "calc(50% - 20px )",
                    }}
                />
            )}
            {!!userData?.mainInfo && isLoading ? (
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
                              new Date(userData.registrationDate).toDateString()
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
                                    type: "text",
                                }}
                                {...register("squat")}
                            />
                        ) : (
                            <>
                                1PR Squat:
                                <span>{userData?.mainInfo.squat + "kg"}</span>
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
                                <span>
                                    {userData?.mainInfo.benchPress + "kg"}
                                </span>
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
                                <span>
                                    {userData?.mainInfo.deadLift + "kg"}
                                </span>
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
                                <span>
                                    {userData?.mainInfo.pullUp + "reps"}
                                </span>
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
                                    {userData?.mainInfo.pushUpQuantity + "reps"}
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
                                <span>{userData?.mainInfo.sitUp + "reps"}</span>
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
                                    {userData?.mainInfo.squatQuantity + "reps"}
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
                                        setToggleRewriteData((prev) => !prev)
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
    )
}
export default MenuUser
