import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {selectUsers} from "../users/usersSlice";

const messageSlice = createSlice({
    name:'message',
    initialState:{
        currentUserId: null,
        messageToUserId: null,
        allMessages:[],
        currentDialog: []
    },
    reducers:{
        messageTo (state, {payload}) {
            state.messageToUserId = payload
            state.currentDialog = [
                ...state.allMessages.filter(mess => (mess.toId === state.currentUserId && mess.fromId === payload) || (mess.toId === payload && mess.fromId === state.currentUserId))
            ]
        },
        currUserId (state, {payload}) {
            state.currentUserId = payload
        },
        logOutMess (state) {
            state.messageToUserId = null
            state.currentUserId = null
            state.currentDialog = []
        },
        messageSubmit (state,{payload}) {
            return{
                ...state,
                currentDialog: [
                    ...state.currentDialog,
                    {
                        fromId: state.currentUserId,
                        toId: state.messageToUserId,
                        message: payload,
                        time: new Date().getHours().toString() + ":" + new Date().getMinutes().toString()
                    }
                ],
                allMessages: [
                    ...state.allMessages,
                    {
                        fromId: state.currentUserId,
                        toId: state.messageToUserId,
                        message: payload,
                        time: new Date().getHours().toString() + ":" +  new Date().getMinutes().toString()
                    }
                ]
            }

        }
    },
    extraReducers:{}
})

export const selectMessage = state => state.message

export const {messageTo,currUserId,messageSubmit,logOutMess} = messageSlice.actions

export const messageReducer = messageSlice.reducer