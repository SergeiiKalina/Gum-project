import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { filterTrainingReduser } from './filterTrainingReduser'
import { trainingReduser } from './generatorTreiningReduser'
import { menuReduser } from './menuReduser'

const rootReduser = combineReducers({
    showMenu: menuReduser,
    training: trainingReduser,
    filterTraining: filterTrainingReduser,
})

export const store = configureStore({
    reducer: rootReduser,
})
