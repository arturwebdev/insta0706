import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "./usersApi";



const usersSlice = createSlice({
    name: 'users',
    initialState:{
        usersData:[],
        isLoad:false,
        currentUser:null
    },
    reducers: {
        login (state,{payload: {login,password}}) {
            state.currentUser = state.usersData.find(user => (user.username === login || user.email === login) && user.password === password) ?? null
        },
        logout (state,{payload}) {
            state.currentUser = null
        },
        addPost (state, {payload}) {
            const idx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            state.usersData[idx].userPosts.unshift({...payload})
            state.currentUser.userPosts.unshift({ ...payload })
        },
        deletePost(state, {payload}) {
            const idx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            state.usersData[idx].userPosts = [...state.usersData[idx].userPosts.filter(el => el.id !== payload)]
            state.currentUser.userPosts = [...state.currentUser.userPosts.filter(el => el.id !== payload)]
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state,{payload}) => {
            return {
                ...state,
                isLoad: true
            }
        },
        [fetchUsers.fulfilled]: (state,{payload}) => {
            return {
                ...state,
                usersData: [...payload],
                isLoad: false
            }
        }
    }
})

export const  selectUsers = state => state.users

export const { login, logout, addPost } = usersSlice.actions

export const usersReducer = usersSlice.reducer