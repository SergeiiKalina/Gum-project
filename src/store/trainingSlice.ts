import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ITrainingSliceTwo {
    totalWeight: number
}

const initialState: ITrainingSliceTwo = {
    totalWeight: 0,
}

const trainingSliceTwo = createSlice({
    name: "trainingSlice",
    initialState,
    reducers: {
        writeTotalWeight(state, action: PayloadAction<number>) {
            state.totalWeight = action.payload
        },
    },
})
export const { writeTotalWeight } = trainingSliceTwo.actions
export default trainingSliceTwo.reducer
