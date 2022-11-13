import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "./chat/chat.slice";
import authSlice from "./auth/auth.slice";



export const store = configureStore({
    reducer : {
        chat : chatSlice,
        auth : authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch