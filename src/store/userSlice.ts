import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IDataUser {
    displayName: string | null
    photoURL: string | null
}

export interface IUsersSlice {
    dataUser: IDataUser
}

const initialState: IUsersSlice = {
    dataUser: {
        displayName: "",
        photoURL: "",
    },
}

const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        writeDataUser(state, action: PayloadAction<IDataUser>) {
            state.dataUser = action.payload
        },
    },
})
export const { writeDataUser } = usersSlice.actions
export default usersSlice.reducer
