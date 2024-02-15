import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITraining } from "../data/data"
import { API_URL } from "../http"

export interface IInitialState {
    allFilteredExercises: ITraining[]
    activeId: number
    isChecked: string[]
    categories: string[]
    searchData: string
    currentPage: number
}

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

    async (data: string[]) => {
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
export const fetchSearch = createAsyncThunk(
    "trainingSlice/fetchSearch",

    async (data: string) => {
        try {
            const response = await fetch(API_URL + "/exercise/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data }),
            })
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            let res = await response.json()
            return res
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState: IInitialState = {
    allFilteredExercises: [],

    activeId: 1,
    isChecked: ["back"],
    categories: [],
    searchData: "",
    currentPage: 1,
}
const trainingSlice = createSlice({
    name: "trainingSlice",
    initialState,
    reducers: {
        writeSearchData(state, action: PayloadAction<string>) {
            state.searchData = action.payload
        },
        changeCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
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
            state.allFilteredExercises = action.payload
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.allFilteredExercises = action.payload
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.allFilteredExercises = action.payload
                state.isChecked = []
            })
    },
})

export const {
    changeCurrentPage,
    writeCategories,
    changeActiveId,
    changeIsChecked,
    writeArrTraining,
    writeSearchData,
} = trainingSlice.actions

export default trainingSlice.reducer
