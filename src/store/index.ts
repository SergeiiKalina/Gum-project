import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import trainingSlice from "./filterTrainingSlice"
import generatorTrainingSlice from "./generatorTrainingReducer"
import toolkitSlice from "./menuSlice"

const rootReducer = combineReducers({
    showMenu: toolkitSlice,
    training: generatorTrainingSlice,
    filterTraining: trainingSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
