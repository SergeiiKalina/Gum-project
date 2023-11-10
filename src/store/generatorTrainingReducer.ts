import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITraining } from "../data/data"

export interface IGeneratorTrainingSliceData {
    arr: ITraining[]
    bul: boolean
    bulTextArea: boolean
    formData: IFormData
    step: number
    textPlan: string
    startTrainingIndex: number
    placeTraining: string
    sexTraining: string
}
export interface IFormData {
    age?: number
    benchPressWeight?: string
    deadLiftWeight?: string
    email: string
    firstName: string
    focus: string
    goal: string
    lastName: string
    lifestyle: string
    placeOfTraining: string
    problems: string[]
    pullUp?: string
    sex: string
    sitUp?: string
    squatWeight?: string
    weight?: string
    bodyType?: string
    pushUpQuantity?: string
    squatQuantity?: string
    fitnessLevel?: number
    bodyMassIndex?: number
    inventory?: string[]
}

const initialState: IGeneratorTrainingSliceData = {
    arr: [],
    bul: false,
    bulTextArea: false,
    formData: {
        age: 0,
        benchPressWeight: "",
        deadLiftWeight: "",
        email: "",
        firstName: "",
        focus: "",
        goal: "",
        lastName: "",
        lifestyle: "",
        placeOfTraining: "",
        problems: [""],
        pullUp: "",
        sex: "",
        sitUp: "",
        squatWeight: "",
        weight: "",
        pushUpQuantity: "",
        squatQuantity: "",
        fitnessLevel: 0,
        bodyMassIndex: 0,
    },
    step: 1,
    textPlan: "",
    startTrainingIndex: 9999,
    placeTraining: "",
    sexTraining: "",
}

let urlApi: string = "https://walrus-app-ijotx.ondigitalocean.app/exercise"

async function trainingApi(urlApi: string) {
    try {
        const response = await fetch(urlApi)

        if (!response.ok) {
            throw new Error(
                `Network response was not ok: ${response.statusText}`
            )
        }

        const exercise = await response.json()
    } catch (error) {
        console.error("Error fetching training data:", error.message)
    }
}

const generatorTrainingSlice = createSlice({
    name: "generatorTrainingSlice",
    initialState,
    reducers: {
        writeArr(state, action: PayloadAction<any[]>) {
            state.arr = action.payload
        },
        writeTxtPlan(state, action: PayloadAction<string>) {
            state.textPlan = action.payload
        },
        writeFormData(state, action: PayloadAction<any>) {
            state.formData = action.payload
        },
        changeCompleted(state, action: PayloadAction<ITraining[]>) {
            state.arr = action.payload
        },
        changeStepForm(state, action: PayloadAction<number>) {
            state.step = action.payload
        },
        changeBul(state, action: PayloadAction<boolean>) {
            state.bul = action.payload
        },
        changeBulTextArea(state, action: PayloadAction<boolean>) {
            state.bulTextArea = action.payload
        },
        setIndexStartTraining(state, action: PayloadAction<number>) {
            state.startTrainingIndex = action.payload
        },
        writePlaceTraining(state, action: PayloadAction<string>) {
            state.placeTraining = action.payload
        },
        writeSexTraining(state, action: PayloadAction<string>) {
            state.sexTraining = action.payload
        },
    },
})

export const {
    writeArr,
    writeTxtPlan,
    writeFormData,
    changeCompleted,
    changeStepForm,
    changeBul,
    changeBulTextArea,
    setIndexStartTraining,
    writePlaceTraining,
    writeSexTraining,
} = generatorTrainingSlice.actions

export default generatorTrainingSlice.reducer
