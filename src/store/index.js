import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { trainingReduser } from './generatorTreining'
import { menuReduser } from './menuReduser'

const rootReduser = combineReducers({
    showMenu: menuReduser,
    training: trainingReduser,
})

export const store = configureStore({
    reducer: rootReduser,
})
