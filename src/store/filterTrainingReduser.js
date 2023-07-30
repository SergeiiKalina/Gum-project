const defaultState = {
    data: ['legs'],
    arrTraining: [],
    activeId: 1,
    isChecked: {
        legs: 'legs',
        cardio: false,
        functional: false,
        press: false,
        back: false,
        biceps: false,
        pectoral: false,
        shoulders: false,
        triceps: false,
    },
    categories: [],
}

const WRITE_DATA = 'WRITE_DATA'
const WRITE_ARR_TRAINING = 'WRITE_ARR_TRAINING'
const ACTIVE_ID = 'ACTIVE_ID'
const CHANGE_ISCHECKED = 'CHANGE_ISCHECKED'
const WRITE_CATEGORIES = 'WRITE_CATEGORIES'
export const filterTrainingReduser = (state = defaultState, action) => {
    switch (action.type) {
        case WRITE_DATA:
            return { ...state, data: action.payload }
        case WRITE_ARR_TRAINING:
            return { ...state, arrTraining: action.payload }
        case ACTIVE_ID:
            return { ...state, activeId: action.payload }
        case CHANGE_ISCHECKED:
            return { ...state, isChecked: action.payload }
        case WRITE_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state
    }
}

export const writeData = (payload) => ({ type: WRITE_DATA, payload })
export const writeCategories = (payload) => ({
    type: WRITE_CATEGORIES,
    payload,
})
export const changeActiveId = (payload) => ({ type: ACTIVE_ID, payload })
export const changeIsChecked = (payload) => ({
    type: CHANGE_ISCHECKED,
    payload,
})
export const writeArrTraining = (payload) => ({
    type: WRITE_ARR_TRAINING,
    payload,
})
