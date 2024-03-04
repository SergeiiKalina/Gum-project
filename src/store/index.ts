import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import generatorTrainingSlice, {
    IGeneratorTrainingSliceData,
} from "./generatorTrainingReducer"
import trainingSlice, { IInitialState } from "./filterTrainingSlice"
import userSlice, { IUsersSlice } from "./userSlice"
import authorizationSlice, {
    IInitialStateAuthorizationSlice,
} from "./authorizationSlice"

// Стан для кореневого редуктора
export interface RootState {
    training: IGeneratorTrainingSliceData
    filterTraining: IInitialState
    usersSlice: IUsersSlice
    authSlice: IInitialStateAuthorizationSlice
}

const rootReducer = combineReducers({
    training: generatorTrainingSlice,
    filterTraining: trainingSlice,
    usersSlice: userSlice,
    authSlice: authorizationSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
