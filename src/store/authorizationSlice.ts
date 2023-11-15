import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUserAPI } from "../models/response/IUser"
import AuthService from "../services/AuthService"
import axios from "axios"
import { AuthResponse } from "../models/response/AuthResponse"
import { API_URL } from "../http"

const initialState: IInitialStateAuthorizationSlice = {
    user: { email: "", id: "", isActivated: false },
    isAuth: false,
    isLoading: false,
}

export interface IInitialStateAuthorizationSlice {
    user: IUserAPI | undefined
    isAuth: boolean
    isLoading: boolean
}

export interface IPropertyAuth {
    email: string
    password: string
}

export const login = createAsyncThunk(
    "authorizationSlice/login",
    async ({ email, password }: IPropertyAuth) => {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem("token", response.data.accessToken)
            return response.data.user
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }
)

export const registration = createAsyncThunk(
    "authorizationSlice/registration",
    async ({ email, password }: IPropertyAuth) => {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem("token", response.data.accessToken)
            return response.data.user
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }
)
export const logout = createAsyncThunk(
    "authorizationSlice/logout",
    async () => {
        try {
            await AuthService.logout()
            localStorage.removeItem("token")
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
                `${API_URL}/api/refresh`,
                { withCredentials: true }
            )

            localStorage.setItem("token", response.data.accessToken)
            return response.data.user
        } catch (error: any) {
            console.log(error.response?.data?.message)
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
    },
})

export const { toggleIsLoading } = authorizationSlice.actions

export default authorizationSlice.reducer
