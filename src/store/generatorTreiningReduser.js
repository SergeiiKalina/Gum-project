import { createSlice } from '@reduxjs/toolkit'

const generatorTreiningSlice = createSlice({
    name: 'generatorTreiningSlice',
    initialState: {
        arr: [],
        bul: false,
        bulTextArea: false,
        formData: {},
        step: 1,
        textPlan: '',
    },
    reducers: {
        writeArr(state, action) {
            state.arr = action.payload
        },
        writeTxtPlan(state, action) {
            state.textPlan = action.payload
        },
        writeFormData(state, action) {
            state.formData = action.payload
        },
        chandeCompleted(state, action) {
            state.arr = action.payload
        },
        chandeStepForm(state, action) {
            state.step = action.payload
        },
        changeBul(state, action) {
            state.bul = action.payload
        },
        changeBulTextArea(state, action) {
            state.bulTextArea = action.payload
        },
    },
})

export const {
    writeArr,
    writeTxtPlan,
    writeFormData,
    chandeCompleted,
    chandeStepForm,
    changeBul,
    changeBulTextArea,
} = generatorTreiningSlice.actions

export default generatorTreiningSlice.reducer
