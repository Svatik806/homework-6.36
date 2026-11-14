import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        searchQuery: "",
        genderFilter: "all"
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setGenderFilter: (state, action) => {
            state.genderFilter = action.payload
        }
    }
})

export const { setSearchQuery, setGenderFilter } = filtersSlice.actions
export default filtersSlice.reducer