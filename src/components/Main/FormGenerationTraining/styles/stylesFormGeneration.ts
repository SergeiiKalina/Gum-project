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
    width: "20%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
        width: "30%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "40%",
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

export const stylesInputLabelSelect = { color: "white", border: "none" }

export const stylesRadio = { color: "white" }

export const stylesFormLabelRadioGroup = {
    margin: "20px auto 0 auto",
    color: "white",
}

export const stylesButtonWrapper = {
    width: "100%",
    display: "flex",
    margin: "24px auto 0 auto",
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
