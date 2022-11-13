import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {getDialogId, getMessagesHistory} from "./chat.actions";
import {IMessage} from "../../types/message";
import message from "../../components/Message/Message";
import chat from "../../views/chat";


interface IState {
    dialogId: number | null,
    messages: Array<IMessage>,
}

const initialState = {
    messages: [],
    dialogId: null
} as IState

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addToMessages : (state,action : PayloadAction<IMessage>) =>{
            state.messages.push(action.payload)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getDialogId.fulfilled, (state, action) => {
                state.dialogId = action.payload.dialogId;
            })
            .addCase(getMessagesHistory.fulfilled, (state,action) =>{
                state.messages = action.payload.messages.sort( (a,b) => a.timestamp - b.timestamp);

            })
})

export const { addToMessages } = chatSlice.actions;
export default chatSlice.reducer;