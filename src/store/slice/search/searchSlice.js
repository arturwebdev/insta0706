import {createSlice, getDefaultMiddleware} from "@reduxjs/toolkit";

// const ignoreSpacesInSearch = (store) => (next) => (action) => {
//     if (action.type === 'search/toggleSearch') {
//         action.payload = action.payload.replaceAll(' ', '')
//     }
//     next(action)
// }

const searchSlice = createSlice({
    name:'search',
    initialState:'',
    reducers: {
        toggleSearch(state, {payload}) {
            return payload
        },
        resetSearch() {
            return ''
        }
    },
    // middleware: (getDefaultMiddleware) => {
    //     return[
    //         ...getDefaultMiddleware(),ignoreSpacesInSearch
    //     ]
    // }
})

export const selectSearch = state => state.search

export const { resetSearch, toggleSearch } = searchSlice.actions

export const searchReduser = searchSlice.reducer