import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { menuReduser } from './menuReduser'

const rootReduser = combineReducers({
    showMenu: menuReduser,
})

export const store = configureStore({
    reducer: rootReduser,
})
