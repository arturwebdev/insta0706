import {createSlice} from "@reduxjs/toolkit";
import {fetchPost} from "./postApi";

const postSlice = createSlice({
    name:'post',
    initialState:{
        isLoading:false,
        postData: []
    },
    reducers: {
        addComment (state,{payload: {id,userName,body}}) {
            const index = state.postData.findIndex(post => post.id === id)
            state.postData[index].comments.push({
                id: new Date().getTime().toString(),
                body,userName
            })
        },
        addPost (state, {payload}){
            state.postData.unshift({...payload})
        },
        deletePost(state, {payload}){
            state.postData = [...state.postData.filter(el => el.id !== payload)]
        }
    },
    extraReducers: {
        [fetchPost.pending]: (state,{payload}) => {
            return {
                ...state,
                isLoading: true,
            }
        },
        [fetchPost.fulfilled]: (state,{payload}) => {
            return {
                ...state,
                postData: [...payload],
                isLoading: false
            }
        }
    }
})

export const  selectPost = state => state.post

export const  { addComment } = postSlice.actions

export const postReducer = postSlice.reducer