import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IDataUserGoogle {
    displayName: string | null
    photoURL: string | null
}

export interface IUserData {
    firstName: string
    lastName: string
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
        firstName: "",
        lastName: "",
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
