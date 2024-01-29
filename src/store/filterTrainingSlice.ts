import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITraining } from "../data/data"
import { API_URL } from "../http"

export interface IInitialState {
    data: (string | boolean)[]
    arrTraining: ITraining[]
    training: ITraining[]
    activeId: number
    isChecked: string[]
    categories: string[]
}

export const fetchTraining = createAsyncThunk(
    "trainingSlice/fetchTraining",
    async () => {
        const response = await fetch(API_URL + "/exercise")
        let res = await response.json()

        return res
    }
)

export const fetchCategories = createAsyncThunk(
    "trainingSlice/fetchCategories",

    async () => {
        try {
            const response = await fetch(API_URL + "/exercise/category")

            let res = await response.json()
            return res
        } catch (error) {
            console.error(error)
        }
    }
)
export const fetchFilter = createAsyncThunk(
    "trainingSlice/fetchFilter",

    async (data: (string | boolean)[]) => {
        try {
            const response = await fetch(API_URL + "/exercise/filter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

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
    isChecked: ["back"],
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
        changeIsChecked(state, action: PayloadAction<string[]>) {
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
                state.categories = action.payload
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
