import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUserAPI } from "../models/response/IUser"
import AuthService from "../services/AuthService"
import axios from "axios"
import { AuthResponse } from "../models/response/AuthResponse"
import { API_URL } from "../http"
export interface IRegistrationData {
    email: string
    name?: string
    password: string
    sex?: string
    age?: number
    benchPress?: number
    deadLift?: number
    goal?: string
    lifestyle?: string
    problems?: string[]
    pullUp?: number
    sitUp?: number
    squat?: number
    weight?: string | number
    bodyType?: string
    pushUpQuantity?: number
    squatQuantity?: number
    fitnessLevel?: number
    bodyMassIndex?: number
    inventory?: string[]
}

const initialState: IInitialStateAuthorizationSlice = {
    user: {
        email: "",
        id: "",
        isActivated: false,
        name: "",
    },
    isAuth: false,
    isLoading: false,
    error: "",
    registrationData: {
        email: "",
        name: "",
        password: "",
        sex: "",
        age: 0,
        benchPress: 0,
        deadLift: 0,
        goal: "",
        lifestyle: "",
        problems: [""],
        pullUp: 0,
        sitUp: 0,
        squat: 0,
        weight: "",
        bodyType: "",
        pushUpQuantity: 0,
        squatQuantity: 0,
        fitnessLevel: 1,
        bodyMassIndex: 2,
        inventory: [""],
    },
}

export interface IInitialStateAuthorizationSlice {
    user: IUserAPI | undefined
    isAuth: boolean
    isLoading: boolean
    error: string | undefined
    registrationData: IRegistrationData
}

export interface IPropertyRegistration {
    email: string
    password: string
    name: string
}
export interface IPropertyLogin {
    email: string
    password: string
}

export const login = createAsyncThunk(
    "authorizationSlice/login",
    async ({ email, password }: IPropertyLogin) => {
        try {
            const response = await AuthService.login(email, password)

            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem("name", response.data.user.name)

            localStorage.setItem("email", response.data.user.email)
            return response.data.user
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }
)

export const registration = createAsyncThunk(
    "authorizationSlice/registration",
    async ({ email, password, name }: IPropertyRegistration) => {
        try {
            const defaultFirstName = name || "user"

            const response = await AuthService.registration(
                email,
                password,
                defaultFirstName
            )

            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem("name", response.data.user.name)
            localStorage.setItem("email", response.data.user.email)
            return response.data.user
        } catch (error) {
            throw error
        }
    }
)
export const logout = createAsyncThunk(
    "authorizationSlice/logout",
    async () => {
        try {
            await AuthService.logout()
            localStorage.clear()

            return undefined
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    "authorizationSlice/checkAuth",
    async () => {
        try {
            const response = await axios.get<AuthResponse>(
                `${API_URL}/user/refresh`,
                { withCredentials: true }
            )
            localStorage.setItem("token", response.data.accessToken)
            return response.data.user
        } catch (error: any) {
            throw new Error("User not login")
        }
    }
)

const authorizationSlice = createSlice({
    name: "authorizationSlice",
    initialState,
    reducers: {
        toggleIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        writeRegistrationData(state, action: PayloadAction<IRegistrationData>) {
            state.registrationData = action.payload
        },
    },
    extraReducers: (build) => {
        build
            .addCase(login.fulfilled, (state, action: any) => {
                if (action.payload) {
                    state.user = action.payload
                    state.isAuth = true
                    state.isLoading = false
                }
            })
            .addCase(login.rejected, (state, action) => {
                console.error("Login failed:", action.error)
                state.user = undefined
                state.isAuth = false
                state.isLoading = false
            })
            .addCase(registration.fulfilled, (state, action: any) => {
                state.user = action.payload
                state.isAuth = true
                state.isLoading = false
            })
            .addCase(registration.rejected, (state, action) => {
                console.error("Registration failed:", action.error)
                state.error = action.error.message
                state.user = undefined
                state.isAuth = false
                state.isLoading = false
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.user = action.payload
                state.isAuth = false
                state.isLoading = false
            })
            .addCase(checkAuth.fulfilled, (state, action: any) => {
                state.user = action.payload
                state.isAuth = true
                state.isLoading = false
            })
            .addCase(checkAuth.rejected, (state, action: any) => {
                state.user = action.payload
                state.isAuth = false
                state.isLoading = false
                localStorage.clear()
            })
    },
})

export const { toggleIsLoading, writeRegistrationData } =
    authorizationSlice.actions

export default authorizationSlice.reducer
