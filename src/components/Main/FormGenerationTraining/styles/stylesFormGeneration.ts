import { theme } from "../../../Styled-components/Styled"

export const stylesField = {
    width: "60%",
    margin: "20px auto 0 auto",
    [theme.breakpoints.down("md")]: {
        width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "90%",
    },
}
export const stylesFieldRegistrationForm = {
    width: "100%",
    margin: "20px auto 0 auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "100%",
    },
}

export const styledRadioGroup = {
    width: "15%",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px auto 0 auto",

    [theme.breakpoints.down("xl")]: {
        width: "20%",
    },
    [theme.breakpoints.down("lg")]: {
        width: "30%",
    },
    [theme.breakpoints.down("md")]: {
        width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "70%",
    },
}

export const stylesFormButton = {
    width: "30%",
    padding: "40px 0",
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
        width: "50%",
    },
    [theme.breakpoints.down("md")]: {
        width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "95%",
    },
}

export const stylesLabelRadio = { color: "white", margin: "0" }

export const stylesSelect = {
    boxShadow: "none",
    color: "white",
    ".MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderBottom: "1px solid #fefefe",
        borderRadius: "0px",
    },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderBottom: "1px solid #42a5f5",
    },
    ".MuiSvgIcon-root": {
        color: "white",
    },
}
export const stylesSelectError = {
    boxShadow: "none",
    color: "white",
    ".MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderBottom: "1px solid red",
        borderRadius: "0px",
    },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderBottom: "1px solid #42a5f5",
    },
    ".MuiSvgIcon-root": {
        color: "white",
    },
}

export const stylesInputLabelSelect = { color: "white", border: "none" }

export const stylesRadio = { color: "white" }

export const stylesFormLabelRadioGroup = {
    margin: "20px auto 0 auto",
    color: "white",
}

export const stylesButtonWrapper = {
    width: "100%",
    display: "flex",
    margin: "12px auto 0 auto",
    paddingBottom: "20px",
}

export const stylesFormControlLabel = {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    color: "white",
    margin: "0",
}
export const stylesCheckBox = { color: "white" }

export const styleOutlinedInput = {
    width: "100%",
    margin: "8px auto 0 auto",

    "& .MuiInputBase-input": {
        padding: "8px 0 8px 8px",
        color: "white",
        outline: "none",
    },

    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid white",
    },
    "& .MuiInputAdornment-root": {
        margin: "0",
        color: "white",
    },
    "& fieldset": {
        borderColor: "white",
    },
    "&:hover.MuiInputBase-root fieldset": {
        borderColor: "white",
    },
    "& p": {
        color: "white",
    },
}

export const formTrainingStyleForm = {
    width: "300px",
    zIndex: 1,
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid white",
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "white",
    },
    "& .MuiFormLabel-root": {
        color: "white",
    },
    "& .MuiInputBase-input": {
        color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid white",
    },

    "& fieldset": {
        borderColor: "white",
    },

    "& .MuiSvgIcon-root": {
        color: "white",
    },
}

export const formTrainingSelect = {
    zIndex: 2,
    "&:hover.MuiInputBase-root fieldset": {
        borderColor: "white",
    },
}

export const paginationStyle = {
    "&.MuiPagination-root li button": {
        color: "white",
        borderColor: "white",
        minWidth: "28px",
    },
    "&.MuiPagination-root li button.Mui-selected": {
        color: "#1976d2",
        border: "1px solid rgba(25, 118, 210, 0.5)",
        backgroundColor: "rgba(25, 118, 210, 0.12)",
    },
}
