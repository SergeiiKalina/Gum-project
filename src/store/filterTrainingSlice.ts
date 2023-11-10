import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITraining } from "../data/data"

export interface IIsChecked {
    [key: string]: string | boolean
}

export interface IInitialState {
    data: (string | boolean)[]
    arrTraining: ITraining[]
    training: ITraining[]
    activeId: number
    isChecked: IIsChecked
    categories: string[]
}

export const fetchTraining = createAsyncThunk(
    "trainingSlice/fetchTraining",
    async () => {
        const response = await fetch(
            "https://urchin-app-j6t9a.ondigitalocean.app/exercise"
        )
        let res = await response.json()

        return res
    }
)

export const fetchCategories = createAsyncThunk(
    "trainingSlice/fetchCategories",
    async () => {
        const response = await fetch(
            "https://urchin-app-j6t9a.ondigitalocean.app/category"
        )
        let res = await response.json()
        return res
    }
)
export const fetchFilter = createAsyncThunk(
    "trainingSlice/fetchFilter",

    async (data: (string | boolean)[]) => {
        try {
            const response = await fetch(
                "https://urchin-app-j6t9a.ondigitalocean.app/filter",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )

            let res = await response.json()

            return res
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState: IInitialState = {
    data: ["legs"],
    arrTraining: [],
    training: [],
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchTraining.fulfilled, (state, action) => {
                state.training.push(...action.payload)
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories.push(...action.payload)
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.arrTraining = action.payload
            })
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
