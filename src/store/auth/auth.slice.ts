import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserAuth} from "../../types/user";

import {login} from "./auth.actions";


type IState = {
    user: null | IUserAuth
}

const initialState = {
    user: null
} as IState

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(login.fulfilled, (state,action) =>{
            state.user = action.payload;
        })
})

export default authSlice.reducer;