import styled from "@emotion/styled"
import { TextField } from "@mui/material"
import { lime, purple } from "@mui/material/colors"
import { createTheme } from "@mui/system"

export const theme = createTheme({
    palette: {
        primary: lime,
        secondary: purple,
    },
    breakpoints: {
        values: {
            xs: 460,
            sm: 560,
            md: 767,
            lg: 1248,
            xl: 1536,
        },
    },
})

export const StyledTextField = styled(TextField)({
    width: "60%",
    margin: "20px auto 0 auto",
    border: "none",
    [theme.breakpoints.down("md")]: {
        width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "90%",
    },
    "&.registration_input": {
        width: "100%",
    },

    "& .MuiOutlinedInput-root": {
        "&:hover .MuiInputBase-input ": {
            borderBottom: "1px solid #42a5f5",
        },
        "&.Mui-focused": {},
        "& .MuiInputBase-input": {
            color: "white",
            borderBottom: "1px solid #fefefe",
        },
    },
    "&.registration_input ": {
        color: "white",
        ".MuiInputBase-input": {
            padding: "16px 0 16px 30px",
        },
    },
    "&.registration_input .MuiInputLabel-root": {
        marginLeft: "20px",
    },
    "& .MuiInputLabel-root": {
        color: "white",
    },
    "&:hover .MuiInputLabel-root": {
        color: "#42a5f5",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
})
