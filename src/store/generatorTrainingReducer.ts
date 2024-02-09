import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITraining } from "../data/data"

export interface IGeneratorTrainingSliceData {
    arr: ITraining[] | null
    formData: IFormData
    startTrainingIndex: number
    thisDragElement: ITraining | null
    currentExerciseId: string
}
export interface IFormData {
    age?: number
    benchPress?: string
    deadLift?: string
    email: string
    firstName: string
    focus: string
    goal: string
    lastName: string
    lifestyle: string
    placeToWorkout: string
    problems: string[]
    pullUp?: string
    sex: string
    sitUp?: string
    squat?: string
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
    formData: {
        age: 0,
        benchPress: "",
        deadLift: "",
        email: "",
        firstName: "",
        focus: "",
        goal: "",
        lastName: "",
        lifestyle: "",
        placeToWorkout: "",
        problems: [""],
        pullUp: "",
        sex: "",
        sitUp: "",
        squat: "",
        weight: "",
        pushUpQuantity: "",
        squatQuantity: "",
        fitnessLevel: 0,
        bodyMassIndex: 0,
    },
    startTrainingIndex: 9999,
    thisDragElement: null,
    currentExerciseId: "",
}

const generatorTrainingSlice = createSlice({
    name: "generatorTrainingSlice",
    initialState,
    reducers: {
        writeCurrentVideoId(state, action: PayloadAction<string>) {
            state.currentExerciseId = action.payload
        },
        writeCurrentTraining(state, action: PayloadAction<any[]>) {
            state.arr = action.payload
        },
        writeFormData(state, action: PayloadAction<any>) {
            state.formData = action.payload
        },
        changeCompleted(state, action: PayloadAction<ITraining[]>) {
            state.arr = action.payload
        },
        setIndexStartTraining(state, action: PayloadAction<number>) {
            state.startTrainingIndex = action.payload
        },
        writeDragElement(state, action: PayloadAction<ITraining | null>) {
            state.thisDragElement = action.payload
        },
    },
})

export const {
    writeCurrentTraining,
    writeFormData,
    changeCompleted,
    setIndexStartTraining,
    writeDragElement,
    writeCurrentVideoId,
} = generatorTrainingSlice.actions

export default generatorTrainingSlice.reducer
