import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./slice/post/postSlice";
import {searchReduser} from "./slice/search/searchSlice";
import {ignoreSpacesInSearch} from "./middleware/searchMiddleware";
import {usersReducer} from "./slice/users/usersSlice";
import {messageReducer} from "./slice/message/messageSlice";
import { addPost, deletePost } from "./middleware/addPostMiddleware";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'gjakaninsta.am',
    storage,
}

const rootReducer = combineReducers({
    post: postReducer,
    search: searchReduser,
    users: usersReducer,
    message: messageReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return[
            ...getDefaultMiddleware(
                {
                    serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }
            ),ignoreSpacesInSearch, addPost, deletePost
        ]
    }
})

export const persistor = persistStore(store)

export default store