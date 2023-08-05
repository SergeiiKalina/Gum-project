import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import trainingSlice from './filterTrainingSlice'
import generatorTreiningSlice from './generatorTreiningReduser'
import toolkitSlice from './menuSlice'

const rootReduser = combineReducers({
    showMenu: toolkitSlice,
    training: generatorTreiningSlice,
    filterTraining: trainingSlice,
})

export const store = configureStore({
    reducer: rootReduser,
})
