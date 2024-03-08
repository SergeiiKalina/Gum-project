import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUserData {
    name: string
    email: string
    IsActivated?: boolean
    photo?: string | null
    id?: string

    mainInfo: {
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
    registrationDate?: string
}

export interface IUsersSlice {
    dataUser: IUserData
}

const initialState: IUsersSlice = {
    dataUser: {
        name: "",
        email: "",
        mainInfo: {
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
        IsActivated: false,
    },
}

const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        writeDataUser(state, action: PayloadAction<IUserData>) {
            state.dataUser = action.payload
        },
    },
})
export const { writeDataUser } = usersSlice.actions
export default usersSlice.reducer
