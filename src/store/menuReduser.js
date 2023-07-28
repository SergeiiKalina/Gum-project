const defaultState = {
    showMenu: false,
    arrowLeftHidden: false,
    arrowRightHidden: false,
}

const SHOW_MENU = 'SHOW_MENU'
const ARROW_L_HIDDEN = 'ARROW_L_HIDDEN'
const ARROW_R_HIDDEN = 'ARROW_R_HIDDEN'
export const menuReduser = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return { ...state, showMenu: action.payload }
        case ARROW_L_HIDDEN:
            return { ...state, arrowLeftHidden: action.payload }
        case ARROW_R_HIDDEN:
            return { ...state, arrowRightHidden: action.payload }
        default:
            return state
    }
}

export const showMenu = (payload) => ({ type: SHOW_MENU, payload })
export const arrowLHidden = (payload) => ({ type: ARROW_L_HIDDEN, payload })
export const arrowRHidden = (payload) => ({ type: ARROW_R_HIDDEN, payload })
