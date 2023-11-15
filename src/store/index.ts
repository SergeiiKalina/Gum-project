import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import trainingSlice from "./filterTrainingSlice"
import generatorTrainingSlice from "./generatorTrainingReducer"
import toolkitSlice from "./menuSlice"
import userSlice from "./userSlice"
import authorizationSlice from "./authorizationSlice"

const rootReducer = combineReducers({
    showMenu: toolkitSlice,
    training: generatorTrainingSlice,
    filterTraining: trainingSlice,
    usersSlice: userSlice,
    authSlice: authorizationSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
