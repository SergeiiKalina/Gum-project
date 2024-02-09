import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IDataUserGoogle {
    displayName: string | null
    photoURL: string | null
}

export interface IUserData {
    name: string
    email: string
    IsActivated: boolean
    sex: string
    squat: string
    benchPress: string
    deadLift: string
    pullUp: string
    sitUp: string
    weight: string
    placeToWorkout: string
    lifestyle: string
    goal: string
    problems: string[]
    age: number
    registrationDate?: string
    pushUpQuantity?: string
    squatQuantity: string
}

export interface IUsersSlice {
    dataUserGoogle: IDataUserGoogle
    dataUser: IUserData
}

const initialState: IUsersSlice = {
    dataUserGoogle: {
        displayName: "",
        photoURL: "",
    },
    dataUser: {
        name: "",
        email: "",
        IsActivated: false,
        sex: "",
        squat: "",
        benchPress: "",
        deadLift: "",
        pullUp: "",
        sitUp: "",
        weight: "",
        placeToWorkout: "",
        lifestyle: "",
        goal: "",
        problems: [],
        age: 1.1,
        squatQuantity: "0",
        pushUpQuantity: "0",
    },
}

const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        writeDataUserGoogle(state, action: PayloadAction<IDataUserGoogle>) {
            state.dataUserGoogle = action.payload
        },
        writeDataUser(state, action: PayloadAction<IUserData>) {
            state.dataUser = action.payload
        },
    },
})
export const { writeDataUserGoogle, writeDataUser } = usersSlice.actions
export default usersSlice.reducer
