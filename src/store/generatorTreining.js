const defaultState = {
    arr: [],
    bul: false,
    bulTextArea: false,
    formData: {},
    step: 1,
    textPlan: '',
}

const WRITE_ARR = 'WRITE_ARR'
const CHANGE_BUL = 'CHANGE_BUL'
const CHANGE_BUL_TEXTAREA = 'CHANGE_BUL_TEXTAREA'
const CHANGE_COMPLETED = 'CHANGE_COMPLETED'
const CHANGE_STEPFORM = 'CHANGE_STEPFORM'
const WRITE_FORM_DATA = 'WRITE_FORM_DATA'
const WRITE_TXT_PLAN = 'WRITE_TXT_PLAN'
export const trainingReduser = (state = defaultState, action) => {
    switch (action.type) {
        case WRITE_ARR:
            return { ...state, arr: action.payload }
        case CHANGE_BUL:
            return { ...state, bul: action.payload }
        case CHANGE_BUL_TEXTAREA:
            return { ...state, bulTextArea: action.payload }
        case CHANGE_COMPLETED:
            return { ...state, arr: action.payload }
        case WRITE_FORM_DATA:
            return { ...state, formData: action.payload }
        case CHANGE_STEPFORM:
            return { ...state, step: action.payload }
        case WRITE_TXT_PLAN:
            return { ...state, textPlan: action.payload }
        default:
            return state
    }
}

export const writeArr = (payload) => ({ type: WRITE_ARR, payload })
export const writeTxtPlan = (payload) => ({ type: WRITE_TXT_PLAN, payload })
export const writeFormData = (payload) => ({ type: WRITE_FORM_DATA, payload })
export const chandeCompleted = (payload) => ({
    type: CHANGE_COMPLETED,
    payload,
})
export const chandeStepForm = (payload) => ({
    type: CHANGE_STEPFORM,
    payload,
})
export const changeBul = (payload) => ({ type: CHANGE_BUL, payload })
export const changeBulTextArea = (payload) => ({
    type: CHANGE_BUL_TEXTAREA,
    payload,
})
