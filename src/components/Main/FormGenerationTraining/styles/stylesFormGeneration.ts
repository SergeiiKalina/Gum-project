import { theme } from "../../../Styled-components/Styled"

const typeGadget = document.querySelector(".touch")

export const styledToggleButton = {
    width: "90%",
    padding: "6px",
    borderColor: "white",
    borderRadius: "15px",
    color: "white",
    marginTop: "12px",
    [theme.breakpoints.down("md")]: {
        width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "92%",
    },
    "&.Mui-selected": {
        borderColor: "#42a5f5",
        color: "#42a5f5",
    },
}

export const styledToggleButtonWrapper = {
    width: "100%",
    marginTop: "10px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    "& .MuiToggleButtonGroup-grouped:not(:last-of-type)": {
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px",
    },
    "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderLeft: "1px solid white",
        color: "white",
        marginLeft: "0",
    },
    "& .Mui-selected.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderLeft: "1px solid #42a5f5",
        color: "#42a5f5",
        marginLeft: "0",
    },
    "& .MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected":
        {
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            color: "#42a5f5",
            border: "1px solid #42a5f5",
        },
}

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
    width: "1000px",
    height: "300px",
    margin: "0 auto",

    [theme.breakpoints.down("lg")]: {
        width: "800px",
    },
    [theme.breakpoints.down("md")]: {
        width: "700px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "500px",
        height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
        width: "99%",
        height: "200px",
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
    width: "50%",
    maxWidth: "400px",
    minWidth: "250px",
    zIndex: 1,
    borderRadius: "20px",
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
        borderRadius: "20px",
    },

    "& .MuiSvgIcon-root": {
        color: "white",
    },
    [theme.breakpoints.down("md")]: typeGadget
        ? {}
        : {
              display: "none",
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
