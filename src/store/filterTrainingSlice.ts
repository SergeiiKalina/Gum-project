import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITraining } from "../data/data"

export interface IIsChecked {
    [key: string]: string | boolean
}

export interface IInitialState {
    data: (string | boolean)[]
    arrTraining: ITraining[]
    activeId: number
    isChecked: IIsChecked
    categories: string[]
}

const initialState: IInitialState = {
    data: ["legs"],
    arrTraining: [],
    activeId: 1,
    isChecked: {
        legs: "legs",
        cardio: false,
        functional: false,
        press: false,
        back: false,
        biceps: false,
        pectoral: false,
        shoulders: false,
        triceps: false,
    },
    categories: [],
}
const trainingSlice = createSlice({
    name: "trainingSlice",
    initialState,
    reducers: {
        writeData(state, action: PayloadAction<(string | boolean)[]>) {
            state.data = action.payload
        },
        writeCategories(state, action: PayloadAction<string[]>) {
            state.categories = action.payload
        },
        changeActiveId(state, action: PayloadAction<number>) {
            state.activeId = action.payload
        },
        changeIsChecked(state, action: PayloadAction<IIsChecked>) {
            state.isChecked = action.payload
        },
        writeArrTraining(state, action: PayloadAction<ITraining[]>) {
            state.arrTraining = action.payload
        },
    },
})

export const {
    writeData,
    writeCategories,
    changeActiveId,
    changeIsChecked,
    writeArrTraining,
} = trainingSlice.actions

export default trainingSlice.reducer
