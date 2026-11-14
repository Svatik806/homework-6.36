import { createSelector } from "@reduxjs/toolkit"

const selectAllPeople = state => state.people.items
const selectSearchQuery = state => state.filters.searchQuery
const selectGenderFilter = state => state.filters.genderFilter

export const selectFilteredPeople = createSelector(
    [selectAllPeople, selectSearchQuery, selectGenderFilter],
    (people, searchQuery, genderFilter) => {
        return people.filter(person => {
            const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesGender = genderFilter === "all" || person.gender === genderFilter
            return matchesSearch && matchesGender
        })
    }
)