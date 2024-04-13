import { IconButton, Paper, TextField } from "@mui/material"
import { theme } from "../../../Styled-components/Styled"
import SearchIcon from "@mui/icons-material/Search"
import { ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import {
    changeCurrentPage,
    fetchSearch,
    writeSearchData,
} from "../../../../store/filterTrainingSlice"
import { useSelector } from "react-redux"
import { IFilterTrainingSlice } from "../../Training/Training"

function SearchExerciseField() {
    const dispatch = useDispatch<any>()
    const searchData = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.searchData
    )
    const handleSearchField = async (e: ChangeEvent<HTMLInputElement>) => {
        let str: string = e.target.value
        dispatch(writeSearchData(str))
        await dispatch(fetchSearch(str))
        dispatch(changeCurrentPage(1))
    }
    return (
        <Paper
            component="form"
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "400px",
                minWidth: "250px",
                border: "1px white solid",
                borderRadius: "20px",
                backgroundColor: "transparent",
                [theme.breakpoints.down("xs")]: {
                    minWidth: "200px",
                },
            }}
        >
            <TextField
                placeholder="Search..."
                variant="outlined"
                autoComplete="off"
                type="search"
                value={searchData}
                onChange={handleSearchField}
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiInputBase-input": {
                        color: "white",
                    },
                }}
            />
            <IconButton
                type="button"
                sx={{
                    position: "absolute",
                    right: "10px",
                    color: "white",
                }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchExerciseField
