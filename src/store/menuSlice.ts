import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IMenuState {
    showMenu: boolean
    arrowLeftHidden: boolean
    arrowRightHidden: boolean
}

const initialState: IMenuState = {
    showMenu: false,
    arrowLeftHidden: false,
    arrowRightHidden: false,
}

const toolkitSlice = createSlice({
    name: "menuReducer",
    initialState,
    reducers: {
        showMenu(state, action: PayloadAction<boolean>) {
            state.showMenu = action.payload
        },
        arrowLHidden(state, action: PayloadAction<boolean>) {
            state.arrowLeftHidden = action.payload
        },
        arrowRHidden(state, action: PayloadAction<boolean>) {
            state.arrowRightHidden = action.payload
        },
    },
})

export const { showMenu, arrowLHidden, arrowRHidden } = toolkitSlice.actions

export default toolkitSlice.reducer
